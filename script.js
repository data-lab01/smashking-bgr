//  MENU DATA WITH CATEGORIES 
const menuItems = [
  // Burgers Category (id: 1-5)
  { id: 1, name: "MENÜ SMOKEY KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE NUGGETS", price: 16.50, img: "img/4.png", category: "burgers" },
  { id: 2, name: "MENÜ TRUFFLE KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE NUGGETS", price: 15.50, img: "img/2.png", category: "burgers" },
  { id: 3, name: "MENÜ EPIC KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE NUGGETS", price: 14.50, img: "img/8.png", category: "burgers" },
  { id: 4, name: "MENÜ GOLDEN KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE NUGGETS", price: 13.50, img: "img/3.png", category: "burgers" },
  { id: 5, name: "MENÜ CHICKEN KING", desc: "BURGER + FRIES, ONION RINGS, CHILI CHEESE NUGGETS", price: 14.50, img: "img/9.png", category: "burgers" },
  
  // Sides Category (id: 6-10)
  { id: 6, name: "MAJESTIC FRIES", desc: "Crispy golden fries", price: 5.00, img: "img/7.png", category: "sides" },
  { id: 7, name: "CHICKEN NUGGETS", desc: "6 pieces with sauce", price: 6.00, img: "img/11.png", category: "sides" },
  { id: 8, name: "ONION RINGS", desc: "Crispy onion rings", price: 4.50, img: "img/5.png", category: "sides" },
  { id: 9, name: "SWEET POTATO FRIES", desc: "Crispy sweet potato fries", price: 6.00, img: "img/kartofel.png", category: "sides" },
  { id: 10, name: "CHILLE CHEESE NUGGETS", desc: "Crispy cheese nuggets", price: 5.00, img: "img/6.png", category: "sides" },
  
  // Drinks Category (id: 11-16)
  { id: 11, name: "SPRITE", desc: "Refreshing lemon-lime soda", price: 3.50, img: "img/sprite.png", category: "drinks" },
  { id: 12, name: "COCA COLA", desc: "Classic cola", price: 3.50, img: "img/cola.png", category: "drinks" },
  { id: 13, name: "FANTA", desc: "Orange soda", price: 3.50, img: "img/fanta.png", category: "drinks" },
  { id: 14, name: "LIPTON", desc: "Orange soda", price: 3.50, img: "img/lipton.png", category: "drinks" },
  { id: 15, name: "COCA COLA ZERO", desc: "Cola Zero", price: 3.50, img: "img/cola_zero.png", category: "drinks" },
  { id: 16, name: "MEZZO MIX", desc: "Mezzo Mix", price: 3.50, img: "img/mezzo.png", category: "drinks" },
  
  // Extras Category (id: 17-21)
  { id: 17, name: "Beef Patty", desc: "Extra beef patty", price: 3.00, img: "img/patty.png", category: "Extras" },
  { id: 18, name: "Extra Cheddar", desc: "Extra cheddar cheese", price: 1.50, img: "img/cheddar.png", category: "Extras" },
  { id: 19, name: "Chicken Bacon", desc: "Extra chicken bacon", price: 2.50, img: "img/bacon.png", category: "Extras" },
  { id: 20, name: "Jalapeno", desc: "Extra jalapeno peppers", price: 1.50, img: "img/jalapenos.png", category: "Extras" },
  { id: 21, name: "Caramelized Onions", desc: "Extra caramelized onions", price: 2.00, img: "img/onions.png", category: "Extras" }
];

//  LOCATIONS DATA 
const locations = [
  { id: 1, name: "Maxfeld", address: "Pirckheimerstraße 68, Nürnberg", hours: "11:00 - 23:00", phone: "+49 176 290 92498", email: "info@smashking.de", features: ["Dine-in", "Takeaway", "Delivery"], isMain: true },
  { id: 2, name: "Nürnberg Süd", address: "Gostenhofer Hauptstraße 12, Nürnberg", hours: "Opening Summer 2026", phone: "-", email: "sud@smashking.de", features: ["Coming Soon"], isComingSoon: true },
  { id: 3, name: "Nürnberg West", address: "Fürther Straße 45, Nürnberg", hours: "Opening Summer 2026", phone: "-", email: "west@smashking.de", features: ["Coming Soon"], isComingSoon: true }
];

