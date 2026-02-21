const products = [
    {
        id: "product1",
        url: "https://picsum.photos/679/679?random=101",
        detailUrl: "https://picsum.photos/679/679?random=101",
        title: {
            shortTitle: "Home & Kitchen",
            longTitle: "Pigeon by Stovekraft Favourite Electric Kettle (1.5 L, Silver, Black)"
        },
        price: { mrp: 1195, cost: 625, discount: "47%" },
        description: "This electric kettle from Pigeon will soon become a travelers best friend.",
        discount: "Extra 10% Off",
        tagline: "Deal of the day"
    },
    {
        id: "product2",
        url: "https://pngimg.com/uploads/sandwich/sandwich_PNG45.png",
        detailUrl: "https://pngimg.com/uploads/sandwich/sandwich_PNG45.png",
        title: {
            shortTitle: "Sandwich Makers",
            longTitle: "Flipkart SmartBuy Sandwich 01 Grill (Black)"
        },
        price: { mrp: 1499, cost: 899, discount: "40%" },
        description: "This non-stick sandwich toaster is easy to use and very handy.",
        discount: "From 99+5% Off",
        tagline: "Pestige, Nova & more"
    },

    {
        id: "product3",
        url: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=679&q=80",
        title: {
            shortTitle: "Fitness Gear",
            longTitle: "Adjustable Resistance Tubes Exercise Bands (Multicolor)"
        },
        price: { mrp: 499, cost: 166, discount: "66%" },
        description: "Tone your back muscles and reduce belly fat.",
        discount: "Upto 70% Off",
        tagline: "Deal of the Day"
    },

    {
        id: "product4",
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=679&q=80",
        title: {
            shortTitle: "Smart Watches",
            longTitle: "Fire-Boltt Ninja Call Pro Plus Smartwatch (Black Strap)"
        },
        price: { mrp: 6999, cost: 1499, discount: "78%" },
        description: "Monitor your health and track workouts throughout the day.",
        discount: "Grab Now",
        tagline: "Best Seller"
    },

    {
        id: "product5",
        url: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=679&q=80",
        title: {
            shortTitle: "Trimmers, Dryers & more",
            longTitle: "Nova NHP 8220 Professional Hair Dryer (2800 W, Black)"
        },
        price: { mrp: 1899, cost: 499, discount: "73%" },
        description: "Professional hair dryer perfect for salon-quality styling.",
        discount: "From ₹499",
        tagline: "Kubra, Nova & more"
    },

    {
        id: "product6",
        url: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
        detailUrl: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
        title: { shortTitle: "Mobiles", longTitle: "Apple iPhone 14 (Blue, 128 GB)" },
        price: { mrp: 79900, cost: 66999, discount: "16%" },
        description: "Experience the powerful A15 Bionic chip and advanced camera system.",
        discount: "Best Price",
        tagline: "Top Trending"
    },

    {
        id: "product7",
        url: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg",
        detailUrl: "https://m.media-amazon.com/images/I/81vxWpPpgNL._SX679_.jpg",
        title: { shortTitle: "Mobiles", longTitle: "Samsung Galaxy S23 5G (Cream, 256 GB)" },
        price: { mrp: 89999, cost: 74999, discount: "17%" },
        description: "Capture stunning photos with 50MP camera and blazing-fast 5G.",
        discount: "Special Offer",
        tagline: "Best Seller"
    },

    {
        id: "product8",
        url: "https://m.media-amazon.com/images/I/71vvXGmdKWL._SX679_.jpg",
        detailUrl: "https://m.media-amazon.com/images/I/71vvXGmdKWL._SX679_.jpg",
        title: { shortTitle: "Laptops", longTitle: "HP Pavilion Ryzen 5 Hexa Core (16GB/512GB SSD/Windows 11)" },
        price: { mrp: 67990, cost: 47990, discount: "29%" },
        description: "Powerful laptop with AMD Ryzen processor for multitasking.",
        discount: "Save ₹20000",
        tagline: "Deal of the Day"
    },

    {
        id: "product9",
        url: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
        detailUrl: "https://m.media-amazon.com/images/I/61SUj2aKoEL._SX679_.jpg",
        title: { shortTitle: "Audio", longTitle: "Sony WH-1000XM5 Bluetooth Headset (Black)" },
        price: { mrp: 34990, cost: 29990, discount: "14%" },
        description: "Industry-leading noise cancellation with exceptional sound quality.",
        discount: "Premium Quality",
        tagline: "Best Seller"
    },

    {
        id: "product10",
        url: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Tablets", longTitle: "Apple iPad (9th Gen) 64 GB 10.2 inch with Wi-Fi" },
        price: { mrp: 36900, cost: 29900, discount: "19%" },
        description: "A13 Bionic chip and 10.2-inch Retina display for work and play.",
        discount: "Lowest Price",
        tagline: "Top Trending"
    },

    {
        id: "product11",
        url: "https://picsum.photos/679/679?random=111",
        detailUrl: "https://picsum.photos/679/679?random=111",
        title: { shortTitle: "Home & Kitchen", longTitle: "Philips HL7756/00 750 W Mixer Grinder (4 Jars, Black)" },
        price: { mrp: 8995, cost: 4799, discount: "46%" },
        description: "Powerful 750W motor with 4 jars for all grinding needs.",
        discount: "Super Saver",
        tagline: "Deal of the Day"
    },
    {
        id: "product12",
        url: "https://picsum.photos/679/679?random=112",
        detailUrl: "https://picsum.photos/679/679?random=112",
        title: {
            shortTitle: "Home Appliances",
            longTitle: "Bajaj Majesty MX 20 1000 W Dry Iron (Black)"
        },
        price: { mrp: 1299, cost: 599, discount: "53%" },
        description: "Non-stick coated soleplate for easy gliding.",
        discount: "Half Price",
        tagline: "Top Rated"
    },

    {
        id: "product13",
        url: "https://picsum.photos/679/679?random=113",
        detailUrl: "https://picsum.photos/679/679?random=113",
        title: {
            shortTitle: "Cooling",
            longTitle: "Symphony Diet 22i 22 L Room/Personal Air Cooler (White)"
        },
        price: { mrp: 8990, cost: 5990, discount: "33%" },
        description: "Compact personal air cooler with powerful air throw.",
        discount: "Summer Special",
        tagline: "Best Value"
    },

    {
        id: "product14",
        url: "https://picsum.photos/679/679?random=114",
        detailUrl: "https://picsum.photos/679/679?random=114",
        title: {
            shortTitle: "Kitchen Appliances",
            longTitle: "Prestige PIC 20.0 Induction Cooktop (Black)"
        },
        price: { mrp: 3195, cost: 1799, discount: "43%" },
        description: "1600W induction cooktop with preset menu functions.",
        discount: "Great Deal",
        tagline: "Customer Favorite"
    },
    {
        id: "product15",
        url: "https://pngimg.com/uploads/vacuum_cleaner/vacuum_cleaner_PNG24.png",
        detailUrl: "https://pngimg.com/uploads/vacuum_cleaner/vacuum_cleaner_PNG24.png",
        title: { shortTitle: "Home Care", longTitle: "Eureka Forbes Supraclean Vacuum Cleaner (Red, Black)" },
        price: { mrp: 5999, cost: 3499, discount: "41%" },
        description: "Powerful 1000W vacuum cleaner with advanced dust collection.",
        discount: "Clean Save",
        tagline: "Best Seller"
    },

    {
        id: "product16",
        url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Watches", longTitle: "Casio G-Shock Analog-Digital Watch GA-2100-1A1DR" },
        price: { mrp: 10495, cost: 8495, discount: "19%" },
        description: "Carbon Core Guard structure with shock and water resistance.",
        discount: "Trending Now",
        tagline: "Style Statement"
    },

    {
        id: "product17",
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Footwear", longTitle: "Campus Men's MIKE Running Shoes (White, Black)" },
        price: { mrp: 2999, cost: 799, discount: "73%" },
        description: "Comfortable running shoes with breathable mesh.",
        discount: "Flash Sale",
        tagline: "Limited Stock"
    },

    {
        id: "product18",
        url: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Bags", longTitle: "American Tourister AMT FIZZ 32 L Backpack (Black)" },
        price: { mrp: 2100, cost: 1199, discount: "42%" },
        description: "Spacious backpack with multiple compartments.",
        discount: "Back to School",
        tagline: "Student Special"
    },

    {
        id: "product19",
        url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Eyewear", longTitle: "Polaroid Polarized Wayfarer Sunglasses (Black, 54)" },
        price: { mrp: 6999, cost: 3499, discount: "50%" },
        description: "UV protected polarized sunglasses with stylish wayfarer design.",
        discount: "Eye Comfort",
        tagline: "Fashion Forward"
    },

    {
        id: "product20",
        url: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Wallets", longTitle: "Leather Wallet for Men (Tan, 6 Card Slots)" },
        price: { mrp: 1999, cost: 399, discount: "80%" },
        description: "Premium genuine leather wallet with multiple card slots.",
        discount: "Mega Deal",
        tagline: "Best Price"
    },

    {
        id: "product21",
        url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Fitness", longTitle: "Boldfit Gym Dumbbells Set 20kg for Home Gym" },
        price: { mrp: 4999, cost: 1999, discount: "60%" },
        description: "Adjustable weight dumbbells for home gym.",
        discount: "Fitness Deal",
        tagline: "Stay Fit"
    },

    {
        id: "product22",
        url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Yoga", longTitle: "Strauss Yoga Mat 6mm Anti Skid with Carrying Strap (Blue)" },
        price: { mrp: 1499, cost: 499, discount: "66%" },
        description: "Non-slip yoga mat perfect for yoga and pilates.",
        discount: "Wellness Deal",
        tagline: "Healthy Living"
    },

    {
        id: "product23",
        url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Sports", longTitle: "Nivia Storm Football - Size: 5 (Red, White)" },
        price: { mrp: 899, cost: 399, discount: "55%" },
        description: "Durable hybrid football for all surfaces.",
        discount: "Sports Special",
        tagline: "Game On"
    },

    {
        id: "product24",
        url: "https://images.unsplash.com/photo-1598207951491-255eaf139751?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1598207951491-255eaf139751?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Safety Gear", longTitle: "Steelbird SBA-1 Full Face ISI Certified Helmet (Black)" },
        price: { mrp: 2950, cost: 1299, discount: "55%" },
        description: "ISI certified full face helmet with aerodynamic design.",
        discount: "Safety First",
        tagline: "Ride Safe"
    },

    {
        id: "product25",
        url: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Bottles", longTitle: "Milton Duo DLX 1000 Thermosteel Water Bottle (Blue)" },
        price: { mrp: 1295, cost: 649, discount: "49%" },
        description: "Double wall vacuum insulated bottle keeps drinks hot/cold.",
        discount: "Hydrate",
        tagline: "Stay Hydrated"
    },

    {
        id: "product26",
        url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Books", longTitle: "Atomic Habits by James Clear (Paperback)" },
        price: { mrp: 599, cost: 359, discount: "40%" },
        description: "Transform your life with tiny changes.",
        discount: "Bestseller",
        tagline: "Must Read"
    },

    {
        id: "product27",
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Stationery", longTitle: "Classmate 6 Subject Notebook 300 Pages (Pack of 2)" },
        price: { mrp: 280, cost: 199, discount: "28%" },
        description: "Premium quality notebooks for students.",
        discount: "Study Essential",
        tagline: "Student Choice"
    },

    {
        id: "product28",
        url: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Writing", longTitle: "Reynolds Trimax O3 Gel Pen (Pack of 10, Blue)" },
        price: { mrp: 200, cost: 139, discount: "30%" },
        description: "Smooth writing gel pens with comfortable grip.",
        discount: "Value Pack",
        tagline: "Write On"
    },

    {
        id: "product29",
        url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Toys", longTitle: "Remote Control Rechargeable Sports Racing Car (Red)" },
        price: { mrp: 2999, cost: 999, discount: "66%" },
        description: "High-speed remote control car with rechargeable battery.",
        discount: "Kids Love It",
        tagline: "Fun Time"
    },

    {
        id: "product30",
        url: "https://picsum.photos/679/679?random=130",
        detailUrl: "https://picsum.photos/679/679?random=130",
        title: { shortTitle: "Educational", longTitle: "Learning Piano Keyboard Toy with Mic for Kids" },
        price: { mrp: 1499, cost: 599, discount: "60%" },
        description: "Electronic keyboard with 37 keys and microphone.",
        discount: "Learn Music",
        tagline: "Smart Kids"
    },

    {
        id: "product31",
        url: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Grooming", longTitle: "Philips QT4011/15 Trimmer for Men (Black)" },
        price: { mrp: 1695, cost: 999, discount: "41%" },
        description: "Dura Power technology for extended battery life.",
        discount: "Grooming Deal",
        tagline: "Look Sharp"
    },

    {
        id: "product32",
        url: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?auto=format&fit=crop&w=679&q=80",
        detailUrl: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?auto=format&fit=crop&w=679&q=80",
        title: { shortTitle: "Perfumes", longTitle: "Davidoff Cool Water Eau de Toilette 100ml (For Men)" },
        price: { mrp: 4500, cost: 2199, discount: "51%" },
        description: "Fresh aquatic fragrance with aromatic and woody notes.",
        discount: "Fragrance Deal",
        tagline: "Smell Great"
    }
];

module.exports = products;
