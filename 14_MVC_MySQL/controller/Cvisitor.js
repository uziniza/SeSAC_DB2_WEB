const Visitor = require("../model/Visitor");
// console.log(Visitor.getVisitors());
// [
//     { id: 1, name: '홍길동', comment: '내가왔다' },
//     { id: 2, name: '이찬혁', comment: '으라차차' }
//   ]

/* / GET */
exports.main = (req, res) => {
  res.render("index");
};

/* /visitors GET */
exports.getVisitors = (req, res) => {
  console.log("here");
  //[DB연결전]
  //   console.log(Visitor.getVisitors());
  //   res.render("visitors", { data: Visitor.getVisitors() });
  //[DB연결후]
  Visitor.getVisitors((result) => {
    console.log("전체목록 Cvisitor.js", result);
    res.render("visitors", { data: result });
  }); //result = cb(rows)
};
