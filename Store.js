// ================= STORE GLOBAL =================
const STORE = {
    accesorios: [
        {
            id: 1,
            name: "Cargador USB-C 20W Apple",
            price: 1200,
            image: "https://via.placeholder.com/200"
        },
        {
            id: 2,
            name: "Cable Lightning Original",
            price: 900,
            image: "https://via.placeholder.com/200"
        },
        {
            id: 3,
            name: "AirPods Pro 2",
            price: 13500,
            image: "https://via.placeholder.com/200"
        },
        {
            id: 4,
            name: "Funda Premium iPhone 17 Pro Max",
            price: 800,
            image: "https://i.imgur.com/BizERzE.jpeg"
        },
        {
            id: 5,
            name: "Power Bank 10,000mAh",
            price: 1800,
            image: "https://via.placeholder.com/200"
        }
    ],

    dispositivos: [
        // 🔥 GAMA ALTA
        {
            id: 101,
            name: "iPhone 16",
            tipo: "iPhone",
            price: 36600,
            stock: 29,
            image: "https://i.imgur.com/I02Qzbr.jpeg"
        },
        {
            id: 102,
            name: "iPhone 16e",
            tipo: "iPhone",
            price: 22200,
            stock: 2,
            image: "https://i.imgur.com/2LqFdzT.jpeg"
        },

        // ⚡ GAMA MEDIA
        {
            id: 103,
            name: "iPhone 15",
            tipo: "iPhone",
            price: 22950,
            stock: 8,
            image: "https://i.imgur.com/2rbwdyN.png"
        },
        {
            id: 104,
            name: "iPhone 15 Plus",
            tipo: "iPhone",
            price: 26100,
            stock: 1,
            image: "https://i.imgur.com/FI6Z7pO.png"
        },

        // 💸 ECONÓMICOS
        {
            id: 105,
            name: "iPhone 13",
            tipo: "iPhone",
            price: 16500,
            stock: 3,
            image: "https://i.imgur.com/FBxVP3I.png"
        },
        // 💻 MacBook
    {
        id: 201,
        tipo: "MacBook",
        name: "MacBook Air M2",
        price: 65000,
        stock: 4,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 202,
        tipo: "MacBook",
        name: "MacBook Pro M3",
        price: 95000,
        stock: 0,
        image: "https://via.placeholder.com/200"
    },

    // 📲 iPad
    {
        id: 301,
        tipo: "iPad",
        name: "iPad 10",
        price: 28000,
        stock: 6,
        image: "https://via.placeholder.com/200"
    }
],


    reparaciones: [
        {
            id: 201,
            name: "Pantalla iPhone",
            price: 3500
        },
        {
            id: 202,
            name: "Cambio de batería",
            price: 2500
        },
        {
            id: 203,
            name: "Diagnóstico",
            price: 800     
        }
    ]
};