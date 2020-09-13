import React, { createContext, useContext, useReducer, useState } from 'react';


// this is the data layer
export const StateContext = createContext();

//Build a provider

export const StateProvider = ({ reducer, initialState, children }) => {

    const [products, setProducts] = useState([
        {
            id: "s1",
            image: "https://ae01.alicdn.com/kf/H9d01cec864454300a16ba8146311b3f2z/-font-b-Men-s-b-font-Cotton-Fashion-font-b-T-shirt-b-font-Full.jpg_220x220xz.jpg",
            otherImages: [],
            price:"14.5",
            title:"Men's Cotton Fashion T-shirt Full Sleeve Mens Summer Tshirts Male Oversized Tee Shirts 5XL Casual T Shirt Tee For Man Streetwear",
            
            category:"men's clothes",
            feature: false,
            amount: Number(2)
            
        },
        {
            id: "s2",
            image: "https://ae01.alicdn.com/kf/Hca2c8df1f6594029b743472d65257bfaA/Naruto-Fashion-Japanese-Anime-T-Shirt-Men-Sasuke-Funny-Cartoon-T-shirt-Casual-Cool-Streetwear-Tshirt.jpg_220x220xz.jpg",
            otherImages:[],
            price:"12.5",
            title:"Naruto Fashion Japanese Anime T Shirt Men Sasuke Funny Cartoon T-shirt Casual Cool Streetwear Tshirt Couple Hip Hop Top Tee Male",
            category:"men's clothes",
            feature:false,
            amount: Number(3)
        },
        {
            id:"s3",
            image: "https://ae01.alicdn.com/kf/H875571e6afe34e908731526e78daee6d6/Vintage-Pink-T-Shirt-Sad-Retro-Anime-Crying-Eyes-Vaporwave-T-Shirt-Men-Short-Sleeve-Tshirt.jpg_220x220xz.jpg",
            otherImages: [],
            price:"12.5",
            title:"Vintage Pink T-Shirt Sad Retro Anime Crying Eyes Vaporwave T-Shirt Men Short Sleeve Tshirt Casual Tees Tops Harajuku Streetwear",
            category:"men's clothes",
            feature: false
            
        },
        {
            id:"s4",
            image: "https://ae01.alicdn.com/kf/H47b77c414d2a4e7ead48fd718f6c614dG/Men-Catana-Cool-Summer-Loose-Men-Women-T-Shirt-Casual-Short-Sleeve-Cat-Print-Anime-Tshirt.jpg_220x220xz.jpg",
            otherImages: [],
            price:"11.5",
            title:"Men Catana Cool Summer Loose Men/Women T Shirt Casual Short Sleeve Cat Print Anime Tshirt Japanese Summer T-Shirt Tops Tee Shirt",
            category:"men's clothes",
            feature: false
            
        },
        {
            id:"s5",
            image: "https://ae01.alicdn.com/kf/H595dd353879c4add800c4649649bf3eaW/Funny-Anime-Print-Oversized-Men-T-Shirt-Hip-Hop-Cotton-T-shirt-O-neck-Summer-Japanese.jpg_220x220.jpg",
            otherImages: [],
            price:"10.5",
            title:"Funny Anime Print Oversized Men T Shirt Hip-Hop Cotton T-shirt O-neck Summer Japanese Male Causal Tshirts 5XL Fashion Loose Tees",
            category:"men's clothes",
            feature:false
            
        },
        {
            id:"s6",
            image: "https://ae01.alicdn.com/kf/Hdac26221824b4dd7b5d6797add8fd9b51/NCLAGEN-font-b-Women-b-font-Top-Loose-Letter-Printed-Short-Sleeve-Cotton-T-shirt-Graphic.jpg_220x220xz.jpg",
            otherImages: [],
            price:"15",
            title:"JCGO Women T-shirt Summer Short Sleeve Cotton Plus Size S-5XL Cute Lazy Sloth Print Funny Casual O Neck Female Tshirt Tees Tops",
            category:"women's clothes",
            feature: false
            
        },
        {
            id:"s7",
            image: "https://ae01.alicdn.com/kf/H1032d39c7dbd44dcabb3a4d0d84da177h/New-Cartoon-Cat-Mouse-Print-T-Shirt-Tops-Women-Harajuku-Kawaii-Short-Sleeve-Vogue-Korean-Style.jpg_220x220xz.jpg",
            otherImages: [],
            price:"13.5",
            title:"New Cartoon Cat Mouse Print T Shirt Tops Women Harajuku Kawaii Short Sleeve Vogue Korean Style Fashion Tees Female",
            category:"women's clothes",
            feature:false
            
        },
        {
            id:"s8",
            image: "https://ae01.alicdn.com/kf/H717bd2d9724b4e4bbba41a5c386f6962i/Harajuku-Women-T-shirts-New-2020-Summer-Funny-Letter-Print-Hip-Hop-Loose-T-shirt-Girls.jpg_220x220xz.jpg",
            otherImages: [],
            price:"13.5",
            title:"Harajuku Women T-shirts New 2020 Summer Funny Letter Print Hip Hop Loose T-shirt Girls Student Streetwear Casual Lady Tops Tees",
            category:"women's clothes",
            feature:false
            
        },
        {
            id:"s9",
            image: "https://ae01.alicdn.com/kf/HLB1Uq47bsnrK1RjSspkq6yuvXXaC/2020-fashion-korean-style-two-piece-set-top-and-pants-track-suits-woman-set-spring-font.jpg_220x220xz.jpg",
            otherImages: [],
            price:"19.5",
            title:"DISNEY Mickey mouse women letter printed Mickey cartoon T-shirt men and women with the same short-sleeved bottoming hot sale",

            category:"women's clothes",
            feature: false
            
        },
        {
            id:"s10",
            image: "https://ae01.alicdn.com/kf/He1f257201f4e4aa8bb274f5fc42844389/Korean-style-Casual-Letter-Print-kpop-punk-Ulzzang-Tees-vintage-Gothic-Harajuku-Loose-tops-Hip-Hop.jpg_220x220xz.jpg",
            otherImages: [],
            price:"12.5",
            title:"Korean style Casual Letter Print kpop punk Ulzzang Tees vintage Gothic Harajuku Loose tops Hip Hop Black T-Shirts Women",
            category:"women's clothes",
            feature: false
            
        },

        {
            id:"p1",
            image: "https://ae01.alicdn.com/kf/H18140dd0daa3426f8c9a62329ede5821J/Global-Version-Xiaomi-Redmi-Note-9-3GB-64GB-4GB-128GB-MTK-Helio-G85-48MP-Quad-Camera.jpg_220x220xz.jpg",
            otherImages: [],
            price:"299",
            title:"Global Version Xiaomi Redmi Note 9 3GB 64GB / 4GB 128GB MTK Helio G85 48MP Quad Camera 5020mAh 6.53",
            category:"phone",
            feature: false
            
        },
        {
            id:"p2",
            image: "https://ae01.alicdn.com/kf/H1df39662ce1f458fbd56ae6114b153248/In-Stock-Global-Version-Xiaomi-Redmi-9C-Mobile-Phone-9C-3GB-RAM-64GB-ROM-MediaTek-Helio.jpg_220x220xz.jpg",
            otherImages: [],
            price:"199",
            title:"Xiaomi Redmi 9C Mobile-Phone 64GB 3GB Fingerprint Recognition 13MP New Global-Version",
            category:"phone",
            feature: false
            
        },
        {
            id:"p3",
            image: "https://ae01.alicdn.com/kf/H3c64fdb1b4624534b764db25a9b2f5489/MTK6750-Octa-Core-3000mAh-SANTIN-Halove-5-5-Screen-4G-LTE-Smartphone-phone-Android-6-0.jpg_220x220xz.jpg",
            otherImages: [],
            price:"399",
            title:"Honor 9i Mobile-Phone 3GB 32GB GSM/WCDMA/LTE Octa Core Fingerprint Recognition 13mp New",
            category:"phone",
            feature: false
            
        },
        {
            id:"p4",
            image: "https://ae01.alicdn.com/kf/H76d85705a33f4555a2b1b8e4fc7e1aa2F/New-arrive-Mini-Card-Mobile-Phone-Portable-Ultra-thin-Small-Cellphone-No-Network-Student-Quit-Internet.jpg_220x220xz.jpg",
            otherImages: [],
            price:"199",
            title:"Anica GSM New Mobile-Phone Mini-Card Internet New-Arrive Ultra-Thin No Quit No-Network",
            category:"phone",
            feature: false
            
        },
        {
            id:"p5",
            image: "https://ae01.alicdn.com/kf/H4da07dc00f074308a82e26c3f6142fa6e/XGODY-A50-3G-Smartphone-Android-9-0-6-5inch-19-9-Full-Screen-1GB-4GB-MTK6580.jpg_220x220xz.jpg",
            otherImages: [],
            price:"299",
            title:"XGODY A50 3G Smartphone Android 9.0 6.5inch 19:9 Full Screen 1GB 4GB MTK6580 Quad Core 5MP Camera 3000mAh Mobile Phone",
            category:"phone",
            feature: false
            
        },


        {
            id:"h1",
            image: "https://ae01.alicdn.com/kf/H765e5334110149a4b92e23dd6d72d6e82/Weave-Carpets-Bedroom-Tapestry-Welcome-Footpad-Bathroom-Carpets-Home-Living-Room-Rug-Nordic-Style-Area-Rugs.jpg_220x220xz.jpg",
            otherImages: [],
            price:"10",
            title:"Weave Carpets Bedroom Tapestry Welcome Footpad Bathroom Carpets Home Living Room Rug Nordic Style Area Rugs Mat Prayer Mattress",
            category:"home",
            feature:"",
            amount:2
            
        },
        {
            id:"h2",
            image: "https://ae01.alicdn.com/kf/He466643e8c7b4aa282965d873cef2d6eA/Simpsons-Family-3D-Cartoon-Duvet-Cover-Pillowcases-Set-Twin-Full-Queen-King-Size-Bedding-Set-Bed.jpg_220x220xz.jpg",
            otherImages: [],
            price:"15.5",
            title:"Simpsons Family 3D Cartoon Duvet Cover Pillowcases Set Twin Full Queen King Size Bedding Set Bed Linen Bedclothes Home Textile",
            category:"home",
            feature: false,
            amount: 3
            
        },
        {
            id:"h3",
            image: "https://ae01.alicdn.com/kf/H64c75e45ba4a499db0e3b4301034375dx/Black-and-white-Cartoon-Mickey-Minnie-Bedding-set-Bedclothes-Duvet-Cover-Pillowcase-Print-Home-Textile-Bed.jpg_220x220xz.jpg",
            otherImages: [],
            price:"45",
            title:"Black and white Cartoon Mickey Minnie Bedding set Bedclothes Duvet Cover Pillowcase Print Home Textile Bed Linens Children gift",
            category:"home",
            feature: false,
            amount: 4
            
        },
        {
            id:"h4",
            image: "https://ae01.alicdn.com/kf/H7154540e062345df90b36d5a85d05c42R/Black-White-Geometric-Cushion-Cover-45x45-Pillowcase-Sofa-Cushions-Decorative-Pillowcover-Polyester-Home-Decor-Pillow-Cases.jpg_220x220xz.jpg",
            otherImages: [],
            price:"10",
            title:"Black White Geometric Cushion Cover 45x45 Pillowcase Sofa Cushions Decorative Pillowcover Polyester Home Decor Pillow Cases",
            category:"home",
            feature:false
            
        },
        {
            id:"h5",
            image: "https://ae01.alicdn.com/kf/H4037d61a475f482da48074171e2d22fcL/Pink-Arrow-Pillows-Cases-Nordic-Marble-Geometric-Cushion-Cover-Pineapple-Pink-Black-Soft-Peach-Skin-Sofa.jpg_220x220xz.jpg",
            otherImages: [],
            price:"8.5",
            title:"Pink Arrow Pillows Cases Nordic Marble Geometric Cushion Cover Pineapple Pink Black Soft Peach Skin Sofa Home Decoration Pillows",
            category:"home",
            feature:false,
            amount:2
            
        },


        {
            id: "c1",
            image: "https://ae01.alicdn.com/kf/H7a867012c8674b08a0c1da5d9a8ee813a/CHUWI-HeroBook-Pro-14-1-inch-Full-laminated-IPS-Screen-Computer-Intel-N4000-Dual-Core-8GB.jpg_220x220xz.jpg",
            otherImages: "",
            price: "699",
            title: "CHUWI HeroBook Pro 14.1 inch Full laminated IPS Screen Computer Intel N4000 Dual Core 8GB 256GB Windows 10 NoteBook",
            category: "computer",
            feature:false,
            amount:3
        },

        {
            id: "c2",
            image: "https://ae01.alicdn.com/kf/H8ba0851a42fc462bba97500f9328e865B/CHUWI-GemiBook-13-2K-IPS-Screen-LPDDR4X-12GB-256GB-SSD-Intel-Celeron-Quad-Core-Windows-10.jpg_220x220xz.jpg",
            otherImages: "",
            price:"599",
            title: "'CHUWI GemiBook 13' 2K IPS Screen LPDDR4X 12GB 256GB SSD Intel Celeron Quad Core Windows 10 Laptop with Backlit Keyboard",
            category:"computer",
            feature:false,
            amount:3
        },
        {
            id: "c3",
            image: "https://ae01.alicdn.com/kf/Hf2be7d415743422b8533a21aa9be731dh/15-6-inch-Student-computer-Laptop-4GB-RAM-64GB-ROM-Celeron-N3050-Windows-10-Computer-with.jpg_220x220xz.jpg",
            otherImages: "",
            price:"399",
            title: "15.6 inch Student computer Laptop 4GB RAM 64GB ROM Celeron N3050 Windows 10 Computer with Bluetooth Camera for game netbook",
            category: "computer",
            feature:false,
            amount:3
        },
        {
            id: "c4",
            image: "https://ae01.alicdn.com/kf/H059b46901489481fbf0ae0879197eaf0D/J4105-11-6-Inch-Mini-8GB-RAM-Laptop-60G-128G-256G-512GB-SSD-Portable-PC-Computer.jpg_220x220xz.jpg",
            otherImages: "",
            price: "299",
            title: "J4105 11.6 Inch Mini 8GB RAM Laptop 60G 128G 256G 512GB SSD Portable PC Computer Office Notebook Students Learning Mini Netbook",
            category: "computer",
            feature:false,
            amount: 4
        },
        {
            id: "c5",
            image: "https://ae01.alicdn.com/kf/Haabc24da787440f09e5f43b7af661cbfw/15-6-inch-Laptop-8G-RAM-1TB-512G-256G-128G-SSD-ROM-Notebook-Computer-FHD-IPS.jpg_220x220xz.jpg",
            otherImages: "",
            price: "799",
            title: "15.6 inch Laptop 8G RAM 1TB/512G/256G/128G SSD ROM Notebook Computer FHD IPS Screen Quad Core Gaming Laptops win10",
            category: "computer",
            feature: false,
            amount: 6
        },



        {
            id: "aj1",
            image: "https://ae01.alicdn.com/kf/H5d48db26871a4be29d9373a10b401dbf4/Pearl-Rhinestone-Flower-Headband-Wedding-Hair-Accessories-For-Women-Bridal-Headband-Hair-font-b-Jewelry-b.jpg_220x220xz.jpg",
            otherImages: "",
            price: "2",
            title: "1PCs Fashion Ouroboros Snake Rune Round Rope Leather Necklaces Pendants Amulet Lucky Protective Unisex Jewelry Accessories",
            category: "jewelry & accessories",
            feature: false,
            amount: 3
        },
        {
            id: "aj2",
            image: "https://ae01.alicdn.com/kf/HTB1pwPojRDH8KJjy1zeq6xjepXaw/Natural-Pearl-Baroque-Freshwater-Pearl-Necklace-With-silver-Clasp-New-Fit-Pendants-Sabor-Jewelry-Pearls-fine.jpg_220x220xz.jpg",
            otherImages: "",
            price: "50",
            title: "Natural Pearl Baroque Freshwater Pearl Necklace With silver Clasp New Fit Pendants Sabor Jewelry Pearls fine jewelery For Women",
            category: "jewelry & accessories",
            feature:false,
            amount:3
        },
        {
            id: "aj3",
            image: "https://ae01.alicdn.com/kf/HTB1YRG.NpXXXXbeXpXXq6xXFXXXd/8Pcs-set-Sexy-Gothic-Punk-Necklace-Velvet-Tattoo-Lace-Choker-With-Triangle-Pendant-Jewelery-For-Women.jpg_220x220xz.jpg",
            otherImages: "",
            price: "2.95",
            title:"8Pcs/set Sexy Gothic Punk Necklace Velvet Tattoo Lace Choker With Triangle Pendant Jewelery For Women Collar Collier #93231",
            category:"jewelry & accessories",
            feature:false,
            amount:3
        },
        {
            id: "aj4",
            image: "https://ae01.alicdn.com/kf/H4f3b0fc7a96345358840aa00b44d58a6X/2020-Fashion-Stainless-Steel-Gay-Pride-Love-Rainbow-Necklaces-Lesbian-Pendants-Beaded-Choker-Necklaces-For-Women.jpg_220x220xz.jpg",
            otherImages: "",
            price: "5",
            title: "Dark Zircon Bridal Gold colorJewelry Sets Women Pendant&Necklace Ring Earrings With Natural Stones Bracelets Jewelery Gift",
            category: "jewelry & accessories",
            feature:false,
            amount: 3
        },
        {
            id: "aj5",
            image: "https://ae01.alicdn.com/kf/H2a5beebc6cce4b409ed0576838969ca6O/Men-and-Women-Antique-Crystal-Wolf-Fang-Tooth-Pendant-Necklace-Vintage-Wolf-Tooth-Rhinestone-Pendant-Necklace.jpg_220x220xz.jpg",
            otherImages: "",
            price: "6",
            title: "Men and Women Antique Crystal Wolf Fang Tooth Pendant Necklace Vintage Wolf Tooth Rhinestone Pendant Necklace Jewelery",
            
            category: "jewelry & accessories",
            feature:false,
            amount:3
        },


        {
            id: "e1",
            image: "https://ae01.alicdn.com/kf/Hbea4a7e07d384764a5e9eb7b91c38cb27/ZOHAN-Electronic-Earmuff-NRR22DB-Ear-Cup-for-Single-Microphone-Hunting-Earmuffs-Tactical-Shooting-Hearing-Protection-Replacement.jpg_220x220.jpg",
            otherImages: [],
            price:"49",
            title:"ZOHAN Electronic Earmuff NRR22DB Ear Cup for Single Microphone Hunting Earmuffs Tactical Shooting Hearing Protection Replacement",
            category:"electronics",
            feature:false,
            amount:5
        },
        {
            id: "e2",
            image: "https://ae01.alicdn.com/kf/H384ee1e580254962bcc9a3b2bb19ad425/2020-New-Smartwatch-Women-Men-Bluetooth-Waterproof-Smart-Watch-For-Android-IOS-Electronic-Clock-Fitness-Tracker.jpg_220x220.jpg",
            otherImages: [],
            price:"",
            title:"2020 New Smartwatch Women Men Bluetooth Waterproof Smart Watch For Android IOS Electronic Clock Fitness Tracker Full Touch Hours",
            category:"electronics",
            feature:false,
            amount:5
        },
        {
            id: "e3",
            image: "https://ae01.alicdn.com/kf/HTB15Wp2JsfpK1RjSZFOq6y6nFXak/Parking-Sensor-Parktronic-Auto-Detector-Backing-Assistance-Kit-Voice-Buzzer-6-Sensors-Car-Automobile-Reversing-Radar.jpg_220x220.jpg",
            otherImages: [],
            price:"59",
            title:"Parking Sensor Parktronic Auto Detector Backing Assistance Kit Voice Buzzer 6 Sensors Car Automobile Reversing Radar Electronics",
            category:"electronics",
            feature:false,
            amount:5
        },
        {
            id: "e4",
            image: "https://ae01.alicdn.com/kf/Hef1944a3e28a4873b92b69c8545c53055/New-LCD-Writing-Tablet-Electronic-Digital-Writing-Doodle-Board-12-Inch-Handwriting-Paper-Drawing-Tablet-Gift.jpg_220x220xz.jpg",
            otherImages: [],
            price:"299",
            title:"New LCD Writing Tablet, Electronic Digital Writing Doodle Board,12-Inch Handwriting Paper Drawing Tablet Gift for Kids and Adult",
            
            category:"electronics",
            feature:false,
            amount:5
        },
        {
            id: "e5",
            image: "https://ae01.alicdn.com/kf/Hd0e7fa42656a406bb1c0fc934b1a832br/Aibevi-Lcd-Writing-Tablet-20-Inch-font-b-Electronic-b-font-Drawing-Writing-Board-Handwriting-Pads.jpg_220x220xz.jpg",
            otherImages: [],
            price:"199",
            title:"Aibevi Lcd Writing Tablet 20'' Inch Electronic Drawing Writing Board Handwriting Pads ultra-thin Board with pen Erase Button",
            category:"electronics",
            feature:false,
            amount:5
        }

    ]);

    return(
        <StateContext.Provider value={useReducer(reducer, initialState),{products}}>
            {children}
        </StateContext.Provider>
    )
    
    
}


//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext) 