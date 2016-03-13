var d3 = require('d3');
var fs = require('fs');
var _ = require('lodash');
var util = require('./util.js');
var json2csv = require('json2csv');

var inputDir = __dirname + '/input';

var data = util.readCsv(inputDir + '/provinceNamesAbbreviations.csv');

var provinces = data.map(function(d) {
	return {
		'enName': d['province'],
		'enAbbr': d['abbreviation'],
		'localName': d['province'],
		'localAbbr': d['abbreviation']
	};
})

var fields = ['enName', 'enAbbr', 'localName', 'localAbbr'];

json2csv({ data: provinces, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile(inputDir + '/' + 'provinces.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});

