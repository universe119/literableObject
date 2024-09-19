// step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로 감싸서 다시 해당 요소안에 innerHTML로 삽입
function splitText(elem, tag) {
	const el = document.querySelector(elem);
	const el_text = el.innerText;

	// for of 반복문 안쪽에서 += 복합대입연산자로
	// 태그 문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
	let resultText = "";

	// for of로 문자값을 반복 돌면서 <tag>letter</tag> 형태의 문자값을 계속
	// resultText 변수에 쌓아나감
	for (let letter of el_text) {
		console.log(letter);
		resultText += `<${tag}>${letter}</${tag}>`;
	}
	console.log(resultText);
	el.innerHTML = resultText;
}

splitText("h1", "span");
// step2 - span 요소 자체를 우리가 원하는 요소명으로 인수 전달처리
// step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
// step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리

/*
// Iterable Object (반복가능한 객체)
// 자바스크립트에서는 문자열로 반복가능한 객체 취급

// for in 반복문을 사용하면 문자값도 반복 처리 가능
const text = "HELLO";

for (let letter of text) {
	console.log(letter);
}
*/
// 미션 함수 생성
// step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로 감싸서 다시 해당 요소안에 innerHTML로 삽입
// step2 - span 요소 자체를 우리가 원하는 요소명으로 인수 전달처리
// step3 - 인터벌 시간값을 3번째 인수로 전달하면 delay값이 설정됨
// step4 - 세번째 인수값이 전달되지 않으면 무조건 delay값을 디폴트로 0처리
// splitText("h1","span",0.1) 5시 20분까지 고민

/* 내 소스
function splitText(elem1, elem2, sec) {
	const el = document.querySelector(elem1);
	// const el_s = document.querySelectorAll(elem2);
	const el_text = el.innerText;
	console.log(el_text);
	console.log(el_text.split(""));
	const el_split = el_text.split("");

	arr = [];
	for (let letter of el_split) {
		console.log(letter);
		arr += `<${elem2}>${letter}</${elem2}>`;
	}
	el.innerHTML = arr;
	console.log(el.innerHTML);
	console.log(el.innerText);

	const el_s = document.getElementsByTagName(elem1);
	console.dir(el_s[0].childNodes[0]);
	const el_sc = el_s[0].childNodes;
	for (let child of el_sc) {
		child.style.transitionDelay = sec;
		console.log(child);

		console.log(child.style.transitionDelay);
	}

	// &:nth-of-type(1) {
	//     transition-delay: 0s;
	// // }
	// el.style.transitionDelay=0.1;
}
splitText("h1", "span", 0.7);
*/
