import { type FC } from 'react';
import { Heart, Users, Activity, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations';

interface ServicesProps {
  selectedService: string;
  onServiceSelect: (id: string) => void;
}

const Services: FC<ServicesProps> = ({ selectedService, onServiceSelect }) => {
  const { isArabic } = useLanguage();
  const t = useTranslation(isArabic);

  const services = [
    { id: 'obstetrics', name: t.services.obstetrics, icon: Heart },
    { id: 'pediatrics', name: t.services.pediatrics, icon: Users },
    { id: 'surgery', name: t.services.surgery, icon: Activity },
    { id: 'emergency', name: t.services.emergency, icon: Clock },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t.services.title}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onServiceSelect(service.id)}
              className={`p-6 rounded-lg text-left transition-all ${
                selectedService === service.id
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-pink-50'
              }`}
            >
              <service.icon className={`w-8 h-8 mb-4 ${
                selectedService === service.id ? 'text-white' : 'text-primary'
              }`} />
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;