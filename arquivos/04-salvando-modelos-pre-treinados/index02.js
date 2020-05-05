const brain = require('brain.js');
const fs = require('fs');

const net = new brain.NeuralNetwork();
const json = fs.readFileSync('./model-xor.json', 'utf8');
net.fromJSON(JSON.parse(json)); // carregando um modelo pre treinado

const output00 = parseFloat(net.run([0,0])).toFixed(0);
const output01 = parseFloat(net.run([0,1])).toFixed(0);
const output10 = parseFloat(net.run([1,0])).toFixed(0);
const output11 = parseFloat(net.run([1,1])).toFixed(0);

console.log('output00: ' + output00);
console.log('output01: ' + output01);
console.log('output10: ' + output10);
console.log('output11: ' + output11);