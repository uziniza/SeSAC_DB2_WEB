// 1. 태그 내부 내용 변경
// - innerText
// - textContent
// - innerHTML
let div1 = document.getElementById('div1')
div1.innerText="     여기는 <b>첫번째</b> 태그입니다.&hearts;     /"
console.log(div1.innerText)
div1.innerHTML="여기는 <b>첫번째</b> 태그입니다.&hearts;"
div1.textContent="     여기는 <b>첫번째</b> 태그입니다.&hearts;     /"
console.log(div1.textContent)

