

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