const PRODUCTS_DETAILS = {
 oxysense: {
  slug: "oxysense",
  title: "Handheld",
  subtitle: "Inline Medical Oxygen Analyzer",

  price: 12999,
  availability: "in_stock",

  paymentLink: "https://pages.razorpay.com/pl_S7dflM2ykcMprn/view",

  images: [
    "/images/products/oxysense/oxysenseone.png",
    "/images/products/oxysense/oxysensetwo.png",
    "/images/products/oxysense/oxysensethree.png",
  ],

  shortDesc:
    "Compact inline oxygen analyzer for continuous monitoring of oxygen purity in medical and home-care systems.",

  longDesc:
    "OxySense is a high-precision inline oxygen analyzer engineered for reliable monitoring of oxygen concentration in real time. It is designed for hospitals, clinics, oxygen concentrators, and home-care setups where accurate oxygen delivery is critical. With its fast response time and compact inline design, OxySense ensures patient safety by helping prevent risks of hypoxia and hyperoxia. The device is simple to install, low on maintenance, and delivers consistent medical-grade performance.",

  features: [
    "Continuous real-time oxygen purity monitoring",
    "Medical-grade sensor for reliable accuracy",
    "Inline installation with oxygen tubing",
    "Fast response time for instant readings",
    "Compact and lightweight body design",
    "Low power consumption via USB supply",
    "Ideal for hospitals, clinics, and home oxygen therapy",
  ],

  specs: {
    measurementRange: "0% – 100% Oxygen",
    accuracy: "±1% full scale",
    responseTime: "Less than 5 seconds",
    operatingTemp: "0°C – 50°C",
    operatingHumidity: "Up to 95% RH (non-condensing)",
    power: "5V USB Powered",
    application: "Inline oxygen monitoring",
  },
},

tableoxysense: {
  slug: "tableoxysense",
  title: "Tabletop",
  subtitle: "Table-top Oxygen Concentration Analyzer",

  price: 15500,
  availability: "in_stock",

  paymentLink: "https://rzp.io/rzp/WeUpc51",

  images: [
    "/images/products/tableoxysense/tableoxysenseone.png",
    "/images/products/tableoxysense/tableoxysensetwo.png",
  ],

  shortDesc:
    "High-accuracy table-top oxygen analyzer with bright color display and built-in alarm system.",

  longDesc:
    "Table OxySense is a precision table-top oxygen analyzer developed for accurate measurement of oxygen concentration in medical and industrial environments. It features a clear color LCD for easy visibility and an integrated alarm system for safety alerts. Designed for stable surface placement, this analyzer is suitable for hospitals, laboratories, oxygen generation plants, and quality testing applications. Its durable construction and reliable sensor technology make it ideal for long-term continuous use.",

  features: [
    "Measures oxygen concentration from 0% to 100%",
    "High-precision sensor technology",
    "Large color LCD for easy readability",
    "Audible and visual alarm system for safety",
    "Stable table-top mounting design",
    "Suitable for medical and industrial applications",
    "Designed for continuous long-term operation",
  ],

  specs: {
    measurementRange: "0% – 100% Oxygen",
    accuracy: "Compliant with ISO 80601-2-55 standards",
    operatingTemp: "0°C – 60°C",
    display: "High-contrast color LCD",
    alarm: "Audio and visual alarm indicators",
    mounting: "Table-top placement",
    application: "Oxygen concentration analysis",
  },
},



//   nodex: {
//     slug: "nodex",
//     title: "NODex",
//     subtitle: "Breath Diagnosis Device",

//     price: 4999,
//     availability: "in_stock",

//     images: [
//       "/images/products/lung5.png",
//       "/images/products/nodex/nodexside.png",
//     ],

//     shortDesc:
//       "AI-enabled breath analysis device for early COPD detection.",

//     longDesc:
//       "NODex uses AI and breath analysis to assist clinicians in diagnosing COPD and tracking patient respiratory health over time.",

//     features: [
//       "AI powered diagnosis",
//       "Patient history tracking",
//       "Portable & lightweight",
//       "Cloud ready",
//     ],

//     specs: {
//       connectivity: "WiFi / Bluetooth",
//       battery: "3000mAh",
//       weight: "350g",
//     },
//   },
};

export default PRODUCTS_DETAILS;
