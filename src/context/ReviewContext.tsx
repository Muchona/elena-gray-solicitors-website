import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Review {
    id: number;
    name: string;
    role: string;
    date: string;
    rating: number;
    text: string;
}

interface ReviewStats {
    average: number;
    total: number;
    breakdown: { stars: number; count: number; percentage: string }[];
}

interface ReviewContextType {
    reviews: Review[];
    stats: ReviewStats;
    addReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const initialReviews: Review[] = [
    {
        id: 1,
        name: "John M.",
        role: "Local Guide",
        date: "15/12/25",
        rating: 5,
        text: "Consistently professional and reassuring. The service was excellent and efficient even during a difficult time for our family."
    },
    {
        id: 2,
        name: "Sarah K.",
        role: "Verified Client",
        date: "10/01/26",
        rating: 5,
        text: "Fab legal team, lovely atmosphere & great service. A very pleasant experience with efficient staff and clear communication."
    },
    {
        id: 3,
        name: "David R.",
        role: "Business Owner",
        date: "05/01/26",
        rating: 5,
        text: "Fantastic experience as always. The property conveyance was smooth. Great buzz and atmosphere in the office."
    },
    {
        id: 4,
        name: "Michelle O.",
        role: "Client",
        date: "28/12/25",
        rating: 5,
        text: "Beautiful service. The unique approach blends traditional professionalism with modern efficiency perfectly."
    }
];

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Initialize from localStorage or fallback to default
    const [reviews, setReviews] = useState<Review[]>(() => {
        const saved = localStorage.getItem('gray_solicitors_reviews');
        const parsed = saved ? JSON.parse(saved) as Review[] : initialReviews;
        // Filter out any test content requested by user
        return parsed.filter(r => r.name !== 'dfsdf' && r.text !== 'hfxccxx');
    });

    const [stats, setStats] = useState<ReviewStats>({ average: 0, total: 0, breakdown: [] });

    useEffect(() => {
        localStorage.setItem('gray_solicitors_reviews', JSON.stringify(reviews));

        // Calculate stats
        const total = reviews.length;
        const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        const average = total > 0 ? Math.round((sum / total) * 10) / 10 : 0;

        const breakdown = [5, 4, 3, 2, 1].map(stars => {
            const count = reviews.filter(r => r.rating === stars).length;
            const percentage = total > 0 ? `${(count / total) * 100}%` : '0%';
            return { stars, count, percentage };
        });

        setStats({ average, total, breakdown });
    }, [reviews]);

    const addReview = (newReviewData: Omit<Review, 'id' | 'date'>) => {
        const newReview: Review = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }),
            ...newReviewData
        };
        setReviews(prev => [newReview, ...prev]);
    };

    return (
        <ReviewContext.Provider value={{ reviews, stats, addReview }}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReviews = () => {
    const context = useContext(ReviewContext);
    if (context === undefined) {
        throw new Error('useReviews must be used within a ReviewProvider');
    }
    return context;
};
