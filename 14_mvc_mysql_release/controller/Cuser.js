// TODO: 컨트롤러 코드
const { name } = require("ejs");
const User = require("../model/User");

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

exports.loginget = (req, res) => {
  res.render("signup");
};

exports.pageget = (req, res) => {
  res.render("signin");
};

exports.loginpost = (req, res) => {
  console.log("req.body", req.body);
  User.loginpost(req.body, (result) => {
    console.log("Cuser", result);
    res.send({
      id: req.body.userid,
      comment: req.body.comment,
      name: req.body.name,
    });
  });
};

exports.pagepost = (req, res) => {
  console.log("req.body", req.body);
  const { id, pw } = req.body;
  User.pagepost(id, (result) => {
    console.log(result);
    if (result && result.pw === pw) {
      return res.send({ success: true });
    } else {
      return res.send({ success: false });
    }
  });
};
