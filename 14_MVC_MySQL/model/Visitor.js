const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "sesac",
  password: "1234",
  database: "sesac",
});
exports.getVisitors = (cb) => {
  // [DB연결 전]
  //   return [
  //     { id: 1, name: "홍길동", comment: "내가 왔다!_!" },
  //     { id: 2, name: "이찬혁", comment: "으라차차ㅡㅅㅡ" },
  //   ];
  // [DB연결 후]
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err; // 에러처리
    }

    cb(rows);
  });
};
