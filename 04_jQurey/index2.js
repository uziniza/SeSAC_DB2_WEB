//input value 설정 및 가져오기
//val()
function getvalue(){
    let value = $('input').val('')
    alert('value')
}
function setvalue(){
    $('input').val('다른글자로 설정!')
}
//css()
function changeCssJs(){
    let span = document.querySelector('span')
    span.style = 'font-size:20px; color:red'
}
function changeCssJQ(){
    $('span').css('font-size','40px')
    $('span').css('color','blue')
}
//attr()
function changeAttrJs(){
    let a = document.querySelector('a')
    a.setAttribute("href","http://www.naver.com")
}
function changeAttrJQ(){
    $('a').attr("href","https://www.daum.net")
}

//text()
function changetextJs(){
    let p = document.querySelector('.p-text')
    p.innertext='js로 바꾼 내용입니다'
}
function changetextJQ(){
    $('.p-text').text('jq로 바꾼 내용입니다.')
}
//html()
function changehtmlJs(){
    let p = document.querySelector('.p-html')
    p.innerHTML='<em>javascript</em>'
}
function changehtmlJQ(){
    $('.p-html').html('<h2>jQurey</h2>')
}
//append()
function appendJs(){
    let ul=document.querySelector('.colors')
    let li= document.createElement('li')
    li.innerText="마지막 자식으로 추가된 li(js)"
    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li(jq)</li>')
}
//prepend
function prependJs(){
    let ul= document.querySelector('.colors')
    let li= document.createElement('li')
    li.innerText="맨 앞 자식으로 추가된 li(js)"
    ul.prepend(li)
}
function prependJQ(){
    $('.colors').prepend('<li>맨 앞 자식으로 추가된 li(jq)</li>')
}
//before
function beforeJs(){
    let green=document.querySelector('.green')
    let li=document.createElement('li')
    li.innerText="js로 before사용하기"
    green.before(li)
}
function beforeJQ(){
    $('.green').before('<li>before jq로 사용하기</li>')
}
//after
function afterJs(){
    let orange=document.querySelector('.orange')
    let li=document.createElement('li')
    li.innerText="js로 after사용하기"
    orange.after(li)
}
function afterJQ(){
    $('.orange').after('<li>after jq로 사용하기</li>')
}
//remove()
function removejs(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}
function removejq(){
    $('.li2').remove()
}

//empty()
function emptyjs(){
    let nums = document.querySelector('ul.nums')
    nums.innerHTML=''
}
function emptyjq(){
    $('ul.nums').empty()
}
//요소 탐색
function findparent(){
    console.log($('.child2').parent())
}
function findparents(){
    console.log($('.child2').parents())
}
function findnext(){
    console.log($('.child2').next())
}
function findprev(){
    console.log($('.child2').prev())
}
function findchildren(){
    console.log($('.parent').children())
}

//클래스 조작
function addclass(){
    $('#hi').addclass('fs-50')
}
function removeclass(){
    // $('#hi').removeclass('color-blue')
    $('#hi').removeclass() //클래스 모두 제거

}
function hasclass(){
    console.log($('#hi').hasclass('fs-50'))
}
function toggleclass(){
    $('#hi').toggleclass('bg-pink')
}
