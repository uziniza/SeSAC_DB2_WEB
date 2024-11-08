//반복문
//1. for문
//for(변수선언과 초기화; 조건식(어디까지 증가,감소);증감식){반복실행코드}
//증감식 : i++, i=i+1, i+=1 (셋다 같음)

for(let i=0; i<10;i++){
    console.log('안녕',i)
}
for(let i=0;i<10;i=i+2){
    console.log(`안녕${i}`)
}
//1-5까지 출력
for(let i=1;i<=5;i=i+1){
    console.log(i)
}

for(let i=1;i<6;i=i+1){
    console.log(i)
}
for(let i=0;i<5;i++){
    console.log(i+1)
}
//5-1출력
for(let i=5;i>0;i--){
    console.log(i)
}
let fruits=['apple','banana','orange','mango']
console.log(fruits.length) //fruits.length-> 배열의 요소의 갯수를 출력해줌
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

//quiz : 1부터 n까지 더하기
let n=11
let sum=0;
//반복문을 사용해서 덧셈 만들기
for(let i=1; i<=n; i++){
    sum=sum+i
}
console.log(sum)

let arr=[99,98,85,77,100,50]
let sum2=0

for(let i=0; i<arr.length; i++){
    sum2+=arr[i]
}
console.log(sum2)

//1이상 20이하의 수 중에서 짝수만 더한값 출력하기
let sum3=0
for(let i=1;i<=20;i++){
    if(i%2===0){
        sum3+=i
    }
}
console.log(sum3)
let sum4=-0
for(let i=0; i<=20; i=i+2){
    sum4+=i
}
console.log(sum4)

let sum5=0
//홀수의 합 구하기
for(let i=0; i<10; i++){
    // if(i%2 === 1){sum5+=i} -> 아래와 같은 의미
    if(i%2 === 0){continue}; //다음반복으로 넘어가도록
    sum5+=i;
}
console.log(sum5) //0-10까지의 홀수 합, 25

//구구단 문제
for(let i=0; i<5; i++){//i안에 j가오게됨
    console.log("-------")
    console.log(i)
    for(let j=0; j<10; j++){
       console.log("j:",j)
    }
}

for(let i=2;i<10;i++){
    console.log(`------ ${i} 단`)
    for(let j=1; j<10; j++){
        console.log(i,'*',j,'=',i*j)
    }
}

/* 2. while문 */
let n1=1
while(n1<=5){
    console.log(n1)
    n1++
}

let n2=9
while(n2>=5){
    console.log(n2)
    n2--
}

//  while문을 이용해서 10부터 1까지 홀수만 출력
let num=10
while(num>=1){
    if(num%2===1){
        console.log(num)
    }
    num--
}

let a=0
while(true){
    console.log(a)
    a++
    if(a>10){
        break;//a가 10보다 커지면 루프에서 나와주세요.
    }
}

let a2=0
//confirm():사용자눈에 보여지는 화면 -> 확인(true)과 취소(false:를 누르는 순간 루프 멈춰짐) 버튼이 있음
while(confirm("계속 진행하시겠습니까?")){
    a2++
    alert(`${a2}번째 alert창`)
}

let i =1
let j =2
while(i<10){
    console.log(`-----${i}딘`)
    while(j<10){
        console.log(`${i}*${j}=${i*j}`)
        j++
    }i++
    j=1
}