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

const MedicalNegligence = () => {
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
                        Medical Negligence <br />
                        <span className="text-slate-500">& Clinical Error.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                        When we place our trust in medical professionals, we expect a duty of care.
                        If that trust is broken through negligence, the results can be devastating.
                        We are here to fight for your answers and your future.
                    </p>
                </div>
            </header>

            {/* Core Areas */}
            <section className="px-6 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        {
                            title: "Surgical Errors & Complications",
                            desc: "Surgery inherently carries risks, but when complications arise from avoidable mistakes the impact is traumatic.",
                            img: "illustration_surgical_crop.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Surgery inherently carries risks, but when complications arise from avoidable mistakes—such as wrong-site surgery, foreign objects left behind, or post-operative infections—the impact is traumatic.</p>
                                    <p>We specialize in investigating surgical procedures to determine if the standard of care was breached, helping you secure the resources needed for corrective treatment and recovery.</p>
                                </>
                            )
                        },
                        {
                            title: "GP & Medical Professional Negligence",
                            desc: "Your GP is often your first port of call. When a doctor fails to refer a patient or ignores critical symptoms, the results can be life-altering.",
                            img: "illustration_gp_crop.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Your GP is often your first port of call for health concerns. When a doctor fails to refer a patient to a specialist, ignores critical symptoms, or provides an incorrect prescription, the results can be life-altering.</p>
                                    <p>We hold medical professionals accountable for lapses in duty, ensuring that your right to competent primary care is upheld.</p>
                                </>
                            )
                        },
                        {
                            title: "Misdiagnosis & Delayed Diagnosis",
                            desc: "Timing is everything. A misdiagnosis or a delay in identifying conditions like cancer can lead to worsened outcomes.",
                            img: "illustration_misdiagnosis_crop.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Timing is everything in medicine. A misdiagnosis or a delay in identifying conditions like cancer, meningitis, or cardiac issues can lead to worsened outcomes or a loss of treatment options.</p>
                                    <p>We work with leading medical experts to prove where the diagnostic process failed and fight for the justice you deserve for the resulting complications.</p>
                                </>
                            )
                        },
                        {
                            title: "Nursing Home & Elder Care Neglect",
                            desc: "Entrusting the care of a vulnerable loved one to a facility is a major decision. Neglect is a profound betrayal of that trust.",
                            img: "illustration_surgical_crop.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Entrusting the care of a vulnerable loved one to a facility is a major decision. Neglect—such as pressure sores, medication errors, or inadequate supervision—is a profound betrayal of that trust.</p>
                                    <p>We are dedicated to protecting the rights of the elderly, ensuring that negligent facilities are held responsible for the harm caused to those in their care.</p>
                                </>
                            )
                        },
                        {
                            title: "Dental & Cosmetic Surgery Malpractice",
                            desc: "While often elective, dental and cosmetic procedures are medical treatments that require high levels of precision.",
                            img: "illustration_surgical_crop.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">While often elective, dental and cosmetic procedures are medical treatments that require high levels of precision. From nerve damage during dental work to scarring and disfigurement from botched cosmetic enhancements, we represent clients whose confidence and health have been shattered by substandard professional performance.</p>
                                </>
                            )
                        },
                        {
                            title: "Birth Injuries & Cerebral Palsy Cases",
                            desc: "Birth should be a time of joy, but medical errors during labor and delivery can lead to lifelong conditions like Cerebral Palsy.",
                            img: "illustration_surgical_crop.png",
                            detailedContent: (
                                <>
                                    <p className="mb-4">Birth should be a time of joy, but medical errors during labor and delivery can lead to lifelong conditions like Cerebral Palsy or physical trauma to the mother. These cases are highly sensitive and complex.</p>
                                    <p>We provide compassionate, expert legal support to help families secure the significant, long-term financial settlements required for specialized care and equipment.</p>
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
                                    {selectedItem.img && (
                                        <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-contain mix-blend-screen" />
                                    )}
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
                                "In-depth review of medical and hospital records",
                                "Instruction of leading independent medical experts",
                                "Compassionate handling of sensitive family cases",
                                "Commitment to securing future care costs"
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
                                [Medical Legal Imagery]
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
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Success Rate</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">No Win</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">No Fee Basis*</div>
                    </div>
                    <div>
                        <div className="text-5xl font-black mb-2">Direct</div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Solicitor Access</div>
                    </div>
                </div>
                <div className="text-center mt-12 text-[10px] font-mono opacity-50 max-w-2xl mx-auto">
                    * In contentious business, a solicitor may not calculate fees or other charges as a percentage or proportion of any award or settlement.
                </div>
            </section>
        </div>
    )
}

export default MedicalNegligence
