function executar() {
	const dias = Number(document.getElementById('dias').value);

	const net = new brain.NeuralNetwork();
	const json = getJSON();
	net.fromJSON(JSON.parse(json));

	let data = new Date();
	let x = [];
	let y = [];
	for(let i=1; i<=dias; i++) {
		data.setDate(data.getDate() + i);

		// divide por um mumeronumero maior, para que o resultado seja um valor entre 0 e 1, e dessa forma ficar mais facil testar
		const dia = data.getDate() / 100;
		const mes = (data.getMonth()+1) / 100;
		const ano = data.getFullYear() / 10000;

		const cotacao = Number(parseFloat(Number(net.run([dia, mes, ano])) * 10).toFixed(4));
		x.push(i);
		y.push(cotacao);
	}
	plot(x, y);
}

function getJSON() {
	return `
{"sizes":[3,3,1],"layers":[{"0":{},"1":{},"2":{}},{"0":{"bias":-0.1353701651096344,"weights":{"0":-0.0882251113653183,"1":-0.18634429574012756,"2":-0.013025394640862942}},"1":{"bias":0.18229688704013824,"weights":{"0":-0.0888817235827446,"1":0.1693296581506729,"2":-0.017050012946128845}},"2":{"bias":-0.04369046911597252,"weights":{"0":-0.0934307724237442,"1":-0.04529091715812683,"2":-0.10682052373886108}}},{"0":{"bias":-0.21335795521736145,"weights":{"0":-0.12109411507844925,"1":-0.1463889628648758,"2":-0.29440394043922424}}}],"outputLookup":false,"inputLookup":false,"activation":"sigmoid","trainOpts":{"iterations":100000,"errorThresh":0.003,"log":false,"logPeriod":10,"learningRate":0.3,"momentum":0.1,"callbackPeriod":10,"beta1":0.9,"beta2":0.999,"epsilon":1e-8}}
	`;
}

function plot(x, y) {
	const trace = {
		x: x,
		y: y,
		type: 'scatter'
	};

	const data = [trace];

	Plotly.newPlot('grafico', data, {}, {showSendToCloud: true});
}
