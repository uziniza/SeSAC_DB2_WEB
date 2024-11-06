//1.Date rorcp
let now = new Date()
console.log(now)
console.log(new Date("September 30, 1990, 13:00:00"))

//1970.01.01.00:00:00초 이후로 몇 초나 지났는지?
console.log(new Date(6000000))
console.log(new Date(0))
console.log(new Date(2010,2,2))
console.log(new Date(2010,2,2,18,35,50))

console.log(now.getFullYear(),"년")
console.log(now.getMonth(),"월")//(0~11)
console.log(now.getDate(),"일")//1~
console.log(now.getHours(),"시")//0자정, 12정오 (0~23)
console.log(now.getMinutes(),"분")//0 ~ 59
console.log(now.getSeconds(),"초")//0-59
console.log(now.getMilliseconds(),"밀리초")//0~999
console.log(now.getDay(),"요일")//0~6 숫자로 나옴(0:일요일, 6:토요일)

//실습문제 : 조건문을 사용해서 오늘이 주말인지 평일인지 출력
let checkdate = now.getDate() === 0||now.getDate===6?"평일":"주말"
console.log(checkdate)

//2. Math객체
console.log(Math.E)
console.log(Math.PI)
console.log(Math.SQRT2)//루트2의 값

console.log(Math.min(50,10,0,1,-5))//최솟값
console.log(Math.max(50,10,0,1,-5))//최대값
console.log(Math.random())//0보다 크거나 같거나 1보다 작은수 = 소숫점
console.log(Math.round(5.3))//소수를 정수로 반올림
console.log(Math.floor(5.3))//소수 정수로 버림
console.log(Math.ceil(5.3))//소수 정수로 올림

//Math.random 응용
// 0~9까지의 소수가 아닌 수를 뽑기
console.log("난수1:",Math.floor(Math.random()*10))
//1~10까지의 자연수 뽑기
console.log("난수2:",Math.floor(Math.random()*10)+1)
//20~22까자의 난수
//0<=x<1
//0<=x<3
//20<=x<23
console.log("난수3:",Math.floor(Math.random()*3)+20)

//3.object
const areaNum = {Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
    };
let key = Object.keys(areaNum)//object에서 key값만 배열로 반환
let value = Object.values(areaNum)//object에서 value값만 배열로 반환
console.log(key)
console.log(value)

	



