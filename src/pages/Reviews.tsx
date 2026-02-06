import { useState } from 'react'
import { Star, ArrowRight, Quote, X, Send, Paperclip } from 'lucide-react'
import { useReviews } from '../context/ReviewContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'



const Reviews = () => {
    const { reviews, addReview } = useReviews()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formState, setFormState] = useState({ rating: 5, name: '', review: '' })
    const [fileName, setFileName] = useState<string | null>(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Add the review to global state
        addReview({
            name: formState.name,
            role: "Verified Client", // Default role for new reviews
            rating: formState.rating,
            text: formState.review
        })

        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            setTimeout(() => {
                setIsSuccess(false)
                setIsModalOpen(false)
                setFormState({ rating: 5, name: '', review: '' })
                setFileName(null)
            }, 2000)
        }, 1500)
    }

    useGSAP(() => {
        gsap.fromTo('.reveal-card',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        )
    })

    return (
        <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-amber-400/30 font-sans">
            <Navbar />

            <div className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-24">
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Experiences.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto">
                        See what our clients say about their journey with us. We are proud to serve our community with dedication and integrity.
                    </p>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full bg-amber-400 text-slate-950 font-black tracking-widest uppercase hover:bg-white transition-all shadow-lg hover:shadow-amber-400/20 hover:scale-105"
                    >
                        Write a Review <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="reveal-card bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 hover:bg-slate-900 hover:border-amber-400/20 transition-all duration-300 group flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-1 text-amber-400">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>
                                <Quote size={20} className="text-slate-700 group-hover:text-amber-400/50 transition-colors" />
                            </div>

                            <blockquote className="text-slate-300 font-light leading-relaxed mb-8 flex-grow">
                                "{review.text}"
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold border border-white/5 group-hover:border-amber-400/30 transition-colors">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">{review.name}</div>
                                    <div className="text-xs text-slate-500 font-mono mt-0.5">{review.role} • {review.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <p className="text-slate-500 mb-6 md:mb-8 text-sm md:text-base max-w-lg mx-auto">
                        Your feedback helps us maintain our high standards. If you've worked with us, please verify your experience on Google.
                    </p>
                    <a
                        href="https://maps.app.goo.gl/G4jZpU8w18cGEozYA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 font-bold tracking-widest uppercase text-xs hover:text-white transition-colors border-b border-amber-400/30 hover:border-white pb-1"
                    >
                        View All Reviews on Google Maps
                    </a>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        onClick={() => setIsModalOpen(false)}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transform transition-opacity"
                    />
                    <div
                        className="relative w-full max-w-lg bg-[#0f172a] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden transform transition-all"
                    >
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400" />

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {isSuccess ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-6 mx-auto animate-bounce">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                                <p className="text-slate-400">Your review helps us improve our service.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-white mb-2">Share Your Experience</h3>
                                <p className="text-slate-400 text-sm mb-8">Your feedback is vital to our commitment to excellence.</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="flex justify-center gap-2 mb-8">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                key={star}
                                                type="button"
                                                onClick={() => setFormState({ ...formState, rating: star })}
                                                className={`p-1 transition-transform hover:scale-110 ${formState.rating >= star ? 'text-amber-400' : 'text-slate-700'}`}
                                            >
                                                <Star size={32} fill="currentColor" strokeWidth={0} />
                                            </button>
                                        ))}
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:bg-slate-800 transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Your Review</label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={formState.review}
                                            onChange={(e) => setFormState({ ...formState, review: e.target.value })}
                                            className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:bg-slate-800 transition-all resize-none"
                                            placeholder="Tell us about your experience..."
                                        />
                                    </div>

                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-2">Attach Photo/Document (Optional)</label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="file-upload"
                                                className="hidden"
                                                onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                                            />
                                            <label
                                                htmlFor="file-upload"
                                                className={`w-full flex items-center justify-between bg-slate-900 border ${fileName ? 'border-amber-400/50 bg-amber-400/10' : 'border-white/10'} rounded-xl px-4 py-3 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer group`}
                                            >
                                                <span className={fileName ? 'text-amber-400' : ''}>{fileName || 'Choose file...'}</span>
                                                <Paperclip size={18} className={`group-hover:text-amber-400 transition-colors ${fileName ? 'text-amber-400' : ''}`} />
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-amber-400 text-slate-950 font-black tracking-widest uppercase rounded-xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                                    >
                                        {isSubmitting ? 'Posting Review...' : 'Post Review'}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default Reviews
