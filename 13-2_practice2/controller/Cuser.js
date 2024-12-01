const User = require("../models/User");

exports.getLoginPage = (req, res) => {
  res.render("index");
};

exports.login = (req, res) => {
  const Info = User.user.split("\n");
  for (let i = 0; i < Info.length; i++) {
    const userInfo = Info[i].split("//");
    if (userInfo[0] === req.body.userid && userInfo[1] === req.body.userpw) {
      return res.send({ name: userInfo[2], success: true });
    }
  }
  res.send({ success: false });
};
