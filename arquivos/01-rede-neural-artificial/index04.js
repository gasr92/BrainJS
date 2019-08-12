// NOT

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// o 0 e 1 estao representando valores booleanos

net.train([ 
    { input: [0], output: [1] } ,
    { input: [1], output: [0] } 
]);

const output00 = parseFloat(net.run([0])).toFixed(0);
const output01 = parseFloat(net.run([1])).toFixed(0);

console.log(`0 not 0: ${output00}`);
console.log(`0 not 1: ${output01}`);