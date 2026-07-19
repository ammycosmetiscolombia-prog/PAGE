const products = [
  {
    id: 16,
    category: "Cuerpo",
    name: "Mantequilla corporal Bioaqua",
    description: "Hidrata profundamente y deja la piel suave con aroma afrutado.",
    price: 15000,
    image: "MantequillaCorporalBioaquaPrecio15.000.jpeg",
  },
  {
    id: 17,
    category: "Cuerpo",
    name: "Splash corporal",
    description: "Frescura corporal ligera para mantener tu piel perfumada y suave.",
    price: 9000,
    image: "SplashcorporalPrecio9.000.jpg",
  },
  {
    id: 18,
    category: "Cuerpo",
    name: "Crema corporal de arroz",
    description: "Cuidado nutritivo para la piel con extracto de arroz.",
    price: 11000,
    image: "imagen3.jpg",
  },
  {
    id: 19,
    category: "Accesorios",
    name: "Beauty blender",
    description: "Esponja suave para aplicar base y difuminar maquillaje.",
    price: 4000,
    image: "imagen4.jpg",
  },
  {
    id: 20,
    category: "Accesorios",
    name: "Balaca deportiva",
    description: "Suave y cómoda para entrenar o mantener el cabello recogido.",
    price: 4000,
    image: "imagen5.jpg",
  },
  {
    id: 21,
    category: "Accesorios",
    name: "Balaca skincare",
    description: "Perfecta para rutinas de limpieza facial y cuidado del cutis.",
    price: 6500,
    image: "imagen6.jpg",
  },
  {
    id: 22,
    category: "Accesorios",
    name: "Borlas maquillaje",
    description: "Set de borlas para aplicar polvo, rubor y contorno con precisión.",
    price: 4500,
    image: "imagen7.jpg",
  },
  {
    id: 23,
    category: "Accesorios",
    name: "Encrespador",
    description: "Herramienta para rizar y levantar pestañas de manera segura.",
    price: 6000,
    image: "imagen8.jpg",
  },
  {
    id: 24,
    category: "Cara",
    name: "Perfiladores de cejas",
    description: "Trazos definidos para cejas con acabado natural.",
    price: 3000,
    image: "imagen9.jpg",
  },
  {
    id: 25,
    category: "Pelo",
    name: "Mini cepillo",
    description: "Pequeño y práctico para desenredar o retocar en cualquier momento.",
    price: 6000,
    image: "imagen10.jpg",
  },
  {
    id: 26,
    category: "Cara",
    name: "Masajeador Facial",
    description: "Relaja el rostro y mejora la circulación con suaves masajes.",
    price: 5000,
    image: "imagen11.jpg",
  },
  {
    id: 27,
    category: "Accesorios",
    name: "Espejo tocador",
    description: "Espejo grande para maquillaje y cuidado diario.",
    price: 10500,
    image: "imagen12.jpg",
  },
  {
    id: 28,
    category: "Accesorios",
    name: "Espejo mini",
    description: "Espejo compacto para llevar en el bolso o cartera.",
    price: 4000,
    image: "imagen13.jpg",
  },
  {
    id: 29,
    category: "Accesorios",
    name: "Espejo y peinilla",
    description: "Kit práctico con espejo y peine para retoques rápidos.",
    price: 8000,
    image: "imagen14.jpg",
  },
  {
    id: 30,
    category: "Cara",
    name: "Agua micelar",
    description: "Limpia y desmaquilla la piel con suavidad.",
    price: 6000,
    image: "imagen15.jpg",
  },
  {
    id: 31,
    category: "Cara",
    name: "Crema facial perilla",
    description: "Hidrata y calma la piel después de la rutina facial.",
    price: 6000,
    image: "imagen16.jpg",
  },
  {
    id: 32,
    category: "Cara",
    name: "Crema facial Ácido hialurónico",
    description: "Hidrata profundamente y ayuda a mantener la piel suave.",
    price: 6000,
    image: "imagen17.jpg",
  },
  {
    id: 33,
    category: "Cara",
    name: "Sérum ácido salicílico",
    description: "Ayuda a limpiar los poros y reducir imperfecciones.",
    price: 6000,
    image: "imagen18.jpg",
  },
  {
    id: 34,
    category: "Cara",
    name: "Sérum de centella asiática",
    description: "Calma y repara la piel con ingredientes naturales.",
    price: 6000,
    image: "imagen19.jpg",
  },
  {
    id: 35,
    category: "Cara",
    name: "Sérum vitamina B5",
    description: "Nutre y suaviza la piel con una fórmula ligera.",
    price: 6000,
    image: "imagen20.jpg",
  },
  {
    id: 36,
    category: "Cara",
    name: "Contorno de ojeras Rosas",
    description: "Suaviza la zona de ojos con frescura y color sutil.",
    price: 5000,
    image: "imagen21.jpg",
  },
  {
    id: 37,
    category: "Cara",
    name: "Contorno de ojeras ácido salicílico",
    description: "Ayuda a reducir inflamación y refrescar el contorno.",
    price: 5000,
    image: "imagen22.jpg",
  },
  {
    id: 38,
    category: "Cara",
    name: "Contorno de ojeras de arroz",
    description: "Hidrata y ilumina la zona de ojos con suavidad.",
    price: 5000,
    image: "imagen23.jpg",
  },
  {
    id: 39,
    category: "Cara",
    name: "Colágeno para labios/ojeras Ácido hialurónico",
    description: "Reafirma y humecta labios y zona de ojeras.",
    price: 2000,
    image: "imagen24.jpg",
  },
  {
    id: 40,
    category: "Cara",
    name: "Colágeno para labios/ojeras de Retinol",
    description: "Ayuda a regenerar la piel y reducir líneas finas.",
    price: 2000,
    image: "imagen25.jpg",
  },
  {
    id: 41,
    category: "Cara",
    name: "Colágeno para labios/ojeras",
    description: "Hidrata intensamente el contorno de ojos y labios.",
    price: 2000,
    image: "imagen26.jpg",
  },
  {
    id: 42,
    category: "Cara",
    name: "Mascarilla facial Ácido hialurónico",
    description: "Hidrata y revitaliza la piel con una textura fresca.",
    price: 4000,
    image: "imagen28.jpg",
  },
  {
    id: 44,
    category: "Cara",
    name: "Toallitas desmaquillantes",
    description: "Limpian el rostro con suavidad y sin irritar.",
    price: 6000,
    image: "imagen29.jpg",
  },
  {
    id: 45,
    category: "Cara",
    name: "Jabón facial de durazno",
    description: "Limpia y suaviza la piel con aroma frutal delicado.",
    price: 7000,
    image: "imagen30.jpg",
  },
  {
    id: 46,
    category: "Accesorios",
    name: "Brochas viajeras",
    description: "Set compacto de brochas para maquillaje en movimiento.",
    price: 7000,
    image: "imagen31.jpg",
  },
  {
    id: 47,
    category: "Accesorios",
    name: "Brochas Kabuki",
    description: "Brocha Kabuki para un acabado suave y uniforme.",
    price: 10000,
    image: "imagen32.jpg",
  },
  {
    id: 48,
    category: "Cara",
    name: "Bálsamo de labios",
    description: "Hidrata y protege los labios con suavidad.",
    price: 3500,
    image: "imagen33.jpg",
  },
  {
    id: 49,
    category: "Ojos",
    name: "Pestañina oscura",
    description: "Máscara de pestañas para definición intensa y volumen.",
    price: 6000,
    image: "imagen34.jpg",
  },
  {
    id: 50,
    category: "Cara",
    name: "Lip Gloss ph juguito",
    description: "Brillo de labios con efecto jugoso y ligero color.",
    price: 5000,
    image: "imagen35.jpg",
  },
  {
    id: 51,
    category: "Cara",
    name: "Lip Gloss ph",
    description: "Brillo hidratante para labios con acabado natural.",
    price: 6000,
    image: "imagen36.jpg",
  },
  {
    id: 52,
    category: "Cara",
    name: "Rubor en polvo",
    description: "Color suave y duradero para mejillas frescas.",
    price: 6000,
    image: "imagen37.jpg",
  },
  {
    id: 53,
    category: "Cara",
    name: "Polvo compacto Kevin y Coco",
    description: "Acabado mate y fijación para todo el día.",
    price: 10000,
    image: "imagen38.jpg",
  },
  {
    id: 54,
    category: "Cara",
    name: "Tonos del 1 al 4",
    description: "Selección de tonos para maquillaje básico y elegante.",
    price: 10000,
    image: "imagen39.jpg",
  },
  {
    id: 55,
    category: "Cara",
    name: "Iluminador",
    description: "Aporta brillo sutil en pómulos y zona T.",
    price: 6000,
    image: "imagen40.jpg",
  },
  {
    id: 56,
    category: "Cuerpo",
    name: "Protector solar Sadoer",
    description: "Protección diaria con fórmula ligera para el rostro.",
    price: 8000,
    image: "imagen41.jpg",
  },
  {
    id: 57,
    category: "Cara",
    name: "Kit primer y fijador",
    description: "Primer y spray fijador para maquillaje duradero.",
    price: 10000,
    image: "imagen42.jpg",
  },
  {
    id: 58,
    category: "Cara",
    name: "Corrector de ojeras",
    description: "Camufla imperfecciones y aporta cobertura natural.",
    price: 6000,
    image: "imagen43.jpg",
  },
  {
    id: 59,
    category: "Cara",
    name: "Base",
    description: "Base ligera para un tono uniforme y acabado natural.",
    price: 6000,
    image: "imagen44.jpg",
  },
  {
    id: 60,
    category: "Cara",
    name: "Tónico facial de granada",
    description: "Refresca la piel y contribuye a una apariencia radiante.",
    price: 12000,
    image: "imagen45.jpg",
  },
  {
    id: 61,
    category: "Cara",
    name: "Tónico facial de ácido hialurónico",
    description: "Aporta hidratación profunda y mejora la barrera cutánea.",
    price: 12000,
    image: "imagen46.jpg",
  },
  {
    id: 62,
    category: "Cara",
    name: "Tónico facial de perilla",
    description: "Calma y equilibra la piel con extracto de perilla.",
    price: 12000,
    image: "imagen47.jpg",
  },
  {
    id: 63,
    category: "Cara",
    name: "Tónico facial de Nicotinamida",
    description: "Mejora el tono y textura de la piel con niacinamida.",
    price: 12000,
    image: "imagen48.jpg",
  },
  {
    id: 64,
    category: "Cara",
    name: "Iluminador",
    description: "Brillo delicado para iluminar puntos altos del rostro.",
    price: 6000,
    image: "imagen49.jpg",
  },
  {
    id: 65,
    category: "Cara",
    name: "Toallitas desmaquillantes",
    description: "Paquete práctico para retirar maquillaje de forma rápida.",
    price: 6000,
    image: "imagen50.jpg",
  },
  {
    id: 66,
    category: "Ojos",
    name: "Delineador de ojos",
    description: "Trazo preciso para definir la mirada con intensidad.",
    price: 6000,
    image: "imagen51.jpg",
  },
];

