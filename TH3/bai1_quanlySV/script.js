const btnAddStudent =
  document.getElementById("btnAddStudent");

const btnClose =
  document.getElementById("btnClose");

const modal =
  document.getElementById("modal");

const studentForm =
  document.getElementById("studentForm");

const studentTableBody =
  document.getElementById("studentTableBody");

const message =
  document.getElementById("message");

const formTitle =
  document.getElementById("formTitle");

const totalStudents =
  document.getElementById("totalStudents");

const averageScore =
  document.getElementById("averageScore");

// INPUT

const studentId =
  document.getElementById("studentId");

const studentName =
  document.getElementById("studentName");

const studentBirth =
  document.getElementById("studentBirth");

const studentClass =
  document.getElementById("studentClass");

const studentScore =
  document.getElementById("studentScore");

const studentEmail =
  document.getElementById("studentEmail");

const errorStudentId =
  document.getElementById("errorStudentId");

const errorStudentName =
  document.getElementById("errorStudentName");

const errorStudentBirth =
  document.getElementById("errorStudentBirth");

const errorStudentClass =
  document.getElementById("errorStudentClass");

const errorStudentScore =
  document.getElementById("errorStudentScore");

const errorStudentEmail =
  document.getElementById("errorStudentEmail");

// ===== DỮ LIỆU MẶC ĐỊNH =====

const defaultStudents = [
  {
    id: "SV123456",
    name: "Nguyễn Văn A",
    birth: "2000-01-15",
    className: "A",
    score: 8.5,
    email: "nguyenvana@gmail.com"
  },

  {
    id: "SV234567",
    name: "Trần Thị B",
    birth: "1999-05-20",
    className: "B",
    score: 9,
    email: "tranthib@gmail.com"
  },

  {
    id: "SV345678",
    name: "Lê Văn C",
    birth: "2001-03-10",
    className: "C",
    score: 7.8,
    email: "levanc@gmail.com"
  },

  {
    id: "SV456789",
    name: "Phạm Thị D",
    birth: "2000-07-25",
    className: "D",
    score: 8.2,
    email: "phamthid@gmail.com"
  },

  {
    id: "SV567890",
    name: "Hoàng Văn E",
    birth: "1998-12-05",
    className: "A",
    score: 9.5,
    email: "hoangvane@gmail.com"
  }
];

// ===== MẢNG DỮ LIỆU =====

let students =
  JSON.parse(localStorage.getItem("students"))
  || defaultStudents;

// BIẾN KIỂM TRA ĐANG SỬA HAY THÊM

let editIndex = -1;

// ===== RENDER DANH SÁCH =====

function renderStudents() {

  studentTableBody.innerHTML = "";

  // nếu không có dữ liệu

  if (students.length === 0) {

    studentTableBody.innerHTML = `
      <tr>
        <td colspan="7">
          Chưa có sinh viên nào
        </td>
      </tr>
    `;

    updateStatistics();

    return;
  }

  students.forEach(function(student, index) {

    const row = `
      <tr>

        <td>${student.id}</td>

        <td>${student.name}</td>

        <td>${student.birth}</td>

        <td>${student.className}</td>

        <td>${student.score}</td>

        <td>${student.email}</td>

        <td>

          <button
            class="btn-edit"
            data-index="${index}"
          >
            Sửa
          </button>

          <button
            class="btn-delete"
            data-index="${index}"
          >
            Xóa
          </button>

        </td>

      </tr>
    `;

    studentTableBody.innerHTML += row;

  });

  updateStatistics();

}

// ===== THỐNG KÊ =====

function updateStatistics() {

  totalStudents.innerText =
    students.length;

  if (students.length === 0) {

    averageScore.innerText = 0;

    return;
  }

  let total = 0;

  students.forEach(function(student) {

    total += Number(student.score);

  });

  const avg =
    total / students.length;

  averageScore.innerText =
    avg.toFixed(2);

}

// ===== MỞ POPUP =====

function openModal() {

  modal.classList.remove("hidden");

}

// ===== ĐÓNG POPUP =====

function closeModal() {

  modal.classList.add("hidden");

  resetForm();

}

// ===== RESET FORM =====

function resetForm() {

  studentForm.reset();

  editIndex = -1;

  formTitle.innerText =
    "Thêm sinh viên";

  studentId.disabled = false;

  clearErrors();
}
// ===== XÓA LỖI =====
function clearErrors() {

  errorStudentId.innerText = "";
  errorStudentName.innerText = "";
  errorStudentBirth.innerText = "";
  errorStudentClass.innerText = "";
  errorStudentScore.innerText = "";
  errorStudentEmail.innerText = "";

  studentId.classList.remove("input-error");
  studentName.classList.remove("input-error");
  studentBirth.classList.remove("input-error");
  studentClass.classList.remove("input-error");
  studentScore.classList.remove("input-error");
  studentEmail.classList.remove("input-error");

}

