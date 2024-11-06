//문자열에서 사용하는 속성과 메소드
//1. length
//2. toUppercase&toLowercase,trim, indexOF,slice
//3. replace, replaceALL, repeat, split

let str1 = "Strawberry Moon"
let str2 = "   Strawberry Moon  "

//문자열 인덱싱
console.log(str1[0])
console.log(str1[0]+ str1[11])
//sonny 단어 만들기
console.log(str1[0]+str1[12]+str1[14]+str1[14]+str1[9])

//1.length 속성
console.log(str1.length)
console.log(str2.length)

/*메서드 사용해보기*/
//1. trim:문자열. method()
console.log(str1)
console.log(str2)
console.log(str2.trim()) //문자열 . trim(): 매개변수 없음
console.log(str2.trim().length)
//2. toLower,Uppercase
console.log(str1.toLowerCase())
console.log(str1.toUpperCase())
//3. indexOF, charAt, slice -> 인자가 들어가고 반환값이 있음
let fruit = "applemango"
//1) indexOF:내가 찾고 싶은 문장려의 인덱스번호 반환 ->소괄호 안에 문자열
console.log(fruit.indexOf("e"))//4
console.log(fruit.indexOf("a"))//0
console.log(fruit.indexOf("apple"))//0
console.log(fruit.indexOf("mango"))//5
console.log(fruit.indexOf("z"))//-1: 없는 문자열을 찾으려고 하면 반환되는 값
//2) charAt : 소괄호 안에 숫자
console.log(fruit.charAt(0))
console.log(fruit.charAt(8))
console.log(fruit.charAt(10))// 없으면 ''빈문자열
//3) slice : 
console.log(fruit.slice(5))//m부터 끝까지 출력 = mango
console.log(fruit.slice(3,6))//3번부터 5번까지 출력 = lem
console.log(fruit.slice(-1))//-는 뒤에서부터 출력= o
console.log(fruit.slice(-4))//-4부터 -1까지 출력 = ango

console.log(fruit)// 위에 메서드를 사용해도 실제로는 값은 변하지 않음

// 4. 문자대체 함수 : replace, replaceAll
let msg1="Wow~ It is so amazing!!! Wow"
console.log(msg1.replace("Wow","Hey~~~" ))//반환값만 변경되는 것 뿐
console.log(msg1.replaceAll("o","OO"))
console.log(msg1)
 
let date="2024.11.06"
//YYYY-MM-DD
console.log(date.replaceAll(".","-"))
date=date.replaceAll(".","-")
console.log(date)

//5. split
let hello="hello"
console.log(typeof hello)

let hello2= hello.split()
console.log(hello2)

hello2=hello.split("")
console.log(hello2)


hello2=hello.split("e")
console.log(typeof hello2)

//['2024','11','06']
date=date.split("-")
console.log(date)

//---------------------배열--------------------
console.log("------배열-----")
let arr1=[1,2,3,4,5]
let arr2=["quakka","rabbit","puppy","hamster"]
// push,pop,shift,unshift: 실제 배열이 변화함
arr1[5]=6//요소에 추가됨 -> array의 마지막 인덱스 번호를 알고 있어야함
arr1[8]=8//빈요소가 생김
console.log(arr1)

arr1=[1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
console.log(arr1)

console.log(arr1.pop())//삭제되는 제거값 반환
arr1.pop()
arr1.pop()
arr1.pop()
console.log(arr1)

arr2.unshift("cat")
console.log(arr2)

arr2.shift()
console.log(arr2)
console.log(arr2.shift()) //삭제되는 제거값 반환

//.includes(요소): 배열에 요소가 있는지 없는지
console.log(arr2.includes("rabbit"))
console.log(arr2.includes("quakka"))

arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4))//3 -> 4라는 요소가 몇번 인덱스에 있는지 확인

//reverse : 순서뒤집기
arr1.reverse() // 기존배열이 변경됨
console.log(arr1)

//join : 배열에서 문자열로 합쳐줌
str1 = arr1.join()
console.log(str1)//5,4,3,2,1
//join의 인자로 아무것도 전달이 되지않으면, 배열 안의 컴마까지 같이 문자열로 반환
str1 = arr1.join("")
console.log(str1)//54321

//for of, forEach
let arr3 = [1,5,3,4,5]
let alphabets = ['a','b','c','d','e','f']

//기본 for문
for(let i=0; i<arr3.length; i++){
    console.log(arr3[i])
}

//for of문
for(let el of arr3){
    console.log(el)
}

//forEach(익명함수)
//forEach(function(a,b,c){})
arr3.forEach(function(num,i,arr){
    console.log("요소",num)
    console.log("배열의 인덱스",i)
    console.log("arr3",arr)
    console.log("----")
})

arr3.forEach((el)=>{
    console.log(el)

})

// filter, map, find
// 매개변수로 들어가는 익명함수에 리턴값이 필수
arr2=["quakka","rabbit","puppy","hamster"]
console.log('---filter---')
//return 이후의 조건에 만족하는 요소를 찾아서 새로운 배열로 반환
let six=arr2.filter(function(el){
    return el.length === 6
})

console.log(six)

//find
console.log("---find---")
let six2=arr2.find(function(word){
    return word.length===6
})
console.log(six2)

//map
console.log('---map---')
let arr4=[1,2,3,4,5]
let multiArr=arr4.map(function(number){
    return number*3
})

multiArr=arr4.map((number)=>number*3)//화살표함수 중괄호 생략가능, 한줄만 쓸때 return 생략 가능

console.log(multiArr)

//object 반복
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};
for(let area in areaNum){
    console.log(area)//area->key의 이름= 문자열로 반환중
    //값에 접근? 대괄호 접근법으로만 사용가능
    console.log(areaNum[area])
}
