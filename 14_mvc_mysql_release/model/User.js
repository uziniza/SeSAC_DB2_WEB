// TODO: DB(mysql) 연결
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// TODO: 모델 코드
exports.loginpost = (data, cb) => {
  conn.query(
    `INSERT INTO user VALUE (null,"${data.id}", "${data.pw}","${data.name}")`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows);
      cb(rows);
    }
  );
};

exports.pagepost = (id, cb) => {
  conn.query(`SELECT * FROM user WHERE id="${id}"`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows);
    cb(rows[0]);
  });
};
