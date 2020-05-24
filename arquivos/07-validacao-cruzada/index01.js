// validacao cruzada trabalha com imprevisibilidade nas respostas

const brain = require('brain.js');

const data = [
    { input: [0,0], output: [0] },
    { input: [0,1], output: [1] },
    { input: [1,0], output: [1] },
    { input: [1,1], output: [0] },
];

const networkOptions = { learningRate: 0.05 };
const trainingOptions = { iterations: 1000, errorTresh: 0.004 };
const crossValidate = new brain.CrossValidate(brain.NeuralNetwork, networkOptions);
crossValidate.train(data, trainingOptions);

const json = crossValidate.toJSON();

// converte ro algoritmo de valicao cruzada em uma rede neural artificial
const net = crossValidate.toNeuralNetwork();

// o indice 3 corresponde a qual fase da validacao queremos visualizar
console.log(`taxa de erro:  ${json.sets[3].error}\niteracoes: ${json.sets[3].iterations}`);
const output = net.run([0,1]);
console.log(`resultado: ${output[0]}`);