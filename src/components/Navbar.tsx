import { Menu, X, Phone, Languages } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isArabic, toggleLanguage } = useLanguage();
  const t = useTranslation(isArabic);

  const menuItems = [
    { title: t.nav.home, href: '#home' },
    { title: t.nav.about, href: '#about' },
    { title: t.nav.services, href: '#services' },
    { title: t.nav.doctors, href: '#doctors' },
    { title: t.nav.patientInfo, href: '#patient-info' },
    { title: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img src="/logo.svg" alt="Queens Royal Hospital" className="h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5 mr-1" />
              {isArabic ? 'English' : 'عربي'}
            </button>
            <a
              href="tel:15679"
              className="flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.nav.emergency}: 15679
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-700 hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Languages className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
              <a
                href="tel:15679"
                className="flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                {t.nav.emergency}: 15679
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}