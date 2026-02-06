import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowRight, Paperclip } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Contact = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
    const [fileName, setFileName] = useState<string>('Attach a file (Optional)');

    useGSAP(() => {
        gsap.fromTo('.reveal-item',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        )
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/PLACEHOLDER_FORM_ID', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setFormStatus('success');
                form.reset();
                setFileName('Attach a file (Optional)');
            } else {
                const data = await response.json();
                if (Object.hasOwn(data, 'errors')) {
                    alert(data.errors.map((error: any) => error.message).join(", "));
                } else {
                    alert("Oops! There was a problem submitting your form");
                }
                setFormStatus('idle');
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form");
            setFormStatus('idle');
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        }
    }

    return (
        <div className="bg-[#020617] min-h-screen text-slate-200 selection:bg-amber-400/30 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-8 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-indigo-950/20 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 relative z-10">

                    {/* Left Column: Context & Details */}
                    <div className="space-y-6 md:space-y-12">
                        <div className="reveal-item">
                            <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.95] md:leading-[0.9]">
                                Start the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Conversation.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-lg">
                                Whether you're facing a complex legal challenge or planning for the future, we are here to listen, advise, and advocate for you.
                            </p>
                        </div>

                        <div className="reveal-item space-y-8">
                            <div className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors group">
                                <div className="p-4 rounded-2xl bg-amber-400/10 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-2">Call Us Directly</h3>
                                    <a href="tel:+3534771551" className="block text-2xl font-bold text-white mb-1 hover:text-amber-400 transition-colors">+353 47 71551</a>
                                    <a href="tel:+353874480950" className="block text-lg font-bold text-slate-400 hover:text-amber-400 transition-colors">+353 87 448 0950</a>
                                    <p className="text-xs text-amber-400 mt-2 font-mono uppercase">Mon-Fri: 09:00 - 17:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors group">
                                <div className="p-4 rounded-2xl bg-teal-400/10 text-teal-400 group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-2">Email Enquiries</h3>
                                    <a href="mailto:info@graysolicitors.ie" className="text-xl font-bold text-white hover:text-teal-400 transition-colors">info@graysolicitors.ie</a>
                                    <p className="text-sm text-slate-500 mt-2">We aim to respond within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-amber-400/30 transition-colors group">
                                <div className="p-4 rounded-2xl bg-indigo-400/10 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 mb-2">Visit Our Office</h3>
                                    <p className="text-lg text-white leading-relaxed">
                                        3 North Road, <br />
                                        Monaghan, Ireland <br />
                                        <span className="text-slate-500">H18 FD78</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Inquiry Form */}
                    <div className="reveal-item">
                        <div className="relative p-8 md:p-12 bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[3rem] shadow-2xl">
                            {formStatus === 'success' ? (
                                <div className="min-h-[500px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white">Message Sent</h3>
                                    <p className="text-slate-400 max-w-xs mx-auto">Thank you for reaching out. A member of our team will be in touch shortly.</p>
                                    <button
                                        onClick={() => { setFormStatus('idle'); setFileName('Attach a file (Optional)'); }}
                                        className="mt-8 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-all"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                                        <p className="text-slate-500 text-sm">All communications are strictly confidential.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                                                <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Phone</label>
                                                <input required name="phone" type="tel" placeholder="+353 ..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                                            <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Area of Law</label>
                                            <select name="subject" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                                                <option className="bg-slate-900">General Enquiry</option>
                                                <option className="bg-slate-900">Personal Injury</option>
                                                <option className="bg-slate-900">Medical Negligence</option>
                                                <option className="bg-slate-900">Family Law</option>
                                                <option className="bg-slate-900">Property Law</option>
                                                <option className="bg-slate-900">Wills & Probate</option>
                                                <option className="bg-slate-900">Dispute Resolution</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">How can we help?</label>
                                            <textarea required name="message" rows={4} placeholder="Briefly describe your situation..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all resize-none" />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Attachment</label>
                                            <div className="relative">
                                                <input type="file" name="attachment" id="file-upload" className="hidden" onChange={handleFileChange} />
                                                <label htmlFor="file-upload" className="flex items-center justify-between w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-400 cursor-pointer hover:bg-white/10 hover:border-amber-400/50 transition-all group">
                                                    <span className={`truncate ${fileName !== 'Attach a file (Optional)' ? 'text-amber-400 font-medium' : ''}`}>{fileName}</span>
                                                    <Paperclip size={18} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'sending'}
                                        className="w-full py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black uppercase tracking-widest rounded-2xl hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {formStatus === 'sending' ? (
                                            'Sending...'
                                        ) : (
                                            <>Send Message <Send size={18} /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="px-6 md:px-8 pb-20 md:pb-32 max-w-7xl mx-auto reveal-item">
                <div className="w-full h-[350px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/10 group">
                    <iframe
                        src="https://maps.google.com/maps?q=3%20North%20Road%2C%20Monaghan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="opacity-80 hover:opacity-100 transition-opacity duration-700"
                    ></iframe>
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto px-6 md:px-8 py-5 md:py-6 bg-slate-950/90 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl max-w-sm transform group-hover:-translate-y-2 transition-transform duration-500">
                        <h4 className="text-amber-400 font-black uppercase tracking-widest text-[10px] mb-1 md:mb-2">Our Location</h4>
                        <p className="text-white text-base md:text-lg font-bold">3 North Road, Monaghan</p>
                        <p className="text-slate-400 text-xs mt-1 mb-3 md:mb-4">H18 FD78</p>
                        <a
                            href="https://maps.google.com/maps?q=3%20North%20Road%2C%20Monaghan"
                            target="_blank"
                            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-teal-400 hover:text-white transition-colors"
                        >
                            Get Directions <ArrowRight size={12} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Contact
