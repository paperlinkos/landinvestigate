/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Building2,
  FileSearch,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Check,
  Building,
  Home as HomeIcon,
  Layers,
  Award,
  Sparkles,
  Lock,
  HelpCircle,
  Send
} from 'lucide-react';

// ==========================================
// CENTRAL IMAGES CONFIG
// ==========================================
const IMAGES = {
  hero: "https://picsum.photos/seed/land-investigate-hero/1600/1000",
  servicesBg: "https://picsum.photos/seed/services-bg/1200/800",
  theVilleMain: "https://picsum.photos/seed/the-ville-exterior/1200/800",
  theVilleThumb1: "https://picsum.photos/seed/the-ville-ext1/400/300",
  theVilleThumb2: "https://picsum.photos/seed/the-ville-int2/400/300",
  theVilleThumb3: "https://picsum.photos/seed/the-ville-plan3/400/300",
  diasporaGardens: "https://picsum.photos/seed/diaspora-gardens-estate/1200/800",
  founder: "https://picsum.photos/seed/dr-emmanuel-founder/600/600",
  trustBg: "https://picsum.photos/seed/trust-bg/800/600"
};

const WHATSAPP_LINK = "https://chat.whatsapp.com/FBFAv6kKQQ5LY1ZT7XLBcP?s=cl&p=a&mlu=4&ilr=4";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState('General enquiry');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    interest: 'General enquiry',
    message: ''
  });

  // Gallery switcher state for The Ville
  const [activeVilleImage, setActiveVilleImage] = useState(IMAGES.theVilleMain);
  const [villeImageLabel, setVilleImageLabel] = useState('Exterior Render');

  // Active section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'how-it-works', 'opportunities', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry Form Submitted:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep success state
    }, 5000);
  };

  const preselectAndScroll = (projectName: string) => {
    setSelectedProject(projectName);
    setFormData(prev => ({ ...prev, interest: projectName }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 flex flex-col selection:bg-[#C9A04A] selection:text-white">
      {/* FLOATING WHATSAPP BUTTON */}
      <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
          title="Join our WhatsApp Community"
        >
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        <div className="hidden md:group-hover:block bg-[#0A1A2F] text-white text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap font-medium border border-[#C9A04A]/30">
          Join WhatsApp Community
        </div>
      </aside>

      {/* STICKY TOP NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#0A1A2F]/95 backdrop-blur-md text-white border-b border-[#C9A04A]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C9A04A] to-amber-700 flex items-center justify-center text-[#0A1A2F] font-bold shadow-lg">
              <ShieldCheck className="w-6 h-6 text-[#0A1A2F]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#C9A04A] transition-colors">
                Land Investigate
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-[#C9A04A] font-semibold">
                Investigate Before You Invest
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Opportunities', id: 'opportunities' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-[#C9A04A] relative py-2 ${
                  activeSection === item.id ? 'text-[#C9A04A] font-semibold' : 'text-slate-300'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A04A] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#C9A04A] hover:bg-[#b88f3b] text-[#0A1A2F] font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Join Community</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A1A2F] border-b border-[#C9A04A]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Opportunities', id: 'opportunities' },
              { name: 'About', id: 'about' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id ? 'bg-[#C9A04A]/10 text-[#C9A04A]' : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-3 rounded-lg bg-[#C9A04A] text-[#0A1A2F] font-semibold text-sm shadow-md"
              >
                Join the Community on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-[#0A1A2F] text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Dark Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Modern Lagos Architecture & Real Estate"
            className="w-full h-full object-cover opacity-25 scale-105 transform animate-pulse duration-[10000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-[#0A1A2F]/90 to-[#0A1A2F]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A04A]/10 border border-[#C9A04A]/30 text-[#C9A04A] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Real Estate Verification & Intelligence Platform</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Investigate Before <span className="text-[#C9A04A]">You Invest</span>
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-slate-300 max-w-2xl mx-auto">
            "Your money. Your property. Our investigation."
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Land Investigate helps individuals, businesses and investors verify properties, ownership, developers and risks before committing their money, wherever in the world they are.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#0A1A2F] font-bold text-base transition-all shadow-xl hover:shadow-amber-500/20 flex items-center justify-center gap-3 group"
            >
              <span>Join the Community</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#opportunities"
              className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-[#C9A04A] hover:bg-[#C9A04A]/10 text-white font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <span>View Opportunities</span>
            </a>
          </div>

          {/* Philosophy Subline */}
          <div className="pt-8 text-sm text-[#C9A04A] font-medium tracking-wide">
            Philosophy: &ldquo;You don't have to live in Nigeria to invest in Nigeria.&rdquo;
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#112238] border-y border-[#C9A04A]/20 py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Verified & Trusted Opportunities", desc: "Rigorous vetting on every property and developer." },
            { title: "Transparent Process", desc: "Clear documentation, legal checks and milestone tracking." },
            { title: "Long-Term Wealth Building", desc: "Structured investments designed for sustainable returns." },
            { title: "Real Estate Across Nigeria", desc: "Expert coverage in Lagos, Abuja and key growth hubs." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <div className="p-2.5 rounded-lg bg-[#C9A04A]/10 text-[#C9A04A] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F0E3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#C9A04A] text-xs font-bold uppercase tracking-widest">Comprehensive Expertise</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1A2F]">What We Do</h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Independent checks, legal diligence, and structured investment pathways designed to protect your capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileSearch,
                title: "Property & Land Investigation",
                desc: "Independent checks on the land or property before you commit."
              },
              {
                icon: Building,
                title: "Property & Developer Checks",
                desc: "Background review of the developer and their track record."
              },
              {
                icon: ShieldCheck,
                title: "Ownership & Legal Due Diligence",
                desc: "Review of title documents and ownership information."
              },
              {
                icon: TrendingUp,
                title: "Real Estate ROI Research",
                desc: "Projective and speculative analysis of potential returns."
              },
              {
                icon: Layers,
                title: "Fractional Real Estate Investment",
                desc: "Take part in a project with a portion of the capital instead of funding it alone."
              },
              {
                icon: Globe,
                title: "Remote Verification for Diaspora",
                desc: "Explore Nigerian opportunities without managing every step yourself."
              },
              {
                icon: Building2,
                title: "Development Opportunities",
                desc: "Selected residential, commercial and estate projects, subject to project-specific due diligence."
              },
              {
                icon: Users,
                title: "Investment Community",
                desc: "Opportunities, property insights and project updates alongside other investors."
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A1A2F]/5 group-hover:bg-[#0A1A2F] text-[#0A1A2F] group-hover:text-[#C9A04A] transition-colors flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0A1A2F]">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A1A2F] group-hover:text-[#C9A04A] transition-colors">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#C9A04A] text-xs font-bold uppercase tracking-widest">Our Proven Process</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1A2F]">How It Works</h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Five transparent steps from initial identification to value creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                step: "01",
                title: "Identify",
                desc: "We identify real estate projects with development and investment potential."
              },
              {
                step: "02",
                title: "Investigate",
                desc: "We carry out due diligence on the property, ownership, documentation, location and development assumptions."
              },
              {
                step: "03",
                title: "Structure",
                desc: "The opportunity is presented with clear information on required capital, investor participation, costs, development plan and potential exit routes."
              },
              {
                step: "04",
                title: "Develop",
                desc: "Projects are developed and monitored through defined professional and operational structures."
              },
              {
                step: "05",
                title: "Create Value",
                desc: "Depending on the project, value may come from property sales, rental income, capital appreciation or other documented revenue streams."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FDFBF7] rounded-2xl p-6 border border-slate-200 shadow-sm relative flex flex-col justify-between group hover:border-[#C9A04A] transition-colors"
              >
                <div className="space-y-4">
                  <span className="text-4xl font-serif font-bold text-[#C9A04A]/40 group-hover:text-[#C9A04A] transition-colors block">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0A1A2F]">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES SECTION / DIASPORA INVESTMENT FORUM */}
      <section id="opportunities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1A2F] text-white">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A04A]/20 border border-[#C9A04A]/40 text-[#C9A04A] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Diaspora Investment Forum</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Fractional Real Estate Opportunities. <span className="text-[#C9A04A]">Built for the Diaspora.</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              The Diaspora Investment Forum connects Nigerians abroad with carefully researched, structured real estate opportunities back home. Instead of funding a whole property alone, eligible investors participate with a defined amount of capital, subject to each project's legal structure and investment terms.
            </p>
            <div className="pt-2">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#C9A04A]">
                &ldquo;You don't have to live in Nigeria to invest in Nigeria.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* TWO PROJECT CARDS */}
          <div className="space-y-16">
            {/* PROJECT 1: THE VILLE */}
            <div className="bg-slate-900/90 rounded-3xl border border-[#C9A04A]/30 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#C9A04A] text-[#0A1A2F] text-xs font-bold uppercase tracking-wider">
                    Own-to-Rent Serviced Apartments
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Gbagada, Lagos</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  The Ville
                </h3>
                <p className="text-xl font-serif italic text-[#C9A04A]">
                  &ldquo;Own a Piece. Earn from the Stay.&rdquo;
                </p>

                {/* Main Interactive Image & Thumbnails */}
                <div className="space-y-3">
                  <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-inner">
                    <img
                      src={activeVilleImage}
                      alt="The Ville project render"
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#0A1A2F]/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-[#C9A04A]">
                      {villeImageLabel}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { img: IMAGES.theVilleMain, label: 'Exterior Render' },
                      { img: IMAGES.theVilleThumb2, label: 'Interior Living' },
                      { img: IMAGES.theVilleThumb3, label: 'Floor Plan' }
                    ].map((thumb, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveVilleImage(thumb.img);
                          setVilleImageLabel(thumb.label);
                        }}
                        className={`relative h-20 rounded-xl overflow-hidden border-2 transition-all ${
                          activeVilleImage === thumb.img ? 'border-[#C9A04A] scale-105' : 'border-slate-700 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={thumb.img} alt={thumb.label} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs uppercase tracking-wider text-[#C9A04A] font-semibold mb-2">Developer & Partners</div>
                  <p className="text-sm text-slate-300">
                    <strong className="text-white">Developer:</strong> Forteplus Projects & Services Ltd.<br />
                    <strong className="text-white">Project Managers & Marketers:</strong> Perfection Real Estate Group.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Key Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 text-center">
                    <div>
                      <div className="text-2xl font-bold font-serif text-[#C9A04A]">16</div>
                      <div className="text-xs text-slate-400 mt-0.5">Total Units</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-serif text-[#C9A04A]">12</div>
                      <div className="text-xs text-slate-400 mt-0.5">2-Bed Apartments</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-serif text-[#C9A04A]">4</div>
                      <div className="text-xs text-slate-400 mt-0.5">Maisonettes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-serif text-[#C9A04A]">2</div>
                      <div className="text-xs text-slate-400 mt-0.5">Lifts</div>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A04A] mb-3">Amenities & Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Swimming Pool", "Modern Gym", "Spacious Parking", "CCTV Surveillance",
                        "Security Personnel", "Standby Generator", "Fully Fitted Interiors"
                      ].map((amenity, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Location block */}
                  <div className="space-y-2 text-sm text-slate-300 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/60">
                    <div className="flex items-start gap-2 text-white font-medium">
                      <MapPin className="w-5 h-5 text-[#C9A04A] shrink-0 mt-0.5" />
                      <span>No. 4, Ora-Ekpen Crescent, Gbagada, Lagos.</span>
                    </div>
                    <p className="text-xs text-slate-400 pl-7 leading-relaxed">
                      Third Mainland Bridge approx. 5-10 min (via Oworo on-ramp). Murtala Muhammed Int'l Airport 11.3 km. Lagos Port Complex, Apapa 16.9 km.
                    </p>
                  </div>

                  {/* Ways to buy & Pricing */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                      <div>
                        <div className="text-xs text-slate-400">Price Per Unit</div>
                        <div className="text-xl font-bold font-serif text-white">₦250,000,000</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">Fractional Option</div>
                        <div className="text-sm font-bold text-[#C9A04A]">₦25,000,000 / share</div>
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 space-y-1 pl-1">
                      <span className="font-semibold text-white">Ways to buy:</span>
                      <ul className="list-disc list-inside space-y-1 text-slate-400">
                        <li>Outright Purchase</li>
                        <li>Payment plan (10% initial deposit, balance over 3 months)</li>
                        <li>Fractional: 10 investors per unit at ₦25,000,000 each</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => preselectAndScroll('The Ville')}
                  className="w-full py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#0A1A2F] font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enquire About The Ville</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PROJECT 2: DIASPORA GARDENS ESTATE */}
            <div className="bg-slate-900/90 rounded-3xl border border-[#C9A04A]/30 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#C9A04A] text-[#0A1A2F] text-xs font-bold uppercase tracking-wider">
                    Fractional Investment
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Lekki Scheme 2, Lagos</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Diaspora Gardens Estate
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  A proposed development of 6 modern 2-bedroom terraces, structured around fractional investment.
                </p>

                <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-700">
                  <img
                    src={IMAGES.diasporaGardens}
                    alt="Diaspora Gardens Estate render"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0A1A2F]/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-medium text-[#C9A04A]">
                    Lekki Scheme 2 Concept
                  </div>
                </div>

                <p className="text-xs italic text-slate-400">
                  * Projected sales are estimates, subject to market conditions and actual transaction prices. Not a guaranteed return.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#C9A04A]">Financial Summary Table</h4>
                  
                  <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950/50">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="p-4 text-slate-400 font-medium">Number of investors</td>
                          <td className="p-4 text-white font-bold text-right">25</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-slate-400 font-medium">Investment per investor</td>
                          <td className="p-4 text-[#C9A04A] font-bold text-right">₦25,000,000</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-slate-400 font-medium">Total target capital</td>
                          <td className="p-4 text-white font-bold text-right">₦625,000,000</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-slate-400 font-medium">Projected sales</td>
                          <td className="p-4 text-white font-bold text-right">6 units x $110,000 = $660,000 gross</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-slate-800/40 p-4 rounded-2xl border border-slate-700/60 text-xs text-slate-300 space-y-2">
                    <div className="font-semibold text-white">Investment Structure Note:</div>
                    <p className="leading-relaxed text-slate-400">
                      Eligible investors participate with a defined capital contribution, backed by professional project management and legal documentation.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => preselectAndScroll('Diaspora Gardens Estate')}
                  className="w-full py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#0A1A2F] font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enquire About Diaspora Gardens</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp community 200 members banner */}
          <div className="bg-gradient-to-r from-[#112238] via-[#1a365d] to-[#112238] border border-[#C9A04A]/40 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Our WhatsApp community is open to 200 members only.
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
              Secure your spot today to receive direct project updates, property insights, and immediate access to verified real estate opportunities.
            </p>
            <div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#0A1A2F] font-bold text-base transition-all shadow-xl hover:scale-105"
              >
                <span>Join the Community</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / FOUNDER SECTION */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F6F0E3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#C9A04A] text-xs font-bold uppercase tracking-widest">Leadership & Vision</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1A2F]">Meet the Founder</h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
            {/* Left: circular portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-[#C9A04A] shadow-xl">
                <img
                  src={IMAGES.founder}
                  alt="Dr. Emmanuel Joseph Etukudoh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-[#0A1A2F]">
                  Dr. Emmanuel Joseph Etukudoh
                </h3>
                <p className="text-sm font-semibold text-[#C9A04A]">
                  Founder & Owner, Land Investigate
                </p>
              </div>
            </div>

            {/* Right: Bio & Quote */}
            <div className="lg:col-span-8 space-y-6">
              <div className="prose text-slate-700 leading-relaxed space-y-4 text-base sm:text-lg">
                <p>
                  Emmanuel is an entrepreneur, business strategist and travel and lifestyle professional with experience across finance, technology, international travel, procurement, management and business development.
                </p>
                <p>
                  He holds a degree in Management Engineering from Eastern Mediterranean University and a Master's in Supply Chain & Logistics Management from Rome Business School.
                </p>
                <p>
                  Through Land Investigate, he is building a platform that helps people, especially Nigerians in the diaspora, access real estate opportunities in Nigeria with greater transparency, structured due diligence and professional guidance.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-4">
                <blockquote className="font-serif italic text-xl text-[#0A1A2F] font-semibold border-l-4 border-[#C9A04A] pl-4">
                  &ldquo;Your Investment. Our Verification.&rdquo;
                </blockquote>
                <p className="text-xs uppercase tracking-widest text-[#C9A04A] font-bold">
                  Building trust. Connecting the diaspora. Creating lasting real estate opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#C9A04A] text-xs font-bold uppercase tracking-widest">Get In Touch</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0A1A2F]">Join the Community or Make an Enquiry</h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Reach out directly or send us an enquiry for tailored verification and investment support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: WhatsApp CTA & Contact Details */}
            <div className="lg:col-span-5 space-y-8 bg-[#0A1A2F] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">Direct Connection</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Connect instantly with our team and fellow diaspora investors through our exclusive WhatsApp community.
                  </p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#0A1A2F] font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2 text-base"
                >
                  <span>Join on WhatsApp</span>
                  <ExternalLink className="w-5 h-5" />
                </a>

                <div className="pt-6 border-t border-slate-800 space-y-4">
                  <h4 className="text-xs uppercase tracking-wider text-[#C9A04A] font-semibold">Contact Details</h4>
                  
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>Admin: +234 810 247 4556</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>+234 811 436 5460, +234 803 306 4372</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>China/Guangzhou: +86 130 2207 2412</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>info.habsluxury@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 text-xs text-slate-400">
                In partnership with Habs Luxury. Secure your investment journey today.
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7 bg-[#FDFBF7] p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A1A2F]">Enquiry Received Successfully!</h3>
                  <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                    Thank you for reaching out, <strong className="text-[#0A1A2F]">{formData.fullName}</strong>. Our team will review your enquiry regarding <strong className="text-[#0A1A2F]">{formData.interest}</strong> and get back to you promptly via phone/email.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', country: '', interest: 'General enquiry', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#0A1A2F] text-white text-sm font-semibold hover:bg-slate-800 transition-all"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#0A1A2F]">Send an Enquiry</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="Dr. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9Id] focus:border-[#C9A04A] bg-white text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9A04A] bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+44 20 7946 0912"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9A04A] bg-white text-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Country of Residence *</label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleFormChange}
                        placeholder="United Kingdom, USA, Nigeria..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9A04A] bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">I'm Interested In *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9A04A] bg-white text-sm"
                    >
                      <option value="The Ville">The Ville</option>
                      <option value="Diaspora Gardens Estate">Diaspora Gardens Estate</option>
                      <option value="Property verification">Property verification</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Message / Notes *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your property investment goals or specific verification request..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9A04A] bg-white text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0A1A2F] hover:bg-slate-900 text-white font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4 text-[#C9A04A]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A1A2F] text-slate-400 border-t border-[#C9A04A]/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9A04A] flex items-center justify-center text-[#0A1A2F] font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#0A1A2F]" />
                </div>
                <span className="font-serif text-lg font-bold text-white">Land Investigate</span>
              </div>
              <p className="text-xs text-slate-300 italic">
                &ldquo;Land Investigate - Investigate Before You Invest.&rdquo;
              </p>
              <p className="text-xs text-[#C9A04A] font-medium">
                In partnership with Habs Luxury
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#C9A04A] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#C9A04A] transition-colors">Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#C9A04A] transition-colors">How It Works</a></li>
                <li><a href="#opportunities" className="hover:text-[#C9A04A] transition-colors">Opportunities (Diaspora Forum)</a></li>
                <li><a href="#about" className="hover:text-[#C9A04A] transition-colors">About Founder</a></li>
                <li><a href="#contact" className="hover:text-[#C9A04A] transition-colors">Contact & Enquiry</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Community</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A04A] hover:underline flex items-center gap-1.5 font-medium"
                  >
                    <span>Join WhatsApp Community</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li className="text-slate-400">Limited to 200 members</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Global Reach</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Serving Nigerians in the diaspora (UK, USA, Canada, Europe, Dubai, etc.) and local first-time investors.
              </p>
            </div>
          </div>

          {/* Disclaimer & Copyright */}
          <div className="pt-8 border-t border-slate-800 space-y-4 text-xs text-slate-500 leading-relaxed">
            <p>
              <strong className="text-slate-400">Disclaimer:</strong> Projections and figures are estimates and not guaranteed returns. Investment terms are documented per project. Land Investigate provides information and due diligence support and does not constitute financial or legal advice. Please seek independent professional advice before investing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p>&copy; {new Date().getFullYear()} Land Investigate. All rights reserved.</p>
              <p className="text-slate-400 font-medium">Your Investment. Our Verification.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
