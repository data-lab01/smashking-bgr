// ========== MENU DATA ==========
const menuItems = [
  { id: 1, name: "MENÜ SMOKEY KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE, NUGGETS", price: 16.50, img: "img/4.png" },
  { id: 2, name: "MENÜ TRUFFLE KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE, NUGGETS", price: 15.50, img: "img/2.png" },
  { id: 3, name: "MENÜ EPIC KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE, NUGGETS", price: 14.50, img: "img/8.png" },
  { id: 4, name: "MENÜ GOLDEN KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE, NUGGETS", price: 13.50, img: "img/3.png" },
  { id: 5, name: "MENÜ CHICKEN KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE, NUGGETS", price: 14.50, img: "img/9.png" },
  { id: 6, name: "MAJESTIC FRIES", desc: "POMMES", price: 5.00, img: "img/7.png" },
  { id: 7, name: "CHICKEN NUGGETS", desc: "6 pieces with sauce", price: 6.00, img: "img/11.png" },
  { id: 8, name: "ONION RINGS", desc: "Crispy onion rings", price: 4.50, img: "img/5.png" }
];

// ========== LOCATIONS DATA ==========
const locations = [
  { id: 1, name: "Maxfeld", address: "Pirckheimerstraße 68, Nürnberg", hours: "11:00 - 23:00", phone: "+49 176 290 92498", email: "info@smashking.de", features: ["Dine-in", "Takeaway", "Delivery"], isMain: true },
  { id: 2, name: "Nürnberg Süd", address: "Gostenhofer Hauptstraße 12, Nürnberg", hours: "Opening Summer 2026", phone: "-", email: "sud@smashking.de", features: ["Coming Soon"], isComingSoon: true },
  { id: 3, name: "Nürnberg West", address: "Fürther Straße 45, Nürnberg", hours: "Opening Summer 2026", phone: "-", email: "west@smashking.de", features: ["Coming Soon"], isComingSoon: true }
];

// ========== OFFERS DATA ==========
const offers = [
  { title: "First order? 20% off", desc: "Use code: SMASH20", icon: "fa-gift", discount: "20%", badge: "NEW" },
  { title: "Tuesday = BOGO", desc: "Buy 1, Get 1 Free", icon: "fa-hand-peace", discount: "BOGO", badge: "HOT" },
  { title: "Free fries on Fridays", desc: "With any burger", icon: "fa-french-fries", discount: "FREE", badge: "WEEKLY" }
];

// ========== COMBOS DATA ==========
const combos = [
  { name: "Smash + Fries + Drink", price: 12.90 },
  { name: "Family pack (4 burgers)", price: 29.99 },
  { name: "Late night special", price: 9.90 }
];

// ========== GLOBAL VARIABLES ==========
let currentLang = 'en';
let cart = [];

