/**
 * 1. if
 * if(조건식){
 * 조건식이 참일 때 실행할 문장}
 */
if(5>3){
    console.log('조건이 참이에요')
}

// let number = Number(prompt('숫자를 입력해주세요.'))
// 형변화를 해줘서 밑에 10과 data type을 같게 만들어줌
let number = 100
if(number>10){
    console.log('입력받은 수가 10보다 큽니다.')
}else{
    console.log('입력받은 수가 10과 같거나 작습니다.')
}

if (number>10){
    console.log('입력받은 수가 10보다 큽니다.')
}else if(number===10){
    console.log('입력받은 수가 10입니다.')
    // 프롬프트로 넘어오는 숫자는 스트링 타입임으로 다르다고 나옴
}else{
    console.log('입력받은 수가 10과 작습니다.')
}
// 90점 이상은 a
// 80점 이상은 b
// 70점 이상은 c
// 그아래는 모두 f
//90<number<100 -> 이렇게 쓰면 안됨 밑처럼 사용
if(number>=90 && number<=100){
    console.log('A')
}else if(number>=80){
    console.log('B')
}else if(number>=70){
    console.log('C')
}else{
    console.log('F')
}

//조건문 중첩
let userId = 'user01'
let userPw = '1234qwer'

function loginUser(){
    let promptId = prompt('아이디를 입력해주세요')
    let promptPw = prompt("비밀번호를 입력해주세요")
    
    if(userId ===promptId){
        if(userPw === promptPw){
            console.log("로그인 성공")
            alert('안녕하세요 ..'+userId+"님")
        }else{
            alert("비밀번호가 틀렸습니다.")
        }
    }else if(promptId===""){
        alert('아이디를 입력하지 않았습니다.')
    }else{ 
        alert('아이디가 틀렸어요.')
    }
}
// loginUser()


// 2.switch문
// switch(조건이아닌 값){case에는 값에 대한 경우가 들어감 ex. a가 3일때(case 3:)}
// let a = Number(prompt('숫자를 입력해주세요.')) 
let a= 5
switch(a){
    case 3:
        console.log("a가 3입니다.")
        break//break: 조건문이 탈출할 수 있도록 함(밑에있는 case까지 나타나게 함)
    case 4:
        console.log("a가 4입니다.")
        break

    case 5:
    case 6:
        console.log("a가 5 또는 6입니다.")
        break
    default: 
        console.log("a가 어떤 숫자인지 모르겠어요.")
        break

}
//3. 삼항연산자: if else를 간단하게 사용
let num= 5
if(num%2===1){
    console.log("홀수")
}else{
    console.log("짝수")
}
//조건? 참일때 : 거짓일때
num%2===1?console.log("홀수"):console.log("짝수")
let fruit='banana'
const value = fruit==="banana"?"yellow":"red"
console.log(value)

let value2;
if (fruit==="banana"){
    value2="yellow"
}else{
    value2="red"
}
console.log(value2)