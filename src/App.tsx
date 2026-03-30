import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  Pizza, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Menu as MenuIcon, 
  X, 
  ChevronRight,
  Star,
  Award
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contatti', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent text-white"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2">
          <span className={cn("transition-colors", isScrolled ? "text-gold" : "text-white")}>MARIZZO</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "text-sm uppercase tracking-widest font-medium transition-colors",
                isScrolled ? "text-dark hover:text-gold" : "text-white hover:text-gold"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={cn(
              "px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300",
              isScrolled ? "bg-dark text-white hover:bg-gold" : "bg-white text-dark hover:bg-gold hover:text-white"
            )}
          >
            Prenota
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("md:hidden", isScrolled ? "text-dark" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden text-dark"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif border-b border-gray-100 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-dark text-white text-center py-3 uppercase tracking-widest"
            >
              Prenota Ora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          alt="Italian Restaurant Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block text-gold uppercase tracking-[0.3em] text-sm mb-4 font-medium"
        >
          Dal 2006 a Milano
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
        >
          L'Autentica <br /> <span className="italic">Cucina Italiana</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#menu" className="bg-gold text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-dark transition-all duration-500">
            Scopri il Menu
          </a>
          <a href="#contact" className="border border-white text-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-white hover:text-dark transition-all duration-500">
            Prenota un Tavolo
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto mb-2" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-paper">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
            alt="Chef Mario" 
            className="w-full aspect-[4/5] object-cover rounded-sm shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl hidden lg:block">
            <div className="text-4xl font-serif text-gold mb-1">20+</div>
            <div className="text-xs uppercase tracking-widest text-gray-500">Anni di Esperienza</div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-widest text-sm font-medium">La Nostra Storia</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">Passione e Tradizione <br /> firmata Mario</h2>
          </div>
          
          <p className="text-gray-600 leading-relaxed text-lg">
            La passione di Mario per la cucina italiana nasce oltre 20 anni fa. Quello che era iniziato come un sogno in una piccola cucina di famiglia si è evoluto in Marizzo, un punto di riferimento per chi cerca l'autenticità nel cuore di Milano.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Ogni ingrediente è selezionato con cura, ogni impasto è lavorato a mano e ogni piatto racconta una storia di tradizione, innovazione e amore per il territorio italiano. Dalla pizza cotta nel forno a legna ai classici della cucina regionale, Marizzo è casa.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-4">
            <div className="flex items-start gap-3">
              <Award className="text-gold w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-serif font-bold">Qualità Certificata</h4>
                <p className="text-xs text-gray-500">Ingredienti 100% Italiani</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Star className="text-gold w-6 h-6 shrink-0" />
              <div>
                <h4 className="font-serif font-bold">Eccellenza</h4>
                <p className="text-xs text-gray-500">Recensito dai migliori</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuHighlight = () => {
  const categories = [
    {
      title: "Le Nostre Pizze",
      items: [
        { name: "Margherita Reale", price: "12€", desc: "Pomodoro San Marzano, Mozzarella di Bufala, Basilico fresco, Olio EVO" },
        { name: "Diavola Piccante", price: "14€", desc: "Salame piccante calabrese, Nduja, Peperoncino, Mozzarella" },
        { name: "Tartufata", price: "18€", desc: "Crema di tartufo nero, Funghi porcini, Scaglie di parmigiano 24 mesi" }
      ]
    },
    {
      title: "Dalla Cucina",
      items: [
        { name: "Tagliatelle al Ragù", price: "16€", desc: "Pasta fresca fatta in casa con ragù di carne selezionata" },
        { name: "Risotto alla Milanese", price: "19€", desc: "Zafferano in pistilli, midollo e mantecatura al burro d'alpeggio" },
        { name: "Cotoletta Orecchia d'Elefante", price: "24€", desc: "Vitello impanato e fritto nel burro chiarificato" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-24 px-6 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-gold uppercase tracking-widest text-sm">Esperienza Gastronomica</span>
          <h2 className="text-4xl md:text-5xl font-serif">Il Nostro Menu</h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="space-y-10"
            >
              <h3 className="text-2xl font-serif italic text-gold border-b border-white/10 pb-4">{cat.title}</h3>
              <div className="space-y-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <h4 className="text-xl font-serif group-hover:text-gold transition-colors">{item.name}</h4>
                      <div className="flex-grow border-b border-dotted border-white/20 mx-4 mb-1" />
                      <span className="font-serif text-gold">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-400 italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="border border-gold text-gold px-12 py-4 uppercase tracking-widest text-sm hover:bg-gold hover:text-white transition-all duration-500">
            Scarica Menu Completo (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-widest text-sm font-medium">Prenotazioni</span>
            <h2 className="text-4xl md:text-5xl font-serif">Vieni a Trovarci</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Indirizzo</p>
                <p className="text-lg font-serif">Via Vitruvio, Milano Centrale</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Telefono</p>
                <p className="text-lg font-serif">123 456 789</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <p className="text-lg font-serif">mario@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Orari</p>
                <p className="text-lg font-serif">Lun - Dom: 12:00 - 15:00, 19:00 - 23:30</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-paper p-10 rounded-sm shadow-sm border border-gray-100"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Nome</label>
                <input type="text" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-gold transition-colors" placeholder="Il tuo nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Email</label>
                <input type="email" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-gold transition-colors" placeholder="La tua email" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Data</label>
                <input type="date" className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold">Persone</label>
                <select className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-gold transition-colors">
                  <option>1 Persona</option>
                  <option>2 Persone</option>
                  <option>3 Persone</option>
                  <option>4+ Persone</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold">Messaggio</label>
              <textarea rows={4} className="w-full bg-white border border-gray-200 p-3 outline-none focus:border-gold transition-colors" placeholder="Richieste particolari..."></textarea>
            </div>
            <button className="w-full bg-dark text-white py-4 uppercase tracking-widest text-sm hover:bg-gold transition-all duration-300">
              Invia Prenotazione
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-serif font-bold tracking-tighter">MARIZZO</h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            L'eccellenza della tradizione italiana nel cuore di Milano. Oltre 20 anni di passione per la cucina e la pizza autentica.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Link Rapidi</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Chi Siamo</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors">Il Nostro Menu</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contatti & Prenotazioni</a></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-gold">Newsletter</h4>
          <p className="text-gray-400 text-sm">Iscriviti per ricevere eventi speciali e promozioni.</p>
          <div className="flex">
            <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 p-3 outline-none focus:border-gold flex-grow text-sm" />
            <button className="bg-gold px-6 py-3 hover:bg-white hover:text-dark transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500">
        <p>© 2026 Marizzo Ristorante. Tutti i diritti riservati.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