//  OFFERS DATA 
const offers = [
  { title: "First order? 20% off", desc: "Use code: SMASH20", icon: "fa-gift", discount: "20%", badge: "NEW" },
  { title: "Tuesday = BOGO", desc: "Buy 1, Get 1 Free", icon: "fa-hand-peace", discount: "BOGO", badge: "HOT" },
  { title: "Free fries on Fridays", desc: "With any burger", icon: "fa-french-fries", discount: "FREE", badge: "WEEKLY" }
];

//  COMBOS DATA 
const combos = [
  { name: "Smash + Fries + Drink", price: 12.90 },
  { name: "Family pack (4 burgers)", price: 29.99 },
  { name: "Late night special", price: 9.90 }
];

//  GLOBAL VARIABLES 
let currentLang = 'en';
let cart = [];
let activeCategory = 'all';

//  COMPLETE TRANSLATIONS 
const translations = {
  en: {
    nav_home: "Home", nav_menu: "Menu", nav_build: "Build", nav_deals: "Deals",
    nav_locations: "Locations", nav_about: "About", nav_offers: "Offers", nav_contact: "Contact",
    order_now: "ORDER NOW",
    hero_badge: "NÜRNBERG'S FAVORITE BURGER",
    hero_line1: "Smash that craving", hero_line2: "with every bite",
    hero_desc: "Real beef. Smashed on the grill. Served hot. No frozen stuff. Just good food.",
    see_menu: "SEE OUR MENU", delivery_btn: "🚚 Delivery",
    trust_delivery: "Free delivery over €25", trust_time: "Ready in 15-20 min",
    trust_fresh: "100% fresh ingredients", trust_rating: "4.9 ★ (2k+ reviews)",
    feature1_title: "Smashed fresh", feature1_desc: "We smash each patty right on the grill",
    feature2_title: "Local ingredients", feature2_desc: "From farms around Nürnberg",
    feature3_title: "Fair prices", feature3_desc: "Good burgers shouldn't cost a fortune",
    menu_title: "Our menu", menu_subtitle: "What we're famous for",
    filter_all: "All", filter_burgers: " Burgers", filter_sides: " Sides", filter_drinks: " Drinks", filter_Extras: " Extras",
    builder_title: "Make it your way", builder_subtitle: "Pick your bun, choose your patty, add what you like.",
    builder_bun: "Choose your bun", builder_patty: "Choose your patty",
    deals_title: "Save with combos",
    locations_title: "Find us",
    story_badge: "OUR STORY", about_title: "From a dream<br>to your plate",
    about_quote: "My name is Emer. I started Smash King in 2024 because I was tired of dry, sad burgers.",
    about_text: "We started small — just a tiny spot. Now we're here, still smashing every single patty by hand.",
    stat_founded: "Founded", stat_hand: "Hand-smashed", stat_customers: "Happy customers",
    offers_title: "This week's deals",
    contact_title: "Say hello", send_message: "Send message",
    your_bag: "Your bag", checkout: "Checkout",
    footer_tagline: "Handcrafted smashed burgers since 2024",
    footer_copyright: "© 2026 Smash King Burger | Made in Nürnberg",
    addToCart: "Add to bag", cartEmpty: "Your bag is empty", orderPlaced: "Order placed!"
  },
  de: {
    nav_home: "Startseite", nav_menu: "Speisekarte", nav_build: "Bauen", nav_deals: "Angebote",
    nav_locations: "Standorte", nav_about: "Über uns", nav_offers: "Aktionen", nav_contact: "Kontakt",
    order_now: "JETZT BESTELLEN",
    hero_badge: "NÜRNBERGS LIEBLINGSBURGER",
    hero_line1: "Zerquetsche den Hunger", hero_line2: "mit jedem Biss",
    hero_desc: "Rindfleisch. Frisch gegrillt. Heiß serviert. Kein Tiefkühlzeug.",
    see_menu: "ZUR SPEISEKARTE", delivery_btn: "🚚 Lieferung",
    trust_delivery: "Kostenlose Lieferung ab €25", trust_time: "Fertig in 15-20 Min",
    trust_fresh: "100% frische Zutaten", trust_rating: "4.9 ★ (2k+ Bewertungen)",
    feature1_title: "Frisch gesmasht", feature1_desc: "Wir smashen jedes Patty auf dem Grill",
    feature2_title: "Lokale Zutaten", feature2_desc: "Von Bauernhöfen aus Nürnberg",
    feature3_title: "Faire Preise", feature3_desc: "Gute Burger sollten kein Vermögen kosten",
    menu_title: "Unsere Speisekarte", menu_subtitle: "Dafür sind wir bekannt",
    filter_all: "Alle", filter_burgers: " Burger", filter_sides: " Beilagen", filter_drinks: " Getränke", filter_Extras: " Nachspeisen",
    builder_title: "Mach deinen Burger", builder_subtitle: "Wähle dein Brötchen, dein Patty und was du magst.",
    builder_bun: "Wähle dein Brötchen", builder_patty: "Wähle dein Patty",
    deals_title: "Spare mit Combos", locations_title: "Finde uns",
    story_badge: "UNSERE GESCHICHTE", about_title: "Vom Traum<br>auf deinen Teller",
    about_quote: "Mein Name ist Emer. Ich habe Smash King 2024 gegründet, weil ich trockene Burger satt hatte.",
    about_text: "Wir haben klein angefangen. Jetzt sind wir hier und smashen jedes Patty von Hand.",
    stat_founded: "Gegründet", stat_hand: "Handgesmasht", stat_customers: "Glückliche Kunden",
    offers_title: "Angebote der Woche", contact_title: "Kontakt", send_message: "Nachricht senden",
    your_bag: "Ihr Warenkorb", checkout: "Zur Kasse",
    footer_tagline: "Handgemachte Smash-Burger seit 2024",
    footer_copyright: "© 2026 Smash King Burger | Hergestellt in Nürnberg",
    addToCart: "In den Warenkorb", cartEmpty: "Ihr Warenkorb ist leer", orderPlaced: "Bestellung aufgegeben!"
  },
  ar: {
    nav_home: "الرئيسية", nav_menu: "القائمة", nav_build: "ابتكار", nav_deals: "العروض",
    nav_locations: "الفروع", nav_about: "معلومات عنا", nav_offers: "العروض", nav_contact: "اتصل بنا",
    order_now: "اطلب الآن",
    hero_badge: "برجر نورنبرغ المفضل",
    hero_line1: "اسحق رغبتك", hero_line2: "مع كل قضمة",
    hero_desc: "لحم بقري طازج. يُشوى على الفحم. يُقدم ساخناً.",
    see_menu: "استكشف القائمة", delivery_btn: "🚚 توصيل",
    trust_delivery: "توصيل مجاني للطلبات فوق €25", trust_time: "جاهز خلال 15-20 دقيقة",
    trust_fresh: "مكونات طازجة 100%", trust_rating: "★ 4.9 (أكثر من 2000 تقييم)",
    feature1_title: "سماش طازج", feature1_desc: "نضغط كل شريحة لحم على الشواية",
    feature2_title: "مكونات محلية", feature2_desc: "من مزارع نورنبرغ",
    feature3_title: "أسعار عادلة", feature3_desc: "البرجر الجيد لا يجب أن يكلف ثروة",
    menu_title: "قائمتنا", menu_subtitle: "ما نشتهر به",
    filter_all: "الكل", filter_burgers: " برجر", filter_sides: " أطباق جانبية", filter_drinks: " مشروبات", filter_Extras: "حلويات",
    builder_title: "ابتكر برجرك", builder_subtitle: "اختر الخبز، اللحم، وأضف ما تحب",
    builder_bun: "اختر الخبز", builder_patty: "اختر اللحم",
    deals_title: "وفر مع الباقات", locations_title: "أوجدنا",
    story_badge: "قصتنا", about_title: "من حلم<br>إلى طبقك",
    about_quote: "اسمي إمير. أسست سماش كينج في 2024 لأنني سئمت من البرجر الجاف.",
    about_text: "بدأنا صغارًا. الآن نحن هنا، ولا نزال نضغط كل شريحة لحم يدويًا.",
    stat_founded: "تأسست", stat_hand: "ضغط يدوي", stat_customers: "عملاء سعداء",
    offers_title: "عروض هذا الأسبوع", contact_title: "تواصل معنا", send_message: "إرسال الرسالة",
    your_bag: "سلتك", checkout: "إتمام الشراء",
    footer_tagline: "برجر سماش محضر يدوياً منذ 2024",
    footer_copyright: "© 2026 سماش كينج برجر | صنع في نورنبرغ",
    addToCart: "أضف إلى السلة", cartEmpty: "سلتك فارغة", orderPlaced: "تم الطلب!"
  }
};