// ========== COMPLETE TRANSLATIONS ==========
const translations = {
  en: {
    // Navigation
    nav_home: "Home", nav_menu: "Menu", nav_build: "Build", nav_deals: "Deals",
    nav_locations: "Locations", nav_about: "About", nav_offers: "Offers", nav_contact: "Contact",
    order_now: "ORDER NOW",
    
    // Hero
    hero_badge: " NÜRNBERG'S FAVORITE BURGER",
    hero_line1: "Smash that craving", hero_line2: "with every bite",
    hero_desc: "Real beef. Smashed on the grill. Served hot. No frozen stuff. Just good food.",
    see_menu: "SEE OUR MENU", delivery_btn: "🚚 Delivery",
    
    // Trust badges
    trust_delivery: "Free delivery over €25", trust_time: "Ready in 15-20 min",
    trust_fresh: "100% fresh ingredients", trust_rating: "4.9 ★ (2k+ reviews)",
    
    // Features
    feature1_title: "Smashed fresh", feature1_desc: "We smash each patty right on the grill",
    feature2_title: "Local ingredients", feature2_desc: "From farms around Nürnberg",
    feature3_title: "Fair prices", feature3_desc: "Good burgers shouldn't cost a fortune",
    
    // Menu Page
    menu_title: "Our menu", menu_subtitle: "What we're famous for",
    
    // Builder Page
    builder_title: "Make it your way", builder_subtitle: "Pick your bun, choose your patty, add what you like.",
    
    // Deals Page
    deals_title: "Save with combos",
    
    // Locations Page
    locations_title: "Find us",
    
    // About Page
    story_badge: "OUR STORY", about_title: "From a dream<br>to your plate",
    about_quote: "My name is Emer. I started Smash King in 2024 because I was tired of dry, sad burgers.",
    about_text: "We started small — just a tiny spot. Now we're here, still smashing every single patty by hand.",
    stat_founded: "Founded", stat_hand: "Hand-smashed", stat_customers: "Happy customers",
    
    // Offers Page
    offers_title: "This week's deals",
    
    // Contact Page
    contact_title: "Say hello", send_message: "Send message",
    
    // Cart
    your_bag: "Your bag", checkout: "Checkout",
    
    // Footer
    footer_tagline: "Handcrafted smashed burgers since 2019",
    footer_home: "Home", footer_menu: "Menu", footer_build: "Build", footer_deals: "Deals",
    footer_locations: "Locations", footer_about: "About", footer_contact: "Contact",
    footer_copyright: "© 2026 Smash King Burger | Made in Nürnberg",
    
    // Cart messages
    addToCart: "Add to bag", cartEmpty: "Your bag is empty", orderPlaced: "Order placed!"
  },
  de: {
    nav_home: "Startseite", nav_menu: "Speisekarte", nav_build: "Bauen", nav_deals: "Angebote",
    nav_locations: "Standorte", nav_about: "Über uns", nav_offers: "Aktionen", nav_contact: "Kontakt",
    order_now: "JETZT BESTELLEN",
    hero_badge: " NÜRNBERGS LIEBLINGSBURGER",
    hero_line1: "Zerquetsche den Hunger", hero_line2: "mit jedem Biss",
    hero_desc: "Rindfleisch. Frisch gegrillt. Heiß serviert. Kein Tiefkühlzeug.",
    see_menu: "ZUR SPEISEKARTE", delivery_btn: "🚚 Lieferung",
    trust_delivery: "Kostenlose Lieferung ab €25", trust_time: "Fertig in 15-20 Min",
    trust_fresh: "100% frische Zutaten", trust_rating: "4.9 ★ (2k+ Bewertungen)",
    feature1_title: "Frisch gesmasht", feature1_desc: "Wir smashen jedes Patty auf dem Grill",
    feature2_title: "Lokale Zutaten", feature2_desc: "Von Bauernhöfen aus Nürnberg",
    feature3_title: "Faire Preise", feature3_desc: "Gute Burger sollten kein Vermögen kosten",
    menu_title: "Unsere Speisekarte", menu_subtitle: "Dafür sind wir bekannt",
    builder_title: "Mach deinen Burger", builder_subtitle: "Wähle dein Brötchen, dein Patty und was du magst.",
    deals_title: "Spare mit Combos", locations_title: "Finde uns",
    story_badge: "UNSERE GESCHICHTE", about_title: "Vom Traum<br>auf deinen Teller",
    about_quote: "Mein Name ist Emer. Ich habe Smash King 2024 gegründet, weil ich trockene Burger satt hatte.",
    about_text: "Wir haben klein angefangen. Jetzt sind wir hier und smashen jedes Patty von Hand.",
    stat_founded: "Gegründet", stat_hand: "Handgesmasht", stat_customers: "Glückliche Kunden",
    offers_title: "Angebote der Woche", contact_title: "Kontakt", send_message: "Nachricht senden",
    your_bag: "Ihr Warenkorb", checkout: "Zur Kasse",
    footer_tagline: "Handgemachte Smash-Burger seit 2019",
    footer_home: "Startseite", footer_menu: "Speisekarte", footer_build: "Bauen", footer_deals: "Angebote",
    footer_locations: "Standorte", footer_about: "Über uns", footer_contact: "Kontakt",
    footer_copyright: "© 2026 Smash King Burger | Hergestellt in Nürnberg",
    addToCart: "In den Warenkorb", cartEmpty: "Ihr Warenkorb ist leer", orderPlaced: "Bestellung aufgegeben!"
  },
  ar: {
    nav_home: "الرئيسية", nav_menu: "القائمة", nav_build: "ابتكار", nav_deals: "العروض",
    nav_locations: "الفروع", nav_about: "معلومات عنا", nav_offers: "العروض", nav_contact: "اتصل بنا",
    order_now: "اطلب الآن",
    hero_badge: " برجر نورنبرغ المفضل",
    hero_line1: "اسحق رغبتك", hero_line2: "مع كل قضمة",
    hero_desc: "لحم بقري طازج. يُشوى على الفحم. يُقدم ساخناً.",
    see_menu: "استكشف القائمة", delivery_btn: "🚚 توصيل",
    trust_delivery: "توصيل مجاني للطلبات فوق €25", trust_time: "جاهز خلال 15-20 دقيقة",
    trust_fresh: "مكونات طازجة 100%", trust_rating: "★ 4.9 (أكثر من 2000 تقييم)",
    feature1_title: "سماش طازج", feature1_desc: "نضغط كل شريحة لحم على الشواية",
    feature2_title: "مكونات محلية", feature2_desc: "من مزارع نورنبرغ",
    feature3_title: "أسعار عادلة", feature3_desc: "البرجر الجيد لا يجب أن يكلف ثروة",
    menu_title: "قائمتنا", menu_subtitle: "ما نشتهر به",
    builder_title: "ابتكر برجرك", builder_subtitle: "اختر الخبز، اللحم، وأضف ما تحب",
    deals_title: "وفر مع الباقات", locations_title: "أوجدنا",
    story_badge: "قصتنا", about_title: "من حلم<br>إلى طبقك",
    about_quote: "اسمي إمير. أسست سماش كينج في 2024 لأنني سئمت من البرجر الجاف.",
    about_text: "بدأنا صغارًا. الآن نحن هنا، ولا نزال نضغط كل شريحة لحم يدويًا.",
    stat_founded: "تأسست", stat_hand: "ضغط يدوي", stat_customers: "عملاء سعداء",
    offers_title: "عروض هذا الأسبوع", contact_title: "تواصل معنا", send_message: "إرسال الرسالة",
    your_bag: "سلتك", checkout: "إتمام الشراء",
    footer_tagline: "برجر سماش محضر يدوياً منذ 2019",
    footer_home: "الرئيسية", footer_menu: "القائمة", footer_build: "ابتكار", footer_deals: "العروض",
    footer_locations: "الفروع", footer_about: "معلومات عنا", footer_contact: "اتصل بنا",
    footer_copyright: "© 2026 سماش كينج برجر | صنع في نورنبرغ",
    addToCart: "أضف إلى السلة", cartEmpty: "سلتك فارغة", orderPlaced: "تم الطلب!"
  }
};

