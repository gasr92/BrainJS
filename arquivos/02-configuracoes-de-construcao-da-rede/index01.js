const brain = require('brain.js');

// configurando com valores padroes
const config = {
    binaryThresh: 0.5, // debulhador binario, e a tendencia dos valores (entre 0 e 1)
                       // colocar 0 ou 1 não significa que o resultado sera exatamente o valor informado
                       // eh apenas a tendencia para onde o resultado ira
    hiddenLayers: [3], // matriz de camadas ocultas
                       // neste exemplo, estamos usando apenas 3 (3 linhas e 1 coluna) 
                       // poderia usar [3,3] que seria 3 linhas e 3 colunas
                       // aumentar o numero de camadas, aumenta tambem a precisao do resultado, porem, aumenta tambem o processamento que sera realizado
                       // normamlemntenormalment enão se deve mudar o valor das camadas ocultas, somente em casos extremos onde os resultados ao estao sendo satisfatorios
    activation: 'sigmoid', // e o algoritmo que controla a funcao de ativacao
                           // sigmoid (0,2), tahn (-1,1), relu (0,n), leaky-relu (0.01, n)
                           // exemplos da linha de cima: (resultado minimo, resultado maximo)
    leakyReluAlpha: 0.01, // precisao da funcao de ativacao quando se utiliza leaky-relu
    inputSize: 2, // [nao precisa] quantidade de elementos de entrada
                  // se nao for informada, em tempo de execucao ela sera vairável, nao sendo necessario especificar
    inputRange: 2, // [nao precisa] quantidade maxima dos elementos de entrafa
    outputSize: 1, // [nao precisa] quantidade de elementos de saida
    learningRate: 0.01, // taxa de aprendizagem
                        // quanto maior o valor, mais rapido a rede neural ira aprender
                        // porem se for colocado um valor muito alto, pode ser que a rede aprenda rapido demais e acabe retornando um valor alem do esperado
    decayRate: 0.999 // taxa de decaimento
                     // quatoquanto mais alto o valor, maior a probabilidade de erro e vice versa
                     // porem, se a taxa de erro estiver muito baixa pode ser que a rede nao tenha tempo suficiente para processar, e acabara tendo o efeito contrario, causando mais erros
};

const net = new brain.NeuralNetwork();
net.train([
    {input: [0,0], output: [0]},
    {input: [0,1], output: [1]},
    {input: [1,0], output: [1]},
    {input: [1,1], output: [0]}
]);

const output = net.run([0,1]);

console.log(output);