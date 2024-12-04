const { name } = require("ejs");
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
/* /visitor/:id GET*/
exports.getVisitor = (req, res) => {
  console.log(req.params); // {id:'1'}
  console.log(req.params.id); // '2'
  Visitor.getVisitor(req.params.id, (result) => {
    console.log("한 개의 데이터 Cvisitor.js", result);
    res.send(result);
  });
};

/* /visitor POST, 등록*/
exports.postVisitor = (req, res) => {
  console.log("req.body", req.body);
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js", result);
    res.send({ id: result, comment: req.body.comment, name: req.body.name });
  });
};

/* /visitor DELETE, 삭제 */
exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  Visitor.deleteVisitor(req.body.id, () => {
    res.send(req.body.id + "번 id 삭제완료");
  });
};
/* /visitor PATCH, 수정 */
exports.patchVisitor = (req, res) => {
  console.log(req.body);
  Visitor.patchVisitor(req.body, () => {
    res.send("수정완료");
  });
};