// ========== APPLY TRANSLATIONS FUNCTION ==========
function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (key === 'about_title') {
        el.innerHTML = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  // Update placeholders
  const nameInput = document.getElementById('contactNameInput');
  const emailInput = document.getElementById('contactEmailInput');
  const msgInput = document.getElementById('contactMsgInput');
  if (nameInput) nameInput.placeholder = currentLang === 'en' ? 'Your name' : (currentLang === 'de' ? 'Dein Name' : 'اسمك');
  if (emailInput) emailInput.placeholder = currentLang === 'en' ? 'Email address' : (currentLang === 'de' ? 'E-Mail Adresse' : 'البريد الإلكتروني');
  if (msgInput) msgInput.placeholder = currentLang === 'en' ? 'What\'s on your mind?' : (currentLang === 'de' ? 'Was möchtest du uns sagen?' : 'ماذا تريد أن تقول؟');
  
  // Update buttons text
  const sendBtn = document.querySelector('#sendContactBtn');
  if (sendBtn) sendBtn.textContent = t.send_message;
  
  const orderBtn = document.querySelector('#orderTrigger');
  if (orderBtn) orderBtn.textContent = t.order_now;
  
  // Re-render dynamic content
  renderMenu();
  renderCombos();
  renderLocations();
  renderOffers();
  updateCartUI();
}

