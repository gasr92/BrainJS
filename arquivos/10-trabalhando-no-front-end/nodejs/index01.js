// o codigo deste arquivo serve unicamente para gerar os dados de treinamento
// este codigo deve ser executado diretamente pelo console node index01 e após gerar os dados da pasta model, nao sera mais utilizado

const brain  = require('brain.js');
const fs = require('fs');

const xor = new brain.NeuralNetwork();
const or = new brain.NeuralNetwork();
const and = new brain.NeuralNetwork();

xor.train(
    [
        { input: [0,0], output: [0] },
        { input: [1,0], output: [1] },
        { input: [0,1], output: [1] },
        { input: [1,1], output: [0] },
    ]
);

or.train(
    [
        { input: [0,0], output: [0] },
        { input: [1,0], output: [1] },
        { input: [0,1], output: [1] },
        { input: [1,1], output: [1] },
    ]
);

and.train(
    [
        { input: [0,0], output: [0] },
        { input: [1,0], output: [0] },
        { input: [0,1], output: [0] },
        { input: [1,1], output: [1] },
    ]
);


const jsonXOR = xor.toJSON();
const jsonOR = or.toJSON();
const jsonAND = and.toJSON();

fs.writeFileSync('../model/model-xor.json', JSON.stringify(jsonXOR));
fs.writeFileSync('../model/model-or.json', JSON.stringify(jsonOR));
fs.writeFileSync('../model/model-and.json', JSON.stringify(jsonAND));

console.log('Treinamento gravado com sucesso');