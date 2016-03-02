var d3 = require('d3');
var fs = require('fs');
var _ = require('lodash');
var util = require('./util.js');
var json2csv = require('json2csv');

var inputDir = __dirname + '/input';
var outputDir = __dirname + '/output';

var mapData = require(inputDir + '/california.json');

var provinces = mapData['features'].map(function(d) {
	return {
		'province': d['properties']['NAME']
	};
})

console.log('provinces', provinces);

var fields = ['province'];

json2csv({ data: provinces, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('provinceNamesFromGeoJSON.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});

var provincesFlatArray = provinces.map(function(d) {
	return d['province'];
})

// set default abbreviationLength
var abbreviationLength = 2;

// calculate short posssible abbreviation for the list of provinces
function generateAbbreviations(array) {
	var lengths = array.map(function(d) { return d.length; })
	var minLength = d3.min(lengths);
	var abbreviations;

	for(var i=0; i<minLength; i++) {
		abbreviations = array.map(function(d) { 
			d = d.replace(/\s/g, "");
			abbreviationLength = i+1;
			return d.substring(0, i+1) 
		})
		abbreviations = _.uniq(abbreviations);
		if(abbreviations.length === array.length) {

			break
		}
	}
	return abbreviations;
} 

var abbreviationsFlatArray = generateAbbreviations(provincesFlatArray);
var abbreviations = abbreviationsFlatArray.map(function(d) {
	return {
		'abbreviation': d
	}
})
console.log('abbreviations', abbreviationsFlatArray);
console.log('abbreviationLength', abbreviationLength);

var fields = ['abbreviation'];

json2csv({ data: abbreviations, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('provinceAbbreviationsFromGeoJSON.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});

// output format:
// enName,enAbbr,localName,localAbbr
var abbreviation;
var provincesOutput = provincesFlatArray.map(function(d) {

	abbreviation = d.replace(/\s/g, "").substring(0, abbreviationLength) 

	return {
		'enName': d,
		'enAbbr' : abbreviation,
		'localName': d,
		'localAbbr': abbreviation
	};
})



//console.log('provinces', provinces);

var fields = ['enName', 'enAbbr', 'localName', 'localAbbr'];

json2csv({ data: provincesOutput, fields: fields, quotes: false }, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile(inputDir + '/' + 'provinces.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});