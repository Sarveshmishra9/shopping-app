const productListings = [
  {
    name: "Wolverine Logan Tee",
    description:
      "Unleash your inner mutant with this bold black tee featuring Wolverine in a dynamic yellow and blue costume, paired with stylized 'Wolverine Logan' text.",
    price: 559,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392631/fff14d8f-ad56-4dd0-a2ba-deb0d8f69a471721617169445BewakoofMenPrintedPureCottonRawEdgeT-shirt1_hqo5ox.jpg",
    altText:
      "Black t-shirt with Wolverine in yellow and blue suit and 'Wolverine Logan' text",
    colors: ["Black", "Yellow", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Wolverine"],
    gender: "men",
  },

  {
    name: "Red Hulk Thunderbolt Tee",
    description:
      "Unleash the power of Red Hulk with this bold t-shirt featuring Thaddeus 'Thunderbolt' Ross, a standout piece for Hulk fans.",
    price: 499,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392026/1_x5ypgy.jpg",
    altText: "Black t-shirt with Red Hulk graphic and 'RED HULK' text",
    colors: ["Black", "Red", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe"],
    gender: "men",
  },

  {
    name: "Avengers Multi-Hero Tee",
    description:
      "Celebrate the Marvel Universe with this t-shirt featuring Black Panther, Spider-Man, Captain America, and Thor in a dynamic design.",
    price: 599,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392026/3_tdffhs.jpg",
    altText: "Black t-shirt with multiple Marvel heroes designs",
    colors: ["Black", "Red", "Blue", "Green", "Purple"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe"],
    gender: "men",
  },
  {
    name: "Spider-Man Spidey Tee",
    description:
      "Swing into action with this Spider-Man t-shirt featuring the web-slinger in vibrant detail, paired with bold 'SPIDEY' text.",
    price: 449,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392026/4_ttzieh.jpg",
    altText: "Brown t-shirt with Spider-Man graphic and 'SPIDEY' text",
    colors: ["Brown", "Red", "Yellow", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe"],
    gender: "women",
  },

  {
    name: "Iron Man Arc Reactor Tee",
    description:
      "Show your love for Tony Stark with this Iron Man t-shirt featuring a striking arc reactor design, perfect for Marvel enthusiasts.",
    price: 449,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392026/5_a9mjne.jpg",
    altText: "Black t-shirt with Iron Man arc reactor design",
    colors: ["Black", "Red", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe"],
    gender: "women",
  },

  {
    name: "Venom Face Tee",
    description:
      "Embrace the dark side of Marvel with this Venom t-shirt featuring the anti-hero’s menacing face and iconic red tongue.",
    price: 499,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392026/6_ixe58s.jpg",
    altText: "Navy blue t-shirt with Venom face graphic",
    colors: ["Navy Blue", "White", "Red", "Black"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe"],
    gender: "kids",
  },

  {
    name: "Marvel Panther Pose Tee",
    description:
      "Show off your Marvel fandom with this black t-shirt featuring a sleek outline graphic of Black Panther above a bold MARVEL logo.",
    price: 499,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745607877/official-marvel-merchandise-bewakoof-women-s-black-graphic-short-sleeve-round-neck-t-shirt-product-images-rvwjnj5edt-0-202305222252_prg2pn.webp",
    altText: "Black t-shirt with Black Panther outline and bold MARVEL text",
    colors: ["Black", "White", "Purple"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Women",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Black Panther"],
  },

  {
    name: "Black Panther Mech Tee",
    description:
      "Unleash Wakandan power with this Black Panther t-shirt featuring a bold mech-style design and glowing blue accents.",
    price: 599,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392027/8_n2pbx3.jpg",
    altText:
      "Black t-shirt with a large back graphic of Black Panther in mech armor and glowing blue eyes",
    colors: ["Black", "Blue", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Mecha Style"],
  },

  {
    name: "Deadpool vs Wolverine Tee",
    description:
      "Show off your love for Marvel's chaotic duo with this striking t-shirt featuring Deadpool wielding swords and a bold 'Deadpool Wolverine' title.",
    price: 549,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392027/9_rhzpyd.jpg",
    altText:
      "Black t-shirt with Deadpool graphic and 'Deadpool Wolverine' text",
    colors: ["Black", "Red", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Deadpool", "Wolverine"],
  },

  {
    name: "Venom We Are Tee",
    description:
      "Embrace the symbiote style with this edgy black t-shirt featuring Venom in a dynamic pose and the chilling 'We Are Venom' phrase.",
    price: 579,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392027/10_utjzlf.jpg",
    altText:
      "Black t-shirt with a large Venom graphic and 'We Are Venom' text in blue",
    colors: ["Black", "Blue", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Venom"],
  },

  {
    name: "Red Hulk Rampage Tee",
    description:
      "Channel your fury with this fiery red t-shirt featuring Red Hulk in an intense pose with bold white 'RED HULK' typography on the back. A statement piece for Marvel fans.",
    price: 599,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392630/men-s-salsa-red-hulk-graphic-printed-oversized-t-shirt-659573-1739538134-1_ohgu7b.jpg",
    altText:
      "Red t-shirt with an intense graphic of Red Hulk and bold text on the back",
    colors: ["Red", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Hulk"],
  },

  {
    name: "Marvel Emblem Long Sleeve",
    description:
      "Show off your Marvel pride with this bold long-sleeve tee featuring a red and black color block design. The chest flaunts the iconic MARVEL logo while the left sleeve is printed with superhero emblems.",
    price: 699,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392632/men-s-black-marvel-logo-textured-t-shirt-648679-1736312298-1_zsuton.jpg",
    altText:
      "Black and red Marvel long sleeve t-shirt with logos on the sleeve and MARVEL text on chest",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Full Sleeve", "Color Block"],
    themes: ["Marvel Universe"],
  },

  {
    name: "Symbiote Spider Emblem Tee",
    description:
      "Step into the shadows with this edgy black t-shirt featuring a bold red Symbiote-style Spider-Man logo on the chest. Perfect for fans of Venom or the darker Spidey vibes.",
    price: 599,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392631/MP000000019011029_437Wx649H_202309010055381_qnh4gf.jpg",
    altText:
      "Black t-shirt with red spider logo inspired by Spider-Man Symbiote",
    colors: ["Black", "Red"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["T-Shirt", "Graphic Tee"],
    themes: ["Spider-Man", "Symbiote", "Marvel Universe"],
  },

  {
    name: "Chibi Iron Man Marvel Tee",
    description:
      "Cute meets heroic with this crisp white t-shirt featuring a chibi-style Iron Man bursting out of the bold red MARVEL logo. A fun twist on a legendary Avenger!",
    price: 549,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392441/men-s-white-marvel-ironman-typography-oversized-t-shirt-519161-1734686102-1_dgnfae.jpg",
    altText: "White t-shirt with Marvel logo and chibi Iron Man character",
    colors: ["White", "Red", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["T-Shirt", "Graphic Tee"],
    themes: ["Iron Man", "Marvel Comics", "Chibi Style"],
  },

  {
    name: "Deadpool Marvel 'Jesus' Tee",
    description:
      "A bold navy blue t-shirt featuring Deadpool's iconic masked face embedded in a vertically stacked red Marvel logo. The word 'Jesus' below adds a curious twist to this statement piece.",
    price: 599,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392442/men-s-navy-blue-marvel-jesus-graphic-printed-t-shirt-644866-1738831625-1_mh2pna.jpg",
    altText:
      "Navy blue t-shirt with Marvel logo, Deadpool face, and the word 'Jesus'",
    colors: ["Navy Blue", "Red", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["T-Shirt", "Graphic Tee"],
    themes: ["Deadpool", "Marvel Comics", "Streetwear"],
  },

  {
    name: "Marvel Logo Black Hoodie",
    description:
      "A sleek black hoodie featuring the iconic red and white Marvel logo on the chest. Perfect for casual wear with a bold comic flair.",
    price: 1299,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745424449/E1055086_2_irdgcc.jpg",
    altText: "Black hoodie with bold Marvel logo on the chest",
    colors: ["Black", "Red", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Hoodie", "Pullover"],
    themes: ["Marvel Comics", "Superhero", "Casual"],
  },

  {
    name: "Spider-Man Comic Cover Hoodie",
    description:
      "A classic black hoodie showcasing a vintage comic book cover of The Amazing Spider-Man. The colorful design features Spider-Man, Punisher, and other characters in a dramatic retro layout, appealing to die-hard Marvel fans.",
    price: 1399,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745424270/B1mEhjGJ2nL._CLa_7C2140_2C2000_7CB1PO6mo-NVL.png_7C0_2C0_2C2140_2C2000_2B0.0_2C0.0_2C2140.0_2C2000.0_AC_UY1000__nd2ifb.jpg",
    altText: "Black hoodie with The Amazing Spider-Man comic cover print",
    colors: ["Black", "Red", "Blue", "Yellow", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Hoodie", "Graphic Hoodie"],
    themes: ["Spider-Man", "Marvel Comics", "Retro", "Punisher"],
  },

  {
    name: "Iron Man Chibi Marvel T-Shirt",
    description:
      "A clean white oversized t-shirt featuring a bold red Marvel logo with an adorable chibi-style Iron Man in the center, giving a fun and playful superhero vibe.",
    price: 699,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745392441/men-s-white-marvel-ironman-typography-oversized-t-shirt-519161-1734686102-1_dgnfae.jpg",
    altText: "White oversized t-shirt with Marvel logo and chibi Iron Man",
    colors: ["White", "Red", "Gold", "Black"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["T-Shirt", "Graphic Tee"],
    themes: ["Iron Man", "Marvel Comics", "Chibi", "Streetwear"],
  },

  {
    name: "Retro Spider-Man Comic Hoodie",
    description:
      "A vintage-style beige hoodie with a nostalgic comic book cover print of The Amazing Spider-Man on the front, ideal for fans of classic Marvel artwork.",
    price: 1349,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745424270/il_570xN.5808237063_pe41_yqecaq.jpg",
    altText: "Beige hoodie with retro Amazing Spider-Man comic cover print",
    colors: ["Beige", "Red", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Hoodie", "Pullover"],
    themes: ["Spider-Man", "Marvel Comics", "Vintage", "Retro"],
  },

  {
    name: "Doctor Doom Marvel Hoodie",
    description:
      "A washed black hoodie with a powerful illustration of Doctor Doom wearing his iconic green hood, complete with a muted olive Marvel logo beneath the graphic. A subtle and stylish choice for Marvel fans.",
    price: 1499,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745424447/male-charcoal-oversized-wash-marvel-dr-doom-license-print-hoodie_q6kyfw.jpg",
    altText: "Washed black hoodie with Doctor Doom and Marvel logo",
    colors: ["Washed Black", "Green", "Grey"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Men",
    subCategories: ["Hoodie", "Pullover"],
    themes: ["Doctor Doom", "Marvel Comics", "Villains", "Streetwear"],
  },
  {
    name: "Marvel Hanging Spider-Man Tee",
    description:
      "Fresh and playful, this white 3/4 sleeve t-shirt features the iconic red Marvel logo with an adorable chibi Spider-Man hanging from it. A must-have for every Marvel fan!",
    price: "599",
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745607876/58343104-7464-4201-a554-5b415c9b08791617959687972-1_j5pz3o.jpg",
    altText: "White t-shirt with Marvel logo and chibi Spider-Man hanging",
    colors: ["White", "Red", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Women",
    subCategories: ["T-Shirt", "Graphic Tee"],
    themes: ["Spider-Man", "Marvel Comics", "Chibi Style"],
  },

  {
    name: "Deadpool & Wolverine Oversized T-shirt",
    description:
      "Peach t-shirt featuring bold Deadpool and Wolverine comic print, perfect for Marvel fans.",
    price: 799,
    imageUrl:
      "https://res.cloudinary.com/clouddevs/image/upload/v1745609342/women-s-orange-deadpool-graphic-printed-oversized-t-shirt-637480-1737523125-1_bsk4id.jpg",
    altText: "Peach t-shirt with Deadpool and Wolverine graphic print",
    colors: ["Peach", "Red", "Yellow", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    categories: "Women",
    subCategories: ["T-Shirt", "Oversized", "Casual Wear"],
    themes: ["Marvel", "Deadpool", "Wolverine", "Comic Art"],
  },

  {
    name: "Deadpool & Wolverine Typography Boyfriend T-shirt",
    description: "Rust orange t-shirt with Deadpool and Wolverine typography and Marvel graphics, ideal for comic lovers.",
    price: 749,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745609367/women-s-orange-best-buds-graphic-printed-boyfriend-t-shirt-648361-1726210212-1_dnc36s.jpg",
    altText: "Rust orange t-shirt with Marvel typography",
    colors: ["Rust Orange", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Women",
    subCategories: ["T-Shirt", "Boyfriend Fit", "Casual Wear"],
    themes: ["Marvel", "Deadpool", "Wolverine", "Typography"]
  },
  {
    name: "Mitsuri Kanroji Graphic Oversized T-shirt",
    description: "Black oversized t-shirt with Mitsuri Kanroji anime graphic from Demon Slayer, perfect for anime enthusiasts.",
    price: 849,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745609466/women-s-black-mitsuri-kanroji-graphic-printed-oversized-t-shirt-645157-1736424542-1_hcejhx.jpg",
    altText: "Black t-shirt with Mitsuri Kanroji anime print",
    colors: ["Black", "Pink", "Green"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Women",
    subCategories: ["T-Shirt", "Oversized", "Anime Wear"],
    themes: ["Demon Slayer", "Mitsuri Kanroji", "Anime", "Manga"]

  },
  {
    name: "Nezuko Kamado Typography Boyfriend T-shirt",
    description: "Light pink boyfriend t-shirt with bold Nezuko Kamado typography design from Demon Slayer series.",
    price: 749,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745609504/women-s-pink-nezuko-kamado-typography-boyfriend-t-shirt-645155-1739174341-1_fqyo7w.jpg",
    altText: "Light pink t-shirt with Nezuko Kamado typography",
    colors: ["Light Pink", "Dark Pink"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Women",
    subCategories: ["T-Shirt", "Boyfriend Fit", "Anime Wear"],
    themes: ["Demon Slayer", "Nezuko Kamado", "Anime", "Typography"]
  },
  {
    name: "Dark Knight Graphic Tee",
    description: "Channel the dark hero vibes with this grey and black t-shirt featuring a bold Batman graphic. Ideal for casual outings and superhero fans!",
    price: 699,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745680016/1733810895_7580637.jpg_byebyi.webp",
    altText: "Grey and black t-shirt with Batman graphic",
    colors: ["Grey", "Black"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["T-Shirt", "Superhero Wear"],
    themes: ["Batman", "Heroic Style", "Street Fashion"]
  },
  {
    name: "Batman Oversized Fit Tee",
    description: "Rock the bat-signal look with this black oversized fit t-shirt featuring Batman logo and stylish sleeve detailing. Perfect for comfy and cool streetwear!",
    price: 749,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679968/1741174278_8263515.jpg_ebe6uz.webp",
    altText: "Black oversized t-shirt with Batman logo",
    colors: ["Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["T-Shirt", "Oversized Fit"],
    themes: ["Batman", "Street Style", "Casual Cool"]
  },
  {
    name: "Spidey Action Graphic Tee",
    description: "Bring the web-slinging action to life with this beige t-shirt featuring a vibrant Spider-Man graphic. Perfect for everyday heroics and play!",
    price: 699,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679913/1733813595_1743881.jpg_vgquy3.webp",
    altText: "Beige t-shirt with colorful Spider-Man graphic",
    colors: ["Beige", "Red", "Blue"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["T-Shirt", "Superhero Wear"],
    themes: ["Spider-Man", "Action Hero", "Fun Casual"]
  },
  {
    name: "Super Hero Spidey Tee",
    description: "Show off your superhero spirit with this sky blue t-shirt featuring Spider-Man and bold comic-style graphics. Ideal for fans of classic superheroes!",
    price: 749,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679876/1734586140_9617151.jpg_ymfin2.webp",
    altText: "Sky blue t-shirt with Spider-Man comic graphic",
    colors: ["Sky Blue", "Red", "Black"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["T-Shirt", "Superhero Wear"],
    themes: ["Spider-Man", "Comic Style", "Classic Hero"]
  },
  {
    name: "Batman Hero Stance Tee",
    description: "Gear up your young hero with this grey long-sleeve t-shirt featuring a vibrant BATMAN graphic across the chest.",
    price: 599,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679847/1718262300_1222051.jpg_efi7ke.webp",
    altText: "Grey long-sleeve t-shirt with colorful BATMAN graphic",
    colors: ["Grey", "Blue", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["Graphic Printed"],
    themes: ["DC Universe", "Batman"]
  },
  {
    name: "Superman Colorblock Sweatshirt",
    description: "Let your little one stand out with this bold colorblock sweatshirt featuring an embroidered Superman logo on the chest.",
    price: 799,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679693/1735196253_6913497.jpg_xcb769.webp",
    altText: "Colorblock sweatshirt with embroidered Superman logo",
    colors: ["Navy Blue", "Red", "Yellow"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["Graphic Printed", "Sweatshirt"],
    themes: ["DC Universe", "Superman"]
  },
  {
    name: "Minions Forever Friends Sweatshirt",
    description: "Celebrate friendship with this cheerful yellow sweatshirt featuring Minions characters and 'Forever Friends' text graphic.",
    price: 699,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679652/1733810903_9895022.jpg_cu7ntj.webp",
    altText: "Yellow sweatshirt with Minions and 'Forever Friends' text",
    colors: ["Yellow", "Blue", "Black"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["Graphic Printed", "Sweatshirt"],
    themes: ["Minions", "Animated Characters"]
  },
  {
    name: "Marvel Wolverine Slash Tee",
    description: "Show off your Marvel fandom with this grey t-shirt featuring a bold graphic of Wolverine with his claws extended and a fierce expression.",
    price: 499,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679814/1731745720_7607289.jpg_g6krpy.webp",
    altText: "Grey t-shirt with Wolverine graphic and slash design",
    colors: ["Grey", "Black", "White"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["Graphic Printed"],
    themes: ["Marvel Universe", "Wolverine"]
  },
  {
    name: "DC Wonder Woman Graphic Tee",
    description: "Embrace your inner hero with this navy blue t-shirt featuring a vibrant pop-art style graphic of Wonder Woman in a colorful frame.",
    price: 499,
    imageUrl: "https://res.cloudinary.com/clouddevs/image/upload/v1745679747/1709725268_5133454.jpg_o1bthd.webp",
    altText: "Navy blue t-shirt with pop-art style Wonder Woman graphic",
    colors: ["Navy Blue", "Yellow", "Pink"],
    sizes: ["S", "M", "L", "XL"],
    categories:"Kids",
    subCategories: ["Graphic Printed"],
    themes: ["DC Universe", "Wonder Woman"]
  }
];

module.exports = { data: productListings };
