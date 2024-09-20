function splitText(elem, tag = "span", interval = 0) {
	if (!elem) {
		console.error(
			"첫 번째 인수값은 텍스트를 가져올 DOM선택자를 넣어야 됩니다."
		);

		return;
	}

	const el = document.querySelector(elem);
	const el_text = el.innerText;

	el.style.fontSize = "0px"; //fontSize 지정

	let resultText = "";
	let counter = 0;

	for (let letter of el_text) {
		console.log(letter);

		resultText += `<${tag} style="display:inline-block; transition-delay:${
			interval * counter++
		}">${letter}</${tag}>`;
	}
	console.log(resultText);

	el.innerHTML = resultText;
}

splitText();
