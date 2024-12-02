const User = require("../model/User");

// 로그인 페이지 렌더링
exports.main = (req, res) => {
  res.render("index");
};

//post '/login' 로그인 함수를 만들어서 라우터에서 써주는
exports.login = (req, res) => {
  // console.log(req.body); //{ userId: 'feee', userPw: 'feee' }
  // console.log("model>", User.getUserInfo()); //model 에서 사용하는 함수model> { realId: 'banana', realPw: '4321' }
  //객체 구조 분해 추가
  const { realId, realPw } = User.getUserInfo(); //{ realId: 'banana', realPw: '4321' }
  // console.log("==");
  // console.log(realId, realPw);
  const { userId, userPw } = req.body;
  //사용자가 입력하는 req.body와 model에 있는 real 아이디가 같아야함 = 로그인 성공
  if (realId === userId && realPw === userPw) {
    res.send({ userInfo: req.body, isSuccess: true });
    //로그인 성공했을때 userInfo를 보내줌
  } else {
    res.send({ isSuccess: false });
  }
};
//post '/login2'
exports.login2 = (req, res) => {
  // console.log(User.user);
  const users = []; //[{ realId, realPw, name }];
  const userIds = []; //["apple","banana","cocoa"]
  const userData = User.user.split("\n");
  userData.forEach((user) => {
    // user="banana//4321//바나나나나"
    const userInfoArr = user.split("//"); //[banana,4321,바나나나나]
    const userObj = {
      realId: userInfoArr[0],
      realPw: userInfoArr[1],
      name: userInfoArr[2],
    };
    users.push(userObj);
    userIds.push(userInfoArr[0]);
  });
  // console.log(users);
  // console.log(userIds);
  // console.log(userData);

  //요청 정보를 바탕으로 회원이 맞는지 확인 !!
  //idx>=0 -> userIds에 있는 회원
  //idx=-1 -> userIds에 없는 회원
  const idx = userIds.indexOf(req.body.userId);
  if (idx >= 0) {
    console.log("아이디가 있는 회원");
    if (req.body.userPw === users[idx].realPw) {
      console.log("비밀번호 일치");
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log("비밀번호 불일치");
      res.send({ isSuccess: false });
    }
  } else {
    console.log("아이디가 없는 회원");
    res.send({ isSuccess: false });
  }
  res.send("완");
};
