const brain = require('brain.js');
const net = new brain.NeuralNetwork();
net.train([
    {input: [0,0], output: [0]},
    {input: [0,1], output: [1]},
    {input: [1,0], output: [1]},
    {input: [1,1], output: [0]},
], {
    iterations: 20000, // quantidade de backpropagations
                       // quanto maior, os resultados serao mais precisos, porem, mais lento 
    errorThresh: 0.005, // porcentagem maximo aceitavel para a taxa de erro
                        // quanto maior, maior a probabilidade de erro
    log: true, // exibicao do log de treinamento e taxa de erro
    logPeriod: 10, // numero de iteracoes antes do proximo log, por exemplo, mostrar 1 log a cada X iteracoes
    learningRate: 0.3, // taxa da aprendizagem, se for uma taxa muito alta, as iterations tambem deve ser alta
    momentum: 0.1, // precisao na alteracao do peso da proxima camada
    callback: null, // chamada de uma funcao durante o treinamento, a cada iteracao
    callbackPeriod: 10, // numero de iteracoes antes da proxima execucao da funcao de callback
    timeout: Infinity // numero maximo de milisegundos que o treinamento podera durar
});

const output = net.run([0,1]);
console.log(output);