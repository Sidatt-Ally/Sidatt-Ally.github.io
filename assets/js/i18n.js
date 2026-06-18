const TRANSLATIONS = {
  fr: {
    nav_home:    "Accueil",
    nav_about:   "À propos",
    nav_projects:"Projets",
    nav_certs:   "Certifications",
    nav_cv:      "CV",
    nav_articles:"Articles",
    nav_contact: "Contact",
    hero_title:  "Sidi Mohamed ALLY",
    hero_sub:    "Analyste de données certifié Google",
    hero_tagline:"Je transforme les données brutes en décisions stratégiques.",
    hero_btn1:   "Voir mes projets",
    hero_btn2:   "Télécharger CV",
    skills_title:"Compétences",
    projects_title:"Projets",
    certs_title: "Certifications & Badges",
    contact_title:"Contact",
    contact_name: "Nom",
    contact_email:"Email",
    contact_msg:  "Message",
    contact_send: "Envoyer",
    footer_copy:  "© 2026 Sidi Mohamed ALLY — Tous droits réservés",
    project_view: "Voir le projet",
    project_github:"GitHub",
    project_pdf:  "Rapport PDF",
  },
  en: {
    nav_home:    "Home",
    nav_about:   "About",
    nav_projects:"Projects",
    nav_certs:   "Certifications",
    nav_cv:      "Resume",
    nav_articles:"Articles",
    nav_contact: "Contact",
    hero_title:  "Sidi Mohamed ALLY",
    hero_sub:    "Google Certified Data Analyst",
    hero_tagline:"I turn raw data into strategic decisions.",
    hero_btn1:   "View my projects",
    hero_btn2:   "Download Resume",
    skills_title:"Skills",
    projects_title:"Projects",
    certs_title: "Certifications & Badges",
    contact_title:"Contact",
    contact_name: "Name",
    contact_email:"Email",
    contact_msg:  "Message",
    contact_send: "Send",
    footer_copy:  "© 2026 Sidi Mohamed ALLY — All rights reserved",
    project_view: "View project",
    project_github:"GitHub",
    project_pdf:  "PDF Report",
  },
  ar: {
    nav_home:    "الرئيسية",
    nav_about:   "من أنا",
    nav_projects:"المشاريع",
    nav_certs:   "الشهادات",
    nav_cv:      "السيرة الذاتية",
    nav_articles:"المقالات",
    nav_contact: "التواصل",
    hero_title:  "سيدي محمد علي",
    hero_sub:    "محلل بيانات معتمد من Google",
    hero_tagline:"أحوّل البيانات الخام إلى قرارات استراتيجية.",
    hero_btn1:   "عرض مشاريعي",
    hero_btn2:   "تحميل السيرة الذاتية",
    skills_title:"المهارات",
    projects_title:"المشاريع",
    certs_title: "الشهادات والأوسمة",
    contact_title:"التواصل",
    contact_name: "الاسم",
    contact_email:"البريد الإلكتروني",
    contact_msg:  "الرسالة",
    contact_send: "إرسال",
    footer_copy:  "© 2026 سيدي محمد علي — جميع الحقوق محفوظة",
    project_view: "عرض المشروع",
    project_github:"GitHub",
    project_pdf:  "تقرير PDF",
  }
};

let currentLang = localStorage.getItem('lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });

  // Mettre en surbrillance le bouton actif
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
