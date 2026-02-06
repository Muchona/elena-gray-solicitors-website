import { useRef } from 'react'
import { Scale, ArrowRight, Gavel, Award, Globe, Heart, Users, ChevronRight, CheckCircle2, Phone, ChevronLeft, Home as HomeIcon, FileText, Shield, MapPin, Clock } from 'lucide-react'
import ReviewsSection from '../components/ReviewsSection'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Home = () => {
    const container = useRef<HTMLDivElement>(null)
    const scrollContainer = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        // Initial Load
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
        tl.from('.hero-bg', { scale: 1.1, opacity: 0, duration: 2 })
            .from('.hero-content-main', { y: 60, opacity: 0, duration: 1.5 }, '-=1.5')
            .from('.hero-subtitle', { y: 20, opacity: 0, duration: 1 }, '-=0.8')


    }, { scope: container })

    return (
        <div ref={container}>
            {/* Hero: Full Screen Cinematic */}
            <header className="relative h-[85vh] md:h-screen min-h-[600px] md:min-h-[850px] w-full flex items-center justify-center overflow-hidden z-10 px-6 md:px-8 pt-20 md:pt-32">
                {/* Full Image Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="hero.png"
                        alt="Elena Gray Background"
                        className="hero-bg w-full h-full object-cover object-[60%_center] md:object-center mix-blend-luminosity brightness-[0.8] contrast-[1.1] scale-100 md:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl w-full mx-auto hero-content-main">
                    <div className="hero-subtitle inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                        <CheckCircle2 size={12} /> Exceptional Track Record of Success
                    </div>
                    <h1 className="text-4xl md:text-9xl font-bold tracking-tighter leading-[0.95] md:leading-[0.9] mb-8 md:mb-10 max-w-[260px] md:max-w-4xl">
                        Compassionate <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">Advice & Guidance.</span>
                    </h1>
                    <p className="text-slate-200 text-lg md:text-2xl leading-relaxed max-w-[280px] md:max-w-2xl mb-10 md:mb-12 font-light drop-shadow-md">
                        Elena Gray Solicitors provides bespoke legal solutions, guiding you through life's most complex transitions with professional care and a commitment to results.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <a href="#services" className="px-10 py-5 bg-amber-400 text-slate-950 font-black tracking-widest uppercase rounded-2xl hover:bg-amber-300 hover:scale-105 transition-all shadow-2xl shadow-amber-400/20 text-center">
                            Explore Our Expertise
                        </a>
                        <a href="#about" className="px-10 py-5 bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center gap-4 group transition-all font-bold">
                            Meet Elena <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                    <div className="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400">Scroll to Discover</div>
                    <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent" />
                </div>
            </header>

            {/* The Pillars (Elite Professional) */}
            <section className="px-8 py-32 max-w-7xl mx-auto relative z-20 border-t border-white/5">
                <div className="text-center mb-24">
                    <h2 className="text-sm font-black tracking-[0.6em] uppercase text-amber-500 mb-6 font-mono">Our Foundations</h2>
                    <div className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">Core principles of excellence.</div>
                    <div className="w-40 h-1.5 bg-amber-400 mx-auto rounded-full opacity-30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Scale, label: 'Highest Standards', detail: 'Uncompromising professional integrity in every legal undertaking.' },
                        { icon: Award, label: 'Proven Results', detail: 'A consistent history of success and exceptional outcomes.' },
                        { icon: Users, label: 'Bespoke Strategy', detail: 'Tailored legal solutions designed for your specific objectives.' },
                        { icon: Phone, label: 'Direct Access', detail: 'Transparent, open communication at every stage of your case.' }
                    ].map((pillar, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-indigo-950/20 border border-white/5 hover:border-amber-400/30 transition-all group relative overflow-hidden backdrop-blur-md">
                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="w-20 h-20 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-amber-400 mb-8 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-500 shadow-xl">
                                    <pillar.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">{pillar.label}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-light">{pillar.detail}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Expertise Hub (Services) */}
            <section id="services" className="px-8 py-32 max-w-7xl mx-auto relative overflow-hidden bg-slate-900/60 rounded-[5rem] border border-white/5 my-20">
                <div className="absolute -right-[10%] top-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px]" />

                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white leading-none">Expert Specialisations.</h2>
                        <p className="text-slate-400 text-xl leading-relaxed">Compassionate advice and elite representation across Ireland's most complex legal landscapes.</p>
                    </div>
                    {/* Scroll Controls */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scrollContainer.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all active:scale-95"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scrollContainer.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                            className="w-14 h-14 rounded-full border border-amber-400/20 bg-amber-400/5 flex items-center justify-center text-amber-400 hover:bg-amber-400 hover:text-slate-950 transition-all active:scale-95"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainer}
                    className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {[
                        { icon: Heart, title: 'Personal Injury', desc: 'Expert guidance for injury claims, ensuring you receive the support and compensation you deserve.', link: '/personal-injury' },
                        { icon: Gavel, title: 'Medical Negligence', desc: 'Specialist advice for medical error cases, handled with sensitivity and professional rigor.', link: '/medical-negligence' },
                        { icon: Users, title: 'Family Law Advocacy', desc: 'Compassionate representation for family matters, guiding you through life\'s complex transitions.', link: '/family-law' },
                        { icon: HomeIcon, title: 'Property Law', desc: 'Expert conveyancing and property transaction support for residential and commercial clients.', link: '/property-law' },
                        { icon: FileText, title: 'Wills & Probate', desc: 'Comprehensive estate planning and probate services to protect your assets and loved ones.', link: '/wills-probate' },
                        { icon: Shield, title: 'Dispute Resolution', desc: 'Strategic mediation and litigation support to resolve conflicts effectively and efficiently.', link: '/dispute-resolution' }
                    ].map((area, i) => (
                        <div key={i} className="min-w-[280px] md:min-w-[400px] snap-start group p-8 md:p-12 bg-slate-950 border border-white/10 rounded-[3rem] md:rounded-[4rem] hover:bg-slate-900 hover:border-amber-400/30 transition-all relative overflow-hidden shadow-2xl flex flex-col items-start">
                            <div className="relative z-10 flex flex-col h-full w-full items-start">
                                <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center text-teal-400 mb-10 group-hover:bg-amber-400 group-hover:text-slate-950 transition-all duration-500 shadow-xl">
                                    <area.icon size={36} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 text-white">{area.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-lg mb-10 font-light">{area.desc}</p>
                                {area.link !== '#' ? (
                                    <Link to={area.link} className="mt-auto px-8 py-3 rounded-full border border-amber-400 text-amber-400 text-xs font-black tracking-[0.2em] uppercase hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 flex items-center gap-2">
                                        Explore detail <ArrowRight size={14} />
                                    </Link>
                                ) : (
                                    <button className="mt-auto px-8 py-3 rounded-full border border-white/20 text-slate-500 text-xs font-black tracking-[0.2em] uppercase hover:border-amber-400 hover:text-amber-400 transition-all duration-300 flex items-center gap-2">
                                        Coming Soon
                                    </button>
                                )}

                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Biography section */}
            <section id="about" className="reveal-section px-8 py-20 md:py-32 max-w-7xl mx-auto border-t border-white/5 bg-gradient-to-b from-transparent to-indigo-950/20 rounded-[3rem] md:rounded-[4rem]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="reveal-item order-2 lg:order-1 relative">
                        <div className="absolute inset-0 bg-amber-400/5 blur-[120px] rounded-full" />
                        <div className="relative aspect-square max-w-md mx-auto flex items-center justify-center p-12 border border-white/5 rounded-[3rem] bg-slate-900/40 backdrop-blur-3xl shadow-2xl">
                            <img src="logo.png" alt="Elena Gray Signature" className="w-full h-auto drop-shadow-[0_0_30px_rgba(251,191,36,0.2)]" />
                        </div>
                    </div>

                    <div className="reveal-item order-1 lg:order-2">
                        <h2 className="text-5xl font-bold mb-10 tracking-tight">Meet Elena Gray</h2>
                        <div className="space-y-8 text-slate-400 leading-relaxed text-xl font-light">
                            <p>
                                Elena brings a strong focus to <span className="text-slate-50 font-bold">civil litigation</span>, with particular expertise in <span className="text-amber-400/80">Personal Injury</span> and <span className="text-amber-400/80">Medical Negligence</span> cases.
                            </p>
                            <p>
                                Her international profile includes serving as a <span className="text-slate-50 font-bold underline decoration-amber-400/30 underline-offset-8">judge at the Stetson International Environmental Moot Court Competition</span> for Central Asia. Fluent in three languages, she offers a globally informed perspective to local legal challenges.
                            </p>
                            <p className="text-lg">
                                Beyond the courtroom, Elena serves on the Board of Governors at Monaghan Collegiate School and finds balance in the quiet focus of gardening and unexplored wild nature.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <Award className="text-amber-400 mb-4" />
                                <div className="text-sm font-black uppercase tracking-widest text-slate-500 mb-1">Experience</div>
                                <div className="font-bold">13+ Years</div>
                            </div>
                            <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                <Globe className="text-teal-400 mb-4" />
                                <div className="text-sm font-black uppercase tracking-widest text-slate-500 mb-1">Multilingual</div>
                                <div className="font-bold">3 LANGUAGES</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewsSection />

            {/* Video CTA Section */}
            <section className="reveal-section px-8 py-32 max-w-7xl mx-auto">
                <div className="reveal-item relative p-1 bg-gradient-to-tr from-amber-400/20 via-transparent to-teal-500/20 rounded-[3.5rem] overflow-hidden group">
                    <div className="relative p-12 md:p-20 bg-slate-950/80 backdrop-blur-3xl rounded-[3.4rem] border border-white/5 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Text Content */}
                            <div className="text-left">
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.95]">
                                    Experience the Future of <br />Legal Services.
                                </h2>
                                <p className="text-slate-400 text-lg mb-12 max-w-xl">
                                    Discover Elena's personal dedication and professional insight in our digital introduction. Watch how we combine compassionate care with legal excellence.
                                </p>
                                <div className="flex items-center gap-4 text-amber-400 font-bold uppercase tracking-widest text-xs">
                                    <div className="w-12 h-[1px] bg-amber-400"></div>
                                    Watch Introduction
                                </div>
                            </div>

                            {/* Video Container */}
                            <div className="relative w-full max-w-[500px] lg:mx-0 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 aspect-video">
                                <iframe
                                    src="https://www.facebook.com/plugins/video.php?height=281&href=https%3A%2F%2Fwww.facebook.com%2F61573097708251%2Fvideos%2F923408323264242%2F&show_text=false&width=500&t=0"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    frameBorder="0"
                                    allowFullScreen={true}
                                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] animate-pulse" />
                </div>
            </section>
            {/* Contact & Map Section */}
            <section className="px-6 md:px-8 py-20 md:py-32 max-w-7xl mx-auto">
                <div className="bg-slate-950/50 rounded-[2.5rem] md:rounded-[3rem] border border-white/5 p-4 md:p-8 relative overflow-hidden">
                    {/* Map Container */}
                    <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden relative shadow-2xl mb-12 group">
                        <iframe
                            src="https://maps.google.com/maps?q=3%20North%20Road%2C%20Monaghan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="opacity-90 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>
                        <div className="absolute top-8 left-8 px-6 py-3 bg-slate-950/90 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-black tracking-widest uppercase text-white shadow-xl z-10 flex items-center gap-2">
                            <MapPin size={12} className="text-amber-400" /> Find Us
                        </div>
                    </div>

                    {/* Info Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 px-4 md:px-8 pb-8">
                        {/* Opening Hours */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center gap-3 mb-8">
                                <Clock className="text-amber-400" size={20} />
                                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">Opening Hours</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                    <span className="text-slate-400 font-mono">Mon - Fri</span>
                                    <span className="text-white font-bold">09:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                    <span className="text-slate-400 font-mono">Saturday</span>
                                    <span className="text-slate-600 font-bold">Closed</span>
                                </div>
                                <div className="flex justify-between text-sm border-b border-white/5 pb-2">
                                    <span className="text-slate-400 font-mono">Sunday</span>
                                    <span className="text-slate-600 font-bold">Closed</span>
                                </div>
                            </div>
                            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-black tracking-widest uppercase">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Open Now
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <MapPin className="text-amber-400" size={20} />
                                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">Location</h3>
                            </div>
                            <address className="not-italic text-slate-400 text-lg font-light leading-relaxed">
                                <p className="mb-1 text-white font-bold">3 North Road</p>
                                <p>Monaghan, Ireland</p>
                                <p className="text-slate-500 mt-2">H18 FD78</p>
                            </address>
                        </div>

                        {/* Contact */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Phone className="text-amber-400" size={20} />
                                <h3 className="text-sm font-black tracking-[0.2em] uppercase text-slate-200">Contact Us</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Main Reception</div>
                                    <a href="tel:+3534771551" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors block">
                                        (047) 71551
                                    </a>
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Mobile / Emergency</div>
                                    <a href="tel:+353874480950" className="text-lg font-bold text-slate-300 hover:text-amber-400 transition-colors block">
                                        +353 87 448 0950
                                    </a>
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono uppercase text-slate-500 mb-1">Email Enquiries</div>
                                    <a href="mailto:info@graysolicitors.ie" className="text-base text-amber-400 hover:text-white transition-colors block">
                                        info@graysolicitors.ie
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