//  APPLY TRANSLATIONS FUNCTION 
function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;
  
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
  
  // Update category filter button texts
  const filterButtons = document.querySelectorAll('.category-btn');
  if (filterButtons.length) {
    const categories = ['all', 'burgers', 'sides', 'drinks', 'Extras'];
    categories.forEach((cat, index) => {
      if (filterButtons[index]) {
        const key = `filter_${cat}`;
        if (t[key]) {
          // Preserve the emoji if present
          const currentText = filterButtons[index].textContent;
          const hasEmoji = currentText.includes('') || currentText.includes('') || currentText.includes('') || currentText.includes(' ');
          if (hasEmoji && cat !== 'all') {
            const emoji = cat === 'burgers' ? ' ' : cat === 'sides' ? ' ' : cat === 'drinks' ? ' ' : ' ';
            filterButtons[index].textContent = emoji + t[key];
          } else {
            filterButtons[index].textContent = t[key];
          }
        }
      }
    });
  }
  
  const nameInput = document.getElementById('contactNameInput');
  const emailInput = document.getElementById('contactEmailInput');
  const msgInput = document.getElementById('contactMsgInput');
  if (nameInput) nameInput.placeholder = currentLang === 'en' ? 'Your name' : (currentLang === 'de' ? 'Dein Name' : 'اسمك');
  if (emailInput) emailInput.placeholder = currentLang === 'en' ? 'Email address' : (currentLang === 'de' ? 'E-Mail Adresse' : 'البريد الإلكتروني');
  if (msgInput) msgInput.placeholder = currentLang === 'en' ? 'What\'s on your mind?' : (currentLang === 'de' ? 'Was möchtest du uns sagen?' : 'ماذا تريد أن تقول؟');
  
  const sendBtn = document.querySelector('#sendContactBtn');
  if (sendBtn) sendBtn.textContent = t.send_message;
  
  const orderBtn = document.querySelector('#orderTrigger');
  if (orderBtn) orderBtn.textContent = t.order_now;
  
  renderMenu();
  renderCombos();
  renderLocations();
  renderOffers();
  updateCartUI();
}

