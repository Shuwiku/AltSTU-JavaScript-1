function getNums(count=1) {
	let numsArray = [];
	for (let i = 0; i < count; i++) {
		numsArray.push(
			parseFloat(prompt(`Введите число (${i + 1} / ${count}):`))
		);
	}
	return numsArray;
}


function addition() {
	let [first, second] = getNums(count=2);
	alert(
		`Сложение: ${first} и ${second}\nРезультат: ${first + second}`
	);
}


function subtraction() {
	let [first, second] = getNums(count=2);
	alert(
		`Вычитание: ${second} из ${first}\nРезультат: ${first - second}`
	);
}


function multiplication() {
	let [first, second] = getNums(count=2);
	alert(
		`Умножение: ${first} и ${second}\nРезультат: ${first * second}`
	);
}


function division() {
	let [first, second] = getNums(count=2);
	alert(
		`Деление: ${first} на ${second}\nРезультат: ${first / second}`
	);
}


function remainder() {
	let [first, second] = getNums(count=2);
	alert(
		`Остаток от деления: ${first} на ${second}\nРезультат: ` + 
			`${first % second}`
	);
}
