console.log(document)
console.log(document.URL)
console.log(document.documentElement)

console.log(document.head)
console.log(document.body)
console.log(document.title)

// 1. getElementById : 태그 하나만 반환
console.log(document.getElementById("green"))
console.log(document.getElementById("red"))

// 2. getElementsByClassName : 태그 여러개 반환
console.log(document.getElementsByClassName("pink"))
console.log(document.getElementsByClassName("pink")[0])
console.log(document.getElementsByClassName("others")[0])

// 3. getElementsByTagName
console.log(document.getElementsByTagName('div'))
console.log(document.getElementsByTagName('div')[0])

//4.getElementsByName(name속성값)
console.log(document.getElementsByName("id"))
console.log(document.getElementsByName("id")[0])

//5. querySelector('css 선택자')
console.log("====================")
console.log(document.querySelector('.pink'))
console.log(document.querySelector('.others'))
console.log(document.querySelector('#green'))
console.log(document.querySelector('#red'))
console.log(document.querySelector('div'))
console.log(document.querySelector('input'))
console.log(document.querySelector('[name="id"]'))

// 6. querySelectorAll: 요소가 하나여도 배열로 출력
console.log(document.querySelectorAll(".pink"))
console.log(document.querySelectorAll("#red"))

//실습 : for of을 이용해서 pink 클래스 모두 출력
let pinks= document.querySelectorAll('.pink')
for(let tag of pinks){
    console.log(tag)
}



