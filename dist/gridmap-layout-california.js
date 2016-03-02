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
    "enAbbr": "DelN",
    "localName": "Del Norte",
    "localAbbr": "DelN"
  },
  {
    "x": 6,
    "y": 10,
    "enName": "Siskiyou",
    "enAbbr": "Sisk",
    "localName": "Siskiyou",
    "localAbbr": "Sisk"
  },
  {
    "x": 7,
    "y": 10,
    "enName": "Shasta",
    "enAbbr": "Shas",
    "localName": "Shasta",
    "localAbbr": "Shas"
  },
  {
    "x": 8,
    "y": 10,
    "enName": "Modoc",
    "enAbbr": "Modo",
    "localName": "Modoc",
    "localAbbr": "Modo"
  },
  {
    "x": 9,
    "y": 10,
    "enName": "Lassen",
    "enAbbr": "Lass",
    "localName": "Lassen",
    "localAbbr": "Lass"
  },
  {
    "x": 5,
    "y": 11,
    "enName": "Humboldt",
    "enAbbr": "Humb",
    "localName": "Humboldt",
    "localAbbr": "Humb"
  },
  {
    "x": 6,
    "y": 11,
    "enName": "Trinity",
    "enAbbr": "Trin",
    "localName": "Trinity",
    "localAbbr": "Trin"
  },
  {
    "x": 7,
    "y": 11,
    "enName": "Tehama",
    "enAbbr": "Teha",
    "localName": "Tehama",
    "localAbbr": "Teha"
  },
  {
    "x": 8,
    "y": 11,
    "enName": "Nevada",
    "enAbbr": "Neva",
    "localName": "Nevada",
    "localAbbr": "Neva"
  },
  {
    "x": 9,
    "y": 11,
    "enName": "Plumas",
    "enAbbr": "Plum",
    "localName": "Plumas",
    "localAbbr": "Plum"
  },
  {
    "x": 5,
    "y": 12,
    "enName": "Mendocino",
    "enAbbr": "Mend",
    "localName": "Mendocino",
    "localAbbr": "Mend"
  },
  {
    "x": 6,
    "y": 12,
    "enName": "Glenn",
    "enAbbr": "Glen",
    "localName": "Glenn",
    "localAbbr": "Glen"
  },
  {
    "x": 7,
    "y": 12,
    "enName": "Butte",
    "enAbbr": "Butt",
    "localName": "Butte",
    "localAbbr": "Butt"
  },
  {
    "x": 8,
    "y": 12,
    "enName": "Sutter",
    "enAbbr": "Sutt",
    "localName": "Sutter",
    "localAbbr": "Sutt"
  },
  {
    "x": 9,
    "y": 12,
    "enName": "Placer",
    "enAbbr": "Plac",
    "localName": "Placer",
    "localAbbr": "Plac"
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
    "enAbbr": "Colu",
    "localName": "Colusa",
    "localAbbr": "Colu"
  },
  {
    "x": 9,
    "y": 13,
    "enName": "Amador",
    "enAbbr": "Amad",
    "localName": "Amador",
    "localAbbr": "Amad"
  },
  {
    "x": 10,
    "y": 13,
    "enName": "Sierra",
    "enAbbr": "Sier",
    "localName": "Sierra",
    "localAbbr": "Sier"
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
    "enAbbr": "Sola",
    "localName": "Solano",
    "localAbbr": "Sola"
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
    "enAbbr": "Sacr",
    "localName": "Sacramento",
    "localAbbr": "Sacr"
  },
  {
    "x": 10,
    "y": 14,
    "enName": "El Dorado",
    "enAbbr": "ElDo",
    "localName": "El Dorado",
    "localAbbr": "ElDo"
  },
  {
    "x": 11,
    "y": 14,
    "enName": "Alpine",
    "enAbbr": "Alpi",
    "localName": "Alpine",
    "localAbbr": "Alpi"
  },
  {
    "x": 5,
    "y": 15,
    "enName": "Sonoma",
    "enAbbr": "Sono",
    "localName": "Sonoma",
    "localAbbr": "Sono"
  },
  {
    "x": 7,
    "y": 15,
    "enName": "San Mateo",
    "enAbbr": "SanM",
    "localName": "San Mateo",
    "localAbbr": "SanM"
  },
  {
    "x": 8,
    "y": 15,
    "enName": "Stanislaus",
    "enAbbr": "Stan",
    "localName": "Stanislaus",
    "localAbbr": "Stan"
  },
  {
    "x": 9,
    "y": 15,
    "enName": "Calaveras",
    "enAbbr": "Cala",
    "localName": "Calaveras",
    "localAbbr": "Cala"
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
    "enAbbr": "SanF",
    "localName": "San Francisco",
    "localAbbr": "SanF"
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
    "enAbbr": "SanJ",
    "localName": "San Joaquin",
    "localAbbr": "SanJ"
  },
  {
    "x": 9,
    "y": 16,
    "enName": "Merced",
    "enAbbr": "Merc",
    "localName": "Merced",
    "localAbbr": "Merc"
  },
  {
    "x": 10,
    "y": 16,
    "enName": "Mariposa",
    "enAbbr": "Mari",
    "localName": "Mariposa",
    "localAbbr": "Mari"
  },
  {
    "x": 6,
    "y": 17,
    "enName": "Santa Clara",
    "enAbbr": "Sant",
    "localName": "Santa Clara",
    "localAbbr": "Sant"
  },
  {
    "x": 7,
    "y": 17,
    "enName": "Santa Clara",
    "enAbbr": "Sant",
    "localName": "Santa Clara",
    "localAbbr": "Sant"
  },
  {
    "x": 8,
    "y": 17,
    "enName": "Alameda",
    "enAbbr": "Alam",
    "localName": "Alameda",
    "localAbbr": "Alam"
  },
  {
    "x": 9,
    "y": 17,
    "enName": "San Bernardino",
    "enAbbr": "SanB",
    "localName": "San Bernardino",
    "localAbbr": "SanB"
  },
  {
    "x": 10,
    "y": 17,
    "enName": "Fresno",
    "enAbbr": "Fres",
    "localName": "Fresno",
    "localAbbr": "Fres"
  },
  {
    "x": 11,
    "y": 17,
    "enName": "Madera",
    "enAbbr": "Made",
    "localName": "Madera",
    "localAbbr": "Made"
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
    "enAbbr": "Mont",
    "localName": "Monterey",
    "localAbbr": "Mont"
  },
  {
    "x": 10,
    "y": 18,
    "enName": "Kings",
    "enAbbr": "King",
    "localName": "Kings",
    "localAbbr": "King"
  },
  {
    "x": 11,
    "y": 18,
    "enName": "Tulare",
    "enAbbr": "Tula",
    "localName": "Tulare",
    "localAbbr": "Tula"
  },
  {
    "x": 9,
    "y": 19,
    "enName": "San Luis Obispo",
    "enAbbr": "SanL",
    "localName": "San Luis Obispo",
    "localAbbr": "SanL"
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
    "enAbbr": "SanB",
    "localName": "San Bernardino",
    "localAbbr": "SanB"
  },
  {
    "x": 10,
    "y": 20,
    "enName": "Santa Clara",
    "enAbbr": "Sant",
    "localName": "Santa Clara",
    "localAbbr": "Sant"
  },
  {
    "x": 11,
    "y": 20,
    "enName": "Ventura",
    "enAbbr": "Vent",
    "localName": "Ventura",
    "localAbbr": "Vent"
  },
  {
    "x": 12,
    "y": 20,
    "enName": "Los Angeles",
    "enAbbr": "LosA",
    "localName": "Los Angeles",
    "localAbbr": "LosA"
  },
  {
    "x": 12,
    "y": 21,
    "enName": "Orange",
    "enAbbr": "Oran",
    "localName": "Orange",
    "localAbbr": "Oran"
  },
  {
    "x": 14,
    "y": 21,
    "enName": "Riverside",
    "enAbbr": "Rive",
    "localName": "Riverside",
    "localAbbr": "Rive"
  },
  {
    "x": 14,
    "y": 22,
    "enName": "San Diego",
    "enAbbr": "SanD",
    "localName": "San Diego",
    "localAbbr": "SanD"
  },
  {
    "x": 15,
    "y": 22,
    "enName": "Imperial",
    "enAbbr": "Impe",
    "localName": "Imperial",
    "localAbbr": "Impe"
  }
];
}));