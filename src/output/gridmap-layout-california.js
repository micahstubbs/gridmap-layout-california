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
    "enAbbr": "DN",
    "localName": "Del Norte",
    "localAbbr": "DN"
  },
  {
    "x": 6,
    "y": 10,
    "enName": "Siskiyou",
    "enAbbr": "SK",
    "localName": "Siskiyou",
    "localAbbr": "SK"
  },
  {
    "x": 7,
    "y": 10,
    "enName": "Shasta",
    "enAbbr": "SH",
    "localName": "Shasta",
    "localAbbr": "SH"
  },
  {
    "x": 8,
    "y": 10,
    "enName": "Modoc",
    "enAbbr": "MO",
    "localName": "Modoc",
    "localAbbr": "MO"
  },
  {
    "x": 9,
    "y": 10,
    "enName": "Lassen",
    "enAbbr": "LS",
    "localName": "Lassen",
    "localAbbr": "LS"
  },
  {
    "x": 5,
    "y": 11,
    "enName": "Humboldt",
    "enAbbr": "HU",
    "localName": "Humboldt",
    "localAbbr": "HU"
  },
  {
    "x": 6,
    "y": 11,
    "enName": "Trinity",
    "enAbbr": "TR",
    "localName": "Trinity",
    "localAbbr": "TR"
  },
  {
    "x": 7,
    "y": 11,
    "enName": "Tehama",
    "enAbbr": "TE",
    "localName": "Tehama",
    "localAbbr": "TE"
  },
  {
    "x": 8,
    "y": 11,
    "enName": "Nevada",
    "enAbbr": "NV",
    "localName": "Nevada",
    "localAbbr": "NV"
  },
  {
    "x": 9,
    "y": 11,
    "enName": "Plumas",
    "enAbbr": "PM",
    "localName": "Plumas",
    "localAbbr": "PM"
  },
  {
    "x": 5,
    "y": 12,
    "enName": "Mendocino",
    "enAbbr": "MC",
    "localName": "Mendocino",
    "localAbbr": "MC"
  },
  {
    "x": 6,
    "y": 12,
    "enName": "Glenn",
    "enAbbr": "GL",
    "localName": "Glenn",
    "localAbbr": "GL"
  },
  {
    "x": 7,
    "y": 12,
    "enName": "Butte",
    "enAbbr": "BU",
    "localName": "Butte",
    "localAbbr": "BU"
  },
  {
    "x": 8,
    "y": 12,
    "enName": "Sutter",
    "enAbbr": "SR",
    "localName": "Sutter",
    "localAbbr": "SR"
  },
  {
    "x": 9,
    "y": 12,
    "enName": "Placer",
    "enAbbr": "PL",
    "localName": "Placer",
    "localAbbr": "PL"
  },
  {
    "x": 5,
    "y": 13,
    "enName": "Lake",
    "enAbbr": "LK",
    "localName": "Lake",
    "localAbbr": "LK"
  },
  {
    "x": 6,
    "y": 13,
    "enName": "Colusa",
    "enAbbr": "CO",
    "localName": "Colusa",
    "localAbbr": "CO"
  },
  {
    "x": 9,
    "y": 13,
    "enName": "Amador",
    "enAbbr": "AD",
    "localName": "Amador",
    "localAbbr": "AD"
  },
  {
    "x": 10,
    "y": 13,
    "enName": "Sierra",
    "enAbbr": "SE",
    "localName": "Sierra",
    "localAbbr": "SE"
  },
  {
    "x": 6,
    "y": 14,
    "enName": "Napa",
    "enAbbr": "NA",
    "localName": "Napa",
    "localAbbr": "NA"
  },
  {
    "x": 7,
    "y": 14,
    "enName": "Solano",
    "enAbbr": "SL",
    "localName": "Solano",
    "localAbbr": "SL"
  },
  {
    "x": 8,
    "y": 14,
    "enName": "Yuba",
    "enAbbr": "YU",
    "localName": "Yuba",
    "localAbbr": "YU"
  },
  {
    "x": 9,
    "y": 14,
    "enName": "Sacramento",
    "enAbbr": "SA",
    "localName": "Sacramento",
    "localAbbr": "SA"
  },
  {
    "x": 10,
    "y": 14,
    "enName": "El Dorado",
    "enAbbr": "ED",
    "localName": "El Dorado",
    "localAbbr": "ED"
  },
  {
    "x": 11,
    "y": 14,
    "enName": "Alpine",
    "enAbbr": "AL",
    "localName": "Alpine",
    "localAbbr": "AL"
  },
  {
    "x": 5,
    "y": 15,
    "enName": "Sonoma",
    "enAbbr": "SN",
    "localName": "Sonoma",
    "localAbbr": "SN"
  },
  {
    "x": 7,
    "y": 15,
    "enName": "San Mateo",
    "enAbbr": "SM",
    "localName": "San Mateo",
    "localAbbr": "SM"
  },
  {
    "x": 8,
    "y": 15,
    "enName": "Stanislaus",
    "enAbbr": "ST",
    "localName": "Stanislaus",
    "localAbbr": "ST"
  },
  {
    "x": 9,
    "y": 15,
    "enName": "Calaveras",
    "enAbbr": "CA",
    "localName": "Calaveras",
    "localAbbr": "CA"
  },
  {
    "x": 11,
    "y": 15,
    "enName": "Mono",
    "enAbbr": "MN",
    "localName": "Mono",
    "localAbbr": "MN"
  },
  {
    "x": 5,
    "y": 16,
    "enName": "San Francisco",
    "enAbbr": "SF",
    "localName": "San Francisco",
    "localAbbr": "SF"
  },
  {
    "x": 6,
    "y": 16,
    "enName": "Yolo",
    "enAbbr": "YO",
    "localName": "Yolo",
    "localAbbr": "YO"
  },
  {
    "x": 7,
    "y": 16,
    "enName": "San Joaquin",
    "enAbbr": "SJ",
    "localName": "San Joaquin",
    "localAbbr": "SJ"
  },
  {
    "x": 9,
    "y": 16,
    "enName": "Merced",
    "enAbbr": "ME",
    "localName": "Merced",
    "localAbbr": "ME"
  },
  {
    "x": 10,
    "y": 16,
    "enName": "Mariposa",
    "enAbbr": "MR",
    "localName": "Mariposa",
    "localAbbr": "MR"
  },
  {
    "x": 6,
    "y": 17,
    "enName": "Santa Cruz",
    "enAbbr": "SZ",
    "localName": "Santa Cruz",
    "localAbbr": "SZ"
  },
  {
    "x": 7,
    "y": 17,
    "enName": "Santa Clara",
    "enAbbr": "SC",
    "localName": "Santa Clara",
    "localAbbr": "SC"
  },
  {
    "x": 8,
    "y": 17,
    "enName": "Alameda",
    "enAbbr": "AM",
    "localName": "Alameda",
    "localAbbr": "AM"
  },
  {
    "x": 9,
    "y": 17,
    "enName": "San Benito",
    "enAbbr": "BN",
    "localName": "San Benito",
    "localAbbr": "BN"
  },
  {
    "x": 10,
    "y": 17,
    "enName": "Fresno",
    "enAbbr": "FR",
    "localName": "Fresno",
    "localAbbr": "FR"
  },
  {
    "x": 11,
    "y": 17,
    "enName": "Madera",
    "enAbbr": "MD",
    "localName": "Madera",
    "localAbbr": "MD"
  },
  {
    "x": 13,
    "y": 17,
    "enName": "Inyo",
    "enAbbr": "IN",
    "localName": "Inyo",
    "localAbbr": "IN"
  },
  {
    "x": 8,
    "y": 18,
    "enName": "Monterey",
    "enAbbr": "MT",
    "localName": "Monterey",
    "localAbbr": "MT"
  },
  {
    "x": 10,
    "y": 18,
    "enName": "Kings",
    "enAbbr": "KG",
    "localName": "Kings",
    "localAbbr": "KG"
  },
  {
    "x": 11,
    "y": 18,
    "enName": "Tulare",
    "enAbbr": "TL",
    "localName": "Tulare",
    "localAbbr": "TL"
  },
  {
    "x": 9,
    "y": 19,
    "enName": "San Luis Obispo",
    "enAbbr": "LO",
    "localName": "San Luis Obispo",
    "localAbbr": "LO"
  },
  {
    "x": 11,
    "y": 19,
    "enName": "Kern",
    "enAbbr": "KE",
    "localName": "Kern",
    "localAbbr": "KE"
  },
  {
    "x": 14,
    "y": 19,
    "enName": "San Bernardino",
    "enAbbr": "SB",
    "localName": "San Bernardino",
    "localAbbr": "SB"
  },
  {
    "x": 10,
    "y": 20,
    "enName": "Santa Barbara",
    "enAbbr": "BR",
    "localName": "Santa Barbara",
    "localAbbr": "BR"
  },
  {
    "x": 11,
    "y": 20,
    "enName": "Ventura",
    "enAbbr": "VE",
    "localName": "Ventura",
    "localAbbr": "VE"
  },
  {
    "x": 12,
    "y": 20,
    "enName": "Los Angeles",
    "enAbbr": "LA",
    "localName": "Los Angeles",
    "localAbbr": "LA"
  },
  {
    "x": 12,
    "y": 21,
    "enName": "Orange",
    "enAbbr": "OR",
    "localName": "Orange",
    "localAbbr": "OR"
  },
  {
    "x": 14,
    "y": 21,
    "enName": "Riverside",
    "enAbbr": "RV",
    "localName": "Riverside",
    "localAbbr": "RV"
  },
  {
    "x": 14,
    "y": 22,
    "enName": "San Diego",
    "enAbbr": "SD",
    "localName": "San Diego",
    "localAbbr": "SD"
  },
  {
    "x": 15,
    "y": 22,
    "enName": "Imperial",
    "enAbbr": "IM",
    "localName": "Imperial",
    "localAbbr": "IM"
  }
];
}));