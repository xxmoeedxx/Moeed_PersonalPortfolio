// Text elements with manual translations
const elementsToTranslate = {
    'home-link': {
        en: 'Home',
        ur: 'صفحہ اول',
        fr: 'Accueil',
        ar: 'الصفحة الرئيسية'
    },
    'skills-link': {
        en: 'Skills',
        ur: 'مہارتیں',
        fr: 'Compétences',
        ar: 'المهارات'
    },
    'projects-link': {
        en: 'Projects',
        ur: 'منصوبے',
        fr: 'Projets',
        ar: 'المشاريع'
    },
    'certifications-link': {
        en: 'Certifications',
        ur: 'تصدیق',
        fr: 'Certifications',
        ar: 'الشهادات'
    },
    'education-link': {
        en: 'Education',
        ur: 'تعلیم',
        fr: 'Éducation',
        ar: 'التعليم'
    },
    'contact-link': {
        en: 'Contact',
        ur: 'رابطہ',
        fr: 'Contact',
        ar: 'اتصل'
    },
    'welcome-message': {
        en: 'Moeed Ahmad',
        ur: 'معید احمد',
        fr: 'Moeed Ahmad',
        ar: 'معید احمد'
    },
    'description': {
        en: 'Computer Scientist | Software Engineer | Teaching Assistant',
        ur: 'کمپیوٹر سائنسدان | سافٹ ویئر انجینئر | ٹیچنگ اسسٹنٹ',
        fr: 'Informaticien | Ingénieur logiciel | Assistant d\'enseignement',
        ar: 'عالم الحاسوب | مهندس برمجيات | مساعد تدريس'
    },
    'skills-title': {
        en: 'Skills',
        ur: 'مہارتیں',
        fr: 'Compétences',
        ar: 'المهارات'
    },
    'projects-title': {
        en: 'Projects',
        ur: 'منصوبے',
        fr: 'Projets',
        ar: 'المشاريع'
    },
    'certifications-title': {
        en: 'Certifications',
        ur: 'تصدیق',
        fr: 'Certifications',
        ar: 'الشهادات'
    },
    'education-title': {
        en: 'Education',
        ur: 'تعلیم',
        fr: 'Éducation',
        ar: 'التعليم'
    },
    'contact-title': {
        en: 'Contact',
        ur: 'رابطہ',
        fr: 'Contact',
        ar: 'اتصل'
    },
};

// Function to change the language of the text on the page
function changeLanguage(language) {
    Object.keys(elementsToTranslate).forEach(elementId => {
        const element = document.getElementById(elementId);
        const translations = elementsToTranslate[elementId];
        const translatedText = translations[language] || translations['en']; // Default to English if translation not found
        element.textContent = translatedText;
    });
}

// Map for language codes
const languageMap = {
    en: 'en',
    ur: 'ur',
    fr: 'fr',
    ar: 'ar'
};

// Listen for language selection changes
document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    const targetLanguage = languageMap[selectedLanguage] || 'en'; // Default to English if language not found
    changeLanguage(targetLanguage);
});

// Default to English on page load
window.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en');
});
