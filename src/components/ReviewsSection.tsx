import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, Send, X, Paperclip } from 'lucide-react'
import { useReviews } from '../context/ReviewContext'



const ReviewsSection = () => {
    const { reviews, stats, addReview } = useReviews()
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

    return (
        <section className="relative px-6 md:px-8 py-20 md:py-32 max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
                <h4 className="text-amber-400 font-black tracking-[0.2em] uppercase text-xs md:sm mb-4">Client Testimonials</h4>
                <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight">
                    What Everyone Is <span className="font-serif italic text-amber-200">Talking About</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Summary Card */}
                <div className="bg-slate-950 border border-white/5 rounded-[2.5rem] md:rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10 w-full">
                        <div className="text-7xl md:text-8xl font-serif text-white mb-2 leading-none">{stats.average}</div>
                        <div className="flex justify-center gap-1 text-amber-400 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={20}
                                    className={stats.average >= star ? "fill-current" : (stats.average > star - 1 ? "fill-current opacity-50" : "text-slate-700")}
                                    strokeWidth={stats.average >= star ? 0 : 1}
                                />
                            ))}
                        </div>
                        <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-8">Based on {stats.total} Verified Reviews</p>

                        <div className="w-full space-y-3 mb-10 md:mb-12">
                            {stats.breakdown.map((row) => (
                                <div key={row.stars} className="flex items-center gap-4 text-[10px] font-mono text-slate-400">
                                    <span className="w-4">{row.stars} ★</span>
                                    <div className="flex-grow h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-amber-400 rounded-full transition-all duration-1000"
                                            style={{ width: row.percentage }}
                                        ></div>
                                    </div>
                                    <span className="w-4 text-right">{row.count}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full py-4 rounded-xl border border-amber-400/20 text-amber-400 font-black tracking-widest uppercase text-[10px] hover:bg-amber-400 hover:text-slate-950 transition-all shadow-[0_0_20px_rgba(251,191,36,0.1)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                        >
                            Write a Review
                        </button>
                        <Link to="/reviews" className="block w-full py-3 text-slate-500 font-bold tracking-widest uppercase text-[9px] hover:text-white transition-colors mt-2">
                            View All Reviews
                        </Link>
                    </div>
                </div>

                {/* Reviews Grid */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reviews.slice(0, 4).map((review) => (
                        <div key={review.id} className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-[2.5rem] md:rounded-[2rem] p-8 md:p-10 hover:bg-slate-900 hover:border-amber-400/20 transition-all duration-300 group">
                            <div className="flex gap-1 text-amber-400 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <blockquote className="text-slate-300 font-light leading-relaxed mb-8 md:min-h-[5rem] text-sm md:text-base">
                                "{review.text}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 font-bold text-xs">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm tracking-tight">{review.name}</div>
                                    <div className="text-[10px] text-slate-500 font-mono mt-0.5 uppercase tracking-tighter">{review.role} • {review.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
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
        </section>
    )
}

export default ReviewsSection
