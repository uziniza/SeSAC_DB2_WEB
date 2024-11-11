// jQurey 요소 선택 방법
//$("css선택자")
console.log($('#div1'))

//여러요소에 한번에 적용됨 
$("button").css("color","red")

function submitjs(){
    //<div> id="div1"</div>
    document.getElementById('div1').innerText="방가"
    document.getElementById('div1').setAttribute('style','border: 2px solid red')
}
function submitjq(){
    $(div1).text("hello jquery")
    $(div1).css("border",'3px dotted blue')
}
