// Define module using Universal Module Definition pattern
// https://github.com/umdjs/umd/blob/master/returnExports.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // Support AMD. Register as an anonymous module.
    define([], factory);
  }
  else if (typeof exports === 'object') {
    // Node/CommonJS
    module.exports = factory();
  }
  else {
    // No AMD. Set module as a global variable
    root.gridmapLayoutCalifornia = factory();
  }
}(this, function () {
  return [
  {
    "x": 5,
    "y": 10,
    "enName": "Del Norte",
    "enAbbr": "DelNort",
    "localName": "Del Norte",
    "localAbbr": "DelNort"
  },
  {
    "x": 6,
    "y": 10,
    "enName": "Siskiyou",
    "enAbbr": "Siskiyo",
    "localName": "Siskiyou",
    "localAbbr": "Siskiyo"
  },
  {
    "x": 7,
    "y": 10,
    "enName": "Shasta",
    "enAbbr": "Shasta",
    "localName": "Shasta",
    "localAbbr": "Shasta"
  },
  {
    "x": 8,
    "y": 10,
    "enName": "Modoc",
    "enAbbr": "Modoc",
    "localName": "Modoc",
    "localAbbr": "Modoc"
  },
  {
    "x": 9,
    "y": 10,
    "enName": "Lassen",
    "enAbbr": "Lassen",
    "localName": "Lassen",
    "localAbbr": "Lassen"
  },
  {
    "x": 5,
    "y": 11,
    "enName": "Humboldt",
    "enAbbr": "Humbold",
    "localName": "Humboldt",
    "localAbbr": "Humbold"
  },
  {
    "x": 6,
    "y": 11,
    "enName": "Trinity",
    "enAbbr": "Trinity",
    "localName": "Trinity",
    "localAbbr": "Trinity"
  },
  {
    "x": 7,
    "y": 11,
    "enName": "Tehama",
    "enAbbr": "Tehama",
    "localName": "Tehama",
    "localAbbr": "Tehama"
  },
  {
    "x": 8,
    "y": 11,
    "enName": "Nevada",
    "enAbbr": "Nevada",
    "localName": "Nevada",
    "localAbbr": "Nevada"
  },
  {
    "x": 9,
    "y": 11,
    "enName": "Plumas",
    "enAbbr": "Plumas",
    "localName": "Plumas",
    "localAbbr": "Plumas"
  },
  {
    "x": 5,
    "y": 12,
    "enName": "Mendocino",
    "enAbbr": "Mendoci",
    "localName": "Mendocino",
    "localAbbr": "Mendoci"
  },
  {
    "x": 6,
    "y": 12,
    "enName": "Glenn",
    "enAbbr": "Glenn",
    "localName": "Glenn",
    "localAbbr": "Glenn"
  },
  {
    "x": 7,
    "y": 12,
    "enName": "Butte",
    "enAbbr": "Butte",
    "localName": "Butte",
    "localAbbr": "Butte"
  },
  {
    "x": 8,
    "y": 12,
    "enName": "Sutter",
    "enAbbr": "Sutter",
    "localName": "Sutter",
    "localAbbr": "Sutter"
  },
  {
    "x": 9,
    "y": 12,
    "enName": "Placer",
    "enAbbr": "Placer",
    "localName": "Placer",
    "localAbbr": "Placer"
  },
  {
    "x": 5,
    "y": 13,
    "enName": "Lake",
    "enAbbr": "Lake",
    "localName": "Lake",
    "localAbbr": "Lake"
  },
  {
    "x": 6,
    "y": 13,
    "enName": "Colusa",
    "enAbbr": "Colusa",
    "localName": "Colusa",
    "localAbbr": "Colusa"
  },
  {
    "x": 9,
    "y": 13,
    "enName": "Amador",
    "enAbbr": "Amador",
    "localName": "Amador",
    "localAbbr": "Amador"
  },
  {
    "x": 10,
    "y": 13,
    "enName": "Sierra",
    "enAbbr": "Sierra",
    "localName": "Sierra",
    "localAbbr": "Sierra"
  },
  {
    "x": 6,
    "y": 14,
    "enName": "Napa",
    "enAbbr": "Napa",
    "localName": "Napa",
    "localAbbr": "Napa"
  },
  {
    "x": 7,
    "y": 14,
    "enName": "Solano",
    "enAbbr": "Solano",
    "localName": "Solano",
    "localAbbr": "Solano"
  },
  {
    "x": 8,
    "y": 14,
    "enName": "Yuba",
    "enAbbr": "Yuba",
    "localName": "Yuba",
    "localAbbr": "Yuba"
  },
  {
    "x": 9,
    "y": 14,
    "enName": "Sacramento",
    "enAbbr": "Sacrame",
    "localName": "Sacramento",
    "localAbbr": "Sacrame"
  },
  {
    "x": 10,
    "y": 14,
    "enName": "El Dorado",
    "enAbbr": "ElDorad",
    "localName": "El Dorado",
    "localAbbr": "ElDorad"
  },
  {
    "x": 11,
    "y": 14,
    "enName": "Alpine",
    "enAbbr": "Alpine",
    "localName": "Alpine",
    "localAbbr": "Alpine"
  },
  {
    "x": 5,
    "y": 15,
    "enName": "Sonoma",
    "enAbbr": "Sonoma",
    "localName": "Sonoma",
    "localAbbr": "Sonoma"
  },
  {
    "x": 7,
    "y": 15,
    "enName": "San Mateo",
    "enAbbr": "SanMate",
    "localName": "San Mateo",
    "localAbbr": "SanMate"
  },
  {
    "x": 8,
    "y": 15,
    "enName": "Stanislaus",
    "enAbbr": "Stanisl",
    "localName": "Stanislaus",
    "localAbbr": "Stanisl"
  },
  {
    "x": 9,
    "y": 15,
    "enName": "Calaveras",
    "enAbbr": "Calaver",
    "localName": "Calaveras",
    "localAbbr": "Calaver"
  },
  {
    "x": 11,
    "y": 15,
    "enName": "Mono",
    "enAbbr": "Mono",
    "localName": "Mono",
    "localAbbr": "Mono"
  },
  {
    "x": 5,
    "y": 16,
    "enName": "San Francisco",
    "enAbbr": "SanFran",
    "localName": "San Francisco",
    "localAbbr": "SanFran"
  },
  {
    "x": 6,
    "y": 16,
    "enName": "Yolo",
    "enAbbr": "Yolo",
    "localName": "Yolo",
    "localAbbr": "Yolo"
  },
  {
    "x": 7,
    "y": 16,
    "enName": "San Joaquin",
    "enAbbr": "SanJoaq",
    "localName": "San Joaquin",
    "localAbbr": "SanJoaq"
  },
  {
    "x": 9,
    "y": 16,
    "enName": "Merced",
    "enAbbr": "Merced",
    "localName": "Merced",
    "localAbbr": "Merced"
  },
  {
    "x": 10,
    "y": 16,
    "enName": "Mariposa",
    "enAbbr": "Maripos",
    "localName": "Mariposa",
    "localAbbr": "Maripos"
  },
  {
    "x": 6,
    "y": 17,
    "enName": "Santa Cruz",
    "enAbbr": "SantaCr",
    "localName": "Santa Cruz",
    "localAbbr": "SantaCr"
  },
  {
    "x": 7,
    "y": 17,
    "enName": "Santa Clara",
    "enAbbr": "SantaCl",
    "localName": "Santa Clara",
    "localAbbr": "SantaCl"
  },
  {
    "x": 8,
    "y": 17,
    "enName": "Alameda",
    "enAbbr": "Alameda",
    "localName": "Alameda",
    "localAbbr": "Alameda"
  },
  {
    "x": 9,
    "y": 17,
    "enName": "San Benito",
    "enAbbr": "SanBeni",
    "localName": "San Benito",
    "localAbbr": "SanBeni"
  },
  {
    "x": 10,
    "y": 17,
    "enName": "Fresno",
    "enAbbr": "Fresno",
    "localName": "Fresno",
    "localAbbr": "Fresno"
  },
  {
    "x": 11,
    "y": 17,
    "enName": "Madera",
    "enAbbr": "Madera",
    "localName": "Madera",
    "localAbbr": "Madera"
  },
  {
    "x": 13,
    "y": 17,
    "enName": "Inyo",
    "enAbbr": "Inyo",
    "localName": "Inyo",
    "localAbbr": "Inyo"
  },
  {
    "x": 8,
    "y": 18,
    "enName": "Monterey",
    "enAbbr": "Montere",
    "localName": "Monterey",
    "localAbbr": "Montere"
  },
  {
    "x": 10,
    "y": 18,
    "enName": "Kings",
    "enAbbr": "Kings",
    "localName": "Kings",
    "localAbbr": "Kings"
  },
  {
    "x": 11,
    "y": 18,
    "enName": "Tulare",
    "enAbbr": "Tulare",
    "localName": "Tulare",
    "localAbbr": "Tulare"
  },
  {
    "x": 9,
    "y": 19,
    "enName": "San Luis Obispo",
    "enAbbr": "SanLuis",
    "localName": "San Luis Obispo",
    "localAbbr": "SanLuis"
  },
  {
    "x": 11,
    "y": 19,
    "enName": "Kern",
    "enAbbr": "Kern",
    "localName": "Kern",
    "localAbbr": "Kern"
  },
  {
    "x": 14,
    "y": 19,
    "enName": "San Bernardino",
    "enAbbr": "SanBern",
    "localName": "San Bernardino",
    "localAbbr": "SanBern"
  },
  {
    "x": 10,
    "y": 20,
    "enName": "Santa Barbara",
    "enAbbr": "SantaBa",
    "localName": "Santa Barbara",
    "localAbbr": "SantaBa"
  },
  {
    "x": 11,
    "y": 20,
    "enName": "Ventura",
    "enAbbr": "Ventura",
    "localName": "Ventura",
    "localAbbr": "Ventura"
  },
  {
    "x": 12,
    "y": 20,
    "enName": "Los Angeles",
    "enAbbr": "LosAnge",
    "localName": "Los Angeles",
    "localAbbr": "LosAnge"
  },
  {
    "x": 12,
    "y": 21,
    "enName": "Orange",
    "enAbbr": "Orange",
    "localName": "Orange",
    "localAbbr": "Orange"
  },
  {
    "x": 14,
    "y": 21,
    "enName": "Riverside",
    "enAbbr": "Riversi",
    "localName": "Riverside",
    "localAbbr": "Riversi"
  },
  {
    "x": 14,
    "y": 22,
    "enName": "San Diego",
    "enAbbr": "SanDieg",
    "localName": "San Diego",
    "localAbbr": "SanDieg"
  },
  {
    "x": 15,
    "y": 22,
    "enName": "Imperial",
    "enAbbr": "Imperia",
    "localName": "Imperial",
    "localAbbr": "Imperia"
  }
];
}));