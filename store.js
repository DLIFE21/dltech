// MODELOS POR CATEGORÍA (para reparación)
const MODELS = {
  iphone: ["iPhone 16 Pro Max","iPhone 16 Pro","iPhone 16","iPhone 15 Pro Max","iPhone 15 Pro","iPhone 15","iPhone 14 Pro Max","iPhone 14","iPhone 13","iPhone 12","iPhone 11","iPhone XR","iPhone X"],
  ipad: ["iPad Pro","iPad Air","iPad Mini","iPad 10th Gen","iPad 9th Gen"],
  macbook: ["MacBook Pro M3","MacBook Pro M2","MacBook Air M2","MacBook Air M1"],
  watch: ["Apple Watch Ultra","Apple Watch Series 9","Apple Watch SE"],
  imac: ["iMac M3","iMac M1"]
};

// CATÁLOGO COMPLETO PARA DISPOSITIVOS (ventas)
const STORE = {
  accesorios: [
    { id: 1, name: "Cargador USB-C 20W Apple", price: 1200, image: "https://i.imgur.com/awRBPUu.jpeg" },
    { id: 2, name: "Cable Lightning Original", price: 700, image: "https://i.imgur.com/XasaDsN.jpeg" },
    { id: 3, name: "AirPods Pro 2", price: 13500, image: "https://i.imgur.com/VDyEZgw.jpeg" },
    { id: 4, name: "Funda Premium iPhone 17 Pro Max", price: 800, image: "https://i.imgur.com/BizERzE.jpeg" },
    { id: 5, name: "Power Bank 10,000mAh", price: 1800, image: "https://i.imgur.com/mCRwG2c.png" }
  ],
  dispositivos: [
    { id: 101, name: "iPhone 16", tipo: "iPhone", price: 36600, stock: 28, image: "https://i.imgur.com/I02Qzbr.jpeg" },
    { id: 102, name: "iPhone 16e", tipo: "iPhone", price: 22200, stock: 2, image: "https://i.imgur.com/2LqFdzT.jpeg" },
    { id: 103, name: "iPhone 15 Plus", tipo: "iPhone", price: 26100, stock: 1, image: "https://i.imgur.com/FI6Z7pO.png" },
    { id: 104, name: "iPhone 15", tipo: "iPhone", price: 22950, stock: 8, image: "https://i.imgur.com/2rbwdyN.png" },
    { id: 105, name: "iPhone 14", tipo: "iPhone", price: 26100, stock: 0, image: "https://i.imgur.com/FI6Z7pO.png" },
    { id: 106, name: "iPhone 13", tipo: "iPhone", price: 16500, stock: 4, image: "https://i.imgur.com/FBxVP3I.png" },
    { id: 201, name: "MacBook Air M2", tipo: "MacBook", price: 65000, stock: 4, image: "https://via.placeholder.com/200" },
    { id: 301, name: "iPad 10", tipo: "iPad", price: 28000, stock: 6, image: "https://via.placeholder.com/200" }
  ]
};