// NOT

const brain = require('brain.js');
const net = new brain.NeuralNetwork();

// o 0 e 1 estao representando valores booleanos

net.train([ 
    { input: [0, 0], output: [1, 1] } ,
    { input: [1, 1], output: [0, 0] } 
]);

const output00 = net.run([0,0]);
const output01 = net.run([1,1]);

console.log(`0 not 0: ${output00}`);
console.log(`0 not 1: ${output01}`);