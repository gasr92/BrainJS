const brain = require('brain.js');
const fs = require('fs');

const rna = new brain.NeuralNetwork();

const csv = fs.readFileSync('./dados.csv', 'utf8');
const lines = csv.toString().trim().split('\r\n');
console.log(lines);
let train = [];
for(let i=1; i<lines.length; i++) {
	const cells = lines[i].toString().trim().split(',');
	const sexo = Number(cells[0]);
	const idade = Number(cells[1]);
	const profissao = Number(cells[2]);
	const status = Number(cells[3]);

	train.push({input: [sexo, idade, profissao], output: [status]});
}
console.log(train);
rna.train(train, {iterations: 100000, errorThresh: 0.003});

const json = rna.toJSON();
fs.writeFileSync('../model/model.json', JSON.stringify(json));

console.log('treinamento salvo com sucesso.');