// ========== LANGUAGE FUNCTIONS ==========
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.body.classList.toggle('rtl', lang === 'ar');
  applyTranslations();
}

// ========== HELPER FUNCTIONS ==========
function showNotification(msg) {
  const div = document.createElement('div');
  div.textContent = msg;
  div.style.cssText = 'position:fixed; bottom:20px; left:20px; background:#ff6b2c; color:#fff; padding:12px 24px; border-radius:40px; font-weight:bold; z-index:1000;';
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 2500);
}

function copyOfferCode(code) {
  navigator.clipboard.writeText(code);
  showNotification(`✓ Code "${code}" copied!`);
}

// ========== RENDER FUNCTIONS ==========
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const t = translations[currentLang];
  grid.innerHTML = menuItems.map(item => `
    <div class="menu-card">
      <div class="menu-image" style="background-image: url('${item.img}')"></div>
      <h3 class="menu-title">${item.name}</h3>
      <div class="menu-price">€${item.price.toFixed(2)}</div>
      <p class="menu-desc">${item.desc}</p>
      <button class="add-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">${t.addToCart}</button>
    </div>
  `).join('');
  
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart({ 
      id: parseInt(btn.dataset.id), 
      name: btn.dataset.name, 
      price: parseFloat(btn.dataset.price), 
      quantity: 1 
    }));
  });
}

function renderCombos() {
  const container = document.getElementById('combosContainer');
  if (!container) return;
  const t = translations[currentLang];
  container.innerHTML = combos.map(combo => `
    <div class="combo-card">
      <h3>${combo.name}</h3>
      <div class="menu-price">€${combo.price.toFixed(2)}</div>
      <button class="add-btn" data-name="${combo.name}" data-price="${combo.price}">${t.addToCart}</button>
    </div>
  `).join('');
  
  document.querySelectorAll('#combosContainer .add-btn').forEach(btn => {
    btn.addEventListener('click', () => addToCart({ id: Date.now(), name: btn.dataset.name, price: parseFloat(btn.dataset.price), quantity: 1 }));
  });
}

function renderLocations() {
  const grid = document.getElementById('locationsGrid');
  if (!grid) return;
  grid.innerHTML = locations.map(loc => `
    <div class="location-card">
      ${loc.isComingSoon ? '<div class="coming-soon-badge">🚀 COMING SOON</div>' : ''}
      ${loc.isMain ? '<div class="main-badge">⭐ MAIN STORE</div>' : ''}
      <div class="location-icon"><i class="fas fa-store"></i></div>
      <h3 class="location-name">${loc.name}</h3>
      <div class="location-address"><i class="fas fa-map-marker-alt"></i> ${loc.address}</div>
      <div class="location-hours"><i class="fas fa-clock"></i> ${loc.hours}</div>
      <div class="location-features">${loc.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}</div>
      <div class="location-contact"><div class="contact-row"><i class="fas fa-phone"></i> ${loc.phone}</div></div>
      <div class="location-actions"><button class="location-btn order-pickup"><i class="fas fa-shopping-bag"></i> Pickup</button></div>
    </div>
  `).join('');
}

function renderOffers() {
  const grid = document.getElementById('offersGrid');
  if (!grid) return;
  grid.innerHTML = offers.map(offer => `
    <div class="offer-card">
      <div class="offer-badge">${offer.badge}</div>
      <div class="offer-icon"><i class="fas ${offer.icon}"></i></div>
      <div class="offer-discount">${offer.discount}</div>
      <h3 class="offer-title">${offer.title}</h3>
      <p class="offer-desc">${offer.desc}</p>
      <div class="offer-footer">
        <span class="offer-code">${offer.desc.includes('SMASH20') ? 'SMASH20' : 'OFFER'}</span>
        <button class="offer-btn" onclick="copyOfferCode('${offer.desc.includes('SMASH20') ? 'SMASH20' : 'BOGO'}')"><i class="fas fa-copy"></i> Copy</button>
      </div>
    </div>
  `).join('');
}

