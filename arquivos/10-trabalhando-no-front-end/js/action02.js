let opcao = 'xor';

function executar(){
    const input1 = Number(document.getElementById('entrada1').value);
    const input2 = Number(document.getElementById('entrada2').value);
    const operador = get();

    const net = new brain.NeuralNetwork();
    const json = getJSON(operador);
    net.fromJSON(JSON.parse(json));

    const output = net.run([input1, input2]);
    document.getElementById('saida').value = parseFloat(output).toFixed(0);
}

function getJSON(operador='xor'){
    if(operador == 'xor'){
        return `
        {"sizes":[2,3,1],"layers":[{"0":{},"1":{}},{"0":{"bias":2.1490588188171387,"weights":{"0":-5.909759998321533,"1":-5.876795768737793}},"1":{"bias":0.17062264680862427,"weights":{"0":-1.1692200899124146,"1":-0.8444154262542725}},"2":{"bias":5.128518104553223,"weights":{"0":-3.503525733947754,"1":-3.575164318084717}}},{"0":{"bias":-3.40129017829895,"weights":{"0":-7.95892858505249,"1":1.4705665111541748,"2":6.958669662475586}}}],"outputLookup":false,"inputLookup":false,"activation":"sigmoid","trainOpts":{"iterations":20000,"errorThresh":0.005,"log":false,"logPeriod":10,"learningRate":0.3,"momentum":0.1,"callbackPeriod":10,"beta1":0.9,"beta2":0.999,"epsilon":1e-8}}
        `;
    }else if (operador == 'or'){
        return `
        {"sizes":[2,3,1],"layers":[{"0":{},"1":{}},{"0":{"bias":-1.1744102239608765,"weights":{"0":2.2815628051757812,"1":2.4083340167999268}},"1":{"bias":-1.2941747903823853,"weights":{"0":2.645925521850586,"1":2.5218465328216553}},"2":{"bias":0.6834815740585327,"weights":{"0":-1.5203156471252441,"1":-1.5234161615371704}}},{"0":{"bias":-1.7406624555587769,"weights":{"0":3.191427230834961,"1":3.633631944656372,"2":-2.8919997215270996}}}],"outputLookup":false,"inputLookup":false,"activation":"sigmoid","trainOpts":{"iterations":20000,"errorThresh":0.005,"log":false,"logPeriod":10,"learningRate":0.3,"momentum":0.1,"callbackPeriod":10,"beta1":0.9,"beta2":0.999,"epsilon":1e-8}}
        `;
    }else{
        return `
        {"sizes":[2,3,1],"layers":[{"0":{},"1":{}},{"0":{"bias":1.9911359548568726,"weights":{"0":-1.9180989265441895,"1":-2.0300471782684326}},"1":{"bias":2.547168731689453,"weights":{"0":-2.3235855102539062,"1":-2.1979594230651855}},"2":{"bias":2.1329572200775146,"weights":{"0":-2.0225419998168945,"1":-2.0657620429992676}}},{"0":{"bias":3.5262937545776367,"weights":{"0":-3.6455302238464355,"1":-4.2789530754089355,"2":-3.76251220703125}}}],"outputLookup":false,"inputLookup":false,"activation":"sigmoid","trainOpts":{"iterations":20000,"errorThresh":0.005,"log":false,"logPeriod":10,"learningRate":0.3,"momentum":0.1,"callbackPeriod":10,"beta1":0.9,"beta2":0.999,"epsilon":1e-8}}
        `;
    }
}

function set(operador='xor'){
    opcao = operador;
}

function get(){
    return opcao;
}