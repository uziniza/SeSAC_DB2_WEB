console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

//click():클릭했을 때
//jQurey에서는 event이름으로 메서드가 존재함
//요소.click(function(){}), 요소.hover(function(){}-마우스 올라갔을때,function(){}-마우스 빠졌을때)
$('.p-msg').click(function(){
    $('.p-msg').css('color','red')
})
$('.num').click(function(){
    // $('.num').css('color','blue')
    // $(this).css('color','green')//자기자신을 가르킴
})

// $('.num').on('click', function(){
//     $(this).css('color','mint')
// })

let nums = document.querySelector(".num")
for(let i=0; i<nums.length; i++){
        nums[i].addEventListner("click",function(){
            this.style.color="mint"
        })
    }

//hover() :마우스를 올렸을때, 마우스를 떼었을 때 정의
$('.div-hover').hover(function(){
    $(this).addClass('hover')
},
function(){
    $(this).removeClass('hover')
})

//scroll()
$(window).scroll(function(){
    console.log('scrolling...')
})

//keyboard event
// input.addEventListener('keydown',function(event){
//     // console.log(event)

//     //방향키 아래, 위, 왼쪽, 오른쪽
//     console.log(event.code)
//     console.log(event.key)
//     // console.log(event,keyCode)
//     if(event.code==="ArrowLeft"){
//         console.log("왼쪽 방향키 눌렸습니다.")
//     }else if(event.code==="ArrowRight"){
//         console.log("오른쪽 방향키 눌렸습니다.")
//     }else if(event.code==="ArrowUp"){
//         console.log("위쪽 방향키 눌렸습니다.")
//     }else if(event.code==="ArrowDown"){
//          console.log("아래쪽 방향키 눌렸습니다.")
//     }else{console.log("방향키가 아닌 키보드 누르는중...")}
// })

$('.input-key').keydown(function(e){
    if(e.code==="ArrowLeft"){
                console.log("왼쪽 방향키 눌렸습니다.")
            }else if(e.code==="ArrowRight"){
                console.log("오른쪽 방향키 눌렸습니다.")
            }else if(e.code==="ArrowUp"){
                console.log("위쪽 방향키 눌렸습니다.")
            }else if(e.code==="ArrowDown"){
                 console.log("아래쪽 방향키 눌렸습니다.")
            }else{console.log("방향키가 아닌 키보드 누르는중...")}
})

$('#todo-form').submit(function(e){
    e.preventDefault();
    const inputValue = $('input[name="todo"]').val()
    $('.todos').append(`<li>${inputValue}</li>`)
    $('input[name="todo"]').val("")

})