$(document).ready(function () {
  "use strict";
  let years = [
      "Older",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2022",
    ],
    models = [
      {
        name: "Abarth",
        models: ["595"],
      },
      {
        name: "Alfa Romeo",
        models: ["4C", "Brera", "Giulia", "Giulietta", "MiTo", "Stelvio"],
      },
      {
        name: "Aston Martin",
        models: [
          "Cygnet",
          "DB11",
          "DB11",
          "DB9",
          "DB9",
          "DBS",
          "ONE-77",
          "Rapide",
          "Vanquish",
          "V12 Vantage",
          "V8 Vantage",
          "Virage",
        ],
      },
      {
        name: "Audi",
        models: [
          "A1",
          "A3",
          "RS3",
          "A4",
          "S4",
          "A5",
          "RS5",
          "S5",
          "A6",
          "A7",
          "A8",
          "e-tron",
          "Q2",
          "Q3",
          "Q5",
          "Q7",
          "Q8",
          "R8",
          "RSQ3",
          "S3",
          "RS4",
          "RS6",
          "S6",
          "RS7",
          "S7",
          "S8",
          "SQ5",
          "RSQ8",
          "SQ8",
          "TT",
          "TT RS",
          "TTS",
        ],
      },
      {
        name: "BAIC",
        models: ["BJ40"],
      },
      {
        name: "Bentley",
        models: [
          "Arnage",
          "Bentayga",
          "Brooklands",
          "Continental",
          "Flying Spur",
          "Mulsanne",
        ],
      },
      {
        name: "BMW",
        models: [
          "116",
          "118",
          "120",
          "125",
          "128",
          "135",
          "M135",
          "218",
          "220",
          "225",
          "228",
          "230",
          "M235",
          "M240",
          "316",
          "318",
          "320",
          "323",
          "325",
          "328",
          "330",
          "335",
          "340",
          "Alpina B3 S",
          "Alpina D3",
          "420",
          "428",
          "430",
          "435",
          "440",
          "Alpina B4",
          "Alpina B4 S",
          "Alpina D4",
          "520",
          "523",
          "525",
          "528",
          "530",
          "535",
          "540",
          "545",
          "550",
          "Alpina B5",
          "Alpina D5 S",
          "630",
          "635",
          "640",
          "645",
          "650",
          "Alpina B6",
          "730",
          "735",
          "740",
          "745",
          "750",
          "760",
          "Alpina B7",
          "840",
          "850",
          "M850",
          "i8",
          "M2",
          "M3",
          "M4",
          "M5",
          "M6",
          "X1",
          "X2",
          "Alpina XD3",
          "X3",
          "X4",
          "X5",
          "X5 M",
          "X6",
          "X6 M",
          "X7",
          "Z4",
        ],
      },
      {
        name: "Borgward",
        models: ["BX5", "BX7"],
      },
      {
        name: "Bugatti",
        models: ["Chiron", "Veyron"],
      },
      {
        name: "Buick",
        models: ["Riviera"],
      },
      {
        name: "BYD",
        models: [],
      },
      {
        name: "Cadillac",
        models: [
          "ATS",
          "CT4",
          "CT5",
          "CT6",
          "CTS",
          "DeVille",
          "Escalade",
          "SRX",
          "STS",
          "XT4",
          "XT5",
          "XT6",
          "XTS",
        ],
      },
      {
        name: "Changan",
        models: ["Alsvin", "CS35", "CS75", "CS85", "CS95", "Eado"],
      },
      {
        name: "Chery",
        models: [
          "Arrizo3",
          "Arrizo5",
          "Arrizo7",
          "E5",
          "E8",
          "Tiggo3",
          "Tiggo5",
          "Tiggo7",
        ],
      },
      {
        name: "Chevrolet",
        models: [
          "Avalanche",
          "Aveo",
          "Blazer",
          "Bolt EV",
          "Camaro",
          "Caprice",
          "Captiva",
          "Corvette",
          "Cruze",
          "Epica",
          "Equinox",
          "Express",
          "Impala",
          "Lumina",
          "Malibu",
          "Optra",
          "Silverado",
          "Sonic",
          "Spark",
          "Suburban",
          "Tahoe",
          "Trailblazer",
          "Traverse",
          "Trax",
          "Uplander",
        ],
      },
      {
        name: "Chrysler",
        models: [
          "200",
          "300C",
          "300S",
          "300 SRT",
          "Grand Voyager",
          "Pacifica",
          "PT Cruiser",
        ],
      },
      {
        name: "Citroen",
        models: ["C-Elysee", "C3", "C4", "C5"],
      },
      {
        name: "CMC",
        models: [],
      },
      {
        name: "Daewoo",
        models: [],
      },
      {
        name: "Daihatsu",
        models: ["Sirion", "Terios"],
      },
      {
        name: "Dodge",
        models: [
          "Avenger",
          "Caliber",
          "Caravan",
          "Challenger",
          "Charger",
          "Dart",
          "Durango",
          "Journey",
          "Magnum",
          "Neon",
          "Nitro",
          "RAM",
          "Viper",
        ],
      },
      {
        name: "Eagle",
        models: ["Wrangler"],
      },
      {
        name: "FAW-Bestune",
        models: [],
      },
      {
        name: "Ferrari",
        models: [
          "308 GTS",
          "360",
          "458",
          "488",
          "550",
          "612",
          "812 GTS",
          "California",
          "F12",
          "F430",
          "F599",
          "F8 Tributo",
          "FF",
          "GTC4Lusso",
          "LaFerrari",
          "Portofino",
          "Roma",
        ],
      },
      {
        name: "FIAT",
        models: ["124 Spider", "500", "500C", "500L", "Ducato", "Linea"],
      },
      {
        name: "Fisker",
        models: ["Karma"],
      },
      {
        name: "Ford",
        models: [
          "Bronco",
          "Crown Victoria",
          "EcoSport",
          "Edge",
          "Escape",
          "Escort",
          "Expedition",
          "Explorer",
          "F150",
          "F250",
          "Fiesta",
          "Figo",
          "Five Hundred",
          "Flex",
          "Focus",
          "Fusion",
          "Model A",
          "Mondeo",
          "Mustang",
          "Ranger",
          "Taurus",
          "Transit",
        ],
      },
      {
        name: "GAC",
        models: ["GS5", "GS7", "GS8"],
      },
      {
        name: "Geely",
        models: [
          "Emgrand 7",
          "Emgrand 7 (RV)",
          "Emgrand 8",
          "Emgrand GT",
          "Emgrand X7",
          "GC6",
          "GS Sport",
          "GX2",
        ],
      },
      {
        name: "Genesis",
        models: ["G70", "G80", "G90", "GV70", "GV80", "Genesis"],
      },
      {
        name: "GMC",
        models: ["Acadia", "Envoy", "Savanna", "Sierra", "Terrain", "Yukon"],
      },
      {
        name: "Great Wall",
        models: ["Wingle 5"],
      },
      {
        name: "Haval",
        models: ["H2", "H6"],
      },
      {
        name: "Honda",
        models: [
          "Accord",
          "Accord Crosstour",
          "City",
          "Civic",
          "CR-V",
          "HR-V",
          "Jazz",
          "MR-V",
          "Odyssey",
          "Odyssey J",
          "Pilot",
          "S2000",
        ],
      },
      {
        name: "Hongqi",
        models: ["HS5"],
      },
      {
        name: "HUMMER",
        models: ["H1", "H2", "H3"],
      },
      {
        name: "Hyundai",
        models: [
          "Accent",
          "Azera",
          "Centennial",
          "Creta",
          "Elantra",
          "Equus",
          "Genesis",
          "Grand Santa Fe",
          "Grand Santa Fe",
          "Grandeur",
          "H-1",
          "i10",
          "i20",
          "i30",
          "i40",
          "Ioniq",
          "Kona",
          "Palisade",
          "Santa Fe",
          "Sonata",
          "Trajet",
          "Tucson",
          "Veloster",
          "Venue",
          "Veracruz",
        ],
      },
      {
        name: "Infiniti",
        models: [
          "EX35",
          "EX37",
          "FX35",
          "FX37",
          "FX50",
          "G25",
          "G35",
          "G37",
          "JX35",
          "M37",
          "M45",
          "M50",
          "M56",
          "Q30",
          "Q50",
          "Q60",
          "Q70",
          "QX30",
          "QX50",
          "QX56",
          "QX60",
          "QX70",
          "QX80",
        ],
      },
      {
        name: "Isuzu",
        models: ["D-Max", 'MU-X"'],
      },
      {
        name: "JAC",
        models: ["J4", "J5", "S3", "S7"],
      },
      {
        name: "Jaguar",
        models: [
          "E-Pace",
          "E-Type",
          "F-Pace",
          "F-Type",
          "I-Pace",
          "S-Type",
          "X-Type",
          "XE",
          "XF",
          "XFR-S",
          "XJ",
          "XJ6",
          "XK",
          "XKR",
        ],
      },
      {
        name: "Jeep",
        models: [
          "Cherokee",
          "Commander",
          "Compass",
          "Gladiator",
          "Grand Cherokee",
          "Patriot",
          "Renegade",
          "Wrangler",
        ],
      },
      {
        name: "Jetour",
        models: ["X70", "X90"],
      },
      {
        name: "Kama",
        models: ["Karma", "Tuta"],
      },
      {
        name: "Kia",
        models: [
          "Cadenza",
          "Carens",
          "Cerato",
          "Cerato Koup",
          "Cerato Koup",
          "Forte",
          "Grand Carnival",
          "K5",
          "K900",
          "Mohave",
          "Opirus",
          "Optima",
          "Pegas",
          "Picanto",
          "Quoris",
          "Rio",
          "Sedona",
          "Seltos",
          "Sorento",
          "Soul",
          "Sportage",
          "Stinger",
          "Telluride",
        ],
      },
      {
        name: "Lada",
        models: ["Niva"],
      },
      {
        name: "Lamborghini",
        models: ["Aventador", "Gallardo", "Huracan", "Urus"],
      },
      {
        name: "Land Rover",
        models: [
          "Defender",
          "Discovery",
          "Discovery Sport",
          "LR2",
          "LR3",
          "LR4",
        ],
      },
      {
        name: "Lexus",
        models: [
          "CT200h",
          "CT250",
          "ES250",
          "ES300",
          "ES300h",
          "ES330",
          "ES350",
          "GS200",
          "GS250",
          "GS300",
          "GS350",
          "GS430",
          "GS450",
          "GS450h",
          "GS460",
          "GSF",
          "GX460",
          "IS-C",
          "IS-F",
          "IS200",
          "IS250",
          "IS300",
          "IS350",
          "LC500",
          "LFA",
          "LS350",
          "LS400",
          "LS430",
          "LS460",
          "LS500",
          "LS500h",
          "LS600",
          "LX470",
          "LX570",
          "LX600",
          "NX200",
          "NX300",
          "RC200",
          "RC350",
          "RCF",
          "RX300",
          "RX350",
          "RX450h",
          "SC400",
          "UX200",
        ],
      },
      {
        name: "Lincoln",
        models: [
          "Aviator",
          "Continental",
          "Corsair",
          "MKC",
          "MKS",
          "MKT",
          "MKX",
          "MKZ",
          "Nautilus",
          "Navigator",
        ],
      },
      {
        name: "Lotus",
        models: ["Elise", "Evora", "Exige"],
      },
      {
        name: "Luxgen",
        models: ["MPV7", "S5", "U6", "U7"],
      },
      {
        name: "Maserati",
        models: [
          "Ghibli",
          "GranCabrio",
          "Granturismo",
          "Levante",
          "Quattroporte",
        ],
      },
      {
        name: "Maybach",
        models: ["57", "S500"],
      },
      {
        name: "Mazda",
        models: [
          "2",
          "3",
          "6",
          "BT-50",
          "CX-3",
          "CX-30",
          "CX-5",
          "CX-7",
          "CX-9",
          "MX-5",
        ],
      },
      {
        name: "McLaren",
        models: ["570S", "600LT", "650S", "675", "720S", "MP4-12C", "P1"],
      },
      {
        name: "Mercedes",
        models: [
          "A200",
          "A220",
          "A250",
          "A35 AMG",
          "A45 AMG",
          "Actros",
          "B170",
          "B200",
          "C180",
          "C200",
          "C220",
          "C230",
          "C250",
          "C280",
          "C300",
          "C350",
          "C400",
          "C43 AMG",
          "C450",
          "C55 AMG",
          "C63 AMG",
          "CL500",
          "CL55 AMG",
          "CL550",
          "CL600",
          "CL63 AMG",
          "CL65 AMG",
          "CLA200",
          "CLA250",
          "CLA35 AMG",
          "CLA45 AMG",
          "CLC160",
          "CLC180",
          "CLC200",
          "CLC220",
          "CLC250",
          "CLC350",
          "CLK200",
          "CLK280",
          "CLK320",
          "CLK350",
          "CLK500",
          "CLK55 AMG",
          "CLS 400",
          "CLS350",
          "CLS400",
          "CLS450",
          "CLS500",
          "CLS55 AMG",
          "CLS550",
          "CLS63 AMG",
          "E200",
          "E220",
          "E230",
          "E240",
          "E250",
          "E280",
          "E300",
          "E320",
          "E350",
          "E400",
          "E43 AMG",
          "E450",
          "E500",
          "E53 AMG",
          "E55 AMG",
          "E550",
          "E63 AMG",
          "E63 S AMG",
          "G320",
          "G350",
          "G500",
          "G55 AMG",
          "G550",
          "G63 AMG",
          "G65 AMG",
          "G700",
          "G800",
          "Gazelle",
          "GL320",
          "GL450",
          "GL500",
          "GL550",
          "GL63 AMG",
          "GLA220",
          "GLA250",
          "GLA400",
          "GLA45 AMG",
          "GLB250",
          "GLB35 AMG",
          "GLC200",
          "GLC250",
          "GLC300",
          "GLC43 AMG",
          "GLC63 AMG",
          "GLE350",
          "GLE400",
          "GLE43 AMG",
          "GLE450",
          "GLE500",
          "GLE53 AMG",
          "GLE63 AMG",
          "GLK250",
          "GLK280",
          "GLK300",
          "GLK350",
          "GLS400",
          "GLS450",
          "GLS500",
          "GLS580",
          "GLS63 AMG",
          "GLS700",
          "AMG GT",
          "AMG GT-R",
          "ML250",
          "ML300",
          "ML320",
          "ML350",
          "ML400",
          "ML500",
          "ML550",
          "ML63 AMG",
          "R280",
          "R300",
          "R350",
          "R500",
          "S280",
          "S300",
          "S350",
          "S400",
          "S450",
          "S500",
          "S55 AMG",
          "S550",
          "S560",
          "S600",
          "S63 AMG",
          "S65 AMG",
          "SL350",
          "SL400",
          "SL500",
          "SL55 AMG",
          "SL550",
          "SL560",
          "SL63 AMG",
          "SL65 AMG",
          "SLC200",
          "SLC300",
          "SLC43 AMG",
          "SLK200",
          "SLK230",
          "SLK250",
          "SLK280",
          "SLK300",
          "SLK320",
          "SLK350",
          "SLK530",
          "SLK55 AMG",
          "SLK600",
          "SLR",
          "SLS AMG",
          "V",
          "V250",
          "Viano",
          "Vito",
          "XLP800",
        ],
      },
      {
        name: "Mercury",
        models: ["Grand Marquis", "Mariner", "Milan", "Montego", "Mountaineer"],
      },
      {
        name: "MG",
        models: [
          "3",
          "350",
          "360",
          "5",
          "6",
          "GS",
          "GT",
          "HS",
          "RX5",
          "RX8",
          "ZS",
        ],
      },
      {
        name: "MINI",
        models: [
          "Clubman",
          "Cooper",
          "Coupe",
          "Countryman",
          "Paceman",
          "Roadster",
        ],
      },
      {
        name: "Mitsubishi",
        models: [
          "ASX",
          "Attrage",
          "Eclipse",
          "Eclipse Cross",
          "Galant",
          "Grandis",
          "L200",
          "L300",
          "Lancer",
          "Mirage",
          "Montero",
          "Montero Sport",
          "Outlander",
          "Pajero",
          "Pajero Sport",
          "Space Star",
          "SWB",
          "Xpander",
        ],
      },
      {
        name: "Morgan",
        model: ["3 Wheeler", "Aero8", "Plus 4", "Plus 8", "Roadster"],
      },
      {
        name: "Nissan",
        models: [
          "280 ZX",
          "350Z",
          "370z",
          "Altima",
          "Armada",
          "GT-R",
          "Juke",
          "Kicks",
          "Maxima",
          "Micra",
          "Murano",
          "Navara",
          "Pathfinder",
          "Patrol",
          "Patrol Pickup",
          "Patrol Safari",
          "Qashqai",
          "Quest",
          "Rogue",
          "Sentra",
          "Sunny",
          "Tiida",
          "Urvan",
          "Versa",
          "X-Trail",
          "Xterra",
        ],
      },
      {
        name: "Oldsmobile",
        models: [],
      },
      {
        name: "Opel",
        models: [
          "Adam",
          "Astra",
          "Cascada",
          "Corsa",
          "Crossland",
          "Grandland X",
          "Insignia",
          "Meriva",
          "Mokka",
          "Zafira Tourer",
        ],
      },
      {
        name: "Pagani",
        models: ["Huayra"],
      },
      {
        name: "Panoz",
        models: [],
      },
      {
        name: "Peugeot",
        models: [
          "2008",
          "206",
          "207",
          "208",
          "3008",
          "301",
          "308",
          "308 CC",
          "407",
          "408",
          "5008",
          "508",
          "607",
          "Boxer",
          "Partner",
          "Partner Tepee",
          "RCZ",
          "Traveller",
        ],
      },
      {
        name: "Polaris",
        models: ["RZR"],
      },
      {
        name: "Pontiac",
        models: ["Solstice"],
      },
      {
        name: "Porsche",
        models: [
          "911 4S",
          "911 Carrera",
          "911 Carrera 4",
          "911 Carrera 4 GTS",
          "911 Carrera GTS",
          "911 Carrera S",
          "911 GT2",
          "911 GT3",
          "911 GTS",
          "911 S",
          "911 Speedster",
          "911 Targa",
          "911 Targa 4",
          "911 Targa 4 GTS",
          "911 Targa 4S",
          "911 Turbo",
          "911 Turbo S",
          "964 Carrera 2",
          "918 Spyder",
          "718 Boxster",
          "718 Boxster GTS",
          "718 Boxter S",
          "718 Spyder",
          "Boxster",
          "Boxster GT4",
          "Boxster GTS",
          "Boxster S",
          "Cayenne",
          "Cayenne GTS",
          "Cayenne S",
          "Cayenne Turbo",
          "Cayenne Turbo GT",
          "Cayenne Turbo S",
          "718 Cayman",
          "718 Cayman GTS",
          "718 Cayman S",
          "Cayman",
          "Cayman GT4",
          "Cayman GTS",
          "Cayman S",
          "Macan",
          "Macan GTS",
          "Macan S",
          "Macan Turbo",
          "Panamera",
          "Panamera 4",
          "Panamera 4S",
          "Panamera GTS",
          "Panamera S",
          "Panamera S Turbo",
          "Panamera Turbo",
          "Panamera Turbo S",
          "Taycan",
        ],
      },
      {
        name: "RAM",
        models: ["RAM", "1200", "1500", "2500"],
      },
      {
        name: "Range Rover",
        models: [
          "Evoque",
          "Evoque Convertible",
          "Sport",
          "Sport Autobiography",
          "Velar",
          "Velar R-Dynamic",
          "Autobiography",
          "HSE",
          "Vogue",
          "Vogue SE",
        ],
      },
      {
        name: "Renault",
        models: [
          "Captur",
          "Clio",
          "Dokker",
          "Duster",
          "Fluence",
          "Koleos",
          "Laguna",
          "Logan",
          "Megane",
          "Safrane",
          "Sandero",
          "Symbol",
          "Talisman",
          "Trafic",
        ],
      },
      {
        name: "Rolls-Royce",
        models: ["Cullinan", "Dawn", "Ghost", "Phantom", "Wraith"],
      },
      {
        name: "Saab",
        models: ["9-3"],
      },
      {
        name: "Saturn",
        models: [],
      },
      {
        name: "Scion",
        models: ["iM"],
      },
      {
        name: "Seat",
        models: ["Alhambra", "Altea", "Ibiza", "Leon"],
      },
      {
        name: "Shelby",
        models: ["Mustang", "Cobra"],
      },
      {
        name: "Skoda",
        models: [
          "Fabia",
          "Kodiaq",
          "Octavia",
          "Rapid",
          "Scala",
          "Superb",
          "Yeti",
        ],
      },
      {
        name: "Smart",
        models: ["Kona", "ForFour", "ForTwo"],
      },
      {
        name: "Spyker",
        models: ["918 Spyder", "718 Spyder"],
      },
      {
        name: "SsangYong",
        models: [],
      },
      {
        name: "Subaru",
        models: [
          "BRZ",
          "Crosstrek",
          "Forester",
          "Impreza",
          "Legacy",
          "Outback",
          "WRX",
          "XV",
        ],
      },
      {
        name: "Suzuki",
        models: [
          "Alto",
          "APV",
          "Baleno",
          "Celerio",
          "Ciaz",
          "Dzire",
          "Ertiga",
          "Grand Vitara",
          "Jimny",
          "Kizashi",
          "Swift",
          "SX4",
          "Vitara",
        ],
      },
      {
        name: "Tata",
        models: ["Tuta", "Xenon"],
      },
      {
        name: "Tesla",
        models: ["Model 3", "Model S", "Model X", "Model Y", "Roadster"],
      },
      {
        name: "Toyota",
        models: [
          "4Runner",
          "86",
          "Aurion",
          "Avalon",
          "Avanza",
          "C-HR",
          "Camry",
          "Celica",
          "Corolla",
          "Corolla Cross",
          "FJ Cruiser",
          "Fortuner",
          "Granvia",
          "Hiace",
          "Highlander",
          "Hilux",
          "Innova",
          "IQ",
          "Land Cruiser",
          "Prado",
          "Previa",
          "Prius",
          "RAV 4",
          "Rush",
          "Sequoia",
          "Sienna",
          "Supra",
          "Tacoma",
          "Tundra",
          "xA",
          "Yaris",
          "Zelas",
        ],
      },
      {
        name: "Volkswagen",
        models: [
          "Arteon",
          "Beetle",
          "Caddy",
          "Caravelle",
          "CC",
          "EOS",
          "Golf",
          "ID.4",
          "Jetta",
          "Multivan",
          "Passat",
          "Polo",
          "Scirocco",
          "T-Roc",
          "Teramont",
          "Tiguan",
          "Touareg",
        ],
      },
      {
        name: "Volvo",
        models: [
          "C30",
          "C70",
          "S40",
          "S60",
          "S80",
          "S90",
          "V40",
          "V60",
          "V70",
          "XC40",
          "XC60",
          "XC70",
          "XC90",
        ],
      },
    ],
    specs = ["GCC Specs", "non GCC Specs", "I don't know"],
    paints = [
      "Original Paint",
      "Partial paint",
      "Fully repainted",
      "I don't know",
    ],
    cities = [
      {
        name: "Dubai",
        list: [
          "Al Barari",
          "Al Barsha",
          "Al Furjan",
          "Al Jadaf",
          "Al Jafiliya",
          "Al Khawaneej",
          "Al Kusais",
          "Al Mamzar",
          "Al Manara",
          "Al Mizhar",
          "Al Nahda",
          "Al Quoz",
          "Al Qusais",
          "Al Safa",
          "Al Sufouh",
          "Al Twar",
          "Al Waha",
          "Al Warqaa",
          "Al Wuheida",
          "Arabian Ranches",
          "Arjan",
          "Baniyas Square",
          "Bur Dubai",
          "Business Bay",
          "City of Arabia",
          "Clock Tower",
          "Culture Village",
          "Deira",
          "DIFC",
          "Discovery Gardens",
          "Down Town Jebel Ali",
          "Downtown Dubai",
          "Dragon Mart",
          "Dubai Airport Free Zone",
          "Dubai Autodrome",
          "Dubai Festival City",
          "Dubai Hills",
          "Dubai Industrial City",
          "Dubai International Airport",
          "Dubai Internet City",
          "Dubai Investment Park",
          "Dubai Lagoon",
          "Dubai Land",
          "Dubai Marina",
          "Dubai Media City",
          "Dubai Museum",
          "Dubai Outlet Mall",
          "Dubai Silicon Oasis",
          "Dubai Sports City",
          "Dubai Studio City",
          "Dubai World Central",
          "Dubai World Trade Centre",
          "Dubiotech",
          "Emaar Business Park",
          "Emirates Hills",
          "Emirates Living",
          "Emirates Towers",
          "Executive Towers",
          "Falcon City",
          "Forat",
          "Garhoud",
          "Ghadeer Community",
          "Golf City",
          "Green Community",
          "Green Community Motor City",
          "Hor Al Anz",
          "Ibn Batuta Mall",
          "IMPZ International Media Production Zone",
          "International City",
          "JAFZA Jebel Ali Free Zone",
          "JBR Jumeirah Beach Residence",
          "Jebel Ali",
          "JLT Jumeirah Lake Towers",
          "Jumeirah",
          "Jumeirah Golf Estates",
          "Jumeirah Heights",
          "Jumeirah Islands",
          "Jumeirah Park",
          "Jumeirah Village",
          "Jumeirah Village Circle",
          "Jumeirah Village Triangle",
          "Karama",
          "Knowledge Village",
          "Lamcy Plaza",
          "Layan Community",
          "Legends Dubai",
          "Living Legends",
          "Majan",
          "Mamzar Park",
          "Maritime City",
          "Meydan City",
          "Mira",
          "Mirdif",
          "Mohammed Bin Rashid Al Maktoum City",
          "Motor City",
          "Mudon",
          "Muhaisnah",
          "Mushrif Park",
          "Nad Al Hamar",
          "Nad Al Shiba",
          "Nad Al Shiba Horse Racing",
          "Naif",
          "Old Town",
          "Oud Al Muteena",
          "Oud Metha",
          "Pearl Jumeirah",
          "Ras Al Khor",
          "Rashidiya",
          "Remraam",
          "Residential City",
          "Ritaj",
          "Safa Park",
          "Satwa",
          "Satwa Round About",
          "Shindagha Tunnel",
          "Sonapur",
          "The Gardens",
          "The Greens & The Views",
          "The Hills",
          "The Lagoons",
          "The Lakes",
          "The Meadows",
          "The Palm Jumeirah",
          "The Royal Estates",
          "The Springs",
          "The Villa",
          "The World",
          "Trade Centre",
          "Umm Al Sheif",
          "Umm Ramool",
          "Umm Suqeim",
          "Up Town Motor City",
          "Uptown Mirdif",
          "Victory Heights",
          "Wadi Almardi",
          "Wafi City Mall",
          "Warsan",
          "Waterfront Jebel Ali",
          "Whispering Pines",
          "Zabeel",
          "Zabeel Palace",
          "Zen by Indigo",
          "Zulal",
          "Tecom",
          "Al Wasl",
          "Barsha Heights",
          "Umm Hurair",
          "Al Mankhool",
          "Al Badaa",
          "Al Ain Road",
          "Muraqabatt",
          "Al Rigga",
          "Kuoz",
          "Barsha South",
          "New Gold Souq",
        ],
      },
      {
        name: "Abu Dhabi",
        list: [
          "Abu Dhabi Golf & Equestrian Club",
          "Abu Dhabi Industrial City",
          "Abu Dhabi International Airport",
          "Abu Dhabi Island",
          "Abu Dhabi Mall",
          "Abu Dhabi National Exhibition Centre",
          "Abu Dhabi University",
          "ADAFZA",
          "Al Ghadeer Village",
          "Al Aman",
          "Al Bahia",
          "Al Bahia Park",
          "Al Bandar",
          "Al Bateen",
          "Al Bateen Airport",
          "Al Bateen Mall",
          "Al Bateen Villas",
          "Al Dana",
          "Al Dhafrah",
          "Al Falah City",
          "Al Ghadeer",
          "Al Ghaf Park",
          "Al Ghazal Golf Club",
          "Al Gurm Mangroves",
          "Al Hosn",
          "Al Ittihad",
          "Al Karamah",
          "Al Khaleej Al Arabi Street",
          "Al Khalidiyah",
          "Al Khubeirah",
          "Al Lissaily",
          "Al Madina Al Riyadiya",
          "Al Mafraq",
          "Al Mafraq Hospital",
          "Al Manaseer",
          "Al Manhal",
          "Al Maqtaa",
          "Al Markaziyah",
          "Al Matar",
          "Al Mina",
          "Al Moroor",
          "Al Muneera",
          "Al Musalla",
          "Al Mushrif",
          "Al Muzoon",
          "Al Nahda",
          "Al Nahyan",
          "Al Nahyan military Camp",
          "Al Qubesat",
          "Al Qurayyah Island",
          "Al Qurm",
          "Al Qurm Gardens",
          "Al Raha Beach",
          "Al Raha Gardens",
          "Al Raha Shopping Mall",
          "Al Rahba",
          "Al Ras Al Akhdar",
          "Al Razeem",
          "Al Reef",
          "Al Reem Island",
          "Al Rehhan",
          "Al Rowdah",
          "Al Rumaila",
          "Al Safarat",
          "Al Safeer Mall",
          "Al Salam street",
          "Al Samha",
          "Al Seef",
          "Al Shaleela",
          "Al Shamkha",
          "Al Shatie",
          "Al Shawamekh",
          "Al Thurayya",
          "Al Wahda Mall",
          "Al Wahdah",
          "Al Zaab",
          "Al Zahiya",
          "Al Zahraa",
          "Al Zeina",
          "Arabian Village",
          "Arzanah",
          "As Suwwah Island",
          "AUH International Airport Terminal 1",
          "Balrmmd Island",
          "Bani Yas",
          "Baniyas City",
          "Belghailam",
          "Belghailam Island Cluster",
          "Between two Bridges",
          "Bisrat Fahid Island Cluster",
          "Bloom Gardens",
          "Capital Plaza",
          "City of Lights",
          "Coconut Island",
          "Corniche",
          "Danet Abu Dhabi",
          "Defense Road",
          "Delma Street",
          "Desert Village",
          "Eastern Road",
          "Electra",
          "Emirates Palace",
          "Futaysi Island",
          "Gargash Round About",
          "Gate District",
          "Golf Gardens",
          "Guggenheim & Louvre Museums",
          "Hadbat Al Zafranah",
          "Hamdan Centre",
          "Hodariyat Island",
          "Hydra City",
          "Hydra Village",
          "ICAD Main Gate",
          "Khalidiyah Mall",
          "Khalifa City A",
          "Khalifa City B",
          "Khalifa City C",
          "Khalifa Street",
          "Khor Al Raha",
          "Lifeline Hospital",
          "Liwa Street",
          "Lulu Island",
          "Madinat Zayed",
          "Madinat Zayed Shopping Centre",
          "Mangrove Area North",
          "Marina Mall",
          "Marina Village",
          "Masdar City",
          "Mina Mall",
          "Mohammed Bin Zayed City",
          "Motor World",
          "Mussafah",
          "Mussafah East",
          "Mussafah Industrial Area",
          "Mussafah Residential & Commercial Area",
          "Najmat",
          "Najmat Reem Marina",
          "New Shahama",
          "Nurai Island",
          "Officers City",
          "Officers Club Area",
          "Police Traffic Dept",
          "Qasr Al Bahr",
          "Qasr El Shatie",
          "Rawdhat",
          "Saadiyat Beach",
          "Saadiyat Culatural District",
          "Saadiyat Island",
          "Saadiyat Marina",
          "Saadiyat Retreat",
          "Saadiyat South Beach Promenade",
          "Saadiyat Wetlands Reserve",
          "Samaliyah Island",
          "Sas Al Nakhl Villas",
          "Sas An Nakhl Island",
          "Shahama Market",
          "Shams Abu Dhabi",
          "Sheikh Khalifa Park",
          "Sheikh Zayed Grand Mosque",
          "South Hodariyat Island",
          "Tamouh CBD",
          "Tamouh Marina Square",
          "Tourist Club Area",
          "Umm Al Nar",
          "Umm Yifenah Island",
          "Yas Circuit & Marina",
          "Yas Entertainment District",
          "Yas Island",
          "Yas Northern Marina Village",
          "Yas Northern Residential & Golf",
          "Yas Southern Marina Village",
          "Yas Village",
          "Yas Waterfront Resorts & Links",
          "Zayed Bay",
          "Zayed Sports City",
          "Muroor Road",
        ],
      },
      {
        name: "Sharjah",
        list: [
          "Abu Shagara",
          "Al Abar",
          "Al Azra",
          "Al Barashi",
          "Al Darari",
          "Al Falaj",
          "Al Fayha",
          "Al Fisht",
          "Al Ghaphia",
          "Al Gharayen",
          "Al Gharb",
          "Al Ghubaiba",
          "Al Ghuwair",
          "Al Goaz",
          "Al Hazana",
          "Al Heera",
          "Al Jazzat",
          "Al Jubail",
          "Al Juraina",
          "Al khaledia",
          "Al Khan",
          "Al khezamia",
          "Al Layyeh",
          "Al Mahatah",
          "Al Majaz",
          "Al Mamzar",
          "Al Manakh",
          "Al Mansura",
          "Al Mareija",
          "Al Mujarrah",
          "Al Musalla",
          "Al Nabba",
          "Al Nahda",
          "Al Nasserya",
          "Al nishama",
          "Al Noaf",
          "Al Nud",
          "Al Qadisia",
          "Al Qasba",
          "Al Qasimia",
          "Al Qulayaa",
          "Al Ramaqta",
          "Al Ramla",
          "Al Ramtha",
          "Al Rifah",
          "Al Riffa",
          "Al Sabkha",
          "Al Sajaa",
          "Al Shahba",
          "Al Shuwaihean",
          "Al Soor",
          "Al Sweihat",
          "Al Tai",
          "Al Talaa",
          "Al turrfa",
          "Al Yarmook",
          "Bu Tina",
          "Corniche Al Buhaira",
          "Dasman",
          "Elyash",
          "Halwan Suburb",
          "Hoshi Area",
          "Industrial Area 1",
          "Industrial Area 10",
          "Industrial Area 11",
          "Industrial Area 12",
          "Industrial Area 13",
          "Industrial Area 15",
          "Industrial Area 17",
          "Industrial Area 2",
          "Industrial Area 3",
          "Industrial Area 4",
          "Industrial Area 5",
          "Industrial Area 6",
          "Industrial Area 7",
          "Industrial Area 8",
          "Industrial Area 9",
          "Maysaloon",
          "Muwafjah",
          "Muwaileh",
          "Muwailih Commercial",
          "Rolla Area",
          "Saif Zone",
          "Samnan",
          "Sharjah Industrial Area",
          "Sharqan",
          "Tilal City",
          "Um Tarrafa",
          "University City",
          "Al Taawun",
        ],
      },
      {
        name: "Ajman",
        list: [
          "Al Nuaimia 1",
          "Ajman Industrial 2",
          "Hamidiya",
          "Ajman University",
          "Al Zorah Natural Reserve",
          "Al Jerf Industrial 1",
          "Al Jerf Industrial 2",
          "Al Jerf Industrial 3",
          "Al Tallah Camel Race Course",
          "Ajman Uptown",
          "Al Zorah Beach",
          "Al Muaihat 1",
          "Ajman Museum",
          "City Centre Ajman",
        ],
      },
      {
        name: "Fujairah",
        list: ["Sakamkam"],
      },
      {
        name: "Umm Al Quawain",
        list: ["Sidroh"],
      },
      {
        name: "Al Ain",
        list: [
          "Al Dhahir",
          "Al Noud",
          "Bawadi Mall",
          "Industrial Area",
          "Al Muwaij'i",
          "Souq Extra",
          "Al Ain International Airport",
          "Al Fou'ah",
          "Al Ain National Museum",
          "Zakhir",
          "Helipad",
          "Al Rawdah Palace",
          "Asharij",
          "Al Jimi",
          "Al Tiwayyah",
          "Tawam",
          "Ain Al Faydah",
          "Al Maqam",
        ],
      },
      {
        name: "Ras al-Khaimah",
        list: ["Al Dar Al Baidaa"],
      },
    ],
    cars = [
      "Abarth",
      "Alfa Romeo",
      "Aston Martin",
      "Audi",
      "BAIC",
      "Bentley",
      "BMW",
      "Borgward",
      "Bugatti",
      "Buick",
      "BYD",
      "Cadillac",
      "Changan",
      "Chery",
      "Chevrolet",
      "Chrysler",
      "Citroen",
      "CMC",
      "Daewoo",
      "Daihatsu",
      "Dodge",
      "Eagle",
      "FAW-Bestune",
      "Ferrari",
      "FIAT",
      "Fisker",
      "Ford",
      "GAC",
      "Geely",
      "Genesis",
      "GMC",
      "Great Wall",
      "Haval",
      "Honda",
      "Hongqi",
      "HUMMER",
      "Hyundai",
      "Infiniti",
      "Isuzu",
      "JAC",
      "Jaguar",
      "Jeep",
      "Jetour",
      "Kama",
      "Kia",
      "Lada",
      "Lamborghini",
      "Land Rover",
      "Lexus",
      "Lincoln",
      "Lotus",
      "Luxgen",
      "Maserati",
      "Maybach",
      "Mazda",
      "McLaren",
      "Mercedes",
      "Mercury",
      "MG",
      "MINI",
      "Mitsubishi",
      "Morgan",
      "Nissan",
      "Oldsmobile",
      "Opel",
      "Pagani",
      "Panoz",
      "Peugeot",
      "Polaris",
      "Pontiac",
      "Porsche",
      "RAM",
      "Range Rover",
      "Renault",
      "Rolls-Royce",
      "Saab",
      "Saturn",
      "Scion",
      "Seat",
      "Shelby",
      "Skoda",
      "Smart",
      "Spyker",
      "SsangYong",
      "Subaru",
      "Suzuki",
      "Tata",
      "Tesla",
      "Toyota",
      "Volkswagen",
      "Volvo",
    ],
    progressVal = 0,
    current_fs,
    next_fs,
    previous_fs,
    left,
    opacity,
    scale,
    animating = false;
  $("#carxchange").html(`
  <div class="container">
    <div class="tab-content">
      <div class="progress-wrapper w-100 mb-4">
        <div class="progress-info d-flex align-items-center justify-content-between" data-val="0">
          <button class="btn p-0 back" id="btn-back">
            <svg xmlns:x="http://ns.adobe.com/Extensibility/1.0/" xmlns:i="http://ns.adobe.com/AdobeIllustrator/10.0/" xmlns:graph="http://ns.adobe.com/Graphs/1.0/" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" version="1.1" baseProfile="tiny" id="Layer_1" x="0px" y="0px" width="42px" height="42px" viewBox="0 0 42 42" xml:space="preserve">
              <polygon fill-rule="evenodd" points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "/>
            </svg> Back
          </button>
        </div>
        <div class="progress" style="height: 8px;">
          <div class="progress-bar" role="progressbar" aria-label="Progress Bar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <form novalidate onsubmit="return false" class="w-100">
        <input type="hidden" name="gclid_field" id="gclid_field" value="">
        <input type="hidden" name="fbclid_field" id="fbclid_field" value="">
        <input type="hidden" name="userid_field" id="userid_field" value="">
        <div class="slide-wrapper w-100">
          <div class="slide slide-first active" id="slide-make">
            <div class="slide-header">
              <h5>Select your car make</h5>
              <div class="search-field">
                <input id="search-car" type="search" placeholder="Search for car make">
                <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                  <title id="title">Search Icon</title>
                  <desc id="desc">A magnifying glass icon.</desc>
                  <g class="search-path" fill="none" stroke="#848F91">
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                  </g>
                </svg>
                <ul class="makes-drop-down" id="search-car-dropdown"></ul>
              </div>
            </div>
            <div class="slide-body">
              <div class="radio-wrapper" id="cars-list">
                <div class="label-wrapper">
                  <input type="radio" name="car" value="Toyota" id="toyota">
                  <label for="toyota">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba85b7af0c24e838e1af7_toyota.svg" alt="Toyota">
                  </label>
                </div>
                <div class="label-wrapper">
                  <input type="radio" name="car" value="Nissan" id="nissan">
                  <label for="nissan">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba85b9780f07322ed699b_nissan.png" alt="Nissan">
                  </label>
                </div>
                <div class="label-wrapper">
                  <input type="radio" name="car" value="Ford" id="ford">
                  <label for="ford">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba85859e5171ba246737e_ford.png" alt="Ford">
                  </label>
                </div>

                <div class="label-wrapper">
                  <input type="radio" name="car" value="BMW" id="bmw">
                  <label for="bmw">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba83d7af0c2d6648e1a19_bmw.svg" alt="BMW">
                  </label>
                </div>

                <div class="label-wrapper">
                  <input type="radio" name="car" value="Honda" id="honda">
                  <label for="honda">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba859b5384651e6809d17_honda.png" alt="Honda">
                  </label>
                </div>

                <div class="label-wrapper">
                  <input type="radio" name="car" value="Mitsubishi" id="mitsubishi">
                  <label for="mitsubishi">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba859d0acde618349d0bd_mitsubishi.svg" alt="Mitsubishi">
                  </label>
                </div>

                <div class="label-wrapper">
                  <input type="radio" name="car" value="Volkswagen" id="volkswagen">
                  <label for="volkswagen">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba85c64db4615200dbb03_volkswagen.png" alt="Volkswagen">
                  </label>
                </div>

                <div class="label-wrapper">
                  <input type="radio" name="car" value="Audi" id="audi">
                  <label for="audi">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba859bcd59c7efd0042be_audi.png" alt="Audi">
                  </label>
                </div>
                <div class="label-wrapper">
                  <input type="radio" name="car" value="Mercedes" id="mercedes">
                  <label for="mercedes">
                    <img src="https://uploads-ssl.webflow.com/62e009597a529f39f7c5a2a6/631ba858d3f8df5b7b189b6f_mercedes.svg" alt="Mercedes">
                  </label>
                </div>
                <div class="label-wrapper">
                  <input type="radio" name="car" value="other-car" id="other-car" class="other-car">
                  <label for="other-car">
                    <span class="text">Other make</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="slide" id="slide-model">
            <div class="slide-header">
              <h5>Choose from popular models</h5>
              <div class="search-field">
                <input id="search-model" type="search" placeholder="Search for car model">
                <svg class="svg-icon search-icon" aria-labelledby="title desc" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7">
                  <title id="title">Search Icon</title>
                  <desc id="desc">A magnifying glass icon.</desc>
                  <g class="search-path" fill="none" stroke="#848F91">
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                  </g>
                </svg>
                <ul class="makes-drop-down" id="search-model-dropdown"></ul>
              </div>
            </div>
            <div class="slide-body">
              <div class="radio-wrapper" id="car-models-list"></div>
            </div>
          </div>
          <div class="slide" id="slide-year">
            <div class="slide-header">
              <h5>Select year</h5>
            </div>
            <div class="radio-wrapper" id="car-years-list"></div>
          </div>
          <div class="slide" id="slide-specs">
            <div class="slide-header">
              <h5>Select specifications</h5>
            </div>
            <div class="radio-wrapper radio-column" id="car-specs-list"></div>
          </div>
          <div class="slide" id="slide-city">
            <div class="slide-header">
              <h5>Which city is the car in?</h5>
            </div>
            <div class="radio-wrapper radio-column" id="cities-list"></div>
          </div>
          <div class="slide slide-mileage" id="slide-mileage">
            <div class="slider-holder mb-3 mb-md-4 py-4">
              <div class="title-row">
                <span>Mileage (approx)</span>
                <span id="range-miles">25,000 Kilometers</span>
              </div>
              <div class="range-slider" data-id="range-miles">
                <input class="range-slider__range" type="range" value="25000" min="0" max="350000"
                  step="1000">
              </div>
              <div class="labels-holder">
                <span id="mileage-min-label" data-label="0 Kilometer" data-label-sm="0 Kilometer"></span>
                <span id="mileage-max-label" data-label="350,000 Kilometers" data-label-sm="+350k Kilometers"></span>
              </div>
            </div>
            <div class="col-auto mx-auto">
              <button id="continue-button" type="button" class="btn btn-primary btn-continue px-5 py-2">
                Continue
              </button>
            </div>
          </div>
          <div class="slide" id="slide-paints">
            <div class="slide-header">
              <h5>Select paint</h5>
            </div>
            <div class="radio-wrapper radio-column" id="car-paints-list"></div>
          </div>
          <div class="slide slide-appointment" id="slide-appointment">
            <div class="slide-header">
              <h5>When should we inspect the car?</h5>
            </div>
            <div class="radio-wrapper no-radio" id="visit-type">
              <div class="label-wrapper">
                <input type="radio" name="visit-type" value="branch" id="branch" class="visit-type-model" checked>
                <label for="branch">
                  <h5>Branches</h5>
                  <span>Dubai</span>
                </label>
              </div>
              <div class="label-wrapper">
                <input type="radio" name="visit-type" value="home-service" id="home-service" class="visit-type-model">
                <label for="home-service">
                  <h5>Home Service</h5>
                  <span>Come to my location</span>
                </label>
              </div>
            </div>
            <div class="needs-validation row g-3 mt-2">
              <div class="col-md-6">
                <label class="form-label" for="datepicker">Pick a date &amp; time</label>
                <input type="text" required="required" placeholder="MM-DD-YYYY" id="datepicker" readonly autocomplete="off" class="form-control"/>
              </div>
              <div class="col-md-6 align-self-end">
                <select class="form-control" id="slot_time" required placeholder="Time">
                  <option value="1" selected>09:00 am - 09:30 am</option>
                  <option value="2">09:30 am - 10:00 am</option>
                  <option value="2">10:00 am - 10:30 am</option>
                  <option value="2">10:30 am - 11:00 am</option>
                  <option value="2">11:00 am - 11:30 am</option>
                  <option value="2">11:30 am - 12:00 pm</option>
                  <option value="2">12:00 pm - 12:30 pm</option>
                  <option value="2">12:30 pm - 01:00 pm</option>
                  <option value="2">01:00 pm - 01:30 pm</option>
                  <option value="2">01:30 pm - 02:00 pm</option>
                  <option value="2">02:00 pm - 02:30 pm</option>
                  <option value="2">02:30 pm - 03:00 pm</option>
                  <option value="2">03:00 pm - 03:30 pm</option>
                  <option value="2">03:30 pm - 04:00 pm</option>
                  <option value="2">04:00 pm - 04:30 pm</option>
                  <option value="2">04:30 pm - 05:00 pm</option>
                </select>
              </div>
              <div class="col-12 d-none item-city">
                <label class="form-label" for="city-area">Select area in <span id="selected-city"></span></label>
                <div role="combobox" aria-owns="dropdown-locations"
                  aria-haspopup="true" aria-expanded="false">
                  <input class="form-control" id="city-area" type="text" required spellcheck="false"
                    autocorrect="off" autocomplete="off" autocapitalize="off"
                    aria-controls="dropdown-locations" aria-autocomplete="both" placeholder="Select area"
                    aria-activedescendant="">
                  <ul class="dropdown-locations" id="dropdown-locations" role="listbox" data-placeholder="Select a location"></ul>
                </div>
              </div>
              <div class="col-12 d-none item-instructions">
                <label class="form-label" for="instruction">Building name / Instructions</label>
                <textarea required id="instruction" class="form-control" placeholder="Help us reach you quicker"></textarea>
              </div>
              <p class="text-center">We'll send the location after the completion of the form.</p>
              <div class="col-auto mx-auto">
                <button id="appointment_info" type="button" class="btn btn-primary btn-continue px-5 py-2">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div class="slide" id="slide-contact">
            <div class="slide-header">
              <h5>Please share your contact info</h5>
            </div>
            <div class="slide-body">
              <div class="needs-validation row g-3 mb-3">
                <div class="col-md-6">
                  <label class="form-label">First Name</label>
                  <div class="input-group" id="first-name-label">
                    <span class="input-group-text">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 0.749939C5.1084 0.749939 2.75 3.10834 2.75 5.99994C2.75 7.80756 3.67285 9.41302 5.07031 10.3593C2.39551 11.5078 0.5 14.162 0.5 17.2499H2C2 15.082 3.14551 13.1953 4.85938 12.1406C5.36328 13.3769 6.59082 14.2499 8 14.2499C9.40918 14.2499 10.6367 13.3769 11.1406 12.1406C12.8545 13.1953 14 15.082 14 17.2499H15.5C15.5 14.162 13.6045 11.5078 10.9297 10.3593C12.3271 9.41302 13.25 7.80756 13.25 5.99994C13.25 3.10834 10.8916 0.749939 8 0.749939ZM8 2.24994C10.0801 2.24994 11.75 3.91986 11.75 5.99994C11.75 8.08002 10.0801 9.74994 8 9.74994C5.91992 9.74994 4.25 8.08002 4.25 5.99994C4.25 3.91986 5.91992 2.24994 8 2.24994ZM8 11.2499C8.61523 11.2499 9.20117 11.3378 9.75781 11.5078C9.49707 12.2314 8.81738 12.7499 8 12.7499C7.18262 12.7499 6.50293 12.2314 6.24219 11.5078C6.79883 11.3378 7.38477 11.2499 8 11.2499Z"
                          fill="#7990A6"></path>
                      </svg>
                    </span>
                    <input type="text" id="seller_first_name" class="form-control" placeholder="Enter First Name" required aria-label="First Name" aria-describedby="first-name-label">
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label">Last Name</label>
                  <div class="input-group" id="last-name-label">
                    <span class="input-group-text">
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M8 0.749939C5.1084 0.749939 2.75 3.10834 2.75 5.99994C2.75 7.80756 3.67285 9.41302 5.07031 10.3593C2.39551 11.5078 0.5 14.162 0.5 17.2499H2C2 15.082 3.14551 13.1953 4.85938 12.1406C5.36328 13.3769 6.59082 14.2499 8 14.2499C9.40918 14.2499 10.6367 13.3769 11.1406 12.1406C12.8545 13.1953 14 15.082 14 17.2499H15.5C15.5 14.162 13.6045 11.5078 10.9297 10.3593C12.3271 9.41302 13.25 7.80756 13.25 5.99994C13.25 3.10834 10.8916 0.749939 8 0.749939ZM8 2.24994C10.0801 2.24994 11.75 3.91986 11.75 5.99994C11.75 8.08002 10.0801 9.74994 8 9.74994C5.91992 9.74994 4.25 8.08002 4.25 5.99994C4.25 3.91986 5.91992 2.24994 8 2.24994ZM8 11.2499C8.61523 11.2499 9.20117 11.3378 9.75781 11.5078C9.49707 12.2314 8.81738 12.7499 8 12.7499C7.18262 12.7499 6.50293 12.2314 6.24219 11.5078C6.79883 11.3378 7.38477 11.2499 8 11.2499Z"
                          fill="#7990A6"></path>
                      </svg>
                    </span>
                    <input type="text" id="seller_last_name" class="form-control" required placeholder="Enter Last Name" aria-label="Last Name" aria-describedby="last-name-label">
                  </div>
                </div>
                <div class="col-12">
                  <label class="form-label" for="email">Your email</label>
                  <div class="input-group">
                    <span class="input-group-text">
                      <svg width="22" height="17" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 511.894 511.894" style="enable-background:new 0 0 511.894 511.894;" xml:space="preserve">
                        <g>
                          <g>
                            <path d="M477.973,53.28H34.027C15.253,53.28,0,68.534,0,87.307v337.28c0,18.773,15.253,34.027,34.027,34.027h443.84    c18.773,0,34.027-15.253,34.027-34.027V87.307C512,68.534,496.747,53.28,477.973,53.28z M475.733,74.614L270.72,283.147    c-8.107,7.893-21.013,8-29.227,0.213L36.267,74.614H475.733z M21.333,422.667v-332.8l169.92,172.8L21.333,422.667z M36.907,437.28    l169.387-159.36l20.16,20.587c7.893,7.68,18.453,12.053,29.44,12.053c11.093,0,21.867-4.373,29.76-12.16l15.147-15.467    L474.667,437.28H36.907z M490.667,423.094L315.84,267.574L490.667,89.867V423.094z"/>
                          </g>
                        </g>
                      </svg>
                    </span>
                    <input class="form-control" placeholder="Enter email address" id="seller_email" type="email" required>
                  </div>
                </div>
                <div class="col-12">
                  <label class="form-label" for="phone">Phone</label>
                  <div class="input-group" id="phone">
                    <span class="input-group-text">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.41022 0.874939C4.08307 0.874939 3.76081 0.992126 3.49225 1.20697L3.45319 1.2265L3.43366 1.24603L1.48053 3.25775L1.50006 3.27728C0.897037 3.83392 0.71149 4.66644 0.972721 5.38666C0.975162 5.39154 0.970279 5.40131 0.972721 5.40619C1.50251 6.9223 2.85749 9.84955 5.50397 12.496C8.16022 15.1523 11.1265 16.4536 12.5938 17.0273H12.6133C13.3726 17.2812 14.1954 17.1005 14.7813 16.5976L16.754 14.6249C17.2715 14.1074 17.2715 13.2089 16.754 12.6913L14.2149 10.1523L14.1954 10.1132C13.6778 9.59564 12.7598 9.59564 12.2423 10.1132L10.9923 11.3632C10.5406 11.1459 9.46393 10.5893 8.43366 9.60541C7.41071 8.62885 6.88825 7.5058 6.69538 7.06635L7.94538 5.81635C8.47028 5.29144 8.48004 4.41742 7.92585 3.90228L7.94538 3.88275L7.88678 3.82416L5.38678 1.24603L5.36725 1.2265L5.32819 1.20697C5.05963 0.992126 4.73737 0.874939 4.41022 0.874939ZM4.41022 2.12494C4.45661 2.12494 4.50299 2.14691 4.54694 2.18353L7.04694 4.74213L7.10553 4.80072C7.10065 4.79584 7.14215 4.86176 7.06647 4.93744L5.50397 6.49994L5.211 6.77338L5.34772 7.164C5.34772 7.164 6.06549 9.08539 7.57428 10.5234L7.711 10.6406C9.16364 11.9662 10.8751 12.6913 10.8751 12.6913L11.2657 12.8671L13.1212 11.0117C13.2286 10.9042 13.209 10.9042 13.3165 11.0117L15.8751 13.5703C15.9825 13.6777 15.9825 13.6386 15.8751 13.746L13.961 15.6601C13.6729 15.9067 13.3677 15.9579 13.004 15.8359C11.588 15.2792 8.83649 14.0707 6.38288 11.6171C3.90973 9.14398 2.61823 6.33881 2.1446 4.9765C2.04938 4.7226 2.11774 4.34662 2.33991 4.15619L2.37897 4.11713L4.2735 2.18353C4.31745 2.14691 4.36383 2.12494 4.41022 2.12494Z" fill="#7990A6"></path>
                      </svg>
                    </span>
                    <span class="input-group-text">
                      +971
                    </span>
                    <input type="tel" required class="phoneNumber form-control" placeholder="Phone" id="phoneNumber" maxlength="9">
                  </div>
                </div>
                <p class="text-center">Please give us your phone number so we can arrange a specialist visit for inspection &amp; photos. </p>
                <div class="col-auto mx-auto">
                  <button id="schedule_inspection" type="submit" class="btn btn-primary btn-continue px-5 py-2">
                    Schedule Car Inspection
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="slide slide-last slide-thanks" id="slide-thanks">
            <div class="main-content" style="max-height: 200px;overflow:hidden">
              <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_atippmse.json" 
              background="transparent" speed="2" style="width: 200px; height: 200px;margin: auto;" id="thanks-lottie"></lottie-player>
            </div>
            <div class="header">
              <h2>THANK YOU!</h2>
            </div>
            <p class="main-content__body">For contacting us. <br> will be get back to you soon.</p>
          </div>
        </div>
      </form>
    </div>
  </div>`);
  // fill years
  years.forEach((year) => {
    $("#car-years-list").prepend(`
      <div class="label-wrapper">
      <input type="radio" name="year" value="${year}" id="${year}">
      <label for="${year}">
        <span class="text">${year}</span>
      </label>
    </div>`);
  });

  // fill specs
  specs.forEach((spec) => {
    $("#car-specs-list").append(`
      <div class="label-wrapper">
      <input type="radio" name="specs" value="${spec}" id="${spec}" class="input-specs">
      <label for="${spec}">
        <span class="text">${spec}</span>
      </label>
    </div>`);
  });

  // fill specs
  paints.forEach((paint) => {
    $("#car-paints-list").append(`
      <div class="label-wrapper">
      <input type="radio" name="paints" value="${paint}" id="${paint}" class="input-paints">
      <label for="${paint}">
        <span class="text">${paint}</span>
      </label>
    </div>`);
  });
  // fill cities
  cities.forEach((city) => {
    $("#cities-list").append(`
      <div class="label-wrapper">
      <input type="radio" name="city" value="${city.name}" id="${city.name}">
      <label for="${city.name}">
        <span class="text">${city.name}</span>
      </label>
    </div>`);
  });

  const params = new URLSearchParams(window.location.search);
  if (params.has("car")) {
    setTimeout(() => {
      document.getElementById(params.get("car")).click();
    }, 10);
  }

  if ($("#datepicker").length > 0) {
    $("#datepicker").datepicker({
      templates: {
        leftArrow: '<i class="arrow-left"></i>',
        rightArrow: '<i class="arrow-right"></i>',
      },
      autoclose: true,
      format: "dd-mm-yyyy",
    });
    $("#datepicker").datepicker("setDate", new Date()).datepicker("fill");
  }

  const nextSlide = () => {
    if (animating) return false;
    animating = true;
    current_fs = $(".slide.active");
    if (current_fs.index() == 0 && progressVal == 0) {
      progressVal += 20;
    } else {
      progressVal += 10;
    }
    next_fs = current_fs.next();
    current_fs.removeClass("active");
    next_fs.addClass("active");
    setTimeout(() => {
      //show the next fieldset
      next_fs.css("display", "flex");
      $(".progress-info").attr("data-val", progressVal);
      $(".progress-bar").animate(
        {
          width: `${progressVal}%`,
        },
        200
      );
      //hide the current fieldset with style
      current_fs.animate(
        { opacity: 0 },
        {
          step: function (now, mx) {
            //as the opacity of current_fs reduces to 0 - stored in "now"
            //1. scale current_fs down to 80%
            scale = 1 - (1 - now) * 0.2;
            //2. bring next_fs from the right(50%)
            left = now * 50 + "%";
            //3. increase opacity of next_fs to 1 as it moves in
            opacity = 1 - now;
            current_fs.css({
              transform: "scale(" + scale + ")",
              position: "absolute",
            });
            next_fs.css({ left: left, opacity: opacity });
          },
          duration: 350,
          complete: function () {
            current_fs.hide();
            animating = false;
            if (next_fs.index() > 0) {
              $("#btn-back").css("visibility", "visible");
            }
          },
          //this comes from the custom easing plugin
          easing: "easeInOutBack",
        }
      );
    }, 300);
  };

  //fill dropdown data
  const fillingDropdown = (dropdown, list) => {
    dropdown.html("");
    list.forEach((item) => {
      dropdown.append(`<li>${item}</li>`);
    });
    if (dropdown.children[0] === undefined) {
      $(".carxchange").removeClass("search-opened");
      return dropdown.removeClass("opened");
    }
    $(".carxchange").addClass("search-opened");
    dropdown.addClass("opened");
  };

  // use fillingDropdown for first time
  fillingDropdown($("#search-car-dropdown"), cars);

  // add value to input onclick on li in dropdown
  $("body").on("click", ".makes-drop-down li", function (e) {
    e.stopPropagation();
    $(this).parent().parent().find("input").val($(this).html());
    $(this).parent().removeClass("opened");
    $(".carxchange").removeClass("search-opened");
    if ($(this).parent().is($("#search-car-dropdown"))) {
      if (
        $(`#cars-list input[type='radio'][value='${$(this).html()}']`).length >
        0
      ) {
        $(`#cars-list input[type='radio'][value='${$(this).html()}']`).prop(
          "checked",
          true
        );
      } else {
        $("#other-car").prop("checked", true);
      }
    } else {
      if (
        $(`#car-models-list input[type='radio'][value='${$(this).html()}']`)
          .length > 0
      ) {
        $(
          `#car-models-list input[type='radio'][value='${$(this).html()}']`
        ).prop("checked", true);
      } else {
        $("#other-model").prop("checked", true);
      }
    }
  });

  // empty the search when check input
  $("body").on("click", "#cars-list input[type='radio']", function () {
    $("#search-car").val("");
    $(".makes-drop-down li").show();
  });
  $("body").on("click", "#car-models-list input[type='radio']", function () {
    $("#search-model").val("");
    $(".makes-drop-down li").show();
  });
  // open dropdown on click
  $("#search-car, #search-model").on("click", function (e) {
    e.stopPropagation();
    $(this).siblings(".makes-drop-down").addClass("opened");
    $(".carxchange").addClass("search-opened");
  });

  $("#search-car, #search-model").on("keyup", function () {
    const userInput = $(this).val().toLowerCase();
    $(this)
      .parent()
      .find(".makes-drop-down li")
      .each(function () {
        $(this).hide();
        if ($(this).html().toLowerCase().includes(userInput)) {
          $(this).show();
        }
      });
  });

  // close dropdown on click on any space
  $(window).on("click", function () {
    document.getElementById("dropdown-locations").style.display = "none";
    $(".makes-drop-down").removeClass("opened");
    $(".carxchange").removeClass("search-opened");
  });

  // open dropdown when click on other car
  $("body").on("click", "#other-car", function (e) {
    e.stopPropagation();
    $("#search-car-dropdown").addClass("opened");
    $(".carxchange").addClass("search-opened");
  });

  // open dropdown when click on other model
  $("body").on("click", "#other-model", function (e) {
    e.stopPropagation();
    $("#search-model-dropdown").addClass("opened");
    $(".carxchange").addClass("search-opened");
  });

  $("#exact-price").on("change", function () {
    document.getElementById("range-price").innerHTML =
      "AED +" + numberWithCommas($(this).val());
  });

  $("body").on("click", ".slide input[type='radio']", function (e) {
    if (
      $(this).hasClass("other-car") ||
      $(this).hasClass("other-model") ||
      $(this).hasClass("visit-type-model")
    ) {
      return;
    }
    nextSlide();
  });
  $("body").on("click", ".search-field ul li", function (e) {
    nextSlide();
  });
  $("body").on("click", "#continue-button", function (e) {
    nextSlide();
  });
  $("body").on("click", "#appointment_info", function (e) {
    $(this).parents(".needs-validation").addClass("was-validated");
    if (validateFormAppointment()) {
      nextSlide();
    }
  });

  $("body").on(
    "click",
    "#slide-make input[type='radio']:not(.other-car)",
    function (e) {
      let val = $(this).val();
      fillModels(val);
    }
  );

  $("body").on("click", "#slide-make .search-field li", function (e) {
    let val = $(this).html();
    fillModels(val);
  });

  // select city
  $("#slide-city input[type='radio']").on("click", function () {
    $("#selected-city").html($(this).val());
  });

  const dropEl = document.getElementById("dropdown-locations");

  // search in locations
  const formHandler = (e) => {
    const userInput = e.target.value.toLowerCase();

    if (userInput.length === 0) {
      dropEl.style.display = "none";
      return (dropEl.innerHTML = "");
    }
    const foundCity = cities.find(
      (element) => element.name == $("#selected-city").html()
    );

    const filteredWords = foundCity.list
      .filter((word) => word.toLowerCase().includes(userInput))
      .sort()
      .splice(0, 5);

    dropEl.innerHTML = "";
    filteredWords.forEach((item) => {
      const listEl = document.createElement("li");
      listEl.textContent = item;
      if (item === userInput) {
        listEl.classList.add("match");
      }
      dropEl.appendChild(listEl);
    });

    if (dropEl.children[0] === undefined) {
      return (dropEl.style.display = "none");
    }

    dropEl.style.display = "block";
  };

  document.getElementById("city-area").addEventListener("input", formHandler);

  // add value to city area input from dropdown-locations
  $("body").on("click", "#dropdown-locations li", function () {
    $("#city-area").val($(this).html());
  });
  // fill models function
  const fillModels = (car) => {
    const foundModels = models.find((element) => element.name == car);
    fillingDropdown($("#search-model-dropdown"), foundModels.models);
    $("#car-models-list").html("");
    for (let index = 0; index < foundModels.models.length; index++) {
      const model = foundModels.models[index];
      if (foundModels.models.length > 9 && index == 9) {
        $("#car-models-list").append(`
          <div class="label-wrapper">
            <input type="radio" name="model" value="other-model" id="other-model" class="other-model">
            <label for="other-model">
              <span class="text">Other Model</span>
            </label>
          </div>
        `);
        break;
      } else {
        $("#car-models-list").append(`
          <div class="label-wrapper">
            <input type="radio" name="model" value="${model}" id="${model}">
            <label for="${model}">
              <span class="text">${model}</span>
            </label>
          </div>
        `);
      }
    }
  };

  $("#btn-back").click(function () {
    if (animating) return false;
    animating = true;

    current_fs = $(".slide.active");
    previous_fs = $(".slide.active").prev();

    //de-activate current slide on progressbar

    //show the previous fieldset
    previous_fs.css("display", "flex");
    current_fs.removeClass("active");
    previous_fs.addClass("active").show();
    progressVal -= 10;
    $(".progress-info").attr("data-val", progressVal);
    $(".progress-bar").animate(
      {
        width: `${progressVal}%`,
      },
      200
    );
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = (1 - now) * 50 + "%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ left: left });
          previous_fs.css({
            opacity: opacity,
            transform: "scale(" + scale + ")",
          });
        },
        duration: 350,
        complete: function () {
          current_fs.hide();
          animating = false;
          previous_fs.css({ position: "relative" });
          if (previous_fs.index() > 0) {
            $("#btn-back").css("visibility", "visible");
          } else {
            $("#btn-back").css("visibility", "hidden");
          }
        },
        //this comes from the custom easing plugin
        easing: "easeInBack",
      }
    );
  });

  // add comma to numbers
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  // validate phone number
  $.fn.inputFilter = function (inputFilter) {
    return this.on(
      "input keydown keyup mousedown mouseup select contextmenu drop",
      function () {
        if (inputFilter(this.value)) {
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          this.value = "";
        }
      }
    );
  };
  $("#phoneNumber").inputFilter(function (value) {
    return /^\d*$/.test(value);
  });
  /**
   *  validate form for step 7 appointment
   */

  const validateFormContact = () => {
    if (
      $("#phoneNumber").val().length >= 9 &&
      $("#seller_first_name").val().length > 0 &&
      $("#seller_last_name").val().length > 0 &&
      validateEmail($("#seller_email").val())
    ) {
      return true;
    }
    return false;
  };
  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  /**
   *
   */
  const changeVisitType = () => {
    if ($("#visit-type input[type='radio']:checked").val() == "branch") {
      $(
        "#slide-appointment .item-city, #slide-appointment .item-instructions"
      ).addClass("d-none");
      $("#slide-appointment p").removeClass("d-none");
    } else {
      $(
        "#slide-appointment .item-city, #slide-appointment .item-instructions"
      ).removeClass("d-none");
      $("#slide-appointment p").addClass("d-none");
    }
  };
  $("#slide-appointment input[type='radio']").on("click", function () {
    changeVisitType();
  });
  /**
   *  validate form for step 7 appointment
   */
  const validateFormAppointment = () => {
    if (
      $("#datepicker").val() == "" ||
      $("#slot_time").val() == null ||
      ($("#visit-type input[type='radio']:checked").val() == "branch" &&
        ($("#datepicker").val() == "" || $("#slot_time").val() == null)) ||
      ($("#visit-type input[type='radio']:checked").val() == "home-service" &&
        ($("#datepicker").val() == "" ||
          $("#slot_time").val() == null ||
          $("#city-area").val() == "" ||
          $("#instruction").val() == ""))
    ) {
      return false;
    }
    return true;
  };
  // I've added annotations to make this easier to follow along at home. Good luck learning and check out my other pens if you found this useful

  // First let's set the colors of our sliders
  const settings = {
    fill: "#0076CE",
    background: "#eeeff4",
  };

  // First find all our sliders
  const sliders = document.querySelectorAll(".range-slider");

  // Iterate through that list of sliders
  // ... this call goes through our array of sliders [slider1,slider2,slider3] and inserts them one-by-one into the code block below with the variable name (slider). We can then access each of wthem by calling slider
  Array.prototype.forEach.call(sliders, (slider) => {
    // Look inside our slider for our input add an event listener
    //   ... the input inside addEventListener() is looking for the input action, we could change it to something like change
    slider.querySelector("input").addEventListener("input", (event) => {
      // 1. apply our value to the span
      if (slider.getAttribute("data-id") == "range-price") {
        document.getElementById(slider.getAttribute("data-id")).innerHTML =
          "AED " + numberWithCommas(event.target.value);
        if (
          event.target.value ==
          slider.querySelector("input").getAttribute("max")
        ) {
          document.getElementById("range-full-alert").style.display = "block";
          document
            .getElementById("range-full-alert")
            .querySelector("input").value = event.target.value;
        } else {
          document.getElementById("range-full-alert").style.display = "none";
        }
      } else {
        document.getElementById(slider.getAttribute("data-id")).innerHTML =
          numberWithCommas(event.target.value) + " Kilometers";
      }
      // 2. apply our fill to the input
      applyFill(event.target);
    });
    // Don't wait for the listener, apply it now!
    applyFill(slider.querySelector("input"));
  });

  // This function applies the fill to our sliders by using a linear gradient background
  function applyFill(slider) {
    // Let's turn our value into a percentage to figure out how far it is in between the min and max of our input
    const percentage =
      (100 * (slider.value - slider.min)) / (slider.max - slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${
      settings.background
    } ${percentage + 0.1}%)`;
    slider.style.background = bg;
  }
  $("#schedule_inspection").on("click", function () {
    $(this).parents(".needs-validation").addClass("was-validated");
    if (validateFormContact()) {
      let $this = $(this);
      $this.html("Submitting...").prop("disabled", true);
      let data = {
        make:
          $("#cars-list input[type='radio']:checked").val() !== "other-car" &&
          $("#cars-list input[type='radio']:checked").val() !== undefined
            ? $("#cars-list input[type='radio']:checked").val()
            : $("#search-car").val(),
        model:
          $("#car-models-list input[type='radio']:checked").val() !==
            "other-model" &&
          $("#car-models-list input[type='radio']:checked").val() !== undefined
            ? $("#car-models-list input[type='radio']:checked").val()
            : $("#search-model").val(),
        year: $("#car-years-list input[type='radio']:checked").val(),
        specifications: $("#car-specs-list input[type='radio']:checked").val(),
        city: $("#cities-list input[type='radio']:checked").val(),
        mileage: $("[data-id='range-miles'] input").val(),
        paint: $("#car-paints-list input[type='radio']:checked").val(),
        date: $("#datepicker").val(),
        time: $("#slot_time option:selected").html(),
        visitType: $("#visit-type input[type='radio']:checked").val(),
        first_name: $("#seller_first_name").val(),
        last_name: $("#seller_last_name").val(),
        email: $("#seller_email").val(),
        phone: "+971" + $("#phoneNumber").val(),
        Gclid: $("#gclid_field").val(),
        Fbclid: $("#fbclid_field").val(),
        Userid: $("#userid_field").val(),
      };
      if (
        $("#visit-type input[type='radio']:checked").val() == "home-service"
      ) {
        data.area = $("#city-area").val();
        data.instructions = $("#instruction").val();
      }
      let request = $.ajax({
        url: "https://hook.us1.make.com/pdcmj0p7umq65wi2247kzzxur2qqd8l3",
        type: "post",
        data: data,
      });
      document.querySelector("lottie-player").stop();
      setTimeout(() => {
        if (request) {
          $this.html("Schedule Car Inspection").prop("disabled", false);
          nextSlide();
          document.querySelector("lottie-player").play();
        }
      }, 1000);
    }
  });
});
