const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");
// 2. body-parser설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//api
app.get("/", (req, res) => {
  res.render("index");
});
//ajax Get
app.get("/ajax", (req, res) => {
  console.log(req.qurey);
  res.send(req.qurey);
});
//ajax Post
//body-parser 설정을 해야 req.body를 읽을 수 있음
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//axios Get
app.get("/axios", (req, res) => {
  console.log(req.qurey);
  res.send(req.qurey);
});

//axios POST
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//fetch요청 Get
app.get("/fetch", (req, res) => {
  console.log(req.qurey);
  // res.send("응답완료"); : 클라이언트에서 .text()사용
  res.send(res.qurey); //객체를 보내기 때문에 클라이언트에서 .json() 사용
});

//fetch요청 post
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get("/api", (req, res) => {
  res.render("api");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
