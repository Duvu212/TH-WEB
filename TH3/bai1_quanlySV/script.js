

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

// ===== MẢNG DỮ LIỆU =====

let students =
  JSON.parse(localStorage.getItem("students"))
  || [];

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
renderStudents();