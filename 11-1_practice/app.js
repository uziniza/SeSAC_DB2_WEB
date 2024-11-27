const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

// 미들웨어 설정
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");
// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 3. static 폴더설정
app.use("/static", express.static(__dirname + "/public")); //__dirname
app.use("/uploads", express.static(__dirname + "/uploads")); //__dirname
// 4. multer 설정
const upload = multer({
  dest: "uploads/", //어디에 저장될지?
});

// EJS 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 정적 파일 서비스
app.use(express.static(path.join(__dirname, "public")));

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, done) => {
    done(null, "uploads/");
  },
  filename: (req, file, done) => {
    done(null, `${Date.now()}_${file.originalname}`);
  },
});
const uploadDetail = multer({ storage });

app.get("/", (req, res) => {
  res.render("index");
});

// 회원가입 데이터 처리
app.post("/upload", upload.single("fileUpload"), (req, res) => {
  const { id, pw, name, age } = req.body;
  const file = req.file ? `/uploads/${req.file.filename}` : null;

  res.render("result", { id, pw, name, age, file });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
