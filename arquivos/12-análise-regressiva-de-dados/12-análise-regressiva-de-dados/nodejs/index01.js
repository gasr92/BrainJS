const brain = require('brain.js');
const fs = require('fs');

const rna = new brain.NeuralNetwork();

const csv = fs.readFileSync('./dados.csv', 'utf8');
const lines = csv.toString().trim().split('\r\n');
console.log(lines);
let train = [];
for(let i=1; i<lines.length; i++) {
	const cells = lines[i].toString().trim().split(',');

	const data = cells[0].toString().trim().split('.');
	const dia = Number(data[0]) / 100;
	const mes = Number(data[1]) / 100;
	const ano = Number(data[2]) / 10000;

	const cotacao = Number(cells[1]) / 10;

	train.push({input: [dia, mes, ano], output: [cotacao]});
}
console.log(train);
rna.train(train, {iterations: 100000, errorThresh: 0.003});

const json = rna.toJSON();
fs.writeFileSync('../model/model.json', JSON.stringify(json));

console.log('treinamento salvo com sucesso.');