// ===== VALIDATE FORM =====
function validateForm() {

  clearErrors();

  let isValid = true;

  const idValue =
    studentId.value.trim();

  const nameValue =
    studentName.value.trim();

  const birthValue =
    studentBirth.value;

  const classValue =
    studentClass.value.trim();

  const scoreValue =
    studentScore.value;

  const emailValue =
    studentEmail.value.trim();

  const idPattern =
    /^SV[0-9]{6}$/;

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (idValue === "") {

    errorStudentId.innerText =
      "Mã sinh viên không được để trống";

    studentId.classList.add("input-error");

    isValid = false;

  } else if (!idPattern.test(idValue)) {

    errorStudentId.innerText =
      "Mã sinh viên phải có dạng SV123456";

    studentId.classList.add("input-error");

    isValid = false;

  }

  if (nameValue === "") {

    errorStudentName.innerText =
      "Họ tên không được để trống";

    studentName.classList.add("input-error");

    isValid = false;

  } else if (nameValue.length < 3) {

    errorStudentName.innerText =
      "Họ tên phải có ít nhất 3 ký tự";

    studentName.classList.add("input-error");

    isValid = false;

  }

  if (birthValue === "") {

    errorStudentBirth.innerText =
      "Ngày sinh không được để trống";

    studentBirth.classList.add("input-error");

    isValid = false;

  }

  if (classValue === "") {

    errorStudentClass.innerText =
      "Lớp không được để trống";

    studentClass.classList.add("input-error");

    isValid = false;

  }

  if (scoreValue === "") {

    errorStudentScore.innerText =
      "Điểm không được để trống";

    studentScore.classList.add("input-error");

    isValid = false;

  } else if (isNaN(scoreValue)) {

    errorStudentScore.innerText =
      "Điểm phải là số";

    studentScore.classList.add("input-error");

    isValid = false;

  } else if (
    Number(scoreValue) < 0 ||
    Number(scoreValue) > 10
  ) {

    errorStudentScore.innerText =
      "Điểm phải từ 0 đến 10";

    studentScore.classList.add("input-error");

    isValid = false;

  }

  if (emailValue === "") {

    errorStudentEmail.innerText =
      "Email không được để trống";

    studentEmail.classList.add("input-error");

    isValid = false;

  } else if (!emailPattern.test(emailValue)) {

    errorStudentEmail.innerText =
      "Email không đúng định dạng";

    studentEmail.classList.add("input-error");

    isValid = false;

  }

  return isValid;

}

// ===== CLICK MỞ FORM =====

btnAddStudent.addEventListener(
  "click",
  function() {

    resetForm();

    openModal();

  }
);

// ===== CLICK ĐÓNG =====

btnClose.addEventListener(
  "click",
  function() {

    closeModal();

  }
);

// ===== SUBMIT FORM =====

studentForm.addEventListener(
  "submit",
  function(event) {

    event.preventDefault();
    if (!validateForm()) {
      return;
    }
 
    const student = {

      id: studentId.value,

      name: studentName.value,

      birth: studentBirth.value,

      className: studentClass.value,

      score: studentScore.value,

      email: studentEmail.value

    };

    // THÊM

    if (editIndex === -1) {

      students.push(student);

      showMessage(
        "Thêm sinh viên thành công"
      );

    }

    // SỬA

    else {

      students[editIndex] = student;

      showMessage(
        "Cập nhật sinh viên thành công"
      );

    }

    saveStudents();

    renderStudents();

    closeModal();

  }
);

// ===== LƯU LOCAL STORAGE =====

function saveStudents() {

  localStorage.setItem(
    "students",
    JSON.stringify(students)
  );

}

// ===== HIỂN THỊ THÔNG BÁO =====

function showMessage(text) {

  message.innerText = text;

  setTimeout(function() {

    message.innerText = "";

  }, 2000);

}

// ===== CLICK SỬA XÓA =====

studentTableBody.addEventListener(
  "click",
  function(event) {

    const clicked =
      event.target;

    // SỬA

    if (
      clicked.classList.contains("btn-edit")
    ) {

      const index =
        clicked.getAttribute("data-index");

      editStudent(index);

    }

    // XÓA

    if (
      clicked.classList.contains("btn-delete")
    ) {

      const index =
        clicked.getAttribute("data-index");

      deleteStudent(index);

    }

  }
);

// ===== SỬA =====

function editStudent(index) {

  const student =
    students[index];

  studentId.value =
    student.id;

  studentName.value =
    student.name;

  studentBirth.value =
    student.birth;

  studentClass.value =
    student.className;

  studentScore.value =
    student.score;

  studentEmail.value =
    student.email;

  editIndex = index;

  formTitle.innerText =
    "Cập nhật sinh viên";

  studentId.disabled = true;

  openModal();

}

// ===== XÓA =====

function deleteStudent(index) {

  const confirmDelete =
    confirm(
      "Bạn có chắc muốn xóa?"
    );

  if (confirmDelete) {

    students.splice(index, 1);

    saveStudents();

    renderStudents();

    showMessage(
      "Xóa thành công"
    );

  }

}

// ===== HIỂN THỊ KHI CHẠY =====

renderStudents();