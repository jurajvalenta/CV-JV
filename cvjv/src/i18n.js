import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en: {
          translation: {
            // Left Column
            "Print" : "Print",
            "Tel. contact" : "Tel. contact",
            "Residence" : "Residence",
            "Language skills" : "Language skills",
            "Slovak" : "Slovak",
            "English" : "English",
            "German" : "German",

            // Center Column
            "WORK EXPERIENCE" : "WORK EXPERIENCE",
            "EDUCATION" : "EDUCATION",
            "Teacher" : "Teacher",
            "Self-employed person" : "Self-employed person",
            "Assistant coach of the Slovak national team and head of the service team" : "Assistant coach of the Slovak national team and head of the service team",
            "Master's degree" : "Master's degree",
            "Bachelor's degree" : "Bachelor's degree",
            "High school" : "High school",
            "Základná škola Hrnčiarska" : "Základná škola Hrnčiarska",
            "Slovenský zväz biatlonu" : "Slovenský zväz biatlonu",
            "Teaching of Physical Education and Teaching of Information Technology" : "Teaching of Physical Education and Teaching of Information Technology",
            "University of Matej Bel - faculty of phylosophy" : "University of Matej Bel - faculty of phylosophy",
            "Mechanic of computer networks" : "Mechanic of computer networks",
            "Show more" : "Show more",
            "Show less" : "Show less",

            // Right column
            "SKILLS" : "SKILLS",
            "CERTIFICATES" : "CERTIFICATES",
          }
        },
        sk: {
          translation: {

            // Left Column
            "Print" : "Vytlačiť",
            "Tel. contact" : "Tel. kontakt",
            "Residence" : "Bydlisko",
            "Language skills" : "Jazykové znalosti",
            "Slovak" : "Slovenčina",
            "English" : "Angličtina",
            "German" : "Nemčina",
            "Driving license" : "Vodičský preukaz",

            // Center Column
            "WORK EXPERIENCE" : "PRACOVNÉ SKÚSENOSTI",
            "EDUCATION" : "VZDELANIE",
            "Teacher" : "Učiteľ",
            "Self-employed person" : "SZČO",
            "Assistant coach of the Slovak national team and head of the service team" : "Asistent trénera Slovenskej reprezentácie v biatlone, Šéf servisného tímu",
            "Master's degree" : "Vysokoškolské II. stupňa",
            "Bachelor's degree" : "Vysokoškolské I. stupňa",
            "High school" : "Stredná škola",
            "Teaching of Physical Education and Teaching of Information Technology" : "Učiteľstvo telesnej výchovy a informatiky",
            "University of Matej Bel - faculty of phylosophy" : "Univerzita Mateja bela - filozofická fakulta",
            "Mechanic of computer networks" : "Mechanik počítačových sietí",
            "Show more" : "Zobraziť viac",
            "Show less" : "Skryť",

            // Right column
            "SKILLS" : "ZRUČNOSTI",
            "CERTIFICATES" : "CERTIFIKÁTY",
        }
      }
    }
    });
  
  export default i18n;