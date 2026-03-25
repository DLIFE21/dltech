// ================= CONFIG =================
const CONFIG = {
    phone: "18292890243"
};

// ================= MODELOS =================
const MODELS = {
    iphone: ["iPhone 16 Pro Max","iPhone 16 Pro","iPhone 16","iPhone 15 Pro Max","iPhone 15 Pro","iPhone 15","iPhone 14 Pro Max","iPhone 14","iPhone 13","iPhone 12","iPhone 11","iPhone XR","iPhone X"],
    ipad: ["iPad Pro","iPad Air","iPad Mini","iPad 10th Gen","iPad 9th Gen"],
    macbook: ["MacBook Pro M3","MacBook Pro M2","MacBook Air M2","MacBook Air M1"],
    airpods: ["AirPods 1","AirPods 2","AirPods 3","AirPods Pro","AirPods Pro 2","AirPods Max"]
};

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initDeviceSelector();
    initRepairForm();
    initProducts();
    restoreSelection();
});

// ================= NAVEGACIÓN =================
function initNavigation() {
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(e) {
            if (this.href && !this.href.includes("#")) {
                e.preventDefault();

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    });
}

// ================= SELECT DINÁMICO =================
function initDeviceSelector() {
    const deviceSelect = document.getElementById("device");
    const modelSelect = document.getElementById("model");

    if (!deviceSelect || !modelSelect) return;

    deviceSelect.addEventListener("change", () => {
        const selected = deviceSelect.value;
        modelSelect.innerHTML = `<option value="">-- Seleccionar modelo --</option>`;

        if (MODELS[selected]) {
            MODELS[selected].forEach(model => {
                const option = document.createElement("option");
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }

        localStorage.setItem("selectedDevice", selected);
    });

    modelSelect.addEventListener("change", () => {
        localStorage.setItem("selectedModel", modelSelect.value);
    });
}

// ================= RESTAURAR SELECCIÓN =================
function restoreSelection() {
    const deviceSelect = document.getElementById("device");
    const modelSelect = document.getElementById("model");

    const savedDevice = localStorage.getItem("selectedDevice");
    const savedModel = localStorage.getItem("selectedModel");

    if (deviceSelect && savedDevice) {
        deviceSelect.value = savedDevice;
        deviceSelect.dispatchEvent(new Event("change"));

        setTimeout(() => {
            if (modelSelect && savedModel) {
                modelSelect.value = savedModel;
            }
        }, 100);
    }
}

// ================= FORMULARIO =================
function initRepairForm() {
    const form = document.getElementById("repairForm");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();

        const name = document.getElementById("name");
        const phone = document.getElementById("phone");
        const email = document.getElementById("email");

        let valid = true;

        document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
        document.querySelectorAll("input").forEach(el => el.classList.remove("error"));

        if (!name.value.trim()) {
            showError(name, "nameError");
            valid = false;
        }

        if (!phone.value.trim()) {
            showError(phone, "phoneError");
            valid = false;
        }

        if (!email.value.includes("@")) {
            showError(email, "emailError");
            valid = false;
        }

        if (!valid) return;

        const device = document.getElementById("device").value;
        const model = document.getElementById("model").value;
        const problem = document.querySelector("select[required]").value;
        const description = document.querySelector("textarea").value;

        const orderID = generateOrderID();

        const message = `
╔══════════════════════╗
      *DLIFE TECHNOLOGIES*
   SOLICITUD DE REPARACIÓN
╚══════════════════════╝

🆔 *Orden:* #${orderID}

📱 *DISPOSITIVO*
• Tipo: ${device}
• Modelo: ${model}

⚠️ *FALLA*
• Categoría: ${problem}
• Detalles: ${description || "No especificado"}

👤 *CLIENTE*
• Nombre: ${name.value}
• Teléfono: ${phone.value}
• Email: ${email.value}
━━━━━━━━━━━━━━━━━━━━━━
📌 Generado automáticamente
`;

        sendToWhatsApp(message);

        form.reset();
        localStorage.removeItem("selectedDevice");
        localStorage.removeItem("selectedModel");
    });
}

// ================= PRODUCTOS =================
function initProducts() {
    const container = document.getElementById("productContainer");
    if (!container || typeof STORE === "undefined") return;

    renderProducts(STORE.accesorios, container);
}

// ================= RENDER GLOBAL =================
function renderProducts(products, container) {
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">RD$${product.price.toLocaleString()}</p>
            <button class="btn primary">Comprar</button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            buyProduct(product);
        });

        container.appendChild(card);
    });
}

// ================= COMPRA GLOBAL =================
function buyProduct(product) {
    const message = `
╔══════════════════════╗
      DLIFE TECHNOLOGIES
         COMPRA
╚══════════════════════╝

🛒 *PRODUCTO*
• ${product.name}

💰 *PRECIO*
• RD$${product.price.toLocaleString()}

📦 *DISPONIBILIDAD*
• En stock

🙋‍♂️ Hola, me interesa este producto. ¿Sigue disponible?

📌 Generado desde la web
`;

    sendToWhatsApp(message);
}

// ================= UTILIDADES =================
function showError(input, errorId) {
    input.classList.add("error");
    document.getElementById(errorId).style.display = "block";
}

function generateOrderID() {
    return Math.floor(10000 + Math.random() * 90000);
}

function sendToWhatsApp(message) {
    const url = `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
// ================= CATÁLOGO COMPLETO =================
const CATALOG = {
    iphone: ["iPhone 16 Pro Max","iPhone 16 Pro","iPhone 16","iPhone 15 Pro Max","iPhone 15 Pro","iPhone 15","iPhone 14 Pro Max","iPhone 14","iPhone 13","iPhone 12","iPhone 11","iPhone XR","iPhone X"],
    ipad: ["iPad Pro","iPad Air","iPad Mini","iPad 10th Gen","iPad 9th Gen"],
    macbook: ["MacBook Pro M3","MacBook Pro M2","MacBook Air M2","MacBook Air M1"],
    watch: ["Apple Watch Ultra","Apple Watch Series 9","Apple Watch SE"],
    imac: ["iMac M3","iMac M1"]
};