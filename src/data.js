let data = [
    {
        id: 1,
        name: "Giant Lock-On Grips",
        price: 24.99,
        type: "grips",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-tactal-double-lock-on-grips-14767472181350_500x.jpg?v=1628161806"
    },
    {
        id: 2,
        name: "Brooks C13 Saddle",
        price: 219.99,
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/brooks-c13-carved-cambium-145mm-saddle-with-black-carbon-rails-13340019654758_500x.jpg?v=1628160728",
        type: "saddle"
    },
    {
        id: 3,
        name: "WTB Pure Bike Seat",
        price: 79.99,
        type: "saddle",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/wtb-pure-bike-seat-chromoly-black-medium-15282555551846_500x.jpg?v=1628385720"
    },
    {
        id: 4,
        name: "Trek Roscoe 7" ,
        price: 1699.99,
        type: "bike",
        picture: "https://trek.scene7.com/is/image/TrekBicycleProducts/Roscoe7_22_35116_B_Primary?$responsive-pjpg$&cache=on,on&wid=1440&hei=1080"
    },
    {
        id: 5,
        name: "Trek Domane 2",
        price: 999.99,
        type: "bike",
        picture: "https://trek.scene7.com/is/image/TrekBicycleProducts/DomaneAL2_21_33037_A_Primary?$responsive-pjpg$&cache=on,on&wid=1200&hei=900"
    },
    {
        id: 6,
        name: "Trek Dual Sport",
        price: 669.99,
        type: "bike",
        picture: "https://trek.scene7.com/is/image/TrekBicycleProducts/DualSport1_22_35060_A_Primary?$responsive-pjpg$&cache=on,on&wid=1024&hei=768"
    },
    {
        id: 7,
        name: "Schwable Nobby Tire 2.35",
        price: 85.99,
        type: "tire",
        picture: "https://images.performancebike.com/images/large/bikes/schwalbe/11600667.01.jpg"
    },
    {
        id: 8,
        name: "Continental Grand Prix",
        price: 54.99,
        type: "tire",
        picture: "https://images.performancebike.com/cdn-cgi/image/width=475/images/large/bikes/continental/c1031428.jpg"
    },
    {
        id: 9,
        name: "700c Presta Valve Tube",
        price: 8.99,
        type: "tube",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-700c-presta-valve-bike-tube-28307298943078_500x.jpg?v=1627045924"
    },
    {
        id: 10,
        name: '26" Schrader Valve Tube',
        price: 11.99,
        type: "tube",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-26-premium-schrader-valve-bike-tube-28300594085990_500x.jpg?v=1628533695://cdn.shopify.com/s/files/1/0286/1214/products/giant-700c-presta-valve-bike-tube-28307298943078_500x.jpg?v=1627045924"
    },
    {
        id: 11,
        name: '29" Presta Tube',
        price: 14.99,
        type: "tube",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/teravail-29-bike-tube-29-x-2-36-2-8-48mm-presta-valve-16104865759334_500x.jpg?v=1628383022"
    },
    {
        id: 12,
        name: "Bike Tire Levers",
        price: 8.99,
        type: "tool",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/pedro-s-bike-tire-levers-13354025910374_360x.jpg?v=1628364846"
    },
    {
        id: 13,
        name: "Control Patch Kit",
        price: 9.99,
        type: "tool",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-control-bike-tire-patch-kit-w-tire-levers-15422647500902_360x.jpg?v=1628378713"
    },
    {
        id: 14,
        name: "Y Wrench Hex Tool",
        price: 9.99,
        type: "tool",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/shimano-y-wrench-hex-bike-tool-4-5-6mm-28300978356326_360x.png?v=1628409131"
    },
    {
        id: 15,
        name: "M19 Gold Multi-Tool",
        price: 24.99,
        type: "tool",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/crank-brothers-m19-bike-multi-tool-gold-16090197557350_360x.jpg?v=1628363051"
    },
    {
        id: 16,
        name: "Mini Bike Chain Tool",
        price: 19.99,
        type: "tool",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/park-tool-mini-bike-chain-brute-chain-tool-13344706330726_360x.jpg?v=1628374040"
    },
    {
        id: 17,
        name: "Double-Ended Cone Wrench",
        price: 9.99,
        type: "tube",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/park-tool-double-ended-cone-bike-wrench-4-13mm-13359211085926_360x.jpg?v=1627154634"
    },
    {
        id: 18,
        name: "Avid Brake Pads",
        price: 13.99,
        type: "brake",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/avid-20r-brake-pads-13362960433254_540x.jpg?v=1628384467"
    },
    {
        id: 19,
        name: "Sport Disc Pads",
        price: 4.97,
        type: "brake",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-sport-disc-pads-28334541144166_540x.jpg?v=1628565542"
    },
    {
        id: 20,
        name: "Conduct Brake Rotors",
        price: 18.99,
        type: "brake",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-conduct-brake-rotors-13359829876838_360x.jpg?v=1628173381"
    },
    {
        id: 21,
        name: "Hydraulic Brake Hose Kit",
        price: 34.99,
        type: "brake",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/tektro-hydraulic-brake-hose-kit-1800mm-5-5mm-hose-28434841632870_360x.jpg?v=1632875539"
    },
    {
        id: 22,
        name: "AR3 Road Bike",
        price: 1349.99,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/liv-avail-ar-4-road-bike-2021-15181893992550_360x.jpg?v=1628398882"
    },
    {
        id: 23,
        name: "Content Rec Bike",
        price: 869.99,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-contend-3-road-bike-2021-15366244434022_360x.jpg?v=1628403379"
    },
    {
        id: 24,
        name: "Vaast Gravel Bike",
        price: 2499,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/vaast-a-1-gravel-road-bike-grx-2021-28324170956902_360x.jpg?v=1628627297"
    },
    {
        id: 25,
        name: "Giant TCR 2 Disc",
        price: 2600,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-tcr-advanced-2-disc-road-bike-2021-28321600143462_360x.jpg?v=1628652321"
    },
    {
        id: 26,
        name: "FastRoad Electric Bike",
        price: 3499,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-fastroad-e-ex-pro-electric-road-bike-2020-28320699318374_360x.jpg?v=1628666891"
    },
    {
        id: 27,
        name: "Niner RIP 9",
        price: 7999.99,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/niner-rip-rdo-29er-5-star-sram-x01-eagle-mountain-bike-2021-28342746349670_400x.jpg?v=1628647804"
    },
    {
        id: 28,
        name: "Giant Trance 3",
        price: 2450,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/giant-trance-3-29er-mountain-bike-2021-15180251922534_360x.jpg?v=1628477529"
    },
    {
        id: 29,
        name: "Santa Cruz Blur",
        price: 5499.99,
        type: "bike",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/santa-cruz-blur-s-kit-mountain-bike-2022-28177210507366_400x.jpg?v=1628716572"
    },
    {
        id: 30,
        name: "ESI Chunky Grips",
        price: 18.99,
        type: "grips",
        picture: "https://cdn.shopify.com/s/files/1/0286/1214/products/esi-chunky-handlebar-grips-28336074850406_360x.jpg?v=1628541081"
    }
]

export default data;