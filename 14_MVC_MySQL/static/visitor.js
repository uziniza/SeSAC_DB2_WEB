const tbody = document.querySelector("tbody");
//방명록 "등록"
//POST /visitor
function createVisitor() {
  const form = document.forms["visitor-form"];

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요! ㅡㅅㅡ");
    return;
  }
  //테이블 생성시 name 컬럼을 varchar(10)으로 설정해두어서
  //프론트에서 유효성 검사를 하고 데이터 전송
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요 TㅅT");
    return;
  }

  axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      const { id, comment, name } = res.data;
      const newHtml = `
      <tr id="tr_${id}">
          <td>${id}</td>
          <td>${name}</td>
          <td>${comment}</td>
          <td>
            <button onclick="editVisitor('${id}')">수정</button>
          </td>
          <td>
            <button onclick="deleteVisitor(this, '${id}')">
              삭제
            </button>
          </td>
        </tr>`;
      // tbody.append(newHtml): 문자열 그대로 붙음
      tbody.insertAdjacentHTML("beforeend", newHtml);
      // 문자열을 특정요소의 맨마지막으로 HTML추가
      //특정요소에 html 추가 (innerHtml과 비슷한데 innerhtml은 모두 지워지고 추가한 것만 남음)
      form.reset();
    })
    .catch((err) => console.error(err));
}

//방명록 "삭제"
//DELETE /visitor
function deleteVisitor(btn, id) {
  console.log(id);
  console.log(btn); //태그
  axios({
    method: "delete",
    url: "/visitor",
    data: {
      id: id,
    },
  })
    .then((text) => {
      console.log(text.data);
      //   btn.parentElement.parentElement.remove();
      btn.closest(`#tr_${id}`).remove(); //가장 가까운 조상요소 선택 후 삭제
    })
    .catch((err) => console.error(err));
}

//방명록 "수정"
//GET /visitor/:id 하나의 데이터 조회
// 1) 수정 버튼을 누르면 수정을 위한 입력창으로 변환
function editVisitor(id) {
  const form = document.forms["visitor-form"];
  axios({
    method: "get",
    url: `/visitor/${id}`,
  })
    .then((res) => {
      console.log(res.data);
      const { name, comment, id } = res.data;
      form.name.value = name;
      form.comment.value = comment;

      const btnContainer = document.getElementById("btn-group");
      const html = `
    <button type="button" onclick="editDo(${id})">수정하기</button>
    <button type="button" onclick="editCancle()">수정취소</button>
    `;
      btnContainer.innerHTML = html;
    })
    .catch((err) => {
      console.error(err);
    });
}
// 2-1) 실제로 수정 데이터를 요청
//PATCH /visitor
function editDo(id) {
  const form = document.forms["visitor-form"];
  //유효성 검증
  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록을 모두 기입해주세요! ㅡㅅㅡ");
    return;
  }
  //테이블 생성시 name 컬럼을 varchar(10)으로 설정해두어서
  //프론트에서 유효성 검사를 하고 데이터 전송
  if (form.name.value.length > 10) {
    alert("이름은 10글자 미만으로 작성해주세요 TㅅT");
    return;
  }
  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      comment: form.comment.value,
      name: form.name.value,
    },
  })
    .then((res) => {
      console.log(res.data);
      const { id, name, comment } = res.data;
      const tr = document.querySelector(`#tr_${id}`);
      console.log(tr.children);
      const children = tr.children; //배열 형태로 들어옴[td,td,td,td,td]
      console.log(children);
      children[1].textContent = form.name.value; //name
      children[2].textContent = form.comment.value; //comment

      editCancle();
    })
    .catch((err) => console.error(err));
}
// 2-2)수정 취소
function editCancle() {
  //(1) form 안에 있는 input 초기화
  const form = document.forms["visitor-form"];
  form.reset();
  //(2) 등록 버튼 보이도록
  const btnContainer = document.getElementById("btn-group");
  btnContainer.innerHTML = `<button type="button" onclick="createVisitor()">방명록 등록</button>`;
}
// 3) 방명록등록 버튼을 수정하기 버튼으로 변환
// 4) 수정하기 버튼을 누르면 바로 반영이 되야함
