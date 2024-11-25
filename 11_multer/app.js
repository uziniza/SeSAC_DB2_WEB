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
// 4. multer 설정
const upload = multer({
  dest: "uploads/", //어디에 저장될지?
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (req, file, done) {
      done(null, "uploads/"); //어디에 저장될지?->경로설정
      //업로드 파일을 직접 만들어주어야함(미리 만들어져야 오류가 안남)
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름.확장자)-> 확장자만 리턴해주는 함수
      const extension = path.extname(file.originalname); //.png,.webp,...
      //path.basename(파일이름.확장자, 확장자) >> 파일 이름만 리턴
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),

  limits: { fileSize: 5 * 1024 * 1024 }, //5mb
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.body); //파일정보는 여기에 없음
  console.log(req.file);
  //  file = {
  //     fieldname: 'userfile',// 폼내부에 정의한 name 값
  //     originalname: '69e894a9166af886b161262b50f5195c.jpg',//원본 파일명
  //     encoding: '7bit', //파일의 인코딩 타입
  //     mimetype: 'image/jpeg', //파일타입
  //     destination: 'uploads/', //파일저장경로(멀터설정시 키의 값으로 저장한 값)
  //     filename: '10c03a330d6abe616df33e51d07b729b', //저장된 파일명
  //     path: 'uploads/10c03a330d6abe616df33e51d07b729b', //업로드 파일 전체 경로
  //     size: 41073 //파일 크기(byte)
  //   }
  res.send("응답 완료");
});
//하나의 input에 여러개의 파일
app.post("/uploads/array", uploadDetail.array("mulifiles"), (req, res) => {
  console.log(req.body);
  //   console.log(req.file); = undefined
  console.log(req.files);
  res.send("업로드 완료!!-3-");
});
//2. 포트열어줌
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
