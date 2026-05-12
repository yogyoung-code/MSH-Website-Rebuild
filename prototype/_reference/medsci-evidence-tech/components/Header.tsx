import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onApply: () => void;
}

const Header: React.FC<HeaderProps> = ({ onApply }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: '循证愿景', id: 'vision' },
    { name: '核心产品', id: 'products' },
    { name: '数据资产', id: 'data' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-3 border-b border-white/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-medsci-blue blur-md opacity-40 group-hover:opacity-60 transition-opacity rounded-lg"></div>
            <div className="w-10 h-10 bg-gradient-to-br from-medsci-blue to-blue-700 rounded-lg flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-all duration-300 relative z-10 border border-white/10">
              <span className="text-white font-bold text-xl font-serif">M</span>
            </div>
          </div>
          <div className={`flex flex-col ${scrolled ? 'text-slate-800' : 'text-white'}`}>
            <span className="text-lg font-bold leading-none tracking-tight">梅斯健康</span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
              scrolled ? 'text-medsci-blue' : 'text-cyan-300'
            }`}>hk.02415</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 border border-white/5">
          <div className="flex space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <a 
                key={item.id}
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className={`transition-all duration-300 relative hover:-translate-y-0.5 ${
                  scrolled 
                    ? 'text-slate-600 hover:text-medsci-blue' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <button 
          onClick={onApply}
          className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg ${
            scrolled 
              ? 'bg-slate-900 text-white hover:bg-medsci-blue hover:shadow-medsci-blue/30' 
              : 'bg-white text-slate-900 hover:bg-slate-100 shadow-white/10'
          }`}
        >
          申请内测
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;