const sellerEmail = "ammycosmetiscolombia@gmail.com";
const whatsappNumber = "+573206185147"; // número principal usado en la tienda

const productList = document.getElementById("productList");
const categoryButtonsContainer = document.getElementById("categoryButtons");
const searchInput = document.getElementById("searchInput");
const cartItemsElement = document.getElementById("cartItems");
const cartTotalElement = document.getElementById("cartTotal");
const checkoutButton = document.getElementById("checkoutButton");
const orderForm = document.getElementById("orderForm");
const toastBox = document.getElementById("toast");

let currentCategory = "Todos";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("ammyCart") || "[]");
let conversationHistory = JSON.parse(localStorage.getItem("ammyChatHistory") || "[]");
const apiBaseUrl = window.location.protocol === "file:" ? "http://localhost:3000" : "";

function saveConversationHistory() {
  localStorage.setItem("ammyChatHistory", JSON.stringify(conversationHistory));
}

function recordConversation(role, content) {
  if (!content) return;
  conversationHistory.push({
    role,
    content,
    timestamp: new Date().toISOString(),
  });
  saveConversationHistory();
}

function renderConversationHistory() {
  if (!chatThread || conversationHistory.length === 0) return false;
  chatThread.innerHTML = "";
  conversationHistory.forEach((entry) => {
    const message = document.createElement("div");
    message.className = `chat-message ${entry.role}`;
    const paragraph = document.createElement("p");
    paragraph.textContent = entry.content;
    message.appendChild(paragraph);
    chatThread.appendChild(message);
  });
  chatThread.scrollTop = chatThread.scrollHeight;
  return true;
}