// ========== CART FUNCTIONS ==========
function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) existing.quantity++;
  else cart.push(item);
  updateCartUI();
  saveCart();
  showNotification(`✓ ${item.name} added`);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  document.getElementById('cartCount').textContent = count;
  const container = document.getElementById('cartItemsList');
  const totalSpan = document.getElementById('cartTotalAmount');
  const t = translations[currentLang];
  
  if (cart.length === 0) {
    container.innerHTML = `<p style="color:#aaa;">${t.cartEmpty}</p>`;
    totalSpan.textContent = '€0.00';
    return;
  }
  
  let total = 0;
  container.innerHTML = cart.map((item, idx) => {
    total += item.price * item.quantity;
    return `<div class="cart-item"><div><strong>${item.name}</strong> x${item.quantity}<br>€${item.price.toFixed(2)} each</div><button class="remove-item" data-idx="${idx}" style="background:none; border:none; color:#ff6b2c; cursor:pointer;">✕</button></div>`;
  }).join('');
  totalSpan.textContent = `€${total.toFixed(2)}`;
  
  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.splice(parseInt(btn.dataset.idx), 1);
      updateCartUI();
      saveCart();
    });
  });
}

function saveCart() { localStorage.setItem('smashCart', JSON.stringify(cart)); }
function loadCart() { const saved = localStorage.getItem('smashCart'); if (saved) { cart = JSON.parse(saved); updateCartUI(); } }

// ========== PAGE NAVIGATION ==========
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId + 'Page').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');
}

function openCart() { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').style.display = 'block'; }
function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').style.display = 'none'; }

// ========== INITIALIZATION ==========
function init() {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
  loadCart();
  
  // Event Listeners
  document.querySelectorAll('.nav-link, .footer-links a, .footer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) showPage(page);
    });
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  
  document.getElementById('viewMenuBtn')?.addEventListener('click', () => showPage('menu'));
  document.getElementById('orderTrigger')?.addEventListener('click', openCart);
  document.getElementById('cartTrigger')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length) {
      showNotification(translations[currentLang].orderPlaced);
      cart = [];
      updateCartUI();
      saveCart();
      closeCart();
    }
  });
  
  document.getElementById('sendContactBtn')?.addEventListener('click', () => {
    const name = document.getElementById('contactNameInput')?.value;
    if (name) {
      showNotification(`✓ Thanks ${name}! Message sent.`);
      document.getElementById('contactNameInput').value = '';
      document.getElementById('contactEmailInput').value = '';
      document.getElementById('contactMsgInput').value = '';
      const successDiv = document.getElementById('contactSuccessMsg');
      if (successDiv) {
        successDiv.classList.add('show');
        setTimeout(() => successDiv.classList.remove('show'), 5000);
      }
    } else {
      showNotification('Please fill in all fields');
    }
  });
  
  // ========== MOBILE MENU ==========
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinksWrapper = document.querySelector('.nav-links-wrapper');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (mobileToggle && navLinksWrapper) {
    // Toggle menu when clicking the hamburger icon
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      navLinksWrapper.classList.toggle('open');
    });
    
    // Close menu when clicking on any navigation link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinksWrapper.classList.remove('open');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navLinksWrapper.classList.contains('open') && 
          !navLinksWrapper.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navLinksWrapper.classList.remove('open');
      }
    });
    
    // Also close menu when window is resized back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && navLinksWrapper.classList.contains('open')) {
        mobileToggle.classList.remove('active');
        navLinksWrapper.classList.remove('open');
      }
    });
  }
  
  // Gallery
  const thumbs = document.querySelectorAll('.thumb');
  const mainImage = document.querySelector('.about-image');
  if (thumbs.length && mainImage) {
    const images = { burger1: 'img/9.png', kitchen: 'img/kitchen.jpg', team: 'img/team.jpg' };
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const imgKey = thumb.getAttribute('data-img');
        if (images[imgKey]) {
          mainImage.style.opacity = '0.5';
          setTimeout(() => { mainImage.style.backgroundImage = `url('${images[imgKey]}')`; mainImage.style.opacity = '1'; }, 200);
        }
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }
  
  // Builder
  const builderContainer = document.getElementById('builderContainer');
  if (builderContainer) {
    builderContainer.innerHTML = `
      <div class="builder-options">
        <div class="builder-field"><label>${translations[currentLang].builder_bun || 'Choose your bun'}</label><select><option>Brioche</option><option>Whole wheat</option><option>Gluten free</option></select></div>
        <div class="builder-field"><label>${translations[currentLang].builder_patty || 'Choose your patty'}</label><select><option>Angus beef</option><option>Chicken</option><option>Vegan</option></select></div>
        <div class="builder-field"><button id="addCustomBtn" class="btn-primary" style="margin-top:28px;">${translations[currentLang].addToCart || 'Add to bag'}</button></div>
      </div>
    `;
    document.getElementById('addCustomBtn')?.addEventListener('click', () => addToCart({ id: Date.now(), name: "Custom Burger", price: 11.99, quantity: 1 }));
  }
}

