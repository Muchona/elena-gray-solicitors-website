import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import OnyxBadge from './OnyxBadge'

const Footer = () => {
    return (
        <footer id="contact" className="px-6 md:px-8 pt-24 md:pt-32 pb-16 bg-[#010310] border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-24 md:mb-32 text-left">
                <div className="col-span-2 lg:col-span-1 flex flex-col items-start md:items-center text-left md:text-center mb-12 lg:mb-0">
                    <img src="logo.png" alt="Elena Gray Logo" className="h-28 w-auto mb-8 drop-shadow-[0_0_25px_rgba(251,191,36,0.3)] hover:scale-105 transition-transform duration-500" />
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 font-light max-w-xs lg:mx-auto">
                        Compassionate guidance and professional excellence for individuals and businesses across the globe.
                    </p>
                    <div className="flex gap-5 justify-start md:justify-center">
                        {[
                            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573097708251" },
                            { Icon: Instagram, href: "https://www.instagram.com/elenagraysolicitor/" },
                            { Icon: Twitter, href: "#" }
                        ].map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:bg-white/10 transition-all cursor-pointer"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-xs font-black tracking-[0.3em] uppercase text-amber-400 mb-8">Expertise</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link to="/personal-injury" className="hover:text-amber-400 transition-colors">Personal Injury</Link></li>
                        <li><Link to="/medical-negligence" className="hover:text-amber-400 transition-colors">Medical Negligence</Link></li>
                        <li><Link to="/family-law" className="hover:text-amber-400 transition-colors">Family Law</Link></li>
                        <li><Link to="/property-law" className="hover:text-amber-400 transition-colors">Property Law</Link></li>
                        <li><Link to="/wills-probate" className="hover:text-amber-400 transition-colors">Wills & Probate</Link></li>
                        <li><Link to="/dispute-resolution" className="hover:text-amber-400 transition-colors">Dispute Resolution</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-black tracking-[0.3em] uppercase text-amber-400 mb-8">Firm</h4>
                    <ul className="space-y-4 text-sm text-slate-400">
                        <li><Link to="/" className="hover:text-amber-400 transition-colors">About Elena</Link></li>
                        <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-black tracking-[0.3em] uppercase text-amber-400 mb-8">Connect</h4>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-amber-400 flex-shrink-0" size={18} />
                            <span className="text-sm text-slate-400">3 North Road, Monaghan H18FD78</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-amber-400 flex-shrink-0" size={18} />
                            <div className="flex flex-col">
                                <span className="text-sm text-slate-50 font-bold">+353 47 71551</span>
                                <span className="text-sm text-slate-50 font-bold">+353 87 448 0950</span>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-amber-400 flex-shrink-0" size={18} />
                            <span className="text-sm text-slate-400">info@graysolicitors.ie</span>
                        </div>
                        <div className="pt-4">
                            <OnyxBadge />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10 gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <div className="text-[10px] font-mono tracking-[0.3em] text-slate-700 uppercase italic mb-4">
                        ELENA GRAY SOLICITORS // ALL_RIGHTS_RESERVED // SYSTEM_CORE_v1.5
                    </div>
                </div>
                <div className="flex gap-8 text-[10px] font-mono tracking-[0.1em] text-slate-700 uppercase">
                    <a href="#" className="hover:text-slate-500">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-500">Terms of Service</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
