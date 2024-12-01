const express = require("express");
const app = express();
const PORT = 8080;
const userRouter = require("./routes/userRouter");

// 미들웨어 설정
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// 라우터 등록
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
