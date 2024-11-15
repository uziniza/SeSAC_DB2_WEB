//1-1. 배열의 구조분해 문법
const arr1 = ['tomato', 'kiwi', 'orange']
console.log(arr1)
const tomato = arr1[0]
const[a,b,c]=arr1
console.log(tomato)
console.log(a)

const arr2 = ['red', 'orange','pink','yellow']
const [red, orange, , yellow] = arr2 //저장하고 싶지 않은 것은 공백으로 남겨두면됨
console.log(red, orange, yellow)

const [a1,b1]=arr2
console.log(a1,b1) //맨끝에 있는 요소들은 생략가능
const [v1,v2,v3,v4,v5] = arr2
console.log(v1,v2,v3,v4,v5) //v5 -> 없는 요소는 undifined

//*변수교환
let value1 = "second"
let value2 = "first"

let temp; //값을 저장하기 위한 임시변수
temp = value1
value1 = value2 //value1= first, value2= first
value2 = temp //value1= first, value2= second
console.log(value1,value2)

value1 = "second";
value2 = "first"
console.log(value1,value2)
// [value2, value1] = [value1, value2]
// console.log(value1,value2)

//1-2. 객체 구조분해 할당 문법
const obj = {
    title:'제목',
    content:'내용',
    num: 10
}
//값에 접근 -> 점, 대괄호 접근법
console.log(obj.title)
console.log(obj['title'])

const{num, title, content}=obj
console.log(title)
console.log(content)
console.log(num)

const{num:n1, title:t1, content:c1}=obj//생략하고 싶은게 있으면 그냥 안쓰면됨
console.log(n1,t1,c1)

//2.spread & rest ...
//2-1.배열
const arr3=[1,2,3,4,5]
const arr4=['a','b','c']
console.log(arr3)

for(let el of arr3){
    console.log(el)
}

console.log(...arr3)
console.log(...arr4)
// arr3, arr4 합치기 >> 1차원 배열로
//1) concat
const arr5 = arr3.concat(arr4)
console.log(arr5)
//2) spread(그냥 콤마만 사용하면 2차원 배열)
const arr6= [...arr3,...arr4]
console.log(arr6)

//2-2. string
const str = 'uzinhi'
let strToArr = [...str]
let strToArr2 = str.split('')
//string -> array >> split()
//array -> string >> join()
console.log(strToArr)
console.log(strToArr2)

//2-3. object
const obj1 = {
    name: "uzin",
    height:"165",
    friend: null,
    married: false,

}
let obj2={
    name: "유진",
    like:['sleeping', 'programming'],
    greeting: function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요..
            키는 ${this.height}입니다..`)
    }
}
obj2.greeting()
let me={...obj1,...obj2}
me.greeting()

me={
    ...obj1,
    ...obj2,
    gender:'female'
}
console.log(me)

//...rest
function test(a,b){
    console.log(a,b)
}
console.log('--------')
test(1,2)
test('안녕')

function test2(...val){
    console.log(val)
    const[a,b,c, ...rest]=val
    console.log(a)
    console.log(b)
    console.log(c)
    console.log('rest', rest)
}
test2(2,3,4,5,6,7,8)

//퀴즈
// 매개변수가 몇 개가 들어오든 합해서 반환하는 함수
function addNumber(...val2){
    console.log(val2)
    let sum = 0
    for(let i of val2){
        sum+=i
    }
    return sum;
}
let sumResult = addNumber(1,2,3,5,6,100)
console.log("합산결과 :" + sumResult)