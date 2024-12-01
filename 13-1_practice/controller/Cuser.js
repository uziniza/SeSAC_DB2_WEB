const User = require("../models/User");

// 로그인 페이지 렌더링
exports.getLoginPage = (req, res) => {
  res.render("index");
};

// 로그인 처리
exports.login = (req, res) => {
  const { userId, userPw } = req.body;
  const { realId, realPw } = User;

  if (userId === realId && userPw === realPw) {
    res.send({ isSuccess: true, userId: userId });
  } else {
    res.send({ isSuccess: false });
  }
};
