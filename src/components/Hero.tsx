import { type FC } from 'react';
import Slideshow from './Slideshow';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

const Hero: FC = () => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  return (
    <section id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <Slideshow />
      </div>
      <div className="relative h-full bg-gradient-to-r from-[#903060]/90 to-[#802050]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-full md:w-1/2 text-white text-center md:text-left pt-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#appointment"
                className="bg-white text-[#903060] px-8 py-4 rounded-md font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
              >
                {t.hero.bookAppointment}
              </a>
              <a
                href="#services"
                className="border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-[#903060] transition-all duration-300 transform hover:scale-105"
              >
                {t.hero.ourServices}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;