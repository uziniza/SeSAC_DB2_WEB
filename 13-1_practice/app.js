const express = require("express");
const app = express();
const PORT = 8080;

// 미들웨어 설정
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");
// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
  const realId = "banana";
  const realPw = "4321";
});
const realId = "banana";
const realPw = "4321";
app.post("/login", (req, res) => {
  console.log(req.body);
  const { userId, userPw } = req.body;
  if (userId === realId && userPw === realPw) {
    res.send({ isSuccess: true, userId: userId });
  } else {
    res.send({ isSuccess: false });
  }
});
//3. 포트설정
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