//  LANGUAGE FUNCTIONS 
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.body.classList.toggle('rtl', lang === 'ar');
  applyTranslations();
}

//  HELPER FUNCTIONS 
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

//  STORE STATUS FUNCTION 
function updateStoreStatus() {
  const statusContainer = document.getElementById('storeStatusContainer');
  if (!statusContainer) return;
  
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentTime = hour + minute / 60;
  
  let isOpen = false;
  let statusMessage = '';
  let statusClass = '';
  
  if (day === 1) {
    isOpen = false;
    statusMessage = ' Closed on Mondays';
    statusClass = 'closed';
  }
  else if (day >= 2 && day <= 5) {
    if (currentTime >= 11 && currentTime < 22) {
      isOpen = true;
      const hoursLeft = Math.floor(22 - currentTime);
      const minutesLeft = Math.round((22 - currentTime) * 60);
      if (hoursLeft <= 1) {
        statusMessage = `🟡 Open - Closing in ${minutesLeft} minutes`;
        statusClass = 'closing-soon';
      } else {
        statusMessage = `🟢 Open now - Closes at 22:00`;
        statusClass = 'open';
      }
    } else {
      isOpen = false;
      if (currentTime < 11) {
        const hoursUntil = Math.floor(11 - currentTime);
        statusMessage = `🔴 Closed - Opens today at 11:00 (in ${hoursUntil} hour${hoursUntil !== 1 ? 's' : ''})`;
      } else {
        statusMessage = '🔴 Closed - Opens tomorrow at 11:00';
      }
      statusClass = 'closed';
    }
  }
  else if (day === 6 || day === 0) {
    if (currentTime >= 16 && currentTime < 22) {
      isOpen = true;
      const hoursLeft = Math.floor(22 - currentTime);
      const minutesLeft = Math.round((22 - currentTime) * 60);
      if (hoursLeft <= 1) {
        statusMessage = `🟡 Open - Closing in ${minutesLeft} minutes`;
        statusClass = 'closing-soon';
      } else {
        statusMessage = `🟢 Open now - Closes at 22:00`;
        statusClass = 'open';
      }
    } else {
      isOpen = false;
      if (currentTime < 16) {
        const hoursUntil = Math.floor(16 - currentTime);
        statusMessage = `🔴 Closed - Opens today at 16:00 (in ${hoursUntil} hour${hoursUntil !== 1 ? 's' : ''})`;
      } else {
        statusMessage = '🔴 Closed - Opens tomorrow at 16:00';
      }
      statusClass = 'closed';
    }
  }
  
  statusContainer.innerHTML = `<div class="store-status ${statusClass}"><i class="fas ${isOpen ? 'fa-store' : 'fa-clock'}"></i><span>${statusMessage}</span></div>`;
}

