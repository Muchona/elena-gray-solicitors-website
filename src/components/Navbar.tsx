import { Phone, ChevronDown, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const services = [
        { name: 'Personal Injury', link: '/personal-injury' },
        { name: 'Medical Negligence', link: '/medical-negligence' },
        { name: 'Family Law', link: '/family-law' },
        { name: 'Property Law', link: '/property-law' },
        { name: 'Wills & Probate', link: '/wills-probate' },
        { name: 'Dispute Resolution', link: '/dispute-resolution' }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 border-b border-white/10 backdrop-blur-3xl bg-[#020617]/95 transition-all duration-300 ${isMobileMenuOpen ? 'z-[1000]' : 'z-[100]'}`}>
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">

                {/* Brand Group */}
                <Link
                    to="/"
                    onClick={(e) => {
                        if (location.pathname === '/') {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                    }}
                    className="nav-item flex items-center gap-3 md:gap-5 shrink-0 z-[110]"
                >
                    <img src="elena_logo.png" alt="Elena Gray Logo" className="h-10 md:h-14 w-auto drop-shadow-lg" />
                    <div className="flex flex-col border-l border-white/10 pl-3 md:pl-5">
                        <span className="text-base md:text-xl font-bold tracking-tight text-white leading-tight">Elena Gray</span>
                        <span className="text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase text-amber-500">Solicitors</span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <button className="nav-item text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-amber-400 transition-colors uppercase flex items-center gap-2 py-4">
                            Services <ChevronDown size={12} />
                        </button>

                        {/* Dropdown Menu */}
                        {isServicesOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
                                <div className="py-2">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.link}
                                            className="block px-6 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-amber-400 transition-colors"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <a href="/#about" className="nav-item text-[10px] font-black tracking-[0.3em] text-slate-400 hover:text-amber-400 transition-colors uppercase">
                        About
                    </a>
                </div>

                {/* Desktop Call to Action & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="flex items-center gap-3 px-8 py-3.5 bg-amber-400 text-slate-950 text-[11px] font-black tracking-widest uppercase rounded-xl hover:bg-white transition-all shadow-xl shadow-amber-400/20 active:scale-95 whitespace-nowrap"
                        >
                            <Phone size={14} className="fill-current" />
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className="md:hidden relative p-2.5 border border-white/10 rounded-xl text-white hover:text-amber-400 transition-all z-[999] active:scale-95 bg-white/5 backdrop-blur-md"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu Takeover */}
                <div
                    className={`fixed inset-0 bg-[#020617] h-screen w-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden flex flex-col ${isMobileMenuOpen
                        ? 'translate-y-0 opacity-100 visible pointer-events-auto z-[2000]'
                        : '-translate-y-full opacity-0 invisible pointer-events-none z-[-1]'
                        }`}
                >
                    {/* Interior Header */}
                    <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                        <div className="flex items-center gap-3">
                            <img src="/elena_logo.png" alt="Branding" className="h-8 w-auto opacity-80" />
                            <div className="flex flex-col border-l border-white/10 pl-3">
                                <span className="text-sm font-bold text-white tracking-tight">Elena Gray</span>
                                <span className="text-[7px] font-black tracking-[0.3em] uppercase text-amber-500">Solicitors</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white hover:text-amber-400 transition-all active:scale-90"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Centered Navigation */}
                    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center overflow-y-auto pt-10 pb-20">
                        <div className="space-y-12 w-full max-w-sm">
                            <Link
                                to="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-xs font-black tracking-[0.5em] uppercase text-slate-500 hover:text-white transition-colors"
                            >
                                Home
                            </Link>

                            <div className="space-y-6">
                                <p className="text-[10px] font-black tracking-[0.5em] uppercase text-amber-500/40">Our Services</p>
                                <div className="space-y-6">
                                    {services.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.link}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-3xl md:text-4xl font-bold text-white hover:text-amber-400 transition-all hover:scale-105"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-8 flex flex-col items-center gap-6">
                                <a
                                    href="/#about"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xs font-black tracking-[0.5em] uppercase text-slate-500 hover:text-white transition-colors"
                                >
                                    About Elena
                                </a>
                                <Link
                                    to="/reviews"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-xs font-black tracking-[0.5em] uppercase text-slate-500 hover:text-white transition-colors"
                                >
                                    Reviews
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Footer Contact Layer */}
                    <div className="p-8 border-t border-white/5 bg-slate-900/40 backdrop-blur-md">
                        <div className="grid grid-cols-1 gap-4">
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-3 w-full py-5 bg-amber-400 text-slate-950 text-xs font-black tracking-widest uppercase rounded-2xl hover:bg-white transition-all shadow-2xl shadow-amber-400/20"
                            >
                                <Phone size={16} className="fill-current" />
                                Begin Consultation
                            </Link>
                            <div className="flex items-center justify-center gap-4 text-slate-400 text-[10px] font-black tracking-widest uppercase">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                Direct Helpline: (047) 71551
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
