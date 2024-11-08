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

/*속성에 접근*/
/* 
- 요소.속성명
- getAttribute(): 속성값 가져오기
- setAttribute(): 속성값 설정하기
*/
//kawa, naver 아이디
 let naver = document.getElementById('naver')
console.log(naver)
//naver,setAttribute("속성이름","바꿔줄 속성값")
naver.setAttribute("href","https://www.google.com")
console.log(naver.href)
console.log(naver.getAttribute("href"))

console.log(document.querySelector('#kawa').src)
document.querySelector('#kawa').alt = "치이카와사진"


/* css변경 */
let h1 = document.querySelector('h1')
let list = document.querySelectorAll('ul')
// console.log(h1)
// console.log(list)

//배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list){
    // el.style.color = "#fff"
    // el.style.backgroundColor = "pink"
    // el.style.fontSize = "1.3rem"
    el.classList.add("friends")
}
h1.classList.add("add-h1")//클래스추가
h1.classList.remove("add-h1")//클래스 제거
h1.classList.toggle("add-h1")//classList.toggle : 있으면 없애주고 없으면 있게해줌(현재상태와 반대로)

console.log(h1.classList.contains("add-h1"))// classList.contains : 있는지 없는지 확인시켜줌 (true/false)
console.log(h1.classList)//선택된 요소의 클래스 목록 확인

/* 4.부모,자식,형제 노드 찾기 */
let friends = document.querySelector('#friends')
let tigger = document.querySelector('#tigger')
// console.log(friends)
// console.log(tigger) : 잘 됐는지 확인
console.log('--자식 노드 접근--')//여러개일 수도 있기때문에 배열형태로 가지고 옴
console.log(friends.children)
console.log(friends.children[0])//각각접근

console.log('--부모 노드 접근--')
console.log(tigger.parentNode)//배열형태가 아닌 요소 자체를 가져옴(하나이기 때문)

console.log('--형제 노드 접근--')//배열형태가 아닌 요소 자체를 가져옴(하나이기 때문)
console.log('이전형제:',tigger.previousElementSibling)
console.log('다음형제:',tigger.nextElementSibling)

/* 5. 노드 생성, 추가, 삭제*/
let container = document.querySelector('.container')

//요소 생성
let p = document.createElement('p')
p.innerText = "새로 추가된 p"
p.style.fontWeight = "700"
p.style.background = "red"
p.id="append-p"

//요소 추가
console.log(p)
container.append(p)//선택된 요소(container)의 맨 뒤 자식요소로 추가됨

let p2 = document.createElement('p')
let p3 = document.createElement('p')
p2.innerText = "p2"
p3.textContent = "p3"

p2.classList.add("p-2")
p3.classList.add("p-3")

// container.append(p2)
// container.append(p3)
// container.appendChild(p3)

container.append(p2,p3)

//prepend(): 선택된 요소의 맨 앞 자식으로 추가
let li = document.createElement('li')
li.innerText="캉가"
li.classList.add("friends")

friends.prepend(li)

// before()
let h3 =document.createElement('h3')
h3.innerText='h3 tag'
h1.before(h3)
// after()
let h2=document.createElement('h2')
h2.innerText='h2 tag'
h1.after(h2)

//요소삭제 > remove, removeChild
let firstli = document.querySelector("li")
//firstli.remove()//선택된 요소가 삭제
//삭제할요소.remove()
// ul.removerChild(firstli)
//부모요소.removeChild(삭제할 자식 요소)

let div2 =document.createElement('div')
container.append(div2)
console.log(container)

let img =document.createElement('img')
div2.append(img)
img.setAttribute("src","./모몽가.jpg")
img.setAttribute("alt","모몽가사진")

let span =document.createElement('span')
div2.append(span)
span.innerText="모몽가"