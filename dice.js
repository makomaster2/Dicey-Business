let dice = [];
let dieID = 0;

class Die {
	constructor() {
		this.div = $(`<div class ="dieDiv"></div>`);
		this.id = this.div.attr('id', `${dieID++}`);
		this.roll();
		this.div.on('click', () => this.roll());
		this.div.on('dblclick', () => {
			this.div.remove();
			dice = dice.filter(die => die.id != this.id);
		});
	}

	roll() {
		this.val = randomNumber();
		this.div.text(`${this.val}`);
	}
}

$('#newDie').on('click', function () {
	let newDie = new Die();
	dice.push(newDie);
	$('#dieContainer').append(newDie.div);
});

$('#rollDie').on('click', function () {
	dice.forEach(die => {
		die.roll();
	});
});

$('#sumDie').on('click', function () {
	let sum = dice.reduce((acc, die) => acc + die.val, 0);
	alert(sum);
});

function randomNumber() {
	return Math.floor(Math.random() * 6) + 1;
}