function formatCurrency(amount) {
  return `$${amount.toLocaleString("es-CO")}`;
}

function getImagePath(imageName) {
  return imageName ? `assets/images/${imageName}` : "";
}

function saveCart() {
  localStorage.setItem("ammyCart", JSON.stringify(cart));
}

function getFilteredProducts() {
  const query = searchQuery.trim().toLowerCase();
  return products.filter((product) => {
    const matchesCategory = currentCategory === "Todos" || product.category === currentCategory;
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
}

function renderCategoryButtons() {
  if (!categoryButtonsContainer) return;

  const categories = ["Todos", "Cara", "Ojos", "Cuerpo", "Pelo", "Accesorios"];
  categoryButtonsContainer.innerHTML = categories
    .map(
      (category) => `
        <button type="button" class="category-btn ${currentCategory === category ? "active" : ""}" data-category="${category}">
          ${category}
        </button>
      `
    )
    .join("");

  categoryButtonsContainer.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;
      renderCategoryButtons();
      renderProducts();
    });
  });
}

function renderProducts() {
  if (!productList) return;

  const filtered = getFilteredProducts();
  if (filtered.length === 0) {
    productList.innerHTML = '<p class="empty-state">No hay productos que coincidan con tu búsqueda.</p>';
    return;
  }

  if (currentCategory === "Todos") {
    const categories = [...new Set(filtered.map((p) => p.category))];
    productList.innerHTML = categories
      .map((category) => {
        const productsInCategory = filtered.filter((p) => p.category === category);
        return `
          <section class="category-section">
            <div class="category-header">
              <h3>${category}</h3>
              <p>${productsInCategory.length} productos</p>
            </div>
            <div class="products-grid category-grid">
              ${productsInCategory
                .map(
                  (product) => `
                    <article id="product-${product.id}" class="product-card ${cart.find((item) => item.id === product.id)?.quantity>0 ? 'selected' : ''}">
                      ${product.image ? `<img class="product-image" src="${getImagePath(product.image)}" alt="${product.name}" />` : ""}
                      <h3>${product.name}</h3>
                      <p>${product.description}</p>
                      <p class="price">${formatCurrency(product.price)}</p>
                      <div class="product-actions">
                        <button type="button" class="quantity-btn" onclick="decreaseQuantity(${product.id})">-</button>
                        <span class="quantity-label">${cart.find((item) => item.id === product.id)?.quantity || 0}</span>
                        <button type="button" class="quantity-btn" onclick="increaseQuantity(${product.id})">+</button>
                      </div>
                      <button type="button" onclick="addToCart(${product.id})">Agregar al carrito</button>
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `;
      })
      .join("");
  } else {
    productList.innerHTML = `
      <section class="category-section">
        <div class="category-header">
          <h3>${currentCategory}</h3>
          <p>${filtered.length} productos</p>
        </div>
        <div class="products-grid category-grid">
          ${filtered
            .map(
              (product) => `
                <article id="product-${product.id}" class="product-card ${cart.find((item) => item.id === product.id)?.quantity>0 ? 'selected' : ''}">
                  ${product.image ? `<img class="product-image" src="${getImagePath(product.image)}" alt="${product.name}" />` : ""}
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
                  <p class="price">${formatCurrency(product.price)}</p>
                  <div class="product-actions">
                    <button type="button" class="quantity-btn" onclick="decreaseQuantity(${product.id})">-</button>
                    <span class="quantity-label">${cart.find((item) => item.id === product.id)?.quantity || 0}</span>
                    <button type="button" class="quantity-btn" onclick="increaseQuantity(${product.id})">+</button>
                  </div>
                  <button type="button" onclick="addToCart(${product.id})">Agregar al carrito</button>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `;
  }
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchQuery = event.target.value;
    renderProducts();
  });
}

const aiButtons = document.querySelectorAll(".ai-btn");
const chatThread = document.getElementById("chatThread");
const aiQuestionForm = document.getElementById("aiQuestionForm");
const aiQuestionInput = document.getElementById("aiQuestionInput");

function addChatMessage(role, text) {
  if (!chatThread) return null;
  const message = document.createElement("div");
  message.className = `chat-message ${role}`;
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  message.appendChild(paragraph);
  chatThread.appendChild(message);
  chatThread.scrollTop = chatThread.scrollHeight;
  recordConversation(role, text);
  return message;
}

function addUserMessage(text) {
  return addChatMessage("user", text);
}

function addAssistantMessage(text) {
  if (!chatThread) return null;
  const message = document.createElement("div");
  message.className = "chat-message assistant";
  if (Array.isArray(text)) {
    text.forEach((line) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = line;
      message.appendChild(paragraph);
    });
    recordConversation("assistant", text.join("\n"));
  } else {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    message.appendChild(paragraph);
    recordConversation("assistant", text);
  }
  chatThread.appendChild(message);
  chatThread.scrollTop = chatThread.scrollHeight;
  return message;
}

function animateAssistantMessage(lines) {
  if (!chatThread) return;
  recordConversation("assistant", lines.join("\n"));
  const message = document.createElement("div");
  message.className = "chat-message assistant";
  const container = document.createElement("div");
  container.className = "animated-response";
  message.appendChild(container);
  chatThread.appendChild(message);

  let index = 0;
  const showNextLine = () => {
    if (index >= lines.length) return;
    const paragraph = document.createElement("p");
    paragraph.textContent = lines[index];
    container.appendChild(paragraph);
    chatThread.scrollTop = chatThread.scrollHeight;
    index += 1;
    if (index < lines.length) {
      setTimeout(showNextLine, 600);
    }
  };

  showNextLine();
  return message;
}

const aiTopics = {
  comprar: [
    "¡Hola! Soy Ammy, tu asistente de compras favorita.",
    "Te explico paso a paso cómo comprar en AMMYCOSMETIC:",
    "1️⃣ Elige los productos que te quieres llevar.",
    "2️⃣ Ajusta la cantidad con + / - para que sea perfecto.",
    "3️⃣ Agrega todo al carrito y revisa tu selección.",
    "4️⃣ Completa tus datos en la página de pedido.",
    "5️⃣ Pide un cupón o mi número por WhatsApp si quieres atención personalizada.",
    "Estoy aquí para ayudarte en cada paso, con explicaciones claras y lindas.",
  ],
  envio: [
    "Envíos a toda Colombia con cuidado extra en el embalaje.",
    "Tu pedido suele llegar en 2-5 días hábiles, dependiendo de tu ciudad.",
    "Si necesitas algo urgente, envíanos un mensaje por WhatsApp y te ayudamos rápido.",
  ],
  pago: [
    "Aceptamos Nequi, Daviplata, transferencias y efectivo cuando aplique.",
    "Al completar tu pedido, recibirás la confirmación por correo y WhatsApp.",
    "Todo está pensado para que tu pago sea seguro y sin preocupaciones.",
  ],
  cupones: [
    "¡Aprovecha nuestros cupones! Los descuentos hacen tu compra más dulce.",
    "Pregunta por los códigos activos y usa AMMY10 para un regalo en tu primera orden.",
    "Te puedo ayudar a encontrar la mejor promo para tu pedido.",
  ],
  promociones: [
    "Tenemos promociones especiales para ti: combos, descuentos y ofertas lindas.",
    "Compra más y ahorra con opciones pensadas en tu estilo.",
    "Si quieres algo exclusivo, escríbeme por WhatsApp y te doy la recomendación perfecta.",
  ],
  horario: [
    "Te atiendo todos los días con mucho cariño.",
    "El despacho sale en días hábiles y por WhatsApp estamos disponibles de 9:00 a 19:00.",
    "Estoy aquí para hacer tu experiencia de compra más bonita.",
  ],
  contacto: [
    "Para contactarnos, usa WhatsApp al +57 320 618 5147 o envía un correo.",
    "Responderé con atención personalizada y te ayudaré en cada paso.",
  ],
};

function stripDigits(s) {
  return (s || "").replace(/\D+/g, "");
}

function createWhatsAppAnchor() {
  const phone = stripDigits(whatsappNumber) || "573206185147";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent("Estoy interesado en algunos productos de AMMY COSMETIC")}`;
  const a = document.createElement("a");
  a.className = "button whatsapp-assist";
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.href = url;
  a.textContent = "Contactar por WhatsApp";
  return a;
}

function getLocalAiAnswer(topic, question = "") {
  const trimmed = (question || "").trim().toLowerCase();

  if (trimmed) {
    if (/hola|buenos|buenas|hey|saludos/.test(trimmed)) {
      return {
        answer: [
          "¡Hola! Soy Ammy, tu asistente de belleza.",
          "Cuéntame qué necesitas y yo te ayudaré a resolverlo paso a paso.",
        ],
        animated: true,
      };
    }
    if (/env[ií]o|envios|llegar|entrega/.test(trimmed)) return { answer: aiTopics.envio, animated: true };
    if (/pago|transferencia|nequi|daviplata|efectivo|comprobante/.test(trimmed)) return { answer: aiTopics.pago, animated: true };
    if (/comprar|pedido|carrito|orden/.test(trimmed)) return { answer: aiTopics.comprar, animated: true };
    if (/cupon|descuento/.test(trimmed)) return { answer: aiTopics.cupones, animated: true };
    if (/promo|combo|oferta/.test(trimmed)) return { answer: aiTopics.promociones, animated: true };
    if (/horar|atenci/i.test(trimmed)) return { answer: aiTopics.horario, animated: true };
    if (/contact|contacto|email|correo/.test(trimmed)) return { answer: aiTopics.contacto, animated: true };
    if (/whatsapp|numero|n[uú]mero|celular|tel[eé]fono|cont[aá]ctame/.test(trimmed)) {
      return {
        answer: [
          "¡Claro! Aquí tienes el número de contacto:",
          "📱 +57 320 618 5147",
          "Te atiendo rápido por WhatsApp para ayudarte con tu pedido.",
        ],
        animated: true,
      };
    }
    return {
      answer: [
        "No entendí muy bien, pero puedo ayudarte con esto:",
        "• Envios",
        "• Pagos",
        "• Cupones",
        "• Cómo comprar",
        "• Mi número de WhatsApp",
        "Escribe tu duda con palabras simples y te respondo rápido.",
      ],
      animated: true,
      fallback: true,
    };
  }

  const t = (topic || "").toLowerCase();
  if (aiTopics[t]) return { answer: aiTopics[t], animated: true };

  return {
    answer: [
      "Selecciona un tema para ver una respuesta rápida.",
      "Usa los botones arriba o escribe tu pregunta para comenzar.",
    ],
    animated: true,
  };
}

function askAi({ topic = "comprar", question = "" } = {}) {
  if (!chatThread) return;
  const result = getLocalAiAnswer(topic, question);
  if (question) addUserMessage(question);
  if (result.animated && Array.isArray(result.answer)) {
    animateAssistantMessage(result.answer);
  } else {
    addAssistantMessage(result.answer);
  }
  if (result.fallback) {
    const note = document.createElement("div");
    note.className = "assistant-note";
    note.textContent = "¿Quieres hablar con nosotros por WhatsApp?";
    chatThread.appendChild(note);
    chatThread.appendChild(createWhatsAppAnchor());
    chatThread.scrollTop = chatThread.scrollHeight;
  }
  if (!question && !result.answer.length) {
    recordConversation("assistant", "No se obtuvo respuesta.");
  }
}

if (aiButtons.length && chatThread) {
  aiButtons.forEach((button) => {
    button.addEventListener("click", () => {
      aiButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const topic = button.dataset.topic;
      addUserMessage(button.textContent);
      askAi({ topic });
    });
  });
}

if (aiQuestionForm) {
  aiQuestionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = aiQuestionInput?.value.trim();
    if (!question) return;
    askAi({ topic: "custom", question });
    if (aiQuestionInput) aiQuestionInput.value = "";
  });
}

function renderCart() {
  if (cartItemsElement) {
    if (cart.length === 0) {
      cartItemsElement.innerHTML = "<p class=\"empty-cart\">Tu carrito está vacío.</p>";
    } else {
      cartItemsElement.innerHTML = cart
        .map(
          (item) => `
          <div class="cart-item">
            <div>
              <strong>${item.name}</strong>
              <p>${item.quantity} x ${formatCurrency(item.price)}</p>
              <div class="cart-quantity-controls">
                <button type="button" onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button type="button" onclick="increaseQuantity(${item.id})">+</button>
              </div>
            </div>
            <div>
              <strong>${formatCurrency(item.price * item.quantity)}</strong>
              <button type="button" onclick="removeFromCart(${item.id})">Eliminar</button>
            </div>
          </div>
        `
        )
        .join("");
    }
  }

  if (cartTotalElement) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = formatCurrency(total);
  }

  if (checkoutButton) {
    checkoutButton.disabled = cart.length === 0;
    checkoutButton.textContent = cart.length === 0 ? "Agrega productos antes" : "Realizar pedido";
  }
}

function showToast(message) {
  if (!toastBox) return;
  toastBox.textContent = `✅ ${message}`;
  toastBox.classList.remove("hidden");
  toastBox.classList.add("visible");
  setTimeout(() => {
    toastBox.classList.remove("visible");
    toastBox.classList.add("hidden");
  }, 1800);
}

function showOrderSuccessModal(whatsappUrl) {
  const modal = document.getElementById("orderSuccessModal");
  const waButton = document.getElementById("whatsappButton");
  const emailButton = document.getElementById("emailButton");
  if (!modal || !waButton || !emailButton) return;

  waButton.onclick = () => {
    if (whatsappUrl) window.open(whatsappUrl, "_blank");
    clearCart();
    window.location.href = "index.html";
  };

  emailButton.textContent = 'Volver al inicio';
  emailButton.onclick = () => {
    clearCart();
    window.location.href = "index.html";
  };

  modal.classList.remove("hidden");
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  renderCart();
  renderProducts();
  showToast("Producto agregado al carrito");
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
  renderProducts();
}

function increaseQuantity(productId) {
  addToCart(productId);
}

function decreaseQuantity(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (!existing) return;
  existing.quantity -= 1;
  if (existing.quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  saveCart();
  renderCart();
  renderProducts();
}

// IA: el comportamiento se implementa en la parte superior del archivo para evitar duplicados.

if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Agrega productos al carrito antes de realizar el pedido.");
      return;
    }
    window.location.href = "pedido.html";
  });
}

function clearCart() {
  cart = [];
  saveCart();
  renderCart();
  renderProducts();
}

function buildOrderSummary(formData) {
  const itemsText = cart
    .map(
      (item) => `- ${item.name} x ${item.quantity}: ${formatCurrency(item.price * item.quantity)}`
    )
    .join("%0A");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return `Hola,%0A%0ASe ha generado un nuevo pedido en AMMYCOSMETIC.%0A%0ACliente:%20${encodeURIComponent(
    formData.name
  )}%0AEmail:%20${encodeURIComponent(formData.email)}%0ATeléfono:%20${encodeURIComponent(
    formData.phone
  )}%0ACC%20o%20TI:%20${encodeURIComponent(formData.document || "No registrado")}%0ADirección:%20${encodeURIComponent(formData.address)}%0ACiudad:%20${encodeURIComponent(
    formData.city
  )}%0ANotas:%20${encodeURIComponent(formData.notes)}%0A%0AProductos:%0A${itemsText}%0A%0ATotal:%20${encodeURIComponent(
    formatCurrency(total)
  )}%0A%0AMuchas%20gracias%20por%20tu compra.`;
}

// store last order summary encoded for modal fallbacks
function saveLastOrderSummary(formData) {
  const summary = buildOrderSummary(formData);
  window.__lastOrderSummaryEncoded = summary;
}

if (orderForm) {
  orderForm.addEventListener("submit", async (event) => {
    event.preventDefault();

  if (cart.length === 0) {
    alert("Agrega al menos un producto al carrito antes de realizar el pedido.");
    return;
  }

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    document: document.getElementById("document").value.trim(),
    address: document.getElementById("address").value.trim(),
    city: document.getElementById("city").value.trim(),
    notes: document.getElementById("notes").value.trim() || "Ninguna",
  };

  if (!formData.name || !formData.email || !formData.phone || !formData.document || !formData.address || !formData.city) {
    alert("Por favor completa todos los datos obligatorios.");
    return;
  }

  try {
    // show processing overlay if present
    try { showProcessingOverlay(); } catch (e) {}
    // save order summary for fallback actions
    try { saveLastOrderSummary(formData); } catch (e) {}

    // before posting, check backend health to ensure SMTP is reachable
    try {
      const healthResp = await fetch(`${apiBaseUrl}/api/health`, { method: 'GET' });
      if (!healthResp.ok) {
        const errorBody = await healthResp.json().catch(()=>({}));
        const msg = errorBody && errorBody.message ? errorBody.message : 'Servidor no disponible';
        try { hideProcessingOverlay(); } catch (e) {}
        showToast('El servidor de envíos no está listo: ' + msg);
        return;
      }
    } catch (e) {
      try { hideProcessingOverlay(); } catch (ee) {}
      showToast('No se pudo contactar al servidor de envíos. Asegúrate de ejecutar el servidor en http://localhost:3000');
      return;
    }

    const response = await fetch(`${apiBaseUrl}/api/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        document: formData.document,
        address: formData.address,
        city: formData.city,
        notes: formData.notes,
        cart,
      }),
    });

    if (!response.ok) {
      try { hideProcessingOverlay(); } catch (e) {}
      const errorData = await response.json().catch(() => ({}));
      const errMsg = errorData.message || 'Error en el servidor al enviar el pedido.';
      showToast(errMsg + ' Revisa configuración del servidor.');
      // fallback: open WhatsApp with order summary so the seller can receive the pedido
      const phone = stripDigits(whatsappNumber) || "573206185147";
      const summary = buildOrderSummary(formData);
      const waUrl = `https://wa.me/${phone}?text=${summary}`;
      showOrderSuccessModal(waUrl);
      return;
    }

    const data = await response.json();
    try { hideProcessingOverlay(); } catch (e) {}
    showOrderSuccessModal(data.whatsappUrl);
  } catch (error) {
    console.error(error);
    try { hideProcessingOverlay(); } catch (e) {}
    // if network error, fallback to WhatsApp summary so the order can be sent manually
    const phone = stripDigits(whatsappNumber) || "573206185147";
    const summary = buildOrderSummary(formData);
    const waUrl = `https://wa.me/${phone}?text=${summary}`;
    showOrderSuccessModal(waUrl);
  }
  });
}

