// translations.js — SHARED across all pages
// Contains: navbar, footer, language label
// All pages load this file first.

const TRANSLATIONS = {
  en: {
    "nav-about":"About","nav-library":"Library","nav-home":"Home","nav-lang-lbl":"Language",
    "footer-tagline":"Stotra Saara — स्तोत्र सार · The Essence of Sacred Hymns · Powered by AI",
    "footer-copy":"© 2026 Stotra Saara · CC BY-NC 4.0 · Built with devotion 🙏"
  },
  hi: {
    "nav-about":"परिचय","nav-library":"पुस्तकालय","nav-home":"मुखपृष्ठ","nav-lang-lbl":"भाषा",
    "footer-tagline":"स्तोत्र सारा — The Essence of Sacred Hymns · AI द्वारा संचालित",
    "footer-copy":"© 2026 स्तोत्र सारा · CC BY-NC 4.0 · भक्ति के साथ निर्मित 🙏"
  },
  kn: {
    "nav-about":"ಪರಿಚಯ","nav-library":"ಗ್ರಂಥಾಲಯ","nav-home":"ಮುಖಪುಟ","nav-lang-lbl":"ಭಾಷೆ",
    "footer-tagline":"ಸ್ತೋತ್ರ ಸಾರ — ಪವಿತ್ರ ಸ್ತೋತ್ರಗಳ ಸಾರ · AI ಚಾಲಿತ",
    "footer-copy":"© 2026 ಸ್ತೋತ್ರ ಸಾರ · CC BY-NC 4.0 · ಭಕ್ತಿಯಿಂದ ನಿರ್ಮಿಸಲಾಗಿದೆ 🙏"
  },
  ta: {
    "nav-about":"பரிச்சயம்","nav-library":"நூலகம்","nav-home":"முகப்பு","nav-lang-lbl":"மொழி",
    "footer-tagline":"ஸ்தோத்ர சாரா — புனித துதிகளின் சாரம் · AI இயக்கப்படுகிறது",
    "footer-copy":"© 2026 ஸ்தோத்ர சாரா · CC BY-NC 4.0 · பக்தியுடன் கட்டப்பட்டது 🙏"
  },
  te: {
    "nav-about":"పరిచయం","nav-library":"గ్రంథాలయం","nav-home":"హోమ్","nav-lang-lbl":"భాష",
    "footer-tagline":"స్తోత్ర సారా — పవిత్ర స్తోత్రాల సారం · AI ఆధారంగా",
    "footer-copy":"© 2026 స్తోత్ర సారా · CC BY-NC 4.0 · భక్తితో నిర్మించబడింది 🙏"
  },
  mr: {
    "nav-about":"परिचय","nav-library":"ग्रंथालय","nav-home":"मुखपृष्ठ","nav-lang-lbl":"भाषा",
    "footer-tagline":"स्तोत्र सारा — पवित्र स्तोत्रांचे सार · AI द्वारे चालित",
    "footer-copy":"© 2026 स्तोत्र सारा · CC BY-NC 4.0 · भक्तीने बनवलेले 🙏"
  },
  ml: {
    "nav-about":"പരിചയം","nav-library":"ഗ്രന്ഥശാല","nav-home":"ഹോം","nav-lang-lbl":"ഭാഷ",
    "footer-tagline":"സ്തോത്ര സാരം — പവിത്ര സ്തോത്രങ്ങളുടെ സാരം · AI ശക്തിപ്പെടുത്തിയത്",
    "footer-copy":"© 2026 സ്തോത്ര സാരം · CC BY-NC 4.0 · ഭക്തിയോടെ നിർമ്മിച്ചത് 🙏"
  },
  bn: {
    "nav-about":"পরিচয়","nav-library":"গ্রন্থাগার","nav-home":"হোম","nav-lang-lbl":"ভাষা",
    "footer-tagline":"স্তোত্র সারা — পবিত্র স্তোত্রের সার · AI চালিত",
    "footer-copy":"© ২০২৬ স্তোত্র সারা · CC BY-NC 4.0 · ভক্তি দিয়ে নির্মিত 🙏"
  },
  gu: {
    "nav-about":"પરિચય","nav-library":"ગ્રંથાલય","nav-home":"હોમ","nav-lang-lbl":"ભાષા",
    "footer-tagline":"સ્તોત્ર સારા — પવિત્ર સ્તોત્રોનો સાર · AI સંચાલિત",
    "footer-copy":"© 2026 સ્તોત્ર સારા · CC BY-NC 4.0 · ભક્તિ સાથે બનાવેલ 🙏"
  },
  pa: {
    "nav-about":"ਜਾਣ-ਪਛਾਣ","nav-library":"ਲਾਇਬ੍ਰੇਰੀ","nav-home":"ਹੋਮ","nav-lang-lbl":"ਭਾਸ਼ਾ",
    "footer-tagline":"ਸਤੋਤਰ ਸਾਰਾ — ਪਵਿੱਤਰ ਸਤੋਤਰਾਂ ਦਾ ਸਾਰ · AI ਦੁਆਰਾ ਸੰਚਾਲਿਤ",
    "footer-copy":"© 2026 ਸਤੋਤਰ ਸਾਰਾ · CC BY-NC 4.0 · ਭਗਤੀ ਨਾਲ ਬਣਾਇਆ 🙏"
  },
  or: {
    "nav-about":"ପରିଚୟ","nav-library":"ଗ୍ରନ୍ଥାଗାର","nav-home":"ହୋମ","nav-lang-lbl":"ଭାଷା",
    "footer-tagline":"ସ୍ତୋତ୍ର ସାର — ପବିତ୍ର ସ୍ତୋତ୍ରର ସାର · AI ଚାଳିତ",
    "footer-copy":"© 2026 ସ୍ତୋତ୍ର ସାର · CC BY-NC 4.0 · ଭକ୍ତି ସହ ନିର୍ମିତ 🙏"
  },
  es: {
    "nav-about":"Acerca de","nav-library":"Biblioteca","nav-home":"Inicio","nav-lang-lbl":"Idioma",
    "footer-tagline":"Stotra Saara — La Esencia de los Himnos Sagrados · Impulsado por IA",
    "footer-copy":"© 2026 Stotra Saara · CC BY-NC 4.0 · Construido con devoción 🙏"
  },
  fr: {
    "nav-about":"À propos","nav-library":"Bibliothèque","nav-home":"Accueil","nav-lang-lbl":"Langue",
    "footer-tagline":"Stotra Saara — L'Essence des Hymnes Sacrés · Propulsé par l'IA",
    "footer-copy":"© 2026 Stotra Saara · CC BY-NC 4.0 · Construit avec dévotion 🙏"
  },
  de: {
    "nav-about":"Über uns","nav-library":"Bibliothek","nav-home":"Startseite","nav-lang-lbl":"Sprache",
    "footer-tagline":"Stotra Saara — Die Essenz heiliger Hymnen · KI-gestützt",
    "footer-copy":"© 2026 Stotra Saara · CC BY-NC 4.0 · Mit Hingabe erstellt 🙏"
  },
  pt: {
    "nav-about":"Sobre","nav-library":"Biblioteca","nav-home":"Início","nav-lang-lbl":"Idioma",
    "footer-tagline":"Stotra Saara — A Essência dos Hinos Sagrados · Impulsionado por IA",
    "footer-copy":"© 2026 Stotra Saara · CC BY-NC 4.0 · Construído com devoção 🙏"
  },
  id: {
    "nav-about":"Tentang","nav-library":"Perpustakaan","nav-home":"Beranda","nav-lang-lbl":"Bahasa",
    "footer-tagline":"Stotra Saara — Inti dari Himne Suci · Didukung AI",
    "footer-copy":"© 2026 Stotra Saara · CC BY-NC 4.0 · Dibangun dengan pengabdian 🙏"
  },
  ja: {
    "nav-about":"概要","nav-library":"ライブラリ","nav-home":"ホーム","nav-lang-lbl":"言語",
    "footer-tagline":"ストートラ・サーラ — 聖なる賛歌の精髄 · AIによる",
    "footer-copy":"© 2026 ストートラ・サーラ · CC BY-NC 4.0 · 信仰心を持って構築 🙏"
  },
  ar: {
    "nav-about":"حول","nav-library":"المكتبة","nav-home":"الرئيسية","nav-lang-lbl":"اللغة",
    "footer-tagline":"ستوترا سارا — جوهر الأناشيد المقدسة · مدعوم بالذكاء الاصطناعي",
    "footer-copy":"© 2026 ستوترا سارا · CC BY-NC 4.0 · بُني بتفانٍ 🙏"
  }
};

// RTL languages
const RTL_LANGS = ['ar'];

// Core apply function — merges page-specific dict on top of shared
function applyLang(code) {
  localStorage.setItem('stotrasaara-lang', code);
  const shared = TRANSLATIONS[code] || TRANSLATIONS['en'];
  const page   = (typeof PAGE_T !== 'undefined') ? (PAGE_T[code] || PAGE_T['en'] || {}) : {};
  const dict   = Object.assign({}, shared, page);

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  // Translate placeholders
  document.querySelectorAll('[data-t-placeholder]').forEach(el => {
    const key = el.getAttribute('data-t-placeholder');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.documentElement.dir  = RTL_LANGS.includes(code) ? 'rtl' : 'ltr';
  document.documentElement.lang = code;
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('stotrasaara-lang') || 'en';
  const sel   = document.querySelector('.nav-lang-select');
  if (sel) sel.value = saved;
  applyLang(saved);
});
