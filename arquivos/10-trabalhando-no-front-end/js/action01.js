function executar(){
    const input1 = Number(document.getElementById('entrada1').value);
    const input2 = Number(document.getElementById('entrada2').value);
    const net = new brain.NeuralNetwork();

    net.train([
        { input: [0,0], output: [0] },
        { input: [1,0], output: [1] },
        { input: [0,1], output: [1] },
        { input: [1,1], output: [0] },
    ]);

    const output = net.run([input1, input2]);
    document.getElementById('saida').value = parseFloat(output).toFixed(0);
}