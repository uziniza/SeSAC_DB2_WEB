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

app.get("/", (req, res) => {
  res.render("index");
});
const comments = [
  { id: 1, userid: "apple", date: "2024-10-23", comment: "안녕하세요" },
  { id: 2, userid: "banana", date: "2024-12-23", comment: "반가우요--;;" },
  {
    id: 3,
    userid: "cocoa",
    date: "2024-10-28",
    comment: "아무거나 쓸게요. . .",
  },
  { id: 4, userid: "donut", date: "2024-01-24", comment: "메롱임니다...@!!" },
];
app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentInfos: comments });
});
app.get("/comment/:id", (req, res) => {
  console.log(req.params);
  // console.log(req.query);
  const commentId = req.params.id;
  console.log("commentId", commentId); //1,2,3,4

  console.log(comments[commentId - 1]);

  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }

  res.render("comment", { commentInfos: comments[commentId - 1] });

  if (isNaN(commentId)) {
    res.render("404");
  }
});

//[404 error]
//반드시 맨 마지막 라우트로 선언
app.get("*", (req, res) => {
  res.render("404");
});
//3. 포트설정
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