function initStoreStatus() {
  updateStoreStatus();
  setInterval(updateStoreStatus, 60000);
}

//  CATEGORY FILTER FUNCTIONS 
function initCategoryFilters() {
  const buttons = document.querySelectorAll('.category-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeCategory = this.getAttribute('data-category');
      renderMenu();
    });
  });
}

function getCategoryBadge(category) {
  const badges = {
    burgers: ' BURGER',
    sides: ' SIDE',
    drinks: ' DRINKS',
    Extras: ' EXTRAS'
  };
  return badges[category] || '';
}

//  RENDER FUNCTIONS 
function renderMenu() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const t = translations[currentLang];
  
  let filteredItems = menuItems;
  if (activeCategory !== 'all') {
    filteredItems = menuItems.filter(item => item.category === activeCategory);
  }
  
  if (filteredItems.length === 0) {
    grid.innerHTML = `<div class="no-items-message">No items in this category</div>`;
    return;
  }
  
  grid.innerHTML = filteredItems.map(item => `
    <div class="menu-card">
      <div class="menu-image" style="background-image: url('${item.img}')"></div>
      <div class="menu-category-badge">${getCategoryBadge(item.category)}</div>
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

//  CART FUNCTIONS 
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

//  PAGE NAVIGATION 
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId + 'Page').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');
}

function openCart() { document.getElementById('cartSidebar').classList.add('open'); document.getElementById('cartOverlay').style.display = 'block'; }
function closeCart() { document.getElementById('cartSidebar').classList.remove('open'); document.getElementById('cartOverlay').style.display = 'none'; }

//  COOKIE CONSENT FUNCTIONS 
function initCookieConsent() {
  const cookieChoice = localStorage.getItem('cookieConsent');
  
  if (!cookieChoice) {
    setTimeout(() => {
      const banner = document.getElementById('cookieConsent');
      if (banner) banner.classList.add('show');
    }, 1000);
  }
  
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, functional: true, analytics: true, marketing: true }));
    const banner = document.getElementById('cookieConsent');
    if (banner) banner.classList.remove('show');
    showNotification('✅ Cookie preferences saved!');
  };
  
  const acceptBtn = document.getElementById('acceptCookies');
  const acceptAllModal = document.getElementById('acceptAllModal');
  if (acceptBtn) acceptBtn.addEventListener('click', acceptCookies);
  if (acceptAllModal) acceptAllModal.addEventListener('click', acceptCookies);
  
  const declineBtn = document.getElementById('declineCookies');
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'declined');
      localStorage.setItem('cookiePreferences', JSON.stringify({ necessary: true, functional: false, analytics: false, marketing: false }));
      const banner = document.getElementById('cookieConsent');
      if (banner) banner.classList.remove('show');
      showNotification('❌ Only necessary cookies are active.');
    });
  }
  
  const customizeBtn = document.getElementById('customizeCookies');
  const modal = document.getElementById('cookieModal');
  const closeModal = document.getElementById('closeModal');
  
  if (customizeBtn && modal) {
    customizeBtn.addEventListener('click', () => {
      const savedPrefs = localStorage.getItem('cookiePreferences');
      if (savedPrefs) {
        const prefs = JSON.parse(savedPrefs);
        const funcCheck = document.getElementById('functionalCookies');
        const analyticsCheck = document.getElementById('analyticsCookies');
        const marketingCheck = document.getElementById('marketingCookies');
        if (funcCheck) funcCheck.checked = prefs.functional || false;
        if (analyticsCheck) analyticsCheck.checked = prefs.analytics || false;
        if (marketingCheck) marketingCheck.checked = prefs.marketing || false;
      }
      modal.classList.add('show');
    });
  }
  
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (modal) modal.classList.remove('show');
    });
  }
  
  const savePrefs = document.getElementById('savePreferences');
  if (savePrefs) {
    savePrefs.addEventListener('click', () => {
      const preferences = {
        necessary: true,
        functional: document.getElementById('functionalCookies')?.checked || false,
        analytics: document.getElementById('analyticsCookies')?.checked || false,
        marketing: document.getElementById('marketingCookies')?.checked || false
      };
      localStorage.setItem('cookieConsent', 'customized');
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      const banner = document.getElementById('cookieConsent');
      if (banner) banner.classList.remove('show');
      if (modal) modal.classList.remove('show');
      showNotification('✅ Your cookie preferences have been saved!');
    });
  }
  
  window.addEventListener('click', (e) => {
    if (e.target === modal && modal) {
      modal.classList.remove('show');
    }
  });
}

//  SINGLE INIT FUNCTION (ALL FEATURES) 
function init() {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);
  loadCart();
  
  // Navigation
  document.querySelectorAll('.nav-link, .footer-links a, .footer-nav-link, .footer-links-column a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      if (page) showPage(page);
    });
  });
  
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
  
  // Hero buttons
  const viewMenuBtn = document.getElementById('viewMenuBtn');
  if (viewMenuBtn) viewMenuBtn.addEventListener('click', () => showPage('menu'));
  
  // Cart
  const orderTrigger = document.getElementById('orderTrigger');
  const cartTrigger = document.getElementById('cartTrigger');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartOverlay = document.getElementById('cartOverlay');
  if (orderTrigger) orderTrigger.addEventListener('click', openCart);
  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  
  // Checkout
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length) {
        showNotification(translations[currentLang].orderPlaced);
        cart = [];
        updateCartUI();
        saveCart();
        closeCart();
      }
    });
  }
  
  // Contact form
  const sendContactBtn = document.getElementById('sendContactBtn');
  if (sendContactBtn) {
    sendContactBtn.addEventListener('click', () => {
      const name = document.getElementById('contactNameInput')?.value;
      if (name) {
        showNotification(`✓ Thanks ${name}! Message sent.`);
        const nameInput = document.getElementById('contactNameInput');
        const emailInput = document.getElementById('contactEmailInput');
        const msgInput = document.getElementById('contactMsgInput');
        if (nameInput) nameInput.value = '';
        if (emailInput) emailInput.value = '';
        if (msgInput) msgInput.value = '';
        const successDiv = document.getElementById('contactSuccessMsg');
        if (successDiv) {
          successDiv.classList.add('show');
          setTimeout(() => successDiv.classList.remove('show'), 5000);
        }
      } else {
        showNotification('Please fill in all fields');
      }
    });
  }
  
  // Mobile menu
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
    const images = { burger1: 'img/9.png', kitchen: 'img/kartofel.png', team: 'img/team.jpg' };
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
    const addCustomBtn = document.getElementById('addCustomBtn');
    if (addCustomBtn) addCustomBtn.addEventListener('click', () => addToCart({ id: Date.now(), name: "Custom Burger", price: 11.99, quantity: 1 }));
  }
  
  // Initialize features
  initCategoryFilters();
  initCookieConsent();
  initStoreStatus();
}

// Start everything
init();
