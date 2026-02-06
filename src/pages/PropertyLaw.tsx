import { useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Shield, X } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ServiceItem {
    title: string;
    desc: string;
    img: string;
    detailedContent: React.ReactNode;
}

const PropertyLaw = () => {
    const container = useRef<HTMLDivElement>(null)
    const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
        tl.from('.page-title', { y: 60, opacity: 0, duration: 1.5 })
            .from('.page-subtitle', { y: 20, opacity: 0, duration: 1 }, '-=1')
    }, { scope: container })

    return (
        <div ref={container} className="pt-24 md:pt-32">
            {/* Page Header */}
            <header className="relative py-16 md:py-32 px-6 md:px-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="injury_bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-90 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-transparent" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="page-subtitle inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                        <Shield size={12} /> Secure & Efficient
                    </div>
                    <h1 className="page-title text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Property Law <br />
                        <span className="text-slate-500">& Conveyancing.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                        From residential purchases to complex commercial developments. We provide the meticulous legal diligence required to secure your most valuable assets.
                    </p>
                </div>
            </header>

            {/* Core Areas */}
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Residential Conveyancing",
                            desc: "Seamless legal management of buying or selling your home. Speed, clarity, and security guaranteed.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Buying or selling a home is one of the most significant transactions you will make. We streamline the conveyancing process, handling searches, contracts, and transfer of funds with absolute precision.</p>
                                    <p>Our focus is on reducing stress and delay, keeping you informed at every stage while ensuring your legal title is water-tight.</p>
                                </>
                            )
                        },
                        {
                            title: "Commercial Leases & Sales",
                            desc: "Expert drafting and negotiation for commercial landlords and tenants. Protecting your business interests.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Commercial property law requires a sharp commercial mindset. We act for both landlords and tenants in drafting, negotiating, and renewing commercial leases.</p>
                                    <p>Whether you are acquiring office space or managing a retail portfolio, we ensure that lease terms are favourable and that your liabilities are clearly defined and minimized.</p>
                                </>
                            )
                        },
                        {
                            title: "Property Development",
                            desc: "Strategic legal support for developers. From site acquisition to plot sales and planning agreements.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">We partner with developers to bring projects to life. Our services cover the full lifecycle of a development, from initial site acquisition and option agreements to infrastructure agreements and final plot sales.</p>
                                    <p>We anticipate potential hurdles in the planning and construction phases, providing proactive solutions to keep your project on schedule and profitable.</p>
                                </>
                            )
                        },
                        {
                            title: "Landlord & Tenant Disputes",
                            desc: "Resolving conflicts over rent, repairs, and possession with decisive legal action.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Disputes between landlords and tenants can disrupt lives and businesses. We provide robust representation in matters involving rent arrears, dilapidations, breach of covenant, and possession proceedings.</p>
                                    <p>Our aim is always to resolve disputes efficiently, whether through expert negotiation or, when necessary, court proceedings.</p>
                                </>
                            )
                        },
                        {
                            title: "Re-mortgaging & Transfers",
                            desc: "Efficient handling of equity transfers and re-financing to release capital or restructure ownership.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Changing lenders or altering property ownership requires swift legal intervention to satisfy all parties. We manage the technicalities of re-mortgaging and transfers of equity seamlessly.</p>
                                    <p>We work closely with financial advisers and lenders to ensure funds are released on time and legal titles are updated correctly.</p>
                                </>
                            )
                        },
                        {
                            title: "Boundary & Right of Way Disputes",
                            desc: "Clarifying rights and resolving neighbour disputes over land usage and boundaries.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Disputes over boundaries or rights of way can be incredibly contentious. We meticulously analyze title deeds and historical plans to establish the true legal position.</p>
                                    <p>We provide pragmatic advice to resolve these disputes amicably where possible, preserving neighbourly relations while strictly enforcing your property rights.</p>
                                </>
                            )
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 flex flex-col items-center text-center group h-full bg-slate-900/40 rounded-[2rem] border border-white/5 hover:bg-slate-900 hover:border-amber-400/30 transition-all">
                            <div className="w-full aspect-square max-w-[280px] mb-8 relative flex items-center justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-contain mix-blend-screen filter drop-shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-amber-400">{item.title}</h3>
                            <p className="text-slate-300 leading-relaxed font-light mb-8 max-w-sm flex-grow">{item.desc}</p>
                            <button
                                onClick={() => setSelectedItem(item as ServiceItem)}
                                className="px-8 py-3 rounded-full border border-amber-400 text-amber-400 text-xs font-black tracking-[0.2em] uppercase hover:bg-amber-400 hover:text-slate-950 transition-all duration-300 mt-auto cursor-pointer"
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedItem && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <div
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            onClick={() => setSelectedItem(null)}
                        />
                        <div className="relative bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex flex-col md:flex-row gap-8 items-start mb-8 border-b border-white/5 pb-8">
                                <div className="w-32 h-32 shrink-0 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 overflow-hidden p-4">
                                    <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-contain mix-blend-screen" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedItem.title}</h3>
                                    <div className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase inline-block">
                                        Specialised Service
                                    </div>
                                </div>
                            </div>

                            <div className="text-slate-300 text-lg font-light leading-relaxed">
                                {selectedItem.detailedContent}
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5 flex justify-end">
                                <a
                                    href="#contact"
                                    onClick={() => setSelectedItem(null)}
                                    className="px-8 py-3 bg-amber-400 hover:bg-white text-slate-950 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg flex items-center gap-2"
                                >
                                    Contact Us <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Process / Trust */}
            <section className="px-6 md:px-8 py-16 md:py-32 max-w-7xl mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Foundations built on <br /><span className="text-amber-400">solid legal ground.</span></h2>
                        <div className="space-y-8">
                            {[
                                "Comprehensive title investigation",
                                "Proactive liaison with lenders and agents",
                                "Fixed-fee quotes for residential conveyancing",
                                "Expert handling of commercial complexities"
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-teal-400 shrink-0 mt-1" />
                                    <p className="text-slate-300 text-lg font-light">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <a href="tel:(704)358-1528" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black tracking-widest uppercase rounded-xl hover:bg-slate-200 transition-colors">
                                Discuss Your Property <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 to-transparent" />
                            {/* Placeholder for legal imagery */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs uppercase tracking-widest">
                                [Property Law Imagery]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Stats */}
            <section className="bg-amber-400 py-12 md:py-20 px-6 md:px-8 text-slate-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-black mb-2">Fast</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Completion Times</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Clear</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Fixed Pricing</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Secure</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Title Protection</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PropertyLaw
