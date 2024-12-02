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
// 3. 라우터 설정
// const indexRouter = require("./routes");
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

//404 설정
app.get("*", (req, res) => {
  res.send("<h2>Page Not Found</h2>");
});

//4. 포트설정
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
