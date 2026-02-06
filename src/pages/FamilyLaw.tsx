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

const FamilyLaw = () => {
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
                        src="/injury_bg.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-90 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-transparent" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <div className="page-subtitle inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                        <Shield size={12} /> Compassionate & Strategic
                    </div>
                    <h1 className="page-title text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Family Law <br />
                        <span className="text-slate-500">& Private Client.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                        Navigating family complexities requires a delicate balance of empathy and unwavering legal resolve.
                        We protect your interests and your future with discreet, high-calibre representation.
                    </p>
                </div>
            </header>

            {/* Core Areas */}
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Divorce & High-Net-Worth Separation",
                            desc: "Complex separation cases requiring forensic attention to assets, business valuations, and international property.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Divorce is rarely simple, especially when significant assets are involved. We specialize in high-net-worth separations that require forensic attention to business valuations, international property portfolios, and trust structures.</p>
                                    <p>Our goal is to secure a fair financial settlement that protects your lifestyle and future security, while handling all negotiations with the utmost discretion.</p>
                                </>
                            )
                        },
                        {
                            title: "Child Custody & Arrangements",
                            desc: "Prioritizing the welfare of children in disputes, ensuring stable and loving arrangements for the future.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">The welfare of your children is paramount. We provide sensitive, strategic advice on residence and contact arrangements, always aiming to resolve disputes constructively without unnecessary conflict.</p>
                                    <p>However, when swift action is needed to protect a child's best interests, we differ robust representation in court proceedings to ensure a stable and safe future.</p>
                                </>
                            )
                        },
                        {
                            title: "Financial Settlements & Asset Protection",
                            desc: "Securing your financial future through meticulous negotiation and robust protection of pre-marital assets.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Financial independence is the cornerstone of your post-separation life. We are experts in unravelling complex financial ties and ensuring that non-matrimonial assets are ring-fenced where appropriate.</p>
                                    <p>From spousal maintenance to pension sharing, we leave no stone unturned in securing a settlement that reflects your contributions and needs.</p>
                                </>
                            )
                        },
                        {
                            title: "Prenuptial & Postnuptial Agreements",
                            desc: "Pragmatic wealth planning for couples, providing clarity and peace of mind before or during marriage.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">A prenuptial agreement is a prudent form of insurance for your assets. We draft watertight agreements that provide clarity and peace of mind, tailored to the specific needs of modern couples and blended families.</p>
                                    <p>Whether you are protecting an inheritance or a business interest, our agreements are designed to stand up to judicial scrutiny.</p>
                                </>
                            )
                        },
                        {
                            title: "Cohabitation Disputes",
                            desc: "Legal clarity for unmarried couples. Resolving property ownership and financial claims upon separation.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">The law for unmarried couples is vastly different from divorce law. We guide you through the complexities of TOLATA claims and property disputes, ensuring your investment in a shared home is recognized.</p>
                                    <p>We also draft rigorous cohabitation agreements to prevent future disputes, setting clear terms for property ownership and financial responsibilities.</p>
                                </>
                            )
                        },
                        {
                            title: "Domestic Violence & Injunctions",
                            desc: "Urgent legal protection for victims of abuse. Securing Non-Molestation and Occupation Orders swiftly.",
                            img: "/logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Your safety is our priority. We act with urgency to secure Non-Molestation and Occupation Orders to protect you and your children from domestic abuse or harassment.</p>
                                    <p>Our team provides a safe, supportive environment to discuss your situation, taking immediate legal steps to exclude an abuser from the family home and prevent further contact.</p>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ethical representation, <br /><span className="text-amber-400">unwavering support.</span></h2>
                        <div className="space-y-8">
                            {[
                                "Constructive resolution of family disputes",
                                "Protection of complex financial assets",
                                "Child-focused arrangement strategies",
                                "Discreet handling of high-profile cases"
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-teal-400 shrink-0 mt-1" />
                                    <p className="text-slate-300 text-lg font-light">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <a href="tel:(704)358-1528" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black tracking-widest uppercase rounded-xl hover:bg-slate-200 transition-colors">
                                Discuss Your Case <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 to-transparent" />
                            {/* Placeholder for legal imagery */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs uppercase tracking-widest">
                                [Family Law Imagery]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Stats */}
            <section className="bg-amber-400 py-12 md:py-20 px-6 md:px-8 text-slate-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-black mb-2">High</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Settlement Rate</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Fixed</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Fee Options*</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Direct</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Partner Access</div>
                    </div>
                </div>
                <div className="text-center mt-12 text-[10px] font-mono opacity-50 max-w-2xl mx-auto">
                    * Fixed fee options available for specific non-contentious drafting services.
                </div>
            </section>
        </div>
    )
}

export default FamilyLaw