// ========== COOKIE CONSENT FUNCTIONS ==========
function initCookieConsent() {
  // Check if user already made a choice
  const cookieChoice = localStorage.getItem('cookieConsent');
  
  if (!cookieChoice) {
    // Show cookie banner after 1 second
    setTimeout(() => {
      document.getElementById('cookieConsent').classList.add('show');
    }, 1000);
  }
  
  // Accept All
  const acceptBtn = document.getElementById('acceptCookies');
  const acceptAllModal = document.getElementById('acceptAllModal');
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    }));
    document.getElementById('cookieConsent').classList.remove('show');
    showNotification('✅ Cookie preferences saved!');
  };
  
  if (acceptBtn) acceptBtn.addEventListener('click', acceptCookies);
  if (acceptAllModal) acceptAllModal.addEventListener('click', acceptCookies);
  
  // Decline
  const declineBtn = document.getElementById('declineCookies');
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'declined');
      localStorage.setItem('cookiePreferences', JSON.stringify({
        necessary: true,
        functional: false,
        analytics: false,
        marketing: false
      }));
      document.getElementById('cookieConsent').classList.remove('show');
      showNotification('❌ Only necessary cookies are active.');
    });
  }
  
  // Customize - Open Modal
  const customizeBtn = document.getElementById('customizeCookies');
  const modal = document.getElementById('cookieModal');
  const closeModal = document.getElementById('closeModal');
  
  if (customizeBtn) {
    customizeBtn.addEventListener('click', () => {
      // Load saved preferences
      const savedPrefs = localStorage.getItem('cookiePreferences');
      if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        document.getElementById('functionalCookies').checked = prefs.functional || false;
        document.getElementById('analyticsCookies').checked = prefs.analytics || false;
        document.getElementById('marketingCookies').checked = prefs.marketing || false;
      } else {
        document.getElementById('functionalCookies').checked = true;
        document.getElementById('analyticsCookies').checked = true;
        document.getElementById('marketingCookies').checked = true;
      }
      modal.classList.add('show');
    });
  }
  
  // Close modal
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  }
  
  // Save Preferences
  const savePrefs = document.getElementById('savePreferences');
  if (savePrefs) {
    savePrefs.addEventListener('click', () => {
      const preferences = {
        necessary: true,
        functional: document.getElementById('functionalCookies').checked,
        analytics: document.getElementById('analyticsCookies').checked,
        marketing: document.getElementById('marketingCookies').checked
      };
      localStorage.setItem('cookieConsent', 'customized');
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      document.getElementById('cookieConsent').classList.remove('show');
      modal.classList.remove('show');
      showNotification('✅ Your cookie preferences have been saved!');
    });
  }
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
}

