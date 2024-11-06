// 1. 태그 내부 내용 변경
// - innerText
// - textContent
// - innerHTML
let div1 = document.getElementById('div1')
div1.innerText="     여기는 <b>첫번째</b> 태그입니다.&hearts;     /"
console.log(div1.innerText)
//2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거

div1.innerHTML="여기는 <b>첫번째</b> 태그입니다.&hearts;"//태그를 태그로 읽음


div1.textContent="     여기는 <b>첫번째</b> 태그입니다.&hearts;     /"//공백 살아있음
console.log(div1.textContent)

