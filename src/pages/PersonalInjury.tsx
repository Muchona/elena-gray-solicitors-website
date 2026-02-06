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

const PersonalInjury = () => {
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
                        <Shield size={12} /> Elite Legal Representation
                    </div>
                    <h1 className="page-title text-4xl md:text-7xl font-bold tracking-tighter mb-8 text-white">
                        Personal Injury <br />
                        <span className="text-slate-500">& Accident Claims.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                        We understand the physical, emotional, and financial toll of an accident.
                        Our expertise ensures you receive the maximum compensation and comprehensive support you deserve.
                    </p>
                </div>
            </header>

            {/* Core Areas */}
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Slips, Trips & Falls",
                            desc: "Public or private spaces, we're skilled in securing compensation for injuries resulting from slips, trips, and falls.",
                            img: "illustration_slips.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">From supermarket spills to poorly maintained public pavements, we specialize in trip-and-fall claims. Whether your accident happened on private property or a public walkway, we help identify the responsible party and hold them accountable.</p>
                                    <h4 className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2">Our Process:</h4>
                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-300">
                                        <li><strong className="text-slate-100">Evidence:</strong> Take photos of the area immediately.</li>
                                        <li><strong className="text-slate-100">Expertise:</strong> We engage engineers to assess the site's condition.</li>
                                        <li><strong className="text-slate-100">Results:</strong> We have a long history of successful settlements in this area.</li>
                                    </ul>
                                    <p className="font-bold text-white">If you slip or fall, contact us!</p>
                                </>
                            )
                        },
                        {
                            title: "Road Traffic Accidents",
                            desc: "From minor collisions to major crashes, our solicitors are here to guide you through every step of your claim.",
                            img: "illustration_traffic.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Proving liability in road traffic accidents requires precision and swift action. Our team specializes in gathering critical evidence—from dashcam footage and witness statements to Garda reports and forensic vehicle analysis.</p>
                                    <p className="mb-4">We represent clients involved in a wide range of incidents, including:</p>
                                    <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-300">
                                        <li>Rear-end collisions and junction accidents.</li>
                                        <li>Uninsured or 'hit and run' driver claims.</li>
                                        <li>Pedestrian and cyclist personal injury.</li>
                                    </ul>
                                    <p>We work closely with accident reconstruction experts to ensure the facts of your case are indisputable.</p>
                                </>
                            )
                        },
                        {
                            title: "Cycling Accidents",
                            desc: "Specialised legal support for cyclists and motorcyclists injured on the road.",
                            img: "illustration_cycling.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Cyclists are among the most vulnerable road users. Even with the right gear, a collision with a motor vehicle or a fall caused by poorly maintained road surfaces can result in devastating injuries.</p>
                                    <p>We understand the unique challenges cyclists face—from 'left-hook' collisions to road hazards. We advocate for your right to the road, ensuring you are compensated not just for your injuries, but for your specialized equipment and ongoing rehabilitation.</p>
                                </>
                            )
                        },
                        {
                            title: "Motorbike Accidents",
                            desc: "Specialised legal support for motorcyclists injured on the road.",
                            img: "illustration_motorbike.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Motorcyclists often face an uphill battle when it comes to liability and 'look but failed to see' accidents. We recognize the skill involved in riding and the severity of injuries when things go wrong.</p>
                                    <p>Our team focuses on the technical details of the crash, working with experts to prove negligence by other drivers. Whether it’s a filtering incident or a junction collision, we fight to protect the biking community.</p>
                                </>
                            )
                        },
                        {
                            title: "Workplace Accidents",
                            desc: "Suffered an injury at work? We have the expertise to help you navigate through the claims process.",
                            img: "illustration_workplace.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Every employee has the right to a safe working environment. Accidents in the workplace—whether on a construction site, in a warehouse, or in an office—are often the result of inadequate training, faulty equipment, or a failure to follow safety protocols.</p>
                                    <p>We help you navigate the delicate process of claiming against an employer’s insurance. Your job security is protected by law, and our goal is to ensure your recovery and financial stability are the top priorities.</p>
                                </>
                            )
                        },
                        {
                            title: "Medical Negligence",
                            desc: "Expert advice for medical error cases, handled with sensitivity and professional rigor.",
                            img: "illustration_slips.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">When we place our trust in medical professionals, we expect a high standard of care. If that standard is not met—whether through surgical error, misdiagnosis, or birth injury—the consequences can be life-changing.</p>
                                    <p>Medical negligence cases are highly complex and require a deep understanding of both law and medicine. We engage leading medical experts to review your records and provide the evidence needed to hold healthcare providers accountable for their mistakes.</p>
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
                                onClick={() => setSelectedItem(item)}
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
                                <div className="w-24 h-24 shrink-0 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5">
                                    <img src={selectedItem.img} alt={selectedItem.title} className="w-16 h-16 object-contain mix-blend-screen" />
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">We fight for your <br /><span className="text-amber-400">future security.</span></h2>
                        <div className="space-y-8">
                            {[
                                "Comprehensive case assessment and evidence gathering",
                                "Access to top medical experts for accurate prognosis",
                                "Negotiation with insurance companies on your behalf",
                                "Full High Court representation if required"
                            ].map((step, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-teal-400 shrink-0 mt-1" />
                                    <p className="text-slate-300 text-lg font-light">{step}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12">
                            <a href="tel:(704)358-1528" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-black tracking-widest uppercase rounded-xl hover:bg-slate-200 transition-colors">
                                Start Your Claim <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-slate-900 rounded-[3rem] border border-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 to-transparent" />
                            {/* Placeholder for legal imagery */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-xs uppercase tracking-widest">
                                [Legal Representation Image]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Stats */}
            <section className="bg-amber-400 py-12 md:py-20 px-6 md:px-8 text-slate-950">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div className="text-5xl font-black mb-2">98%</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Success Rate</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">No Win</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">No Fee Basis*</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">24/7</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Support Line</div>
                    </div>
                </div>
                <div className="text-center mt-12 text-[10px] font-mono opacity-50 max-w-2xl mx-auto">
                    * In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.
                </div>
            </section>
        </div>
    )
}

export default PersonalInjury