function init() {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
  loadCart();
  
  // Event Listeners
  document.querySelectorAll('.nav-link, .footer-links a, .footer-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) showPage(page);
    });
  });
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  
  document.getElementById('viewMenuBtn')?.addEventListener('click', () => showPage('menu'));
  document.getElementById('orderTrigger')?.addEventListener('click', openCart);
  document.getElementById('cartTrigger')?.addEventListener('click', openCart);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (cart.length) {
      showNotification(translations[currentLang].orderPlaced);
      cart = [];
      updateCartUI();
      saveCart();
      closeCart();
    }
  });
  
  document.getElementById('sendContactBtn')?.addEventListener('click', () => {
    const name = document.getElementById('contactNameInput')?.value;
    if (name) {
      showNotification(`✓ Thanks ${name}! Message sent.`);
      document.getElementById('contactNameInput').value = '';
      document.getElementById('contactEmailInput').value = '';
      document.getElementById('contactMsgInput').value = '';
      const successDiv = document.getElementById('contactSuccessMsg');
      if (successDiv) {
        successDiv.classList.add('show');
        setTimeout(() => successDiv.classList.remove('show'), 5000);
      }
    } else {
      showNotification('Please fill in all fields');
    }
  });
  
  // ========== MOBILE MENU ==========
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinksWrapper = document.querySelector('.nav-links-wrapper');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (mobileToggle && navLinksWrapper) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      navLinksWrapper.classList.toggle('open');
    });
    
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinksWrapper.classList.remove('open');
      });
    });
    
    document.addEventListener('click', (e) => {
      if (navLinksWrapper.classList.contains('open') && 
          !navLinksWrapper.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navLinksWrapper.classList.remove('open');
      }
    });
    
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && navLinksWrapper.classList.contains('open')) {
        mobileToggle.classList.remove('active');
        navLinksWrapper.classList.remove('open');
      }
    });
  }
  
  // Gallery
  const thumbs = document.querySelectorAll('.thumb');
  const mainImage = document.querySelector('.about-image');
  if (thumbs.length && mainImage) {
    const images = { burger1: 'img/9.png', kitchen: 'img/kitchen.jpg', team: 'img/team.jpg' };
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const imgKey = thumb.getAttribute('data-img');
        if (images[imgKey]) {
          mainImage.style.opacity = '0.5';
          setTimeout(() => { mainImage.style.backgroundImage = `url('${images[imgKey]}')`; mainImage.style.opacity = '1'; }, 200);
        }
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }
  
  // Builder
  const builderContainer = document.getElementById('builderContainer');
  if (builderContainer) {
    builderContainer.innerHTML = `
      <div class="builder-options">
        <div class="builder-field"><label>${translations[currentLang].builder_bun || 'Choose your bun'}</label><select><option>Brioche</option><option>Whole wheat</option><option>Gluten free</option></select></div>
        <div class="builder-field"><label>${translations[currentLang].builder_patty || 'Choose your patty'}</label><select><option>Angus beef</option><option>Chicken</option><option>Vegan</option></select></div>
        <div class="builder-field"><button id="addCustomBtn" class="btn-primary" style="margin-top:28px;">${translations[currentLang].addToCart || 'Add to bag'}</button></div>
      </div>
    `;
    document.getElementById('addCustomBtn')?.addEventListener('click', () => addToCart({ id: Date.now(), name: "Custom Burger", price: 11.99, quantity: 1 }));
  }
  
  // ========== COOKIE CONSENT ==========
  initCookieConsent();

    // ========== WHATSAPP ORDER WITH CART SUMMARY ==========
  const whatsappBtn = document.getElementById('whatsappOrderBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      let message = 'Hello! I would like to order from Smash King Burger:%0A%0A';
      
      if (cart.length > 0) {
        message += '*MY ORDER:*%0A';
        let total = 0;
        cart.forEach(item => {
          message += `- ${item.name} x${item.quantity} = €${(item.price * item.quantity).toFixed(2)}%0A`;
          total += item.price * item.quantity;
        });
        message += `%0A*TOTAL: €${total.toFixed(2)}*%0A%0A`;
        message += 'Please confirm my order and let me know the delivery time.';
      } else {
        message += 'I would like to see the menu and get recommendations.';
      }
      
      const phoneNumber = '4917629092498';
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    });
  }
}
init();
