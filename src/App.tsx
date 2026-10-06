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
  ChevronLeft,
  Building,
  Layers,
  Award,
  Sparkles,
  Download,
  FileDown,
  FileText,
  Eye,
  ZoomIn,
  Send,
  Calendar,
  DollarSign,
  Maximize2
} from 'lucide-react';

// ==========================================
// CENTRAL ASSETS CONFIG (REAL CLIENT ASSETS)
// ==========================================
const ASSETS = {
  // Founder Real Picture
  founder: "/images/founder.jpg",
  
  // The Ville Serviced Apartments (Gbagada, Lagos)
  theVilleFlyer: "/images/the-ville-flyer.jpg",
  theVilleBrochurePdf: "/docs/the-ville-brochure.pdf",
  theVillePages: [
    { page: 1, title: "Cover & Project Identity", img: "/images/the-ville-page-1.jpg" },
    { page: 2, title: "Landmark Serviced-Apartment Model", img: "/images/the-ville-page-2.jpg" },
    { page: 3, title: "Luxury Amenities & Facilities", img: "/images/the-ville-page-3.jpg" },
    { page: 4, title: "Prime Gbagada Location Analysis", img: "/images/the-ville-page-4.jpg" },
    { page: 5, title: "Architecture & Floor Plans Package", img: "/images/the-ville-page-5.jpg" }
  ],
  theVilleFloorPlans: [
    { title: "Ground / Site Plan", img: "/images/the-ville-p5-img1.jpg" },
    { title: "Typical Floor Plan", img: "/images/the-ville-p5-img2.jpg" },
    { title: "Fourth Floor Plan", img: "/images/the-ville-p5-img3.jpg" },
    { title: "Fifth Floor Plan", img: "/images/the-ville-p5-img4.jpg" }
  ],

  // Diaspora Gardens Estate (Lekki Scheme 2 Concept)
  diasporaFlyer: "/images/diaspora-gardens-flyer.jpg",
  diasporaRenders: [
    { title: "Promotional Flyer Overview", img: "/images/diaspora-gardens-flyer.jpg" },
    { title: "Terrace Exterior Concept", img: "/images/diaspora-exterior.jpg" },
    { title: "Living & Dining Area", img: "/images/diaspora-living-dining.jpg" },
    { title: "Master Bedroom", img: "/images/diaspora-master-bedroom.jpg" },
    { title: "Modern Fitted Kitchen", img: "/images/diaspora-modern-kitchen.jpg" },
    { title: "Private Balcony & Views", img: "/images/diaspora-private-balcony.jpg" }
  ]
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

  // Lightbox / Modal States
  const [activeBrochureModal, setActiveBrochureModal] = useState(false);
  const [currentBrochurePage, setCurrentBrochurePage] = useState(1);
  const [activeFlyerModal, setActiveFlyerModal] = useState<null | { title: string; image: string; downloadName: string }>(null);

  // The Ville Gallery Tab
  const [villeActiveTab, setVilleActiveTab] = useState<'flyer' | 'plans' | 'brochure'>('flyer');
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(0);

  // Diaspora Gardens Gallery Tab
  const [diasporaActiveIndex, setDiasporaActiveIndex] = useState(0);

  // Active section observer on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'how-it-works', 'opportunities', 'downloads', 'about', 'contact'];
      const scrollPosition = window.scrollY + 220;

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
  };

  const preselectAndScroll = (projectName: string) => {
    setSelectedProject(projectName);
    setFormData(prev => ({ ...prev, interest: projectName }));
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBrochureFlow = (pageIndex: number = 1) => {
    setCurrentBrochurePage(pageIndex);
    setActiveBrochureModal(true);
  };

  return (
    <div className="min-h-screen bg-[#F6FAF6] text-slate-800 flex flex-col selection:bg-[#C9A04A] selection:text-[#062319]">
      {/* ========================================================= */}
      {/* FLOATING WHATSAPP BUTTON */}
      {/* ========================================================= */}
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
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
          </span>
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        <div className="hidden md:group-hover:block bg-[#062319] text-white text-xs py-1.5 px-3 rounded-lg shadow-xl whitespace-nowrap font-medium border border-[#C9A04A]/40">
          Join WhatsApp Community
        </div>
      </aside>

      {/* ========================================================= */}
      {/* STICKY TOP NAVIGATION (LUXURY EMERALD & GOLD PALETTE) */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#062319]/95 backdrop-blur-md text-white border-b border-[#C9A04A]/25 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A04A] via-amber-500 to-[#10B981] flex items-center justify-center text-[#062319] font-bold shadow-lg shadow-emerald-950/40">
              <ShieldCheck className="w-6 h-6 text-[#062319]" />
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
          <nav className="hidden lg:flex items-center gap-7">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Opportunities', id: 'opportunities' },
              { name: 'Materials & PDF', id: 'downloads' },
              { name: 'Founder', id: 'about' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-[#C9A04A] relative py-2 ${
                  activeSection === item.id ? 'text-[#C9A04A] font-semibold' : 'text-emerald-100/80'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C9A04A] rounded-full shadow-sm shadow-[#C9A04A]" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* Quick PDF Brochure Download Button in Header */}
            <a
              href={ASSETS.theVilleBrochurePdf}
              download="The-Ville-Gbagada-Brochure.pdf"
              className="px-3.5 py-2 rounded-lg bg-[#0B2F22] hover:bg-[#12402D] text-emerald-200 border border-emerald-600/30 text-xs font-semibold transition-all flex items-center gap-2 group"
              title="Download The Ville Brochure PDF (849 KB)"
            >
              <FileDown className="w-4 h-4 text-[#C9A04A] group-hover:scale-110 transition-transform" />
              <span>Brochure PDF</span>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Join Community</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/60 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#062319] border-b border-[#C9A04A]/20 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            {[
              { name: 'Home', id: 'home' },
              { name: 'Services', id: 'services' },
              { name: 'How It Works', id: 'how-it-works' },
              { name: 'Opportunities', id: 'opportunities' },
              { name: 'Materials & PDF', id: 'downloads' },
              { name: 'Founder Profile', id: 'about' },
              { name: 'Contact & Enquiry', id: 'contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  activeSection === item.id ? 'bg-[#0B2F22] text-[#C9A04A]' : 'text-emerald-100 hover:bg-[#0B2F22]'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={ASSETS.theVilleBrochurePdf}
                download="The-Ville-Gbagada-Brochure.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-3 rounded-lg bg-[#0B2F22] text-emerald-200 border border-emerald-600/40 font-semibold text-sm"
              >
                📥 Download The Ville Brochure (PDF)
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block px-4 py-3 rounded-lg bg-[#C9A04A] text-[#062319] font-bold text-sm shadow-md"
              >
                Join the Community on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* HERO SECTION (DEEP EMERALD GREEN PALETTE) */}
      {/* ========================================================= */}
      <section id="home" className="relative min-h-[92vh] flex items-center justify-center bg-[#062319] text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Real Architectural Render Overlay with Luxury Forest Green Tint */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.theVilleFlyer}
            alt="Lagos Real Estate - The Ville Architecture"
            className="w-full h-full object-cover opacity-20 scale-105 transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#062319] via-[#062319]/90 to-[#062319]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2F22] border border-[#C9A04A]/40 text-[#C9A04A] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
            <Sparkles className="w-4 h-4 text-[#C9A04A]" />
            <span>Real Estate Verification & Intelligence Platform</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Investigate Before <span className="text-[#C9A04A]">You Invest</span>
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-emerald-100 max-w-2xl mx-auto">
            "Your money. Your property. Our investigation."
          </p>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-3xl mx-auto font-light leading-relaxed">
            Land Investigate helps individuals, diaspora investors, and businesses verify properties, ownership, developer track records, and physical risks before committing funds across Nigeria.
          </p>

          {/* Call-to-actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-base transition-all shadow-xl hover:shadow-emerald-500/20 flex items-center justify-center gap-3 group"
            >
              <span>Join WhatsApp Community</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => openBrochureFlow(1)}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0B2F22] hover:bg-[#12402D] border border-[#C9A04A]/60 text-[#C9A04A] font-semibold text-base transition-all flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <FileDown className="w-5 h-5 text-[#C9A04A] group-hover:scale-110 transition-transform" />
              <span>Download Project Brochure (PDF)</span>
            </button>

            <a
              href="#opportunities"
              className="w-full sm:w-auto px-7 py-4 rounded-xl border border-emerald-600/50 hover:bg-emerald-900/40 text-emerald-100 font-medium text-base transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Opportunities</span>
            </a>
          </div>

          {/* Philosophy Subline */}
          <div className="pt-6 text-sm text-[#C9A04A] font-medium tracking-wide">
            Core Philosophy: &ldquo;You don't have to live in Nigeria to invest in Nigeria.&rdquo;
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* TRUST STRIP (EMERALD ACCENTS) */}
      {/* ========================================================= */}
      <section className="bg-[#0A291E] border-y border-[#C9A04A]/20 py-8 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Verified & Vetted Opportunities", desc: "Rigorous legal and physical checks on every property." },
            { title: "Transparent Process", desc: "Clear documentation, verified titles, and milestone tracking." },
            { title: "Fractional Investment Pathways", desc: "Structured participation with lower capital barrier." },
            { title: "Dedicated Diaspora Advisory", desc: "Independent verification for investors based abroad." }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-[#062319]/70 border border-[#164E36]">
              <div className="p-2.5 rounded-lg bg-[#C9A04A]/15 text-[#C9A04A] shrink-0 border border-[#C9A04A]/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm sm:text-base">{item.title}</h3>
                <p className="text-xs text-emerald-200/70 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES SECTION */}
      {/* ========================================================= */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EEF4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Independent Expertise</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#062319]">What We Do</h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Independent checks, title search, developer audit, and structured real estate investment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileSearch,
                title: "Property & Land Investigation",
                desc: "Independent checks on the land or property before you make financial commitments."
              },
              {
                icon: Building,
                title: "Property & Developer Checks",
                desc: "Comprehensive background review of the developer and their delivery track record."
              },
              {
                icon: ShieldCheck,
                title: "Ownership & Legal Due Diligence",
                desc: "Verification of title documents, surveys, governor's consent, and gazettes."
              },
              {
                icon: TrendingUp,
                title: "Real Estate ROI Research",
                desc: "Projective analysis of rental yields, occupancy trends, and capital appreciation."
              },
              {
                icon: Layers,
                title: "Fractional Real Estate Investment",
                desc: "Participate in premium development assets with a defined share of capital."
              },
              {
                icon: Globe,
                title: "Remote Verification for Diaspora",
                desc: "Invest in Nigeria from the UK, USA, Canada, and Europe with zero physical guesswork."
              },
              {
                icon: Building2,
                title: "Development Opportunities",
                desc: "Selected residential, commercial and serviced estate projects subject to diligence."
              },
              {
                icon: Users,
                title: "Investment Community",
                desc: "Direct access to property updates, market intelligence, and co-investor insights."
              }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-emerald-100 flex flex-col justify-between group hover:-translate-y-1 hover:border-emerald-300"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#062319]/5 group-hover:bg-[#062319] text-[#062319] group-hover:text-[#C9A04A] transition-colors flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#062319]">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#062319] group-hover:text-emerald-700 transition-colors">
                    <span>Explore diligence</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Our Verified Workflow</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#062319]">How It Works</h2>
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
                desc: "We identify real estate projects with development and verified investment potential."
              },
              {
                step: "02",
                title: "Investigate",
                desc: "We carry out due diligence on property titles, ownership, site survey, zoning and developers."
              },
              {
                step: "03",
                title: "Structure",
                desc: "The opportunity is presented with clear capital requirements, shares, costs, and exit routes."
              },
              {
                step: "04",
                title: "Develop",
                desc: "Projects are developed and monitored through strict professional project management."
              },
              {
                step: "05",
                title: "Create Value",
                desc: "Value is returned via managed rental income, short-let operations, or capital appreciation."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F6FAF6] rounded-2xl p-6 border border-emerald-100 shadow-sm relative flex flex-col justify-between group hover:border-[#C9A04A] transition-all hover:bg-emerald-50/50"
              >
                <div className="space-y-4">
                  <span className="text-4xl font-serif font-bold text-[#10B981]/50 group-hover:text-[#C9A04A] transition-colors block">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#062319]">
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

      {/* ========================================================= */}
      {/* OPPORTUNITIES SECTION / REAL CLIENT FLYERS & BROCHURE FLOW */}
      {/* ========================================================= */}
      <section id="opportunities" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#062319] text-white">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B2F22] border border-[#C9A04A]/50 text-[#C9A04A] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Diaspora Investment Forum & Opportunities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              Curated Real Estate Opportunities. <br />
              <span className="text-[#C9A04A]">Built for the Diaspora.</span>
            </h2>
            <p className="text-emerald-100/90 text-base sm:text-lg leading-relaxed font-light">
              Connect with rigorously researched, structured Nigerian real estate investments. Download official developer brochures, inspect architectural drawings, or participate with fractional capital.
            </p>
            <div className="pt-2">
              <blockquote className="font-serif italic text-xl sm:text-2xl text-[#C9A04A]">
                &ldquo;You don't have to live in Nigeria to invest in Nigeria.&rdquo;
              </blockquote>
            </div>
          </div>

          {/* ======================================================= */}
          {/* PROJECT 1: THE VILLE (GBAGADA, LAGOS) */}
          {/* ======================================================= */}
          <div className="bg-[#0B2F22] rounded-3xl border border-[#164E36] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 relative">
            {/* Left: Media Showcase (Flyer, Floor Plans, Brochure) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C9A04A] text-[#062319] text-xs font-bold uppercase tracking-wider">
                    Own-to-Rent Serviced Apartments
                  </span>
                  <span className="text-xs text-emerald-200/80 font-medium">Gbagada, Lagos</span>
                </div>
                <span className="text-xs text-[#C9A04A] font-semibold bg-[#062319] px-2.5 py-1 rounded-md border border-[#C9A04A]/30">
                  Official Developer Pack
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  The Ville
                </h3>
                <p className="text-lg font-serif italic text-[#C9A04A] mt-1">
                  &ldquo;Finished & Furnished Own-To-Rent Serviced Apartments&rdquo;
                </p>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-2 bg-[#062319] p-1.5 rounded-xl border border-emerald-800/60 text-xs font-medium">
                <button
                  onClick={() => setVilleActiveTab('flyer')}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                    villeActiveTab === 'flyer'
                      ? 'bg-[#C9A04A] text-[#062319] font-bold shadow'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                >
                  Promotional Render
                </button>
                <button
                  onClick={() => setVilleActiveTab('plans')}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                    villeActiveTab === 'plans'
                      ? 'bg-[#C9A04A] text-[#062319] font-bold shadow'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                >
                  Floor Plans (4)
                </button>
                <button
                  onClick={() => setVilleActiveTab('brochure')}
                  className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                    villeActiveTab === 'brochure'
                      ? 'bg-[#C9A04A] text-[#062319] font-bold shadow'
                      : 'text-emerald-200 hover:text-white'
                  }`}
                >
                  Brochure (5 Pgs)
                </button>
              </div>

              {/* Interactive View Display */}
              {villeActiveTab === 'flyer' && (
                <div className="space-y-3">
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-emerald-700/60 shadow-xl group">
                    <img
                      src={ASSETS.theVilleFlyer}
                      alt="The Ville Promotional Flyer - Architectural Rendering"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <div className="bg-[#062319]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-[#C9A04A] border border-[#C9A04A]/30">
                        Architectural Dusk Render • No. 4 Ora-Ekpen Crescent
                      </div>
                      <button
                        onClick={() => setActiveFlyerModal({
                          title: "The Ville Apartments - Promotional Architectural Render",
                          image: ASSETS.theVilleFlyer,
                          downloadName: "The-Ville-Apartments-Flyer.jpg"
                        })}
                        className="bg-[#C9A04A] text-[#062319] p-2 rounded-lg hover:bg-white transition-all shadow-md"
                        title="Enlarge flyer image"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {villeActiveTab === 'plans' && (
                <div className="space-y-3">
                  <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-emerald-700/60 shadow-xl bg-white p-2">
                    <img
                      src={ASSETS.theVilleFloorPlans[selectedFloorPlan].img}
                      alt={ASSETS.theVilleFloorPlans[selectedFloorPlan].title}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#062319]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-[#C9A04A] border border-[#C9A04A]/40">
                      {ASSETS.theVilleFloorPlans[selectedFloorPlan].title}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {ASSETS.theVilleFloorPlans.map((plan, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedFloorPlan(idx)}
                        className={`p-2 rounded-xl border text-xs text-center transition-all ${
                          selectedFloorPlan === idx
                            ? 'bg-[#062319] border-[#C9A04A] text-[#C9A04A] font-bold'
                            : 'bg-emerald-950/40 border-emerald-800 text-emerald-300 hover:border-emerald-600'
                        }`}
                      >
                        <span className="block truncate">{plan.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {villeActiveTab === 'brochure' && (
                <div className="space-y-3">
                  <div
                    onClick={() => openBrochureFlow(1)}
                    className="relative h-72 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#C9A04A] shadow-xl bg-slate-900 cursor-pointer group"
                  >
                    <img
                      src={ASSETS.theVillePages[0].img}
                      alt="The Ville Brochure Cover"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#062319]/40 group-hover:bg-[#062319]/20 transition-colors flex items-center justify-center">
                      <div className="bg-[#062319]/90 border border-[#C9A04A] px-5 py-3 rounded-xl text-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Eye className="w-6 h-6 text-[#C9A04A] mx-auto mb-1" />
                        <span className="text-white text-xs font-bold block">Click to Flip Through Brochure</span>
                        <span className="text-[10px] text-[#C9A04A]">5 High-Resolution Pages</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5">
                    {ASSETS.theVillePages.map((pg) => (
                      <button
                        key={pg.page}
                        onClick={() => openBrochureFlow(pg.page)}
                        className="relative h-16 rounded-lg overflow-hidden border border-emerald-700 hover:border-[#C9A04A] transition-all"
                        title={pg.title}
                      >
                        <img src={pg.img} alt={pg.title} className="w-full h-full object-cover" />
                        <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-center text-white font-mono py-0.5">
                          P.{pg.page}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Developer credentials */}
              <div className="p-4 rounded-xl bg-[#062319]/80 border border-emerald-800 text-xs text-emerald-100/90 space-y-1">
                <div><strong className="text-white">Project Developer:</strong> FORTEPLUS Projects and Services Limited</div>
                <div><strong className="text-white">Project Managers & Marketers:</strong> PERFECTION Real Estate Group</div>
              </div>
            </div>

            {/* Right: Project Data & PDF DOWNLOAD FLOW */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#062319] p-4 rounded-2xl border border-emerald-800/80 text-center">
                  <div>
                    <div className="text-2xl font-bold font-serif text-[#C9A04A]">16</div>
                    <div className="text-[11px] text-emerald-200 mt-0.5">Total Units</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-serif text-[#C9A04A]">12</div>
                    <div className="text-[11px] text-emerald-200 mt-0.5">2-Bed Apartments</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-serif text-[#C9A04A]">4</div>
                    <div className="text-[11px] text-emerald-200 mt-0.5">Maisonettes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold font-serif text-[#C9A04A]">2</div>
                    <div className="text-[11px] text-emerald-200 mt-0.5">High-Speed Lifts</div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A04A] mb-2.5">
                    Amenities & Facilities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Swimming Pool", "Modern Gym", "2 Elevators", "Spacious Parking",
                      "CCTV Surveillance", "Security Personnel", "Standby Generator", "Fully Fitted Interiors"
                    ].map((amenity, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-[#062319] text-emerald-100 text-xs font-medium border border-emerald-800">
                        ✓ {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Location Map Summary */}
                <div className="bg-[#062319] p-4 rounded-2xl border border-emerald-800/80 space-y-2 text-sm text-emerald-100">
                  <div className="flex items-start gap-2 text-white font-medium">
                    <MapPin className="w-5 h-5 text-[#C9A04A] shrink-0 mt-0.5" />
                    <span>No. 4, Ora-Ekpen Crescent, Gbagada, Lagos.</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 pl-7 leading-relaxed">
                    Third Mainland Bridge: approx. 5–10 mins (via Oworo on-ramp) • Murtala Muhammed Int'l Airport: 11.3 km • Lagos Port Complex, Apapa: 16.9 km • Direct mainland-to-island business access.
                  </p>
                </div>

                {/* Financial Structure */}
                <div className="bg-[#062319] p-4 rounded-2xl border border-[#C9A04A]/40 space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs text-emerald-300">Outright Purchase</span>
                      <div className="text-xl font-bold font-serif text-white">₦250,000,000</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-emerald-300">Fractional Participation</span>
                      <div className="text-sm font-bold text-[#C9A04A]">₦25,000,000 / Share</div>
                    </div>
                  </div>
                  <div className="text-xs text-emerald-200/90 pt-2 border-t border-emerald-800">
                    <strong>Payment Terms:</strong> Outright or 10% Initial Deposit with balance spread over 3 months. Fractional option structured with 10 co-investors per serviced unit.
                  </div>
                </div>

                {/* =================================================== */}
                {/* DEDICATED PDF BROCHURE DOWNLOAD BOX & FLOW */}
                {/* =================================================== */}
                <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#062319] to-[#0D3828] border-2 border-[#C9A04A]/70 shadow-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A04A] text-[#062319] flex items-center justify-center shrink-0 font-bold shadow">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h5 className="font-serif text-base font-bold text-white">The Ville Project Brochure</h5>
                        <span className="text-[10px] bg-[#C9A04A] text-[#062319] font-bold px-2 py-0.5 rounded uppercase">PDF Document</span>
                      </div>
                      <p className="text-xs text-emerald-200 mt-0.5">
                        Complete 5-page developer dossier including all architectural drawings, floor plans, location insights, and serviced apartment yields.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                    {/* Direct 1-Click Download Link */}
                    <a
                      href={ASSETS.theVilleBrochurePdf}
                      download="The-Ville-Serviced-Apartments-Brochure.pdf"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF (849 KB)</span>
                    </a>

                    {/* In-Browser Flip-Preview Button */}
                    <button
                      onClick={() => openBrochureFlow(1)}
                      className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#062319] hover:bg-emerald-900 border border-[#C9A04A]/60 text-[#C9A04A] font-semibold text-xs transition-all flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Preview Pages Online</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => preselectAndScroll('The Ville')}
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#062319] font-bold text-center text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enquire About The Ville</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`${WHATSAPP_LINK}&text=Hello%20Land%20Investigate,%20I%20would%20like%20information%20on%20The%20Ville%20Apartments%20Gbagada`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-sm transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* PROJECT 2: DIASPORA GARDENS ESTATE (LEKKI SCHEME 2) */}
          {/* ======================================================= */}
          <div className="bg-[#0B2F22] rounded-3xl border border-[#164E36] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 relative">
            {/* Left: Promotional Flyer & Detailed Photo Galleries */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#C9A04A] text-[#062319] text-xs font-bold uppercase tracking-wider">
                    Fractional Development
                  </span>
                  <span className="text-xs text-emerald-200/80 font-medium">Lekki Scheme 2, Lagos</span>
                </div>
                <span className="text-xs text-[#C9A04A] font-semibold bg-[#062319] px-2.5 py-1 rounded-md border border-[#C9A04A]/30">
                  Target Completion: June 2028
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Diaspora Gardens Estate
                </h3>
                <p className="text-lg font-serif italic text-[#C9A04A] mt-1">
                  &ldquo;Own a piece. Earn from the stay.&rdquo;
                </p>
                <p className="text-sm text-emerald-100/90 mt-2 leading-relaxed">
                  A premium real estate investment in one of Lagos' fastest growing locations. 6 modern 2-bedroom contemporary terraces with spacious layouts and luxury finishes.
                </p>
              </div>

              {/* Main Interactive Display for Diaspora Gardens Flyer */}
              <div className="space-y-3">
                <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden border-2 border-emerald-700/80 shadow-2xl bg-black group">
                  <img
                    src={ASSETS.diasporaRenders[diasporaActiveIndex].img}
                    alt={ASSETS.diasporaRenders[diasporaActiveIndex].title}
                    className="w-full h-full object-contain sm:object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="bg-[#062319]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-[#C9A04A] border border-[#C9A04A]/30">
                      {ASSETS.diasporaRenders[diasporaActiveIndex].title}
                    </div>
                    <button
                      onClick={() => setActiveFlyerModal({
                        title: `Diaspora Gardens Estate - ${ASSETS.diasporaRenders[diasporaActiveIndex].title}`,
                        image: ASSETS.diasporaRenders[diasporaActiveIndex].img,
                        downloadName: "Diaspora-Gardens-Estate-Flyer.jpg"
                      })}
                      className="bg-[#C9A04A] text-[#062319] p-2 rounded-lg hover:bg-white transition-all shadow-md"
                      title="Enlarge flyer in full resolution"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 6 Thumbnail Selector Tabs */}
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {ASSETS.diasporaRenders.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setDiasporaActiveIndex(idx)}
                      className={`relative h-16 rounded-xl overflow-hidden border-2 transition-all ${
                        diasporaActiveIndex === idx
                          ? 'border-[#C9A04A] scale-105 shadow-md'
                          : 'border-emerald-800 opacity-70 hover:opacity-100'
                      }`}
                      title={item.title}
                    >
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/70 text-[9px] text-white truncate px-1 text-center">
                        {item.title.split(' ')[0]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Promotional Flyer Download Banner */}
              <div className="flex items-center justify-between bg-[#062319] p-3.5 rounded-xl border border-emerald-800 text-xs">
                <span className="text-emerald-200">
                  📄 Full Promotional Flyer & Financial Schedule
                </span>
                <a
                  href={ASSETS.diasporaFlyer}
                  download="Diaspora-Gardens-Estate-Official-Flyer.jpg"
                  className="px-3 py-1.5 rounded-lg bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold inline-flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Flyer</span>
                </a>
              </div>
            </div>

            {/* Right: Financial Breakdown & 5-Stage Project Plan */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Financial Summary Table directly from the Flyer */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A04A]">
                      Financial Summary (Per Flyer Specification)
                    </h4>
                    <span className="text-xs text-emerald-300 font-mono">6 Terraces • $117,000 Each</span>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-emerald-800/80 bg-[#062319]/90 shadow-md">
                    <table className="w-full text-left text-sm">
                      <tbody className="divide-y divide-emerald-800/60">
                        <tr>
                          <td className="p-3.5 text-emerald-200 font-medium">Number of Investors</td>
                          <td className="p-3.5 text-white font-bold text-right font-mono">25 Co-Investors</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 text-emerald-200 font-medium">Investment per Investor</td>
                          <td className="p-3.5 text-[#C9A04A] font-bold text-right font-mono text-base">₦25,000,000</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 text-emerald-200 font-medium">Total Target Capital</td>
                          <td className="p-3.5 text-white font-bold text-right font-mono text-base">₦625,000,000</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 text-emerald-200 font-medium">Number of Terraces</td>
                          <td className="p-3.5 text-white font-bold text-right font-mono">6 Modern 2-Bedroom Terraces</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 text-emerald-200 font-medium">Projected Selling Price / Terrace</td>
                          <td className="p-3.5 text-emerald-300 font-bold text-right font-mono">$117,000 each</td>
                        </tr>
                        <tr>
                          <td className="p-3.5 text-emerald-200 font-medium">Projected Gross Sales</td>
                          <td className="p-3.5 text-[#C9A04A] font-bold text-right font-mono text-base">$702,000 Gross</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 5-Stage Project Plan Schedule */}
                <div className="space-y-3 bg-[#062319] p-4 sm:p-5 rounded-2xl border border-emerald-800/80">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A04A]">
                      Development Execution Plan
                    </h4>
                    <span className="text-[11px] text-emerald-300 font-medium">Handover: June 2028</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {[
                      { step: "1. Land & Legal", dates: "Jan – Feb 2027", desc: "Title perfection, zoning approvals, deed of participation." },
                      { step: "2. Design & Approvals", dates: "Feb – Apr 2027", desc: "Architectural, structural, and mechanical planning approvals." },
                      { step: "3. Construction", dates: "Apr 2027 – Mar 2028", desc: "Substructure, frame, masonry, and roof installations." },
                      { step: "4. Estate & Infrastructure", dates: "Jan – Apr 2028", desc: "Paved roads, drainage, water treatment, and power connections." },
                      { step: "5. Quality Control & Handover", dates: "Apr – Jun 2028", desc: "Snagging, interior fitout completion, and investor allocation." },
                    ].map((phase, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-2 rounded-lg bg-[#0B2F22]/70 border border-emerald-900">
                        <span className="w-5 h-5 rounded-full bg-[#C9A04A] text-[#062319] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <strong className="text-white text-xs">{phase.step}</strong>
                            <span className="text-[#C9A04A] font-mono text-[11px]">{phase.dates}</span>
                          </div>
                          <p className="text-[11px] text-emerald-200/70 mt-0.5">{phase.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Diaspora Gardens bullets */}
                <div className="bg-[#062319]/80 p-4 rounded-2xl border border-emerald-800 text-xs text-emerald-100/90 space-y-1.5">
                  <div className="font-semibold text-white">Why Diaspora Gardens?</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-emerald-200/80">
                    <li>• Own a piece in high-growth Lekki</li>
                    <li>• Modern 2-bedroom terraces</li>
                    <li>• Serviced short-term rental yields</li>
                    <li>• Professionally managed estate</li>
                  </ul>
                  <p className="text-[10px] text-emerald-300/60 pt-2 italic border-t border-emerald-900">
                    * Projected sales are estimates subject to market conditions and actual transaction prices. Not a guaranteed return.
                  </p>
                </div>
              </div>

              {/* Enquire action */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => preselectAndScroll('Diaspora Gardens Estate')}
                  className="w-full py-3.5 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-center text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Enquire About Diaspora Gardens</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`${WHATSAPP_LINK}&text=Hello%20Land%20Investigate,%20I%20would%20like%20to%20know%20more%20about%20the%20Diaspora%20Gardens%20Estate%20fractional%20opportunity`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-sm transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* ======================================================= */}
          {/* COMMUNITY 200 MEMBERS BANNER */}
          {/* ======================================================= */}
          <div className="bg-gradient-to-r from-[#0A291E] via-[#0E3B2B] to-[#0A291E] border border-[#C9A04A]/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Our WhatsApp investor community is open to 200 members only.
            </h3>
            <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Secure your spot to receive direct diligence reports, new fractional tranches, and unvarnished developer audits.
            </p>
            <div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-base transition-all shadow-xl hover:scale-105"
              >
                <span>Join the Community</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INVESTOR MATERIALS & DOWNLOADS SECTION (FLOW THAT WORKS) */}
      {/* ========================================================= */}
      <section id="downloads" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-emerald-100">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Official Downloads</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#062319]">
              Investor Materials & Project Documentation
            </h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Download complete project packages, architectural drawings, and promotional materials directly to your device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Download Card 1: The Ville Full Brochure PDF */}
            <div className="bg-[#F6FAF6] rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-sm flex flex-col justify-between hover:border-[#C9A04A] transition-all group">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-emerald-200 shadow-inner bg-slate-900">
                  <img
                    src={ASSETS.theVillePages[0].img}
                    alt="The Ville PDF Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                    PDF • 5 Pages
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#062319]">
                    The Ville Serviced Apartments
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                    Official Project Brochure & Design Package
                  </p>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Includes development concept, 12 two-bed & 4 maisonette units, luxury amenities, Gbagada location connectivity, and all 4 architectural floor plans.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-200/80 space-y-2">
                <a
                  href={ASSETS.theVilleBrochurePdf}
                  download="The-Ville-Gbagada-Brochure.pdf"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#062319] hover:bg-[#12402D] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4 text-[#C9A04A] group-hover:scale-110 transition-transform" />
                  <span>Download PDF (849 KB)</span>
                </a>
                <button
                  onClick={() => openBrochureFlow(1)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <span>Preview 5 Pages Online</span>
                </button>
              </div>
            </div>

            {/* Download Card 2: Diaspora Gardens Promotional Flyer */}
            <div className="bg-[#F6FAF6] rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-sm flex flex-col justify-between hover:border-[#C9A04A] transition-all group">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-emerald-200 shadow-inner bg-slate-900">
                  <img
                    src={ASSETS.diasporaFlyer}
                    alt="Diaspora Gardens Estate Flyer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 bg-[#C9A04A] text-[#062319] text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                    High-Res Flyer
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#062319]">
                    Diaspora Gardens Estate
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                    Official Promotional Flyer & Financial Schedule
                  </p>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    Complete promotional sheet showing the 6 modern terraces, room renders, 25-investor capital breakdown, and 5-stage project milestones.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-200/80 space-y-2">
                <a
                  href={ASSETS.diasporaFlyer}
                  download="Diaspora-Gardens-Estate-Flyer.jpg"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#062319] hover:bg-[#12402D] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4 text-[#C9A04A] group-hover:scale-110 transition-transform" />
                  <span>Download Flyer (546 KB)</span>
                </a>
                <button
                  onClick={() => setActiveFlyerModal({
                    title: "Diaspora Gardens Estate - Full Promotional Material",
                    image: ASSETS.diasporaFlyer,
                    downloadName: "Diaspora-Gardens-Estate-Flyer.jpg"
                  })}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <ZoomIn className="w-4 h-4 text-emerald-700" />
                  <span>Inspect High-Res Render</span>
                </button>
              </div>
            </div>

            {/* Download Card 3: The Ville Promotional Render */}
            <div className="bg-[#F6FAF6] rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-sm flex flex-col justify-between hover:border-[#C9A04A] transition-all group">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-emerald-200 shadow-inner bg-slate-900">
                  <img
                    src={ASSETS.theVilleFlyer}
                    alt="The Ville Apartments Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-3 right-3 bg-[#10B981] text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow">
                    Architectural Render
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#062319]">
                    The Ville Architecture Pack
                  </h3>
                  <p className="text-xs text-emerald-800 font-semibold mt-0.5">
                    Exterior Night Render & Facade Design
                  </p>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    High-resolution perspective render featuring the signature illuminated facade, balconies, and ground-floor parking design in Gbagada.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-emerald-200/80 space-y-2">
                <a
                  href={ASSETS.theVilleFlyer}
                  download="The-Ville-Apartments-Architectural-Render.jpg"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#062319] hover:bg-[#12402D] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow flex items-center justify-center gap-2 group"
                >
                  <Download className="w-4 h-4 text-[#C9A04A] group-hover:scale-110 transition-transform" />
                  <span>Download Image (509 KB)</span>
                </a>
                <button
                  onClick={() => setActiveFlyerModal({
                    title: "The Ville Apartments - Facade Render",
                    image: ASSETS.theVilleFlyer,
                    downloadName: "The-Ville-Apartments-Architectural-Render.jpg"
                  })}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-300 text-emerald-900 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <ZoomIn className="w-4 h-4 text-emerald-700" />
                  <span>Inspect High-Res Render</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT / FOUNDER SECTION (REAL FOUNDER PICTURE REPLACED) */}
      {/* ========================================================= */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EEF4EE]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Leadership & Vision</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#062319]">Meet the Founder</h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Dedicated to protecting your capital and creating verified real estate access across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-14 shadow-md border border-emerald-100">
            {/* Left: Authentic Executive Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-5">
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border-4 border-[#C9A04A] shadow-2xl bg-slate-900 group">
                <img
                  src={ASSETS.founder}
                  alt="Dr. Emmanuel Joseph Etukudoh - Founder of Land Investigate"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062319]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 inset-x-3 bg-[#062319]/90 backdrop-blur-md px-3 py-2 rounded-xl border border-[#C9A04A]/40 text-center">
                  <span className="text-xs text-[#C9A04A] font-bold block uppercase tracking-wider">
                    Executive Profile
                  </span>
                  <span className="text-[11px] text-emerald-100">Verified Leadership</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#062319]">
                  Dr. Emmanuel Joseph Etukudoh
                </h3>
                <p className="text-sm font-semibold text-[#C9A04A] uppercase tracking-wider">
                  Founder & Principal Lead, Land Investigate
                </p>
                <p className="text-xs text-slate-500">
                  Partner, Habs Luxury Real Estate Group
                </p>
              </div>
            </div>

            {/* Right: Bio & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Emmanuel is an accomplished entrepreneur, business strategist, and lifestyle professional with extensive international experience across finance, technology, international procurement, and real estate development.
                </p>
                <p>
                  He holds a degree in <strong>Management Engineering from Eastern Mediterranean University</strong> and a <strong>Master's in Supply Chain & Logistics Management from Rome Business School</strong>.
                </p>
                <p>
                  Through <strong>Land Investigate</strong>, he is building a trusted institutional bridge that enables Nigerians worldwide to acquire and co-invest in verified property with absolute peace of mind, rigorous due diligence, and documented legal ownership.
                </p>
              </div>

              <div className="pt-6 border-t border-emerald-100 space-y-4">
                <blockquote className="font-serif italic text-xl text-[#062319] font-semibold border-l-4 border-[#C9A04A] pl-4">
                  &ldquo;Your money. Your property. Our investigation.&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    ✓ Rigorous Land Due Diligence
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    ✓ Diaspora Investor Protection
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    ✓ Structured Fractional Models
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT & ENQUIRY SECTION */}
      {/* ========================================================= */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest">Connect Directly</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#062319]">
              Join the Community or Make an Enquiry
            </h2>
            <div className="w-20 h-1 bg-[#C9A04A] mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg">
              Reach out to request custom due diligence, reserve units in The Ville, or join our diaspora investment cohort.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Details & Direct WhatsApp */}
            <div className="lg:col-span-5 space-y-8 bg-[#062319] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between border border-[#164E36]">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">Direct Connection</h3>
                  <p className="text-emerald-100/80 text-sm leading-relaxed">
                    Connect instantly with Dr. Emmanuel and the verification team through our private WhatsApp channel.
                  </p>
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2 text-base"
                >
                  <span>Join on WhatsApp</span>
                  <ExternalLink className="w-5 h-5" />
                </a>

                <div className="pt-6 border-t border-emerald-900 space-y-4">
                  <h4 className="text-xs uppercase tracking-wider text-[#C9A04A] font-semibold">Contact Desks</h4>
                  
                  <div className="space-y-3.5 text-sm text-emerald-100/90">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>Admin: +234 810 247 4556</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>Advisory: +234 811 436 5460, +234 803 306 4372</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>China / Guangzhou Desk: +86 130 2207 2412</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#C9A04A] shrink-0" />
                      <span>info.habsluxury@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-emerald-900 text-xs text-emerald-300/70">
                In partnership with Habs Luxury Real Estate. Protecting property investments across Lagos and Nigeria.
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="lg:col-span-7 bg-[#F6FAF6] p-8 sm:p-10 rounded-3xl border border-emerald-200/80 shadow-sm">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#062319]">Enquiry Received Successfully!</h3>
                  <p className="text-slate-600 max-w-md text-sm leading-relaxed">
                    Thank you for reaching out, <strong className="text-[#062319]">{formData.fullName}</strong>. Our diligence desk has received your request regarding <strong className="text-[#062319]">{formData.interest}</strong> and will contact you directly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', country: '', interest: 'General enquiry', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#062319] text-white text-sm font-semibold hover:bg-[#12402D] transition-all"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-[#062319]">Send an Enquiry</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleFormChange}
                        placeholder="e.g. Dr. Kemi Adeleke"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 bg-white text-sm"
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
                        placeholder="kemi@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 bg-white text-sm"
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
                        placeholder="+44 7911 123456"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-sm"
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
                        placeholder="United Kingdom, USA, Canada, Nigeria..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">I'm Interested In *</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-sm font-medium"
                    >
                      <option value="The Ville">The Ville (Gbagada Serviced Apartments)</option>
                      <option value="Diaspora Gardens Estate">Diaspora Gardens Estate (Lekki Terraces)</option>
                      <option value="The Ville Brochure Download Flow">The Ville Brochure & Architectural Dossier</option>
                      <option value="Property verification">Independent Property & Land Verification</option>
                      <option value="General enquiry">General Diaspora Forum Enquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-700">Message / Property Target *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your property requirements, fractional investment appetite, or specific land parcel to investigate..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#062319] hover:bg-[#12402D] text-white font-bold text-center transition-all shadow-lg flex items-center justify-center gap-2"
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

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}
      <footer className="bg-[#062319] text-emerald-200/80 border-t border-[#C9A04A]/25 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C9A04A] flex items-center justify-center text-[#062319] font-bold">
                  <ShieldCheck className="w-5 h-5 text-[#062319]" />
                </div>
                <span className="font-serif text-lg font-bold text-white">Land Investigate</span>
              </div>
              <p className="text-xs text-emerald-100 italic">
                &ldquo;Land Investigate - Investigate Before You Invest.&rdquo;
              </p>
              <p className="text-xs text-[#C9A04A] font-semibold">
                In partnership with Habs Luxury Real Estate Group
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Navigation</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#home" className="hover:text-[#C9A04A] transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-[#C9A04A] transition-colors">Verification Services</a></li>
                <li><a href="#how-it-works" className="hover:text-[#C9A04A] transition-colors">5-Step Process</a></li>
                <li><a href="#opportunities" className="hover:text-[#C9A04A] transition-colors">Featured Opportunities</a></li>
                <li><a href="#downloads" className="hover:text-[#C9A04A] transition-colors">Investor Packs & PDF Brochure</a></li>
                <li><a href="#about" className="hover:text-[#C9A04A] transition-colors">About the Founder</a></li>
                <li><a href="#contact" className="hover:text-[#C9A04A] transition-colors">Contact & Enquiry</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Official Documents</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href={ASSETS.theVilleBrochurePdf}
                    download="The-Ville-Gbagada-Brochure.pdf"
                    className="text-[#C9A04A] hover:underline flex items-center gap-1.5 font-medium"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download The Ville Brochure (PDF)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={ASSETS.diasporaFlyer}
                    download="Diaspora-Gardens-Estate-Flyer.jpg"
                    className="text-emerald-200 hover:text-[#C9A04A] flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Diaspora Gardens Flyer</span>
                  </a>
                </li>
                <li className="pt-2 text-slate-400">
                  WhatsApp Cohort: Limited to 200 members
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Diaspora Reach</h4>
              <p className="text-xs text-emerald-200/70 leading-relaxed">
                Serving overseas investors across the UK, USA, Canada, Germany, UAE, and China seeking verified, high-yield land and apartments in Lagos and Abuja.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-emerald-900/80 space-y-4 text-xs text-emerald-300/60 leading-relaxed">
            <p>
              <strong className="text-emerald-200">Legal Disclaimer:</strong> Information and financial projections presented on this platform are for informational due diligence guidance only and do not constitute direct banking or securities solicitation. Real estate yields are subject to market conditions. Independent legal verification of title documents is recommended for every transaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-300/80">
              <p>&copy; {new Date().getFullYear()} Land Investigate. All rights reserved.</p>
              <p className="text-[#C9A04A] font-medium">Your Investment. Our Verification.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* INTERACTIVE BROCHURE PREVIEW & DOWNLOAD MODAL */}
      {/* ========================================================= */}
      {activeBrochureModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-[#062319] border-2 border-[#C9A04A] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-emerald-800 flex items-center justify-between bg-[#0B2F22]">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#C9A04A] text-[#062319]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">The Ville Serviced Apartments</h3>
                  <p className="text-xs text-[#C9A04A]">
                    Official Project Brochure & Architectural Design Package
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={ASSETS.theVilleBrochurePdf}
                  download="The-Ville-Gbagada-Brochure.pdf"
                  className="px-3.5 py-1.5 rounded-lg bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setActiveBrochureModal(false)}
                  className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Page Viewer Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex flex-col items-center justify-center bg-black/40">
              <div className="relative max-w-2xl w-full rounded-2xl overflow-hidden border border-emerald-700 shadow-2xl bg-slate-950">
                <img
                  src={ASSETS.theVillePages[currentBrochurePage - 1].img}
                  alt={ASSETS.theVillePages[currentBrochurePage - 1].title}
                  className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                />
              </div>
              <div className="text-center mt-3 text-xs text-emerald-200">
                <strong className="text-white">{ASSETS.theVillePages[currentBrochurePage - 1].title}</strong> (Page {currentBrochurePage} of 5)
              </div>
            </div>

            {/* Navigation & Thumbnail Strip */}
            <div className="p-4 bg-[#0B2F22] border-t border-emerald-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentBrochurePage(prev => Math.max(1, prev - 1))}
                  disabled={currentBrochurePage === 1}
                  className="p-2 rounded-lg bg-[#062319] text-white disabled:opacity-40 hover:bg-emerald-900 border border-emerald-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-white font-mono px-2">
                  {currentBrochurePage} / 5
                </span>
                <button
                  onClick={() => setCurrentBrochurePage(prev => Math.min(5, prev + 1))}
                  disabled={currentBrochurePage === 5}
                  className="p-2 rounded-lg bg-[#062319] text-white disabled:opacity-40 hover:bg-emerald-900 border border-emerald-700"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Thumbnails */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-xs sm:max-w-md">
                {ASSETS.theVillePages.map((p) => (
                  <button
                    key={p.page}
                    onClick={() => setCurrentBrochurePage(p.page)}
                    className={`h-12 w-9 rounded overflow-hidden border-2 transition-all shrink-0 ${
                      currentBrochurePage === p.page
                        ? 'border-[#C9A04A] scale-105'
                        : 'border-emerald-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={p.img} alt={`Thumb ${p.page}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={ASSETS.theVilleBrochurePdf}
                  download="The-Ville-Gbagada-Brochure.pdf"
                  className="px-4 py-2 rounded-xl bg-[#C9A04A] text-[#062319] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* FULL FLYER ZOOM / LIGHTBOX MODAL */}
      {/* ========================================================= */}
      {activeFlyerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-[#062319] border-2 border-[#C9A04A] rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="px-6 py-4 border-b border-emerald-800 flex items-center justify-between bg-[#0B2F22]">
              <h3 className="font-serif text-base sm:text-lg font-bold text-white truncate max-w-md">
                {activeFlyerModal.title}
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={activeFlyerModal.image}
                  download={activeFlyerModal.downloadName}
                  className="px-3.5 py-1.5 rounded-lg bg-[#C9A04A] hover:bg-[#b88f3b] text-[#062319] font-bold text-xs flex items-center gap-1.5 shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Image</span>
                </a>
                <button
                  onClick={() => setActiveFlyerModal(null)}
                  className="p-1.5 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
              <img
                src={activeFlyerModal.image}
                alt={activeFlyerModal.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
