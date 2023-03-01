export interface Product {
    id: number;
    price: number;
    rating: number;
    name: string;
    description: string;
    image: string;
    link: string;
    like: number
    categoryId: number
}

export const products = [
    {
        id: 1,
        price: 190,
        like: 0,
        rating: 4.8,
        name: 'AMD Ryzen 5 2600',
        description: `
    Brand	AMD
    CPU Model	Ryzen 5 2600
    CPU Speed	3.9 GHz
    CPU Socket	Socket AM4
    Processor Count	6`,
        categoryId: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61YyzKD24dL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/AMD-Processor-Wraith-Stealth-Cooler/dp/B07B41WS48/ref=sr_1_5?crid=134UYG6XPHUA5&dchild=1&keywords=processor&qid=1615811858&sprefix=processor%2Caps%2C411&sr=8-5',
    },
    {
        id: 2,
        price: 229,
        like: 0,
        rating: 4.8,
        name: 'AMD Ryzen 5 5600X',
        description: `AMD's fastest 6 core processor for mainstream desktop, with 12 processing threads
    Can deliver elite 100+ FPS performance in the world's most popular games
    Bundled with the quiet, capable AMD Wraith Stealth cooler
    4.6 GHz Max Boost, unlocked for overclocking, 35 MB of cache, DDR-3200 support
    For the advanced Socket AM4 platform, can support PCIe 4.0 on X570 and B550 motherboards`,
        categoryId: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61vGQNUEsGL._AC_SL1384_.jpg',
        link: 'https://www.amazon.com/AMD-Ryzen-5600X-12-Thread-Processor/dp/B08166SLDF/ref=sr_1_4?crid=134UYG6XPHUA5&dchild=1&keywords=processor&qid=1615811858&sprefix=processor%2Caps%2C411&sr=8-4',
    },
    {
        id: 3,
        price: 290,
        like: 0,
        rating: 4.8,
        name: 'AMD Ryzen 5 3600X',
        description: `The world's most advanced processor in the desktop PC gaming segment
    Can deliver ultra-fast 100+ FPS performance in the world's most popular games system memory specification 3200 MHz
    6 Cores and 12 processing threads bundled with the powerful AMD Wraith Spire cooler`,
        image: 'https://images-na.ssl-images-amazon.com/images/I/616i5Il16qL._AC_SL1000_.jpg',
        categoryId: 1,
        link: 'https://www.amazon.com/AMD-Ryzen-3600X-12-Thread-Processor/dp/B07SQBFN2D/ref=sr_1_3?crid=134UYG6XPHUA5&dchild=1&keywords=processor&qid=1615811858&sprefix=processor%2Caps%2C411&sr=8-3',
    },
    {
        id: 4,
        price: 310,
        like: 0,
        rating: 4.8,
        name: 'Intel Core i7-10700KF',
        description: `8 Cores / 16 Threads
    Socket Type LGA 1200
    Up to 5.1 GHz Unlocked
    Compatible with Intel 400 series chipset based motherboards
    Intel turbo boost max technology 3.0 support`,
        image: 'https://images-na.ssl-images-amazon.com/images/I/714-1OvyFIL._AC_SL1500_.jpg',
        categoryId: 1,
        link: 'https://www.amazon.com/Intel-i7-10700KF-Processor-Unlocked-Graphics/dp/B086MMS6FV/ref=sr_1_1_sspa?crid=134UYG6XPHUA5&dchild=1&keywords=processor&qid=1615811858&sprefix=processor%2Caps%2C411&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOE42OEZJOFpSTTlMJmVuY3J5cHRlZElkPUEwNTQxNzM5M1FOS1Y2VExNM0lOTSZlbmNyeXB0ZWRBZElkPUEwMDM3NDYzMkUyMUtYQzVZRDFPUSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    },
    {
        id: 5,
        price: 400,
        like: 0,
        rating: 4.8,
        name: 'Intel Core i9-10900',
        description: `10 Cores / 20 Threads
    Socket Type LGA 1200
    Up to 5.2 GHz
    Compatible with Intel 400 series chipset based motherboards
    Intel Turbo Boost Max Technology 3.0 Support`,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61HOG%2BsgdbL._AC_SL1000_.jpg',
        categoryId: 1,
        link: 'https://www.amazon.com/Intel-i9-10900-Desktop-Processor-Chipset/dp/B086ML4XSD/ref=sr_1_2_sspa?crid=134UYG6XPHUA5&dchild=1&keywords=processor&qid=1615811858&sprefix=processor%2Caps%2C411&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzOE42OEZJOFpSTTlMJmVuY3J5cHRlZElkPUEwNTQxNzM5M1FOS1Y2VExNM0lOTSZlbmNyeXB0ZWRBZElkPUEwMDM3OTU1MUFHQVVHUUhKU0Q5QyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    },
    {
        id: 6,
        price: 410,
        like: 0,
        rating: 4.6,
        name: 'PNY GeForce GTX 1650 Super',
        description: `NVIDIA Turing architecture, with 1530MHz core clock and 1770MHz boost clock speeds to help meet the needs of demanding games.`,
        categoryId: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/712GTja%2B7GL._AC_SL1200_.jpg',
        link: 'https://www.amazon.com/PNY-GeForce-Gaming-Overclocked-Single/dp/B08Q5QVMC7/ref=sr_1_7?crid=3SYXJZLN404NO&dchild=1&keywords=nvidia+graphics+card&qid=1615813513&sprefix=nvidia%2Caps%2C452&sr=8-7',
    },
    {
        id: 7,
        price: 2185,
        like: 0,
        rating: 4.5,
        name: 'NVIDIA GeForce RTX 3090',
        description: `Brand	NVIDIA
    Video Output Interface	DisplayPort
    Graphics Processor Manufacturer	NVIDIA
    Graphics Ram Size	24 GB`,
        categoryId: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61wbV8oqAbL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/NVIDIA-RTX-3090-Founders-Graphics/dp/B08HR6ZBYJ/ref=sr_1_8?crid=3SYXJZLN404NO&dchild=1&keywords=nvidia+graphics+card&qid=1615813513&sprefix=nvidia%2Caps%2C452&sr=8-8',
    },
    {
        id: 8,
        price: 650,
        like: 0,
        rating: 4.5,
        name: 'Nvidia GeForce GTX 1070',
        description: `
    Brand	NVIDIA
    Graphics Coprocessor	NVIDIA GeForce GTX 1070
    Graphics Processor Manufacturer	NVIDIA`,
        categoryId: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61rKJovIyiL._AC_SL1010_.jpg',
        link: 'https://www.amazon.com/Nvidia-GeForce-1070-Founders-900-1G411-2520-000/dp/B07SSVWFML/ref=sr_1_9?crid=3SYXJZLN404NO&dchild=1&keywords=nvidia+graphics+card&qid=1615813513&sprefix=nvidia%2Caps%2C452&sr=8-9',
    },
    {
        id: 9,
        price: 1100,
        like: 0,
        rating: 4.7,
        name: 'Nvidia GeForce RTX 2080',
        description: `
    Brand	NVIDIA
    Graphics Coprocessor	NVIDIA GeForce RTX 2080
    Graphics Processor Manufacturer	NVIDIA`,
        categoryId: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61zWR5NtfTL._AC_SL1400_.jpg',
        link: 'https://www.amazon.com/Nvidia-GeForce-RTX-2080-Founders/dp/B07GPW17YM/ref=sr_1_10?crid=3SYXJZLN404NO&dchild=1&keywords=nvidia+graphics+card&qid=1615813513&sprefix=nvidia%2Caps%2C452&sr=8-10',
    },
    {
        id: 10,
        price: 470,
        like: 0,
        rating: 4.8,
        name: 'MSI Gaming GeForce GTX 1660 Super',
        description: `Chipset: NVIDIA GeForce GTX 1660 Super
    Boost clock: 1830 MHz
    Memory Interface: 192-Bit`,
        categoryId: 2,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61-qh4qbYSL._AC_SL1000_.jpg',
        link: 'https://www.amazon.com/MSI-GeForce-192-bit-Support-Graphics/dp/B07ZK69HDK/ref=sr_1_2?crid=3CAHUQ5UTIXKV&dchild=1&keywords=nvidia+graphics+card+1660+super&qid=1615813919&sprefix=nvidia+graphics+card%2Caps%2C980&sr=8-2',
    },
    {
        id: 11,
        price: 24,
        like: 0,
        rating: 4.6,
        name: 'Logitech MK270 Wireless Keyboard and Mouse Combo',
        description: `Easy to Use: This wireless keyboard and mouse combo features 8 multimedia hotkeys for instant access to the Internet, email, play/pause, and volume so you can easily check out your favorite sites
    Comfortable Mouse: This compact wireless mouse is designed to be equally comfortable for both left- and right-handed users, plus its smooth cursor control allows easy navigation on most surfaces
    Favorite Wireless Combo: MK270 brings together familiar typing`,
        categoryId: 3,
        image: 'https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Logitech-MK270-Wireless-Keyboard-Mouse/dp/B079JLY5M5/ref=sr_1_3?crid=1AGVTMG1ZYAPX&keywords=keyboard&qid=1647172093&sprefix=keybo%2Caps%2C707&sr=8-3',
    },
    {
        id: 12,
        price: 35,
        like: 0,
        rating: 4.5,
        name: 'Redragon K552 Mechanical Gaming Keyboard',
        description: `Tenkeyless compact mechanical gaming keyboard Redragon k552 tkl small compact with dust proof mechanical switches cherry mx red equivalent Linear switches quiet click sound fast action with minimal resistance without a tactile bump feel`,
        categoryId: 3,
        image: 'https://m.media-amazon.com/images/I/61DT+r681TL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Redragon-Mechanical-Keyboard-Rainbow-Switches/dp/B086VRM89H/ref=sr_1_2_sspa?crid=21DSAUBEWI3RL&dchild=1&keywords=keyboard&qid=1615814200&sprefix=keyboard%2Caps%2C408&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzREFWOVZQT01KQ0JWJmVuY3J5cHRlZElkPUEwMDc4NDEyMjlUMjQ5QVRPSVBWSSZlbmNyeXB0ZWRBZElkPUEwODg4MDkyM0tUTTY3MkE3WDlaSCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    },
    {
        id: 13,
        price: 36,
        like: 0,
        rating: 4.6,
        name: 'Redragon S101 Wired Gaming Keyboard',
        description: `PC GAMING KEYBOARD AND GAMING MOUSE COMBO: Includes Redragon RGB Backlit Computer Gaming Keyboard and RGB Backlit Gaming Mouse. ALL-IN-ONE PC GAMER VALUE KIT, Fantastic for Gamers (New Improved Version)`,
        categoryId: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71kr3WAj1FL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Redragon-S101-Keyboard-Ergonomic-Programmable/dp/B00NLZUM36/ref=sr_1_3?crid=21DSAUBEWI3RL&dchild=1&keywords=keyboard&qid=1615814200&sprefix=keyboard%2Caps%2C408&sr=8-3',
    },
    {
        id: 14,
        price: 21,
        like: 0,
        rating: 4.5,
        name: 'NPET K10 Gaming Keyboard',
        description: `Professional Gaming Keyboard. UV coated keycaps and injection laser carving ABS keycaps design, the letter of characters never fade. Anti-sweat, prevents keycap damage, enhanced durability, and tactile feedback. `,
        categoryId: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61w0BypBzrL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/NPET-Floating-Keyboard-Mechanical-Illuminated/dp/B01ALLT2W4/ref=sr_1_4?crid=21DSAUBEWI3RL&dchild=1&keywords=keyboard&qid=1615814200&sprefix=keyboard%2Caps%2C408&sr=8-4',
    },
    {
        id: 15,
        price: 11,
        like: 0,
        rating: 4.6,
        name: 'Amazon Basics Matte Black Wired Keyboard - US Layout (QWERTY)',
        description: `Low-profile Keys Provide a Quiet, Comfortable Typing Experience
    Hotkeys Enable Easy Access for Media, My Computer, Mute, Volume down, Volume up, and Calculator; 4 Function Keys Control`,
        categoryId: 3,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81cg9myC9kL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        link: 'https://www.amazon.com/AmazonBasics-Matte-Keyboard-QWERTY-Layout/dp/B07WJ5D3H4/ref=sxin_14_ac_d_rm?ac_md=0-0-a2V5Ym9hcmQ%3D-ac_d_rm_rm_rm&crid=E5GNFKMRUPYH&cv_ct_cx=keyboard&keywords=keayboard&pd_rd_i=B07WJ5D3H4&pd_rd_r=2badca35-b834-45fd-9082-43f474394376&pd_rd_w=xOiEl&pd_rd_wg=gPQQP&pf_rd_p=5fdda09e-d732-41f0-8362-9e3e115c3771&pf_rd_r=DPNA0C3J8ACV6ZAENQT4&psc=1&qid=1647172616&sprefix=keyboar%2Caps%2C289&sr=1-1-12d4272d-8adb-4121-8624-135149aa9081',
    },
    {
        id: 16,
        price: 450,
        like: 0,
        rating: 4.6,
        name: 'Samsung Galaxy S21',
        description: `DISPLAY:120Hz Dynamic AMOLED, 6.8" Edge Quad HD+, Corning Gorilla Glass Victus`,
        categoryId: 4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/81J0QOSKU-L._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Samsung-Galaxy-SM-G998B-International-Version/dp/B08VRYKFWY/ref=sr_1_4?dchild=1&keywords=samsung+s21&qid=1615814657&sr=8-4',
    },
    {
        id: 17,
        price: 450,
        like: 0,
        rating: 4.6,
        name: 'Samsung Galaxy S21 Plus 5G',
        description: `DISPLAY: 120Hz Dynamic AMOLED, 6.7" Flat FHD+, Corning Gorilla Glass Victus`,
        categoryId: 4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/816yk9xiwmL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Samsung-Galaxy-SM-G996B-International-Version/dp/B08QXW1TXX/ref=sr_1_5?dchild=1&keywords=samsung+s21&qid=1615814657&sr=8-5',
    },
    {
        id: 18,
        price: 450,
        like: 0,
        rating: 4.4,
        name: 'Apple iPhone 11 (256GB)',
        description: `6.1-inch Liquid Retina HD LCD display
    Water and dust resistant (2 meters for up to 30 minutes, IP68)`,
        categoryId: 4,
        image: 'https://m.media-amazon.com/images/I/71xn9bCRfhL._FMwebp__.jpg',
        link: 'https://www.amazon.com/Apple-Carrier-Subscription-Cricket-Wireless/dp/B084GSYMNJ/ref=sr_1_1?crid=PFNDJLWZNV2Z&dchild=1&keywords=iphone&qid=1615814670&sprefix=Iphone%2Caps%2C170&sr=8-1',
    },
    {
        id: 19,
        price: 450,
        like: 0,
        rating: 4.5,
        name: 'Apple iPhone XR, 256GB',
        description: `Fully unlocked and compatible with any carrier of choice (e.g. AT&T, T-Mobile, Sprint, Verizon, US-Cellular, Cricket, Metro, etc.).`,
        categoryId: 4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/41ZjUOH6nRL._AC_.jpg',
        link: 'https://www.amazon.com/Apple-iPhone-Fully-Unlocked-256/dp/B07PC1KCT6/ref=sr_1_3?crid=PFNDJLWZNV2Z&dchild=1&keywords=iphone&qid=1615814670&sprefix=Iphone%2Caps%2C170&sr=8-3',
    },
    {
        id: 20,
        price: 450,
        like: 0,
        rating: 4.3,
        name: 'Apple iPhone 12',
        description: `OFFER INCLUDES: An Apple iPhone and a wireless plan with unlimited data/talk/text`,
        categoryId: 4,
        image: 'https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_SL1500_.jpg',
        link: 'https://www.amazon.com/Apple-iPhone-12-Pro-Max/dp/B09JFFG8D7/ref=sr_1_1?crid=3ORWIBNQHAJZQ&keywords=Apple+iPhone+12&qid=1647173656&sprefix=%2Caps%2C328&sr=8-1',
    },
];