// Processing overlay control (used on pedido.html)
function showProcessingOverlay() {
  const overlay = document.getElementById('processingOverlay');
  if (!overlay) return;
  overlay.classList.remove('hidden');
}

function hideProcessingOverlay() {
  const overlay = document.getElementById('processingOverlay');
  if (!overlay) return;
  overlay.classList.add('hidden');
}


// Gift overlay: play once per user on first visit to index
function initGiftOverlay() {
  try {
    const seen = localStorage.getItem('ammySeenGift');
    const overlay = document.getElementById('giftOverlay');
    if (!overlay) return;
    if (seen) return;
    // show overlay
    overlay.classList.remove('hidden');
    const card = document.getElementById('welcomeCard');
    const close = document.getElementById('closeGift');
    setTimeout(() => { if (card) card.classList.add('open'); }, 360);
    setTimeout(() => {
      try { createConfetti(); } catch (e) {}
      localStorage.setItem('ammySeenGift','1');
    }, 900);

    function hideGift() {
      if (overlay) overlay.classList.add('hidden');
      if (card) card.classList.remove('open');
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) hideGift();
    });
    if (close) close.addEventListener('click', hideGift);
  } catch (e) { }
}

// create simple confetti particles
function createConfetti(count = 24) {
  const overlay = document.getElementById('giftOverlay');
  if (!overlay) return;
  const colors = ['#ff6aa6','#ffd46a','#6af0d6','#ffd0ec','#b98cff'];
  const confRoot = document.createElement('div');
  confRoot.className = 'confetti-root';
  confRoot.style.pointerEvents = 'none';
  overlay.appendChild(confRoot);
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.background = colors[i % colors.length];
    el.style.left = (20 + Math.random() * 60) + '%';
    el.style.transform = `translateY(-20px) rotate(${Math.random()*360}deg)`;
    confRoot.appendChild(el);
    // animate
    setTimeout(() => {
      el.style.transform = `translateY(${200 + Math.random()*160}px) rotate(${Math.random()*720}deg)`;
      el.style.opacity = '0';
    }, 80 + i*20);
  }
  // cleanup
  setTimeout(() => { confRoot.remove(); }, 3000);
}

// animate CTA buttons and apply periodic pulses
function animateCTAs() {
  try {
    const heroButtons = document.querySelectorAll('.hero-actions .button');
    heroButtons.forEach((b, idx) => { setTimeout(()=> b.classList.add('pulse'), idx*200); });
    // keep live icon animation via CSS keyframes, avoid adding pulse class which caused visual issues
    // the CSS `tikBounce` already animates the icon smoothly
  } catch (e) {}
}

// ripple effect for all buttons
document.addEventListener('click', function (e) {
  const btn = e.target.closest('.button');
  if (!btn) return;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

// run CTA animation on load
try { animateCTAs(); } catch (e) {}

// Initialize gift overlay on the index page (safe to call everywhere)
let _seenGift = false;
try {
  _seenGift = !!localStorage.getItem('ammySeenGift');
  initGiftOverlay();
} catch (e) { }

renderCategoryButtons();
renderProducts();
renderCart();
const hasSavedChat = renderConversationHistory();
// If this is the very first visit (no gift seen) don't auto-populate the assistant with instructions — show only the welcome overlay
if (!hasSavedChat) {
  if (chatThread) chatThread.innerHTML = "";
  if (_seenGift) {
    askAi({ topic: "comprar" });
  }
}

// Mark navigation link active based on current path
try {
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const path = window.location.pathname.split('/').pop();
    if (path === href || (path === '' && href === 'index.html') || (path === '' && href === './index.html')) {
      link.classList.add('active-link');
    }
  });
} catch (e) {
  // ignore
}
