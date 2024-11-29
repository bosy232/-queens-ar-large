import { useLanguage } from '../contexts/LanguageContext';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      doctors: 'Doctors',
      patientInfo: 'Patient Info',
      contact: 'Contact',
      emergency: 'Emergency'
    },
    hero: {
      title: 'Exceptional Care, Personalized for You',
      subtitle: 'Advanced medical care with a compassionate touch',
      bookAppointment: 'Book Appointment',
      ourServices: 'Our Services'
    },
    features: {
      title: 'Why Choose Us',
      emergency: {
        title: '24/7 Emergency Care',
        description: 'Round-the-clock emergency services with dedicated staff ready to provide immediate medical attention.'
      },
      technology: {
        title: 'Advanced Technology',
        description: 'State-of-the-art medical equipment and facilities ensuring precise diagnostics and effective treatments.'
      },
      team: {
        title: 'Expert Medical Team',
        description: 'Highly qualified doctors and medical professionals committed to delivering exceptional patient care.'
      }
    },
    about: {
      title: 'About Queens Royal Hospital',
      description1: 'Since our establishment, Queens Royal Hospital has been at the forefront of medical excellence in New Cairo. Our state-of-the-art facility combines cutting-edge technology with compassionate care to provide the best possible outcomes for our patients.',
      description2: 'Our team of highly qualified medical professionals is dedicated to delivering personalized healthcare services in a warm, family-friendly environment. With four modern operating theaters and round-the-clock emergency services, we ensure that quality healthcare is always accessible.',
      stats: {
        theaters: 'Operating Theaters',
        specialists: 'Medical Specialists',
        experience: 'Years Experience',
        emergency: 'Emergency Care'
      },
      values: {
        title: 'Our Core Values',
        list: {
          excellence: 'Medical Excellence',
          compassion: 'Compassionate Care',
          innovation: 'Innovative Technology',
          integrity: 'Professional Integrity',
          accessibility: 'Healthcare Accessibility',
          teamwork: 'Collaborative Teamwork'
        }
      },
      mission: {
        title: 'Our Mission',
        description: 'To provide exceptional healthcare services with compassion, integrity, and innovation, ensuring the best possible outcomes for our patients.',
        vision: 'Our Vision',
        visionText: 'To be the leading healthcare provider in Egypt, recognized for excellence in patient care, medical innovation, and community service.',
        commitment: {
          title: 'Our Commitment',
          quality: 'Quality Healthcare',
          qualityDesc: 'Delivering the highest standards of medical care',
          patient: 'Patient-Centered',
          patientDesc: 'Focusing on individual needs and comfort',
          innovation: 'Continuous Innovation',
          innovationDesc: 'Staying at the forefront of medical technology'
        }
      }
    },
    services: {
      title: 'Our Services',
      obstetrics: 'Obstetrics & Gynecology',
      pediatrics: 'Pediatrics & Neonatology',
      surgery: 'General Surgery',
      emergency: '24/7 Emergency Care'
    },
    doctors: {
      title: 'Our Specialists',
      specialty: 'Obstetrics & Gynecology',
      specialists: {
        yehia: 'Dr. Yehia El-Rakhawy',
        sherif: 'Dr. Sherif Azmy',
        helmy: 'Dr. Ahmed Helmy'
      }
    },
    patientInfo: {
      title: 'Patient Information',
      insurance: {
        title: 'Insurance & Payment',
        providers: 'Accepted Insurance Providers',
        payment: 'Payment Options',
        paymentDesc: 'We accept various payment methods including cash, credit cards, and insurance coverage.'
      },
      guidelines: {
        title: 'Hospital Guidelines',
        visiting: 'Visiting Hours',
        visitingHours: {
          general: 'General Wards: 10:00 AM - 8:00 PM',
          icu: 'ICU: 11:00 AM - 12:00 PM & 5:00 PM - 6:00 PM'
        },
        contacts: 'Important Contacts'
      }
    },
    appointment: {
      title: 'Book an Appointment',
      subtitle: 'Schedule your visit with our specialists',
      features: {
        scheduling: 'Easy Online Scheduling',
        support: '24/7 Support Available',
        specialist: 'Choose Your Specialist'
      },
      form: {
        fullName: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        date: 'Preferred Date',
        submit: 'Book Appointment'
      }
    },
    contact: {
      title: 'Contact Us',
      getInTouch: 'Get in Touch',
      location: 'Our Location',
      phone: 'Phone Number',
      email: 'Email Address',
      workingHours: 'Working Hours',
      emergencyServices: '24/7 Emergency Services Available',
      regularHours: 'Regular Hours: 8:00 AM - 8:00 PM',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'Enter your name',
          email: 'Enter your email',
          subject: 'Enter subject',
          message: 'Enter your message'
        }
      }
    },
    footer: {
      description: 'Queens Royal Hospital provides exceptional healthcare services with a focus on patient comfort and advanced medical technology.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      rights: '© 2024 Queens Royal Hospital. All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن المستشفى',
      services: 'خدماتنا',
      doctors: 'الأطباء',
      patientInfo: 'معلومات المرضى',
      contact: 'اتصل بنا',
      emergency: 'الطوارئ'
    },
    hero: {
      title: 'رعاية استثنائية، مخصصة لك',
      subtitle: 'رعاية طبية متقدمة بلمسة إنسانية',
      bookAppointment: 'احجز موعد',
      ourServices: 'خدماتنا'
    },
    features: {
      title: 'لماذا تختارنا',
      emergency: {
        title: 'رعاية طوارئ 24/7',
        description: 'خدمات طوارئ على مدار الساعة مع طاقم متخصص جاهز لتقديم العناية الطبية الفورية.'
      },
      technology: {
        title: 'تكنولوجيا متقدمة',
        description: 'أحدث المعدات والمرافق الطبية لضمان التشخيص الدقيق والعلاج الفعال.'
      },
      team: {
        title: 'فريق طبي متخصص',
        description: 'أطباء ومتخصصون مؤهلون تأهيلاً عالياً ملتزمون بتقديم رعاية استثنائية للمرضى.'
      }
    },
    about: {
      title: 'عن مستشفى كوينز رويال',
      description1: 'منذ تأسيسنا، كان مستشفى كوينز رويال في طليعة التميز الطبي في القاهرة الجديدة. تجمع منشأتنا الحديثة بين التكنولوجيا المتطورة والرعاية الحانية لتقديم أفضل النتائج الممكنة لمرضانا.',
      description2: 'فريقنا من المتخصصين الطبيين المؤهلين تأهيلاً عالياً مكرس لتقديم خدمات رعاية صحية شخصية في بيئة دافئة وصديقة للعائلة. مع أربع غرف عمليات حديثة وخدمات طوارئ على مدار الساعة، نضمن أن الرعاية الصحية عالية الجودة متاحة دائماً.',
      stats: {
        theaters: 'غرف العمليات',
        specialists: 'متخصص طبي',
        experience: 'سنوات الخبرة',
        emergency: 'رعاية طارئة'
      },
      values: {
        title: 'قيمنا الأساسية',
        list: {
          excellence: 'التميز الطبي',
          compassion: 'الرعاية الحانية',
          innovation: 'التكنولوجيا المبتكرة',
          integrity: 'النزاهة المهنية',
          accessibility: 'سهولة الوصول للرعاية الصحية',
          teamwork: 'العمل الجماعي'
        }
      },
      mission: {
        title: 'رسالتنا',
        description: 'تقديم خدمات رعاية صحية استثنائية بكل رحمة ونزاهة وابتكار، لضمان أفضل النتائج الممكنة لمرضانا.',
        vision: 'رؤيتنا',
        visionText: 'أن نكون المؤسسة الرائدة في مجال الرعاية الصحية في مصر، معروفين بالتميز في رعاية المرضى والابتكار الطبي وخدمة المجتمع.',
        commitment: {
          title: 'التزامنا',
          quality: 'رعاية صحية عالية الجودة',
          qualityDesc: 'تقديم أعلى معايير الرعاية الطبية',
          patient: 'التركيز على المريض',
          patientDesc: 'الاهتمام باحتياجات وراحة كل مريض',
          innovation: 'الابتكار المستمر',
          innovationDesc: 'البقاء في طليعة التكنولوجيا الطبية'
        }
      }
    },
    services: {
      title: 'خدماتنا',
      obstetrics: 'النساء والتوليد',
      pediatrics: 'طب الأطفال وحديثي الولادة',
      surgery: 'الجراحة العامة',
      emergency: 'طوارئ 24/7'
    },
    doctors: {
      title: 'المتخصصون لدينا',
      specialty: 'النساء والتوليد',
      specialists: {
        yehia: 'د. محمد يحيى ',
        sherif: 'د. شريف يحيى',
        helmy: 'د. عمرو حلمي'
      }
    },
    patientInfo: {
      title: 'معلومات المرضى',
      insurance: {
        title: 'التأمين والدفع',
        providers: 'شركات التأمين المعتمدة',
        payment: 'خيارات الدفع',
        paymentDesc: 'نقبل وسائل دفع متنوعة تشمل النقد والبطاقات الائتمانية والتغطية التأمينية.'
      },
      guidelines: {
        title: 'إرشادات المستشفى',
        visiting: 'مواعيد الزيارة',
        visitingHours: {
          general: 'الأقسام العامة: 10:00 صباحاً - 8:00 مساءً',
          icu: 'العناية المركزة: 11:00 صباحاً - 12:00 ظهراً & 5:00 مساءً - 6:00 مساءً'
        },
        contacts: 'أرقام مهمة'
      }
    },
    appointment: {
      title: 'احجز موعد',
      subtitle: 'احجز زيارتك مع متخصصينا',
      features: {
        scheduling: 'حجز سهل عبر الإنترنت',
        support: 'دعم متاح 24/7',
        specialist: 'اختر متخصصك'
      },
      form: {
        fullName: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        date: 'التاريخ المفضل',
        submit: 'احجز موعد'
      }
    },
    contact: {
      title: 'اتصل بنا',
      getInTouch: 'تواصل معنا',
      location: 'موقعنا',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      workingHours: 'ساعات العمل',
      emergencyServices: 'خدمات الطوارئ متاحة 24/7',
      regularHours: 'الساعات العادية: 8:00 صباحاً - 8:00 مساءً',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        placeholders: {
          name: 'أدخل اسمك',
          email: 'أدخل بريدك الإلكتروني',
          subject: 'أدخل الموضوع',
          message: 'أدخل رسالتك'
        }
      }
    },
    footer: {
      description: 'يقدم مستشفى كوينز رويال خدمات رعاية صحية استثنائية مع التركيز على راحة المريض والتكنولوجيا الطبية المتقدمة.',
      quickLinks: 'روابط سريعة',
      contactInfo: 'معلومات الاتصال',
      followUs: 'تابعنا',
      rights: '© 2024 مستشفى كوينز رويال. جميع الحقوق محفوظة.'
    }
  }
};

export const useTranslation = (isArabic: boolean) => {
  return isArabic ? translations.ar : translations.en;
};
