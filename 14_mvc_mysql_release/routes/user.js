// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

//메인 get
router.get("/user", controller.main);

//회원가입 get
router.get("/user/signup", controller.loginget);

//새로운 회원 생성 post
router.post("/user/signup", controller.loginpost);

//로그인 페이지 보여주기
router.get("/user/signin", controller.pageget);

//로그인 회원 조회
router.post("/user/signin", controller.pagepost);

// //로그인 성공시 회원 정보 수정 페이지 접속
// router.post("/user/profile", controller.postprofile);

// //회원 정보 수정
// router.patch("/user/profile/edit", controller.patchinfo);

// //회원 삭제
// router.delete("/user/profile/delete", controller.deleteinfo);

module.exports = router;
