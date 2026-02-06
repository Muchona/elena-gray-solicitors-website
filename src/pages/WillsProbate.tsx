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

const WillsProbate = () => {
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
                        <Shield size={12} /> Legacy & Protection
                    </div>
                    <h1 className="page-title text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Wills, Probate <br />
                        <span className="text-slate-500">& Estate Planning.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                        Drafting a secure future for your loved ones. We provide sensitive, expert guidance on managing your estate and protecting your legacy.
                    </p>
                </div>
            </header>

            {/* Core Areas */}
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Bespoke Will Drafting",
                            desc: "Tailored wills that clearly articulate your wishes, ensuring your assets are distributed exactly as you intend.",
                            img: "logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Standard wills often fail to address complex family structures or assets. We draft bespoke wills that account for your specific circumstances, providing absolute clarity on your wishes.</p>
                                    <p>From appointing guardians for children to creating trust structures, we ensure your will is robust, legally binding, and future-proof.</p>
                                </>
                            )
                        },
                        {
                            title: "Probate & Administration",
                            desc: "Relieving the burden of estate administration during difficult times. Efficient handling of probate formalities.",
                            img: "logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">The loss of a loved one is difficult enough without the stress of legal paperwork. We handle the entire probate process, from valuing the estate and paying inheritance tax to distributing assets to beneficiaries.</p>
                                    <p>Our team acts with compassion and efficiency, ensuring the estate is administered correctly and as swiftly as possible.</p>
                                </>
                            )
                        },
                        {
                            title: "Inheritance Tax Planning",
                            desc: "Strategic advice to maximize the value of the legacy you leave behind.",
                            img: "logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Effective tax planning is essential to preserve your wealth for future generations. We advise on lawful strategies to mitigate Inheritance Tax liability, including lifetime gifting and the use of exemptions.</p>
                                    <p>We work to ensure that your beneficiaries receive the maximum possible benefit from your hard-earned assets.</p>
                                </>
                            )
                        },
                        {
                            title: "Lasting Powers of Attorney",
                            desc: "Appointing trusted individuals to make decisions on your behalf should you become unable to do so.",
                            img: "logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Illness or injury can happen at any age. A Lasting Power of Attorney ensures that someone you trust can manage your financial affairs and health decisions if you lose mental capacity.</p>
                                    <p>We guide you through the registration process, giving you peace of mind that your interests will always be protected.</p>
                                </>
                            )
                        },
                        {
                            title: "Contested Wills & Probate",
                            desc: "Resolving disputes over the validity of wills or the administration of estates.",
                            img: "logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Disputes over inheritance can tear families apart. Whether you are challenging the validity of a will or defending a claim against an estate, we provide robust representation.</p>
                                    <p>We handle cases involving undue influence, lack of capacity, and claims under the Inheritance (Provision for Family and Dependants) Act.</p>
                                </>
                            )
                        },
                        {
                            title: "Trusts & Asset Protection",
                            desc: "Creating trusts to protect assets for vulnerable beneficiaries or future generations.",
                            img: "logo_refined.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Trusts are a powerful tool for controlling how your assets are used. We set up and manage trusts to protect money for children, vulnerable adults, or to preserve family wealth.</p>
                                    <p>Our experts advise on the tax implications and duties of trustees, ensuring the trust operates effectively for years to come.</p>
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Protecting your legacy, <br /><span className="text-amber-400">honoring your wishes.</span></h2>
                        <div className="space-y-8">
                            {[
                                "Sensitive handling of estate administration",
                                "Tax-efficient planning strategies",
                                "Robust defence of contested wills",
                                "Clear, jargon-free advice"
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-teal-400 shrink-0 mt-1" />
                                    <p className="text-slate-300 text-lg font-light">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <a href="tel:(704)358-1528" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black tracking-widest uppercase rounded-xl hover:bg-slate-200 transition-colors">
                                Discuss Your Estate <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 to-transparent" />
                            {/* Placeholder for legal imagery */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs uppercase tracking-widest">
                                [Wills & Probate Imagery]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Stats */}
            <section className="bg-amber-400 py-12 md:py-20 px-6 md:px-8 text-slate-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-black mb-2">Secure</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Asset Protection</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Efficient</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Probate Services</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Expert</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Tax Guidance</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WillsProbate
