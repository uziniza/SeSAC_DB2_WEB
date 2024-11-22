const express = require('express');
const app = express();
const PORT = 8080;
//npm run dev 명령어를 통해 짧고 간단한 방식으로 서버를 실행할 수 있도록 하기 위해 사용 -> package.json scripts부분에 사용
/*미들웨어 설정 */
//ejs views 미들웨어 설정
app.set('view engine','ejs');//템플릿 엔진 설정
app.set('views','./views');//뷰파일 폴더 경로설정

//정적 파일 관리
// app.use('/static', express.static(__dirname+"/public"))//__dirname 현재경로로 

//body-parser 설정
app.use(express.urlencoded({extended:false}));
app.use(express.json());

/*요청 > 응답 */
app.get('/',function(req,res){
    res.render('index');
});

//form get 요청
app.get('/getForm',function(req,res){
    console.log(req.query);//객체 형태로 담겨있음
    res.render('result',{
        title : "GET",
        userInfo:req.query
    })
})


//form post 요청
app.post('/postForm',function(req,res){
    console.log(req.body);
    res.render('result',{
        title : "POST",
        userInfo:req.body
    })
    //send&render함께 사용 x
    
})
// form validation post 요청
app.post('/js-form-check',function(req,res){
    console.log(req.body)
    res.send("js유효성검사")
})

//실습문제
/* 1. /practice1으로 들어갔을때, practice1.ejs를 화면에 보여줘야함 
2. /practice2으로 들어갔을때, practice2.ejs를 화면에 보여줘야함 
practice1,practice2.ejs 각각 get,post를 통한 폼요청이 있고
결과페이지는 Practice_result.ejs를 공통으로 사용*/
app.get('/practice01',function(req,res){
    res.render('practice/practice01');
});

app.get('/practice02',function(req,res){
    res.render('practice/practice02');
});

app.get('/practice1form',function(req,res){
    console.log(req.query);
    res.render('practice/practice_result',{
        userinfo : req.query,
        addInfo: false //practice1에서는 적은 정보를 주고 있음
    })
})

app.post('/practice2form',function(req,res){
    console.log(req.body);
    res.render('practice/practice_result',{
        userinfo : req.body,
        addInfo: false
    })
})



app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`);
})