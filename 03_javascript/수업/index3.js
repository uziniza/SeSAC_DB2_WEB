/**
 함수
 * - 특정 작업을 수행하기 위해 설계된 코드 집합
 * - 함수의 선언구조
 * - 키워드 : function
 * - 함수의 이름 : canmelCase로 함수의 이름 작성
 * - (매개변수) : 함수 내부에서 사용할 변수 -> 매번 달라지는 변수 (매개변수가 없더라도 소괄호 작성)
 * - {스코프} : 함수의 내부코드
 * 함수 선언문, 함수 표현식
 * - 함수 표현식 : 변수에 함수를 저장
 * - 함수 선언문 : 명시적 함수 선언
 */

//1. 함수 선언문
helloWorld1()//어느위치에서든 호출 가능
console.log("선언되기전")
function helloWorld1(){
    console.log('hello world1')
    //console.log: 출력만 해줌
}

helloWorld1()//선언된 함수를 호출
function hellowWorld2(){
    return 'hellow world2'
    console.log('리턴 아래입니다..')
}//return 키워드 : 함수 내부 코드의 최종 결과값을 보관하기 위한 키워드,
// 문자열을 저장해줌-> console.log를 사용해야 개발자 도구에서 볼 수 있음
hellowWorld2()
console.log(hellowWorld2())

//2. 함수 표현식
// hellowWorld3() : 선언되기전에 호출 불가능 = error
const hellowWorld3 = function(){
    console.log('hellow world 3')
}
hellowWorld3()

//3. 화살표 함수
// hellowWorld4() : 선언되기전에 호출 불가능 = error
const hellowWorld4 = ()=>{
    console.log('hellow world 4')
}
hellowWorld4()

// 매개변수가 있는 함수 만들기
// 1. 매개변수 1개, 함수 선언문
function sayHellow1(text){
    return text
}

console.log(sayHellow1("안녕"))

// 2. 매개변수 2개, 함수 선언문
function sayHellow2(text, name){
    return `${text}! ${name}`
}
console.log(sayHellow2("안녕","유진"))

//3. 매개변수 2개 , 함수표현식
const sayHellow3 = function (text, name){
    console.log (`${text}! ${name}`)
}
sayHellow3("안녕하세요","오유진입니다")

//4. 매개변수 2개, 화살표함수
const sayHellow4 = (text, name) => {
    return `${text}! ${name}`
}
const sayHellowValue = sayHellow4("hellow",'yj')
console.log(sayHellowValue)

//실습1
function multifly(number1,number2){
    return number1*number2
}
console.log(multifly(1,3))

//실습2
let square=function(number1){
    console.log(number1**2)
}
square(4)
square(11)
square(5)

