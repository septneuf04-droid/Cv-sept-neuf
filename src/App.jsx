import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
  ArrowUpRight,
  Code2,
  Layers,
  Cpu,
  Sparkles,
  Server,
  Cloud,
  CheckCircle2,
  Calendar,
  Building,
  GraduationCap,
  ExternalLink,
  ChevronDown,
  Send,
  MapPin,
  Clock,
  Terminal,
  Activity,
  Gauge,
  Zap,
  ShieldCheck,
  BarChart3,
  Sliders,
  Globe,
  Radio,
  Check,
  Copy,
  Loader2
} from 'lucide-react';

// Import user photograph
import userPhoto from './assets/ma_photo.png';

gsap.registerPlugin(ScrollTrigger);

// ========================================================
// Bespoke Vector Logo for "Sept-Neuf" (79)
// Architectural Monogram: White Monolith "7" + Glowing Coral Blade "9"
// ========================================================
function SeptNeufLogo({ className = 'w-8 h-8' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`${className} shrink-0`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Sept Neuf 79"
    >
      <defs>
        <linearGradient id="snBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B1B26" />
          <stop offset="50%" stopColor="#101017" />
          <stop offset="100%" stopColor="#08080C" />
        </linearGradient>

        <linearGradient id="snCoralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7E63" />
          <stop offset="50%" stopColor="#E8634A" />
          <stop offset="100%" stopColor="#C64730" />
        </linearGradient>

        <linearGradient id="snStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8A65" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#3A3A4A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E8634A" stopOpacity="0.9" />
        </linearGradient>

        <filter id="snGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#E8634A" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Frame Container */}
      <rect
        x="6"
        y="6"
        width="108"
        height="108"
        rx="28"
        fill="url(#snBgGrad)"
        stroke="url(#snStrokeGrad)"
        strokeWidth="2.5"
      />

      {/* Subtle Micro-grid */}
      <line x1="6" y1="38" x2="114" y2="38" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="6" y1="82" x2="114" y2="82" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="38" y1="6" x2="38" y2="114" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="82" y1="6" x2="82" y2="114" stroke="#FFFFFF" strokeOpacity="0.04" strokeWidth="1" />

      {/* Central Luminescence */}
      <circle cx="60" cy="60" r="32" fill="#E8634A" opacity="0.14" />

      {/* GLYPH "7" (White Architectural Monolith) */}
      <path
        d="M 28 32 L 68 32 L 68 43 L 47 88 L 33 88 L 53 44 L 28 44 Z"
        fill="#FFFFFF"
      />

      {/* GLYPH "9" (Interlocking Coral Blade with Shadow Glow) */}
      <path
        d="M 72 32 C 84.5 32 93 40.5 93 52 C 93 63.5 85.5 71.5 74 72.5 L 74 88 L 61 88 L 61 70 C 55 65.5 51 58.5 51 51 C 51 39.5 59.5 32 72 32 Z M 72 43 C 66.8 43 62.5 47 62.5 52 C 62.5 57 66.8 61 72 61 C 77.2 61 81.5 57 81.5 52 C 81.5 47 77.2 43 72 43 Z"
        fill="url(#snCoralGrad)"
        filter="url(#snGlow)"
      />

      {/* Precision Corner Accents */}
      <circle cx="22" cy="22" r="2.5" fill="#E8634A" opacity="0.9" />
      <circle cx="98" cy="98" r="2.5" fill="#FF7E63" opacity="0.9" />
      <circle cx="98" cy="22" r="2" fill="#FFFFFF" opacity="0.3" />
      <circle cx="22" cy="98" r="2" fill="#FFFFFF" opacity="0.3" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // ID du formulaire Formspree officiel
  const [formspreeId, setFormspreeId] = useState('xyekbkkw'); 
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('gauges'); // 'gauges' | 'radar' | 'system'
  const [selectedRadarPoint, setSelectedRadarPoint] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  const heroRef = useRef(null);
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);

  // Close mobile menu on resize to desktop & lock scroll when open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  // Live Kolwezi Time (CAT / UTC+2)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Africa/Lubumbashi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
      setCurrentTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Download CV Handler - Generates downloadable comprehensive CV
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvContent = `================================================================================
SEPT NEUF — DÉVELOPPEUR SENIOR & ARCHITECTE LOGICIEL
================================================================================
Email: septneuf04@gmail.com | Kolwezi (Gouvernorat), RDC & Remote
Portfolio: https://septneuf.dev | Expérience: 7+ Années

PROFIL PROFESSIONNEL :
--------------------------------------------------------------------------------
Ingénieur passionné avec 7 ans d'expérience dans la conception d'architectures 
logicielles modernes et d'interfaces web immersives. J'aide les entreprises 
ambitieuses à transformer des visions complexes en produits performants et élégants.

EXPÉRIENCES CLÉS :
--------------------------------------------------------------------------------
1. Lead Frontend & Architecte @ TechCorp (2022 - Présent)
   - Direction technique de la plateforme web principale (Next.js, TypeScript).
   - Management technique d'une équipe de 6 développeurs.
   - Amélioration de 40% des Core Web Vitals et standardisation du Design System.

2. Fullstack Engineer Senior @ DevStudio (2019 - 2022)
   - Conception d'architectures orientées microservices et d'APIs haute performance.
   - Développement d'applications web temps réel et pipelines CI/CD automatisés.

3. Développeur Web Frontend @ StartLab (2017 - 2019)
   - Développement d'applications React dynamiques et intégration de services REST/GraphQL.
   - Création de composants UI avancés avec animations fluides GSAP.

TABLEAU DES COMPÉTENCES CLÉS :
--------------------------------------------------------------------------------
- React & Next.js : 98% (SSR, Server Components, Architecture Modulaire)
- TypeScript & Clean Code : 95% (Typage strict, Design Patterns)
- GSAP & UI Motion : 92% (ScrollTrigger, Transitions 60 FPS)
- Node.js & Microservices : 90% (APIs REST/GraphQL, PostgreSQL, Redis)
- Architecture Cloud & DevOps : 88% (AWS, Docker, CI/CD, Edge)

FORMATION & CERTIFICATIONS :
--------------------------------------------------------------------------------
- Master en Informatique & Architecture Logicielle (2017) — Université Paris-Saclay
- Licence en Sciences Informatiques & Mathématiques (2015) — Université de Paris
- AWS Certified Solutions Architect & Professional Scrum Master (PSM I)
================================================================================`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Sept_Neuf_CV_Architecte_Developpeur.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('septneuf04@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Scroll Detection for floating navbar morphing
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations with GSAP Context for full cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO ANIMATIONS (Entrance Stagger)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-badge-elem', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.1,
      })
      .from('.hero-name-line', {
        opacity: 0,
        y: 35,
        duration: 0.9,
      }, '-=0.6')
      .from('.hero-title', {
        opacity: 0,
        y: 25,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-telemetry-hud', {
        opacity: 0,
        y: 20,
        duration: 0.7,
      }, '-=0.4')
      .from('.hero-cta-group', {
        opacity: 0,
        y: 25,
        duration: 0.7,
      }, '-=0.4')
      .from('.hero-photo-container', {
        opacity: 0,
        x: 40,
        duration: 1,
      }, '-=0.8')
      .from('.hero-satellite-badge', {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.6,
      }, '-=0.6');

      // 2. ABOUT SECTION SCROLL ANIMATION
      gsap.from('.about-title-reveal', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 85%',
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.about-content-reveal', {
        scrollTrigger: {
          trigger: '#about',
          start: 'top 85%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // 3. EXPERIENCE TIMELINE ANIMATIONS
      const experienceCards = gsap.utils.toArray('.timeline-card');
      experienceCards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          },
          opacity: 0,
          x: isEven ? -40 : 40,
          duration: 0.8,
          ease: 'power3.out',
        });
      });

      // 4. EDUCATION CARDS
      gsap.from('.education-card', {
        scrollTrigger: {
          trigger: '#education',
          start: 'top 88%',
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
      });

      // 5. CONTACT LINKS
      gsap.from('.contact-item', {
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 88%',
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
      });
    });

    return () => ctx.revert();
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    // Formspree endpoint : utilise formspreeId ou fallback mailto si aucun ID renseigné
    const endpoint = formspreeId && formspreeId.trim()
      ? (formspreeId.startsWith('http') ? formspreeId.trim() : `https://formspree.io/f/${formspreeId.trim()}`)
      : null;

    if (!endpoint) {
      // Si aucun ID Formspree n'est encore configuré, on redirige vers mailto pré-rempli
      const mailtoUrl = `mailto:septneuf04@gmail.com?subject=${encodeURIComponent(
        `Nouveau contact portfolio : ${formData.name}`
      )}&body=${encodeURIComponent(
        `Nom / Entreprise : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormSent(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setFormError(data.errors.map(err => err.message).join(', '));
        } else {
          setFormError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
        }
      }
    } catch (err) {
      setFormError("Erreur de connexion avec le serveur. Vérifiez votre réseau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Skills Data for Dashboard
  const skillsData = [
    {
      id: 'react',
      name: 'React 19 & Next.js',
      category: 'Frontend & Architecture',
      percent: 98,
      level: 'Lead / Expert',
      icon: Code2,
      desc: 'Server Components, SSR/SSG, architectures modulaires, micro-frontends et streaming UI.',
      stack: ['Next.js 15', 'React 19', 'Zustand', 'Turborepo'],
      metrics: { velocity: '+45%', latency: '0.8s LCP', testCov: '96%' },
    },
    {
      id: 'typescript',
      name: 'TypeScript & Clean Code',
      category: 'Langage & Robustesse',
      percent: 95,
      level: 'Architecte',
      icon: Layers,
      desc: 'Systèmes de types stricts, architecture hexagonale, DDD et zéro régression en production.',
      stack: ['Strict Typing', 'Generics', 'Zod', 'Clean Arch'],
      metrics: { bugs: '-65%', readability: '99%', testCov: '98%' },
    },
    {
      id: 'motion',
      name: 'GSAP 3 & UI Motion',
      category: 'Expérience & Rendu',
      percent: 92,
      level: 'Senior Designer',
      icon: Sparkles,
      desc: 'Animations cinématographiques à 60 FPS, orchestration ScrollTrigger et micro-interactions tactiles.',
      stack: ['ScrollTrigger', 'Flip', 'SVG Motion', 'Canvas'],
      metrics: { fps: '60 FPS', engagement: '+38%', weight: '<25kb' },
    },
    {
      id: 'node',
      name: 'Node.js & Microservices',
      category: 'Backend & APIs',
      percent: 90,
      level: 'Senior Fullstack',
      icon: Server,
      desc: 'APIs haute cadence REST & GraphQL, queues asynchrones, caching Redis et bases PostgreSQL.',
      stack: ['Fastify', 'GraphQL', 'PostgreSQL', 'Redis'],
      metrics: { rps: '12k req/s', uptime: '99.99%', latency: '12ms' },
    },
    {
      id: 'cloud',
      name: 'Architecture Cloud & DevOps',
      category: 'Infrastructure & Edge',
      percent: 88,
      level: 'DevOps / Lead',
      icon: Cloud,
      desc: 'Conteneurisation Docker, pipelines CI/CD automatisés, topologies AWS et déploiements Edge.',
      stack: ['AWS ECS/S3', 'Docker', 'GitHub Actions', 'Vercel Edge'],
      metrics: { deploy: '3.5 min', rollback: '<30s', security: 'A+' },
    },
  ];

  // Radar points calculation for 5 skills
  const radarPoints = [
    { label: 'React / Next', percent: 98, angle: -90, x: 200 + 150 * 0.98 * Math.cos(-Math.PI / 2), y: 200 + 150 * 0.98 * Math.sin(-Math.PI / 2) },
    { label: 'TypeScript', percent: 95, angle: -18, x: 200 + 150 * 0.95 * Math.cos(-Math.PI / 2 + (2 * Math.PI / 5)), y: 200 + 150 * 0.95 * Math.sin(-Math.PI / 2 + (2 * Math.PI / 5)) },
    { label: 'UI Motion (GSAP)', percent: 92, angle: 54, x: 200 + 150 * 0.92 * Math.cos(-Math.PI / 2 + (4 * Math.PI / 5)), y: 200 + 150 * 0.92 * Math.sin(-Math.PI / 2 + (4 * Math.PI / 5)) },
    { label: 'Cloud & DevOps', percent: 88, angle: 126, x: 200 + 150 * 0.88 * Math.cos(-Math.PI / 2 + (6 * Math.PI / 5)), y: 200 + 150 * 0.88 * Math.sin(-Math.PI / 2 + (6 * Math.PI / 5)) },
    { label: 'Node & APIs', percent: 90, angle: 198, x: 200 + 150 * 0.90 * Math.cos(-Math.PI / 2 + (8 * Math.PI / 5)), y: 200 + 150 * 0.90 * Math.sin(-Math.PI / 2 + (8 * Math.PI / 5)) },
  ];
  const radarPolygonPath = radarPoints.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  return (
    <div className="relative min-h-screen bg-[#0F0F12] text-[#EDEDF0] selection:bg-corail selection:text-white font-sans overflow-x-hidden">
      
      {/* ======================================================== */}
      {/* A. NAVBAR PLEINE LARGEUR — THÈME SOMBRE VELOUTÉ           */}
      {/* ======================================================== */}
      <header
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 rounded-none transition-all duration-300 ${
          scrolled
            ? 'bg-[#111115]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl text-white py-3'
            : 'bg-[#111115]/85 backdrop-blur-xl border-b border-white/5 shadow-lg text-white py-4'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Left Block: Photo Avatar + Sceau Logo 79 & Marque Typographique */}
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 sm:gap-3.5 group link-lift focus:outline-none"
          >
            {/* Bespoke 79 Monogram Logo Mark Standalone */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#0F0F14] border border-white/10 group-hover:border-corail/70 shadow-lg shadow-black/40 group-hover:shadow-coral p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <SeptNeufLogo className="w-full h-full" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#111115] animate-pulse" />
            </div>

            {/* Bold Bespoke Typographic Brand Lockup */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <div className="flex items-baseline tracking-tight">
                  <span className="font-display font-black text-base sm:text-lg text-white group-hover:text-gray-100 transition-colors">
                    SEPT
                  </span>
                  <span className="font-display font-black text-base sm:text-lg bg-gradient-to-r from-corail-light via-corail to-[#FF7E63] bg-clip-text text-transparent ml-1">
                    NEUF
                  </span>
                </div>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-corail/15 border border-corail/30 text-corail hidden sm:inline-block tracking-wider shadow-xs">
                  #79
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="uppercase tracking-wider text-gray-300 font-medium">Architecte</span>
                <span className="text-gray-600 hidden xs:inline">•</span>
                <span className="text-gray-400 hidden sm:inline">Lead Tech</span>
              </div>
            </div>
          </a>

          {/* Center Block: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-xs font-medium font-sans">
            <a
              href="#about"
              className="px-3 py-1.5 rounded-lg link-lift text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              À propos
            </a>
            <a
              href="#experience"
              className="px-3 py-1.5 rounded-lg link-lift text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Expérience
            </a>
            <a
              href="#skills"
              className="px-3 py-1.5 rounded-lg link-lift flex items-center gap-1.5 font-semibold text-corail-light bg-corail/15 hover:bg-corail/25 transition-all"
            >
              <Activity className="w-3.5 h-3.5 animate-pulse text-corail" />
              <span>Tableau de bord</span>
            </a>
            <a
              href="#education"
              className="px-3 py-1.5 rounded-lg link-lift text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Formation
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 rounded-lg link-lift text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Contact
            </a>
          </div>

          {/* Right Block: Live Clock & Quick Action + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Live Kolwezi Time Indicator */}
            {currentTime && (
              <div className="hidden xl:flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-lg border bg-white/5 border-white/10 text-gray-300">
                <Clock className="w-3.5 h-3.5 text-corail" />
                <span>Kolwezi {currentTime}</span>
              </div>
            )}

            {/* Direct CTA CV */}
            <button
              onClick={handleDownloadCV}
              className="btn-magnetic flex items-center gap-1.5 sm:gap-2 bg-corail hover:bg-corail-dark text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-coral cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Télécharger</span>
              <span>CV</span>
            </button>

            {/* Mobile Pro Animated Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative z-50 w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-corail/40 active:scale-95 flex flex-col items-center justify-center gap-1.5 transition-all focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu de navigation'}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen
                    ? 'rotate-45 translate-y-2 bg-corail'
                    : 'bg-white'
                }`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  mobileMenuOpen
                    ? 'opacity-0 scale-x-0'
                    : 'bg-white'
                }`}
              />
              <span
                className={`w-5 h-0.5 rounded-full transition-all duration-300 ease-out origin-center ${
                  mobileMenuOpen
                    ? '-rotate-45 -translate-y-2 bg-corail'
                    : 'bg-white'
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ==================================================== */}
      {/* MOBILE MENU DRAWER — PLEIN ÉCRAN, PRO & INTERACTIF   */}
      {/* Placé hors de <header> pour éviter le piège CSS      */}
      {/* backdrop-filter / containing-block sur 'fixed'       */}
      {/* ==================================================== */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden fixed inset-0 z-40 bg-[#0B0B0E]/98 backdrop-blur-3xl pt-24 pb-8 px-5 sm:px-8 flex flex-col justify-between overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-4 pointer-events-none invisible'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation mobile"
      >
        {/* Navigation Items with Numbers */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-2 mb-3 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#0F0F14] border border-corail/50 shadow-sm p-0.5 flex items-center justify-center">
                <SeptNeufLogo className="w-full h-full" />
              </div>
              <div className="flex items-baseline">
                <span className="font-display font-black text-base text-white">SEPT</span>
                <span className="font-display font-black text-base bg-gradient-to-r from-corail-light to-corail bg-clip-text text-transparent ml-1">NEUF</span>
                <span className="ml-1.5 font-mono text-[9px] font-bold px-1.5 py-0.2 rounded bg-corail/20 text-corail">#79</span>
              </div>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
              Menu Pro
            </span>
          </div>

          {[
            { num: '00', label: 'Accueil & Présentation', href: '#hero' },
            { num: '01', label: 'À propos & Manifeste', href: '#about' },
            { num: '02', label: 'Parcours & Expériences', href: '#experience' },
            { num: '03', label: 'Tableau de bord technique', href: '#skills', isSpecial: true },
            { num: '04', label: 'Cursus & Formation', href: '#education' },
            { num: '05', label: 'Contact & Collaboration', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all active:scale-[0.98] ${
                item.isSpecial
                  ? 'bg-corail/15 border-corail/40 text-white shadow-lg shadow-corail/10'
                  : 'bg-white/5 border-white/5 hover:border-corail/30 text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`font-mono text-xs font-semibold ${item.isSpecial ? 'text-corail' : 'text-gray-500 group-hover:text-corail'}`}>
                  {item.num}
                </span>
                <span className="font-sans font-bold text-base sm:text-lg">
                  {item.label}
                </span>
              </div>
              {item.isSpecial ? (
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-corail text-white text-[10px] font-mono font-bold">
                  <Activity className="w-3 h-3 animate-pulse" /> LIVE
                </span>
              ) : (
                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-corail group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              )}
            </a>
          ))}
        </div>

        {/* Bottom Quick Card on Mobile */}
        <div className="pt-6 border-t border-white/10 space-y-3.5 mt-4">
          {/* Live Kolwezi Status */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 font-mono text-xs">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-corail" />
              <span>Kolwezi (Gouvernorat), RDC</span>
            </div>
            {currentTime && (
              <span className="text-corail font-bold">{currentTime} CAT</span>
            )}
          </div>

          {/* Email link */}
          <a
            href="mailto:septneuf04@gmail.com"
            className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/5 text-xs text-gray-300 hover:text-white border border-white/5 font-mono"
          >
            <Mail className="w-3.5 h-3.5 text-corail" />
            <span>septneuf04@gmail.com</span>
          </a>

          {/* Direct CTA Download */}
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleDownloadCV(e);
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-corail hover:bg-corail-dark text-white font-bold text-sm shadow-coral transition-colors cursor-pointer active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger mon CV (PDF)</span>
          </button>
        </div>
      </div>


      {/* ======================================================== */}
      {/* B. SECTION HERO — MISE EN PAGE ASYMÉTRIQUE & INTÉGRATION PHOTO */}
      {/* ======================================================== */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col justify-center bg-encre text-white px-4 sm:px-8 lg:px-14 pt-24 sm:pt-28 lg:pt-24 pb-12 sm:pb-16 overflow-hidden"
      >
        {/* Cinematic Architectural Background Texture */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-15 filter grayscale contrast-125 mix-blend-luminosity scale-105 pointer-events-none"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop)',
          }}
        />

        {/* Ambient Radial Mesh & Lighting Gradients */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-encre/90 via-encre/85 to-encre pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] rounded-full bg-corail/20 blur-[150px] pointer-events-none" />
        <div className="absolute -top-32 left-10 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-encre to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ==================================================== */}
          {/* Left Column (lg:col-span-7): Typographie & Contenu  */}
          {/* ==================================================== */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Status Beacon Pill */}
            <div className="hero-badge-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 sm:mb-6 shadow-lg max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-gray-200 truncate">
                Disponible pour missions d'architecture & lead tech
              </span>
            </div>

            {/* Candidate Name — Police SYNE Spectaculaire (font-display) */}
            <h1 className="hero-name-line font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[6.2rem] tracking-tight text-white mb-2 uppercase leading-[0.9] drop-shadow-2xl flex flex-wrap items-baseline gap-x-3 sm:gap-x-4">
              <span className="bg-gradient-to-br from-white via-white to-gray-300 bg-clip-text text-transparent">
                Sept
              </span>
              <span className="bg-gradient-to-r from-corail-light via-corail to-[#FF7E63] bg-clip-text text-transparent">
                Neuf
              </span>
              <span className="font-mono text-xs sm:text-sm lg:text-base px-2.5 py-1 rounded-xl bg-corail/15 border border-corail/30 text-corail font-bold normal-case tracking-wider self-center align-middle shadow-coral">
                #79
              </span>
            </h1>

            {/* Professional Title — Cormorant Garamond Italique */}
            <p className="hero-title font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-corail-light font-normal mb-4 sm:mb-5 leading-relaxed">
              Développeur Senior & Architecte Logiciel
            </p>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl mb-6 sm:mb-7 font-sans font-light leading-relaxed">
              Bâtir des architectures logicielles intègres, scalables et des interfaces web d'une fluidité cinématographique. Basé à Kolwezi, RDC & ouvert aux missions d'envergure.
            </p>

            {/* HUD Telemetry Quick Bar */}
            <div className="hero-telemetry-hud grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-2xl p-2.5 sm:p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8">
              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-start">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400">Expérience</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white flex items-center gap-1 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-corail" /> 07+ Ans
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-start">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400">Projets Livrés</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white flex items-center gap-1 mt-0.5">
                  <Code2 className="w-3.5 h-3.5 text-corail" /> 45+
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-start">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400">Architecture</span>
                <span className="font-mono text-sm sm:text-base font-bold text-emerald-400 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Grade A+
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/5 flex flex-col items-start">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-gray-400">Localisation</span>
                <span className="font-mono text-sm sm:text-base font-bold text-white flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-corail" /> Kolwezi, RDC
                </span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="hero-cta-group flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full">
              <button
                onClick={handleDownloadCV}
                className="btn-magnetic flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-corail hover:bg-corail-dark text-white font-semibold text-xs sm:text-sm shadow-coral transition-colors cursor-pointer text-center"
              >
                <Download className="w-4 h-4" />
                <span>Télécharger mon CV</span>
              </button>

              <a
                href="#skills"
                className="btn-magnetic flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-colors text-center"
              >
                <Activity className="w-4 h-4 text-corail" />
                <span>Tableau de Bord</span>
              </a>

              <a
                href="#contact"
                className="btn-magnetic flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-gray-300 hover:text-white font-medium text-xs sm:text-sm border border-white/10 transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-corail" />
                <span>Me contacter</span>
              </a>
            </div>
          </div>

          {/* ==================================================== */}
          {/* Right Column (lg:col-span-5): Photo Agrandie & Intégrée */}
          {/* VISAGE 100% LIBÉRÉ (Aucun élément superposé sur le visage) */}
          {/* ==================================================== */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex flex-col items-center lg:items-end justify-center w-full">
            
            {/* Ambient Behind-Portrait Glow Layer */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-corail/25 via-corail/5 to-transparent blur-3xl pointer-events-none" />

            {/* Enlarged Photo Container — VISAGE 100% LIBÉRÉ & CADRÉ AVEC ÉLÉGANCE */}
            <div className="hero-photo-container relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] h-[360px] sm:h-[460px] lg:h-[580px] xl:h-[620px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group bg-[#111115]">
              
              {/* The Photo Image — Visage net, lumineux et complètement dégagé */}
              <img
                src={userPhoto}
                alt="Sept Neuf — Développeur Senior & Architecte Logiciel"
                className="w-full h-full object-cover object-[center_10%] scale-100 filter contrast-[1.06] brightness-105 group-hover:scale-105 transition-transform duration-700"
              />

              {/* Subtil fondu progressif UNIQUEMENT au bas du buste (laisse le visage et la tête 100% dégagés) */}
              <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-[#0F0F12] via-[#0F0F12]/60 to-transparent pointer-events-none" />
            </div>

            {/* Bandeau d'information placé EN DESSOUS de la photo (libère totalement le visage) */}
            <div className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[460px] mt-3.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between text-xs font-mono text-gray-300 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white">Kolwezi, RDC</span>
              </div>
              <span className="text-corail font-semibold text-[11px]">10.72° S, 25.47° E • CAT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* C. À PROPOS — "Le Manifeste Personnel"                    */}
      {/* ======================================================== */}
      <section
        id="about"
        ref={aboutRef}
        className="relative py-20 md:py-24 px-6 md:px-12 lg:px-20 bg-[#141419] border-t border-white/5 text-[#EDEDF0]"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Column Left: Titre dramatique en Serif Italique */}
          <div className="lg:col-span-5 about-title-reveal">
            <div className="sticky top-28">
              <span className="font-mono text-xs uppercase tracking-widest text-corail font-semibold mb-3 block">
                01 / Manifeste
              </span>
              <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight tracking-tight mb-6">
                L'art de la structure, la puissance de l'exécution.
              </h2>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Chaque système logiciel est un édifice. Sans fondations solides,
                la beauté visuelle s'effondre. Mon approche fusionne rigueur
                architecturale et sensibilité produit.
              </p>
              
              <div className="p-5 rounded-[2rem] bg-[#1A1A22] border border-white/10 shadow-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-corail/15 flex items-center justify-center text-corail shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Vision & Craftsmanship</h3>
                  <p className="text-xs text-gray-400">Zéro dette superflue, 100% impact durable</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle Vertical Coral Line for Desktop */}
          <div className="hidden lg:block lg:col-span-1 h-full min-h-[380px] relative">
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-corail/30 rounded-full" />
          </div>

          {/* Column Right: User Biography & Core Principles */}
          <div className="lg:col-span-6 space-y-6 about-content-reveal">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2 block">
                Biographie
              </span>
              <p className="text-white text-xl md:text-2xl font-normal leading-relaxed font-sans mb-4">
                Ingénieur passionné avec <span className="font-semibold text-corail">7 ans d'expérience</span> dans la conception d'architectures logicielles modernes et d'interfaces web immersives. J'aide les entreprises ambitieuses à transformer des visions complexes en produits performants et élégants.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                Spécialisé dans l'écosystème TypeScript, React, Next.js et les architectures cloud distribuées, j'interviens de la définition des modèles de données jusqu'à l'orchestration des micro-interactions frontend. Pour moi, le code de qualité est une forme d'artisanat : lisible, maintenable, testé et conçu pour traverser les montées en charge.
              </p>
            </div>

            {/* Architectural Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-[2rem] bg-[#1A1A22] border border-white/10 shadow-2xl hover:border-corail/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center mb-3">
                  <Layers className="w-4 h-4 text-corail" />
                </div>
                <h4 className="font-bold text-white text-base mb-1">Architecture Modulaire</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Conception découplée, Domain-Driven Design et scalabilité horizontale sans friction.
                </p>
              </div>

              <div className="p-5 rounded-[2rem] bg-[#1A1A22] border border-white/10 shadow-2xl hover:border-corail/40 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center mb-3">
                  <Cpu className="w-4 h-4 text-corail" />
                </div>
                <h4 className="font-bold text-white text-base mb-1">Performance Haute-Fidélité</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Optimisation pointue des Core Web Vitals, SSR intelligent et fluidité 60 FPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* D. EXPÉRIENCE — "La Timeline Vivante"                      */}
      {/* ======================================================== */}
      <section
        id="experience"
        ref={experienceRef}
        className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 bg-[#0F0F12] relative overflow-hidden border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-corail font-semibold mb-3 block">
              02 / Parcours Professionnel
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              La Timeline Vivante
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              Une trajectoire rythmée par l'exigence technique et le leadership de projets d'envergure.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Line on Desktop / Left on Mobile */}
            <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-corail/30 rounded-full" />

            {/* Experience Items */}
            <div className="space-y-10 sm:space-y-12">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#0F0F12] border-4 border-corail z-10 shadow-[0_0_15px_rgba(232,99,74,0.4)]" />

                <div className="timeline-card w-full md:w-1/2 pl-9 sm:pl-14 md:pl-0 md:pr-12 md:text-right">
                  <div className="card-experience p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#16161E] border border-white/10 shadow-xl hover:shadow-2xl hover:border-corail/40 transition-all">
                    <span className="font-mono text-xs font-semibold text-corail uppercase tracking-wider block mb-2">
                      2022 — Présent
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white mb-1">
                      Lead Frontend & Architecte
                    </h3>
                    <p className="text-sm font-medium text-gray-300 mb-3 flex items-center md:justify-end gap-1.5">
                      <Building className="w-3.5 h-3.5 text-corail" />
                      TechCorp
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      Direction technique de la plateforme web principale. Pilotage d'une équipe de 6 développeurs, refonte intégrale vers Next.js et TypeScript avec un gain de 40% sur les temps de chargement et l'instauration d'un Design System unifié.
                    </p>
                    <div className="flex flex-wrap md:justify-end gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        React / Next.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        Design Systems
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        Performance
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-1/2 pl-12" />
              </div>

              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#0F0F12] border-4 border-corail z-10 shadow-[0_0_15px_rgba(232,99,74,0.4)]" />
                <div className="hidden md:block w-1/2 pr-12" />

                <div className="timeline-card w-full md:w-1/2 pl-9 sm:pl-14 md:pl-12 text-left">
                  <div className="card-experience p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#16161E] border border-white/10 shadow-xl hover:shadow-2xl hover:border-corail/40 transition-all">
                    <span className="font-mono text-xs font-semibold text-corail uppercase tracking-wider block mb-2">
                      2019 — 2022
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white mb-1">
                      Fullstack Engineer Senior
                    </h3>
                    <p className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-corail" />
                      DevStudio
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      Conception et développement de microservices scalables pour des clients fintech & e-commerce à forte charge. Création d'APIs REST/GraphQL sécurisées et mise en place d'une infrastructure conteneurisée CI/CD sous Docker & AWS.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        Node.js
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        GraphQL
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        Docker / AWS
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        Microservices
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center">
                <div className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#0F0F12] border-4 border-corail z-10 shadow-[0_0_15px_rgba(232,99,74,0.4)]" />

                <div className="timeline-card w-full md:w-1/2 pl-9 sm:pl-14 md:pl-0 md:pr-12 md:text-right">
                  <div className="card-experience p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-[#16161E] border border-white/10 shadow-xl hover:shadow-2xl hover:border-corail/40 transition-all">
                    <span className="font-mono text-xs font-semibold text-corail uppercase tracking-wider block mb-2">
                      2017 — 2019
                    </span>
                    <h3 className="font-sans font-bold text-lg sm:text-xl md:text-2xl text-white mb-1">
                      Développeur Web Frontend
                    </h3>
                    <p className="text-sm font-medium text-gray-300 mb-3 flex items-center md:justify-end gap-1.5">
                      <Building className="w-3.5 h-3.5 text-corail" />
                      StartLab
                    </p>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                      Développement d'interfaces web dynamiques en React, intégration de maquettes au pixel près et animation d'expériences interactives avec GSAP. Collaboration directe avec les fondateurs et designers pour livrer des MVP percutants.
                    </p>
                    <div className="flex flex-wrap md:justify-end gap-1.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        React
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        JavaScript ES6+
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        GSAP Animations
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#20202B] text-gray-200 border border-white/10">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-1/2 pl-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* E. LE VÉRITABLE TABLEAU DE BORD TECHNIQUE (100% VISIBLE) */}
      {/* ======================================================== */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 bg-[#131317] relative border-t border-white/5"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-corail/15 text-corail border border-corail/25 mb-3">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                03 / Tableau de Bord Technique
              </span>
            </div>
            <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
              Console d'Ingénierie & Métriques
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3">
              Surveillance télémétrique en temps réel de la stack technique, de la robustesse architecturale et des indices de performance.
            </p>
          </div>

          {/* ==================================================== */}
          {/* COCKPIT DASHBOARD CONTAINER — ÉLÉGANT & AUDACIEUX   */}
          {/* ==================================================== */}
          <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-[#181820] border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Top Bar Status Deck */}
            <div className="px-4 sm:px-6 py-4 bg-[#101014] text-white flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="h-4 w-[1px] bg-white/20 mx-1 hidden sm:block" />
                <span className="font-mono text-xs font-semibold text-gray-300 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-corail" />
                  <span className="truncate">DASHBOARD::CORE_ENGINE_v4.2</span>
                </span>
              </div>

              {/* Status Indicator & Live Metrics */}
              <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  SYSTEM OPTIMAL
                </span>
                <span className="hidden sm:inline text-gray-500">|</span>
                <span className="hidden sm:inline text-gray-300">UPTIME: 99.99%</span>
                <span className="hidden md:inline text-gray-500">|</span>
                <span className="hidden md:inline text-corail">LATENCY: 12ms</span>
              </div>
            </div>

            {/* Dashboard Navigation Tabs */}
            <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-3 bg-[#14141A] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 sm:gap-2 p-1 rounded-2xl bg-[#1A1A24] border border-white/10 overflow-x-auto max-w-full">
                <button
                  onClick={() => setActiveTab('gauges')}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'gauges'
                      ? 'bg-corail text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Gauge className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>Jauges & Compétences</span>
                </button>

                <button
                  onClick={() => setActiveTab('radar')}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'radar'
                      ? 'bg-corail text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Radio className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>Radar d'Expertise</span>
                </button>

                <button
                  onClick={() => setActiveTab('system')}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 sm:gap-2 whitespace-nowrap cursor-pointer ${
                    activeTab === 'system'
                      ? 'bg-corail text-white shadow-md'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <BarChart3 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  <span>Moniteur & Health</span>
                </button>
              </div>

              {/* Quick Summary Pill */}
              <div className="font-mono text-xs text-gray-400 flex items-center gap-3">
                <span>Score Global : <strong className="text-corail font-bold">96.8%</strong></span>
                <span className="hidden sm:inline bg-corail/15 text-corail border border-corail/30 px-2.5 py-0.5 rounded-full font-semibold">
                  TOP 2% SENIOR
                </span>
              </div>
            </div>

            {/* ================================================== */}
            {/* TAB CONTENT 1: GAUGES & SKILLS GRID (VISIBLE PAR DÉFAUT) */}
            {/* ================================================== */}
            {activeTab === 'gauges' && (
              <div className="p-6 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillsData.map((skill, index) => {
                    const IconComp = skill.icon;
                    const circumference = 2 * Math.PI * 32; // r=32 -> ~201
                    const strokeOffset = circumference - (circumference * skill.percent) / 100;

                    return (
                      <div
                        key={skill.id}
                        className={`p-6 rounded-[2rem] bg-[#1C1C26] border border-white/10 shadow-lg hover:shadow-xl hover:border-corail/40 transition-all flex flex-col justify-between ${
                          index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                        }`}
                      >
                        <div>
                          {/* Top Row: Icon + Circular Gauge */}
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-12 h-12 rounded-2xl bg-[#121217] border border-white/10 text-white flex items-center justify-center shadow-sm">
                              <IconComp className="w-6 h-6 text-corail" />
                            </div>

                            {/* Crisp SVG Circular Gauge */}
                            <div className="relative w-16 h-16 flex items-center justify-center">
                              <svg className="w-16 h-16 -rotate-90">
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="26"
                                  className="stroke-white/10"
                                  strokeWidth="5"
                                  fill="none"
                                />
                                <circle
                                  cx="32"
                                  cy="32"
                                  r="26"
                                  className="stroke-corail transition-all duration-1000 ease-out"
                                  strokeWidth="5"
                                  strokeDasharray={2 * Math.PI * 26}
                                  strokeDashoffset={2 * Math.PI * 26 - (2 * Math.PI * 26 * skill.percent) / 100}
                                  strokeLinecap="round"
                                  fill="none"
                                />
                              </svg>
                              <span className="absolute font-mono font-bold text-xs text-white">
                                {skill.percent}%
                              </span>
                            </div>
                          </div>

                          {/* Skill Header & Category */}
                          <div className="mb-3">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h3 className="font-bold text-lg text-white">
                                {skill.name}
                              </h3>
                              <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-corail/15 text-corail border border-corail/30 font-semibold shrink-0">
                                {skill.level}
                              </span>
                            </div>
                            <span className="font-mono text-[11px] text-gray-400 block">
                              {skill.category}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-xs text-gray-300 leading-relaxed mb-4">
                            {skill.desc}
                          </p>
                        </div>

                        <div>
                          {/* Stack Tags */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {skill.stack.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-[#252535] text-gray-200 border border-white/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Micro Telemetry Metrics */}
                          <div className="pt-3 border-t border-white/10 grid grid-cols-3 gap-1.5 font-mono text-[10px] text-center">
                            {Object.entries(skill.metrics).map(([k, v]) => (
                              <div key={k} className="p-1.5 rounded bg-[#131319] border border-white/5">
                                <span className="block text-white font-bold">{v}</span>
                                <span className="text-[9px] uppercase text-gray-400">{k}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ================================================== */}
            {/* TAB CONTENT 2: RADAR D'EXPERTISE INTERACTIF        */}
            {/* ================================================== */}
            {activeTab === 'radar' && (
              <div className="p-6 sm:p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Interactive Radar SVG */}
                  <div className="lg:col-span-7 flex flex-col items-center justify-center bg-[#111116] border border-white/10 rounded-[2.5rem] p-6 sm:p-8 text-white relative shadow-xl overflow-hidden">
                    <div className="absolute top-4 left-6 flex items-center gap-2">
                      <Radio className="w-4 h-4 text-corail animate-pulse" />
                      <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
                        Polygone de Répartition
                      </span>
                    </div>

                    <div className="w-full max-w-[400px] aspect-square relative my-4">
                      <svg viewBox="0 0 400 400" className="w-full h-full">
                        {/* Concentric Radar Polygons (20%, 40%, 60%, 80%, 100%) */}
                        {[0.2, 0.4, 0.6, 0.8, 1.0].map((level, idx) => {
                          const pts = [0, 1, 2, 3, 4].map(i => {
                            const angle = -Math.PI / 2 + (i * 2 * Math.PI / 5);
                            return `${(200 + 150 * level * Math.cos(angle)).toFixed(1)},${(200 + 150 * level * Math.sin(angle)).toFixed(1)}`;
                          }).join(' ');
                          return (
                            <polygon
                              key={idx}
                              points={pts}
                              fill="none"
                              stroke="rgba(255, 255, 255, 0.1)"
                              strokeWidth="1"
                              strokeDasharray={idx === 4 ? 'none' : '4 4'}
                            />
                          );
                        })}

                        {/* Radar Axes */}
                        {[0, 1, 2, 3, 4].map((i) => {
                          const angle = -Math.PI / 2 + (i * 2 * Math.PI / 5);
                          const x2 = 200 + 150 * Math.cos(angle);
                          const y2 = 200 + 150 * Math.sin(angle);
                          return (
                            <line
                              key={i}
                              x1="200"
                              y1="200"
                              x2={x2}
                              y2={y2}
                              stroke="rgba(255, 255, 255, 0.15)"
                              strokeWidth="1"
                            />
                          );
                        })}

                        {/* Filled Expertise Polygon */}
                        <polygon
                          points={radarPolygonPath}
                          fill="rgba(232, 99, 74, 0.35)"
                          stroke="#E8634A"
                          strokeWidth="2.5"
                          className="transition-all duration-700"
                        />

                        {/* Interactive Data Nodes */}
                        {radarPoints.map((pt, index) => (
                          <g
                            key={index}
                            className="cursor-pointer group"
                            onMouseEnter={() => setSelectedRadarPoint(pt)}
                            onClick={() => setSelectedRadarPoint(pt)}
                          >
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="6"
                              fill="#E8634A"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                              className="group-hover:r-8 transition-all"
                            />
                            {/* Label */}
                            <text
                              x={pt.x + (pt.x > 200 ? 12 : pt.x < 200 ? -12 : 0)}
                              y={pt.y + (pt.y > 200 ? 16 : -10)}
                              textAnchor={pt.x > 200 ? 'start' : pt.x < 200 ? 'end' : 'middle'}
                              className="font-mono text-[11px] fill-gray-200 font-semibold select-none group-hover:fill-corail transition-colors"
                            >
                              {pt.label} ({pt.percent}%)
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>

                    <p className="text-center font-mono text-[11px] text-gray-400 mt-2">
                      Survolez les points nodaux pour inspecter les métriques détaillées.
                    </p>
                  </div>

                  {/* Right Column: Radar Detail Breakdown */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="p-6 rounded-[2rem] bg-[#1C1C26] border border-white/10">
                      <span className="font-mono text-xs uppercase tracking-wider text-corail font-semibold block mb-1">
                        Analyse d'Équilibre
                      </span>
                      <h4 className="font-bold text-xl text-white mb-2">
                        Profil Polyvalent Haute Performance
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        Ce radar reflète une maîtrise harmonieuse entre l'orchestration frontend (React/GSAP) et la robustesse architecturale backend/cloud (TypeScript/Node/DevOps).
                      </p>

                      <div className="space-y-3">
                        {skillsData.map((s) => (
                          <div key={s.id} className="flex items-center justify-between text-xs font-mono">
                            <span className="text-gray-300 font-medium">{s.name}</span>
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-white/10 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-corail rounded-full"
                                  style={{ width: `${s.percent}%` }}
                                />
                              </div>
                              <span className="font-bold text-white w-8 text-right">{s.percent}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================================================== */}
            {/* TAB CONTENT 3: MONITEUR SYSTÈME & CODE HEALTH      */}
            {/* ================================================== */}
            {activeTab === 'system' && (
              <div className="p-6 sm:p-8 md:p-10 space-y-8">
                
                {/* 4 Performance KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-[#1C1C26] border border-white/10 shadow-subtle">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase text-gray-400">Core Web Vitals</span>
                      <Sparkles className="w-4 h-4 text-corail" />
                    </div>
                    <div className="font-mono text-3xl font-bold text-white mb-1">100 / 100</div>
                    <p className="text-xs text-emerald-400 font-semibold">LCP 0.8s • CLS 0.00 • FID 12ms</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1C1C26] border border-white/10 shadow-subtle">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase text-gray-400">Couverture de Tests</span>
                      <ShieldCheck className="w-4 h-4 text-corail" />
                    </div>
                    <div className="font-mono text-3xl font-bold text-white mb-1">94.8%</div>
                    <p className="text-xs text-emerald-400 font-semibold">Unitaires + E2E Playwright</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1C1C26] border border-white/10 shadow-subtle">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase text-gray-400">Scalabilité Microservices</span>
                      <Cpu className="w-4 h-4 text-corail" />
                    </div>
                    <div className="font-mono text-3xl font-bold text-white mb-1">99.99%</div>
                    <p className="text-xs text-gray-400">Zéro Single Point of Failure</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#1C1C26] border border-white/10 shadow-subtle">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs uppercase text-gray-400">Fluidité Animations</span>
                      <Zap className="w-4 h-4 text-corail" />
                    </div>
                    <div className="font-mono text-3xl font-bold text-white mb-1">60 FPS</div>
                    <p className="text-xs text-emerald-400 font-semibold">GPU-Accelerated GSAP 3</p>
                  </div>
                </div>

                {/* Simulated Live Terminal Console */}
                <div className="p-6 rounded-[2rem] bg-[#101014] text-white font-mono text-xs border border-white/10 shadow-xl">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-corail" />
                      <span className="font-semibold text-gray-200">Terminal Télémétrique — diagnostic en direct</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                      LIVE STREAM
                    </span>
                  </div>

                  <div className="space-y-2 text-gray-300">
                    <p className="text-gray-500"># Initialisation du cluster de vérification Sept Neuf...</p>
                    <p><span className="text-corail">[2026-10-14]</span> <span className="text-emerald-400">OK</span> Core architecture modules validated (React 19, TypeScript, Clean DDD).</p>
                    <p><span className="text-corail">[2026-10-14]</span> <span className="text-emerald-400">OK</span> GSAP motion engine synchronized at 60 FPS without layout shift.</p>
                    <p><span className="text-corail">[2026-10-14]</span> <span className="text-emerald-400">OK</span> Cloud infrastructure: AWS ECS & Edge caching active. Latency: 12ms.</p>
                    <p><span className="text-corail">[2026-10-14]</span> <span className="text-amber-400">INFO</span> Status: Available for Technical Leadership, Architecture audits & Missions.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* F. FORMATION — "Les Fondations"                           */}
      {/* ======================================================== */}
      <section
        id="education"
        ref={educationRef}
        className="py-16 md:py-20 lg:py-24 px-6 md:px-12 bg-[#0F0F12] text-white relative overflow-hidden border-t border-white/5"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-corail font-semibold mb-3 block">
              04 / Cursus & Diplômes
            </span>
            <h2 className="font-serif italic text-4xl sm:text-5xl text-white font-normal tracking-tight">
              Les Fondations
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Un socle académique d'excellence en ingénierie logicielle et conception de systèmes.
            </p>
          </div>

          {/* Vertical Stacked Cards */}
          <div className="space-y-5">
            {/* Card 1 */}
            <div className="education-card p-6 sm:p-8 rounded-[2.5rem] bg-[#16161E] border border-white/10 hover:border-corail/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-corail/15 flex items-center justify-center text-corail shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-corail uppercase tracking-wider block mb-1">
                    2015 — 2017
                  </span>
                  <h3 className="font-bold text-xl text-white">
                    Master en Informatique & Architecture Logicielle
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Université Paris-Saclay — Mention Très Bien
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Spécialisation systèmes distribués, algorithmique avancée et génie logiciel.
                  </p>
                </div>
              </div>
              <div className="shrink-0 self-end md:self-center">
                <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#20202B] text-gray-300 border border-white/10">
                  Niveau Bac+5
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="education-card p-6 sm:p-8 rounded-[2.5rem] bg-[#16161E] border border-white/10 hover:border-corail/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-corail/15 flex items-center justify-center text-corail shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold text-corail uppercase tracking-wider block mb-1">
                    2012 — 2015
                  </span>
                  <h3 className="font-bold text-xl text-white">
                    Licence en Sciences Informatiques & Mathématiques
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    Université de Paris
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Bases fondamentales en programmation, structures de données et réseaux.
                  </p>
                </div>
              </div>
              <div className="shrink-0 self-end md:self-center">
                <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-[#20202B] text-gray-300 border border-white/10">
                  Niveau Bac+3
                </span>
              </div>
            </div>

            {/* Certifications Badge */}
            <div className="education-card p-5 sm:p-6 rounded-[2rem] bg-gradient-to-r from-corail/20 via-white/5 to-transparent border border-corail/30 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-corail" />
                <span className="text-sm text-gray-200 font-medium">
                  Certifications : <strong className="text-white">AWS Certified Solutions Architect</strong> & <strong className="text-white">Professional Scrum Master (PSM I)</strong>
                </span>
              </div>
              <span className="font-mono text-xs text-corail tracking-widest uppercase">
                Certifié
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* G. CONTACT — "Le Pont"                                    */}
      {/* ======================================================== */}
      <section
        id="contact"
        ref={contactRef}
        className="py-16 md:py-20 lg:py-24 px-6 md:px-12 bg-[#131317] relative border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Call to Action */}
            <div className="lg:col-span-6 space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-corail font-semibold block">
                05 / Connexion
              </span>
              <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight">
                Construisons ensemble l'exceptionnel.
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                Vous avez un projet d'envergure, une refonte stratégique ou besoin d'un leadership technique exigeant ? Échangeons dès aujourd'hui.
              </p>

              {/* Direct Social & Contact Links */}
              <div className="space-y-3 pt-2">
                {/* Email Direct */}
                <div className="contact-item link-lift flex items-center justify-between p-4 rounded-2xl bg-[#181820] border border-white/10 shadow-lg hover:border-corail/40 group">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-corail/15 text-corail flex items-center justify-center group-hover:bg-corail group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block font-mono">Email direct</span>
                      <a href="mailto:septneuf04@gmail.com" className="text-sm font-semibold text-white group-hover:text-corail transition-colors">
                        septneuf04@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#22222E] hover:bg-corail/20 text-gray-300 hover:text-corail transition-colors cursor-pointer"
                    title="Copier l'email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Localisation */}
                <div className="contact-item link-lift flex items-center gap-3.5 p-4 rounded-2xl bg-[#181820] border border-white/10 shadow-lg hover:border-corail/40 group">
                  <div className="w-10 h-10 rounded-xl bg-corail/15 text-corail flex items-center justify-center group-hover:bg-corail group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-gray-400 block font-mono">Localisation & Mobilité</span>
                    <span className="text-sm font-semibold text-white">
                      RDC, Ville de Kolwezi (Gouvernorat) • Ouvert au Remote & International
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 hidden sm:inline-block">
                    Disponible
                  </span>
                </div>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item link-lift flex items-center gap-4 p-4 rounded-2xl bg-[#181820] border border-white/10 shadow-lg hover:border-corail/40 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-corail/15 text-corail flex items-center justify-center group-hover:bg-corail group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Réseau professionnel</span>
                    <span className="text-sm font-semibold text-white group-hover:text-corail transition-colors">
                      linkedin.com/in/septneuf-architect
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-corail group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item link-lift flex items-center gap-4 p-4 rounded-2xl bg-[#181820] border border-white/10 shadow-lg hover:border-corail/40 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-corail/15 text-corail flex items-center justify-center group-hover:bg-corail group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block font-mono">Code source & contributions</span>
                    <span className="text-sm font-semibold text-white group-hover:text-corail transition-colors">
                      github.com/septneuf
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-corail group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Contact Card */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-[2.5rem] sm:rounded-[3rem] bg-[#181820] border border-white/10 shadow-2xl relative overflow-hidden">
                <h3 className="font-serif italic text-2xl sm:text-3xl text-white mb-2">
                  Envoyer un message direct
                </h3>
                <p className="text-xs text-gray-400 mb-6">
                  Réponse garantie sous 24 heures ouvrées.
                </p>

                {formSent ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-center animate-fade-in space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-bold text-base text-white">Message envoyé avec succès !</h4>
                    <p className="text-xs text-emerald-300">
                      Merci pour votre intérêt. Votre message a été transmis directement à Sept Neuf.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSent(false)}
                      className="mt-3 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-white transition-colors cursor-pointer"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3.5 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs">
                        {formError}
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-1.5">
                        Votre Nom & Entreprise
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Alexandre Martin — Directeur Technique"
                        className="w-full px-4 py-3 rounded-2xl bg-[#101014] border border-white/15 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corail focus:ring-1 focus:ring-corail transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-1.5">
                        Votre Email Professionnel
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexandre@entreprise.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[#101014] border border-white/15 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corail focus:ring-1 focus:ring-corail transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold uppercase text-gray-300 mb-1.5">
                        Détails de votre projet / opportunité
                      </label>
                      <textarea
                        rows="3"
                        name="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Parlez-moi de votre feuille de route, objectifs et calendrier..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#101014] border border-white/15 text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-corail focus:ring-1 focus:ring-corail transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-magnetic w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-corail hover:bg-corail-dark disabled:opacity-60 text-white font-semibold text-sm shadow-coral transition-colors cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmission en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmettre ma demande</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Temps moyen de réponse</span>
                  <span className="font-semibold text-corail">&lt; 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* H. PIED DE PAGE — Minimaliste Sombre                      */}
      {/* ======================================================== */}
      <footer className="bg-[#0B0B0E] text-white pt-14 pb-10 px-6 rounded-t-[3.5rem] sm:rounded-t-[4rem] relative z-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Identity with SeptNeufLogo Standalone */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-[#0F0F14] border border-white/10 p-1 flex items-center justify-center shrink-0">
              <SeptNeufLogo className="w-full h-full" />
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="font-display font-black text-sm tracking-tight uppercase text-white">
                  Sept
                </span>
                <span className="font-display font-black text-sm tracking-tight uppercase text-corail ml-1">
                  Neuf
                </span>
                <span className="font-mono text-[9px] font-bold px-1.5 py-0.2 rounded bg-corail/15 text-corail ml-1.5">
                  #79
                </span>
              </div>
              <p className="text-[11px] font-mono text-gray-400">
                Développeur Senior & Architecte Logiciel
              </p>
            </div>
          </div>

          {/* Vibe coding attribution */}
          <div className="text-center font-mono text-xs text-gray-400">
            <span>Sept Neuf • Vitrine Cinématographique • 2026</span>
          </div>

          {/* Live Pulsing Indicator */}
          <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-emerald-400 tracking-wider">
              En ligne / Disponible
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
