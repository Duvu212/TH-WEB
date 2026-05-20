// ===== LẤY PHẦN TỬ DOM =====

const btnAddTask = document.getElementById("btnAddTask");
const btnClose = document.getElementById("btnClose");

const modal = document.getElementById("modal");
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

const message = document.getElementById("message");
const formTitle = document.getElementById("formTitle");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const uncompletedTasks = document.getElementById("uncompletedTasks");

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskDeadline = document.getElementById("taskDeadline");
const taskPriority = document.getElementById("taskPriority");

// ===== MẢNG DỮ LIỆU =====

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Nếu editIndex = -1 nghĩa là đang thêm mới
// Nếu editIndex khác -1 nghĩa là đang sửa
let editIndex = -1;

// ===== LƯU LOCALSTORAGE =====

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ===== HIỂN THỊ THÔNG BÁO =====

function showMessage(text) {
  message.innerText = text;

  setTimeout(function () {
    message.innerText = "";
  }, 2000);
}

// ===== RENDER DANH SÁCH CÔNG VIỆC =====

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `
      <div class="task-card">
        Chưa có công việc nào
      </div>
    `;

    updateTaskSummary();
    return;
  }

  tasks.forEach(function (task, index) {
    const completedClass = task.completed ? "completed" : "";

    const statusText = task.completed
      ? "Đã hoàn thành"
      : "Chưa hoàn thành";

    const buttonText = task.completed
      ? "Đánh dấu chưa xong"
      : "Đánh dấu hoàn thành";

    const card = `
      <div class="task-card ${completedClass}">

        <h3>${task.title}</h3>

        <p class="task-info">
          <strong>Mô tả:</strong> ${task.description}
        </p>

        <p class="task-info">
          <strong>Hạn hoàn thành:</strong> ${task.deadline}
        </p>

        <p class="task-info">
          <strong>Ưu tiên:</strong> ${task.priority}
        </p>

        <p class="task-info">
          <strong>Trạng thái:</strong> ${statusText}
        </p>

        <div class="task-actions">

          <button class="btn-toggle" data-index="${index}">
            ${buttonText}
          </button>

          <button class="btn-edit" data-index="${index}">
            Sửa
          </button>

          <button class="btn-delete" data-index="${index}">
            Xóa
          </button>

        </div>

      </div>
    `;

    taskList.innerHTML += card;
  });

  updateTaskSummary();
}

// ===== CẬP NHẬT THỐNG KÊ =====

function updateTaskSummary() {
  totalTasks.innerText = tasks.length;

  let completedCount = 0;

  tasks.forEach(function (task) {
    if (task.completed === true) {
      completedCount++;
    }
  });

  completedTasks.innerText = completedCount;
  uncompletedTasks.innerText = tasks.length - completedCount;
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
  taskForm.reset();
  editIndex = -1;
  formTitle.innerText = "Thêm công việc";
}

// ===== CLICK NÚT THÊM =====

btnAddTask.addEventListener("click", function () {
  resetForm();
  openModal();
});

// ===== CLICK NÚT HỦY =====

btnClose.addEventListener("click", function () {
  closeModal();
});

// ===== SUBMIT FORM THÊM / SỬA =====

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = {
    title: taskTitle.value,
    description: taskDescription.value,
    deadline: taskDeadline.value,
    priority: taskPriority.value,
    completed: false
  };

  if (editIndex === -1) {
    tasks.push(task);
    showMessage("Thêm công việc thành công!");
  } else {
    task.completed = tasks[editIndex].completed;
    tasks[editIndex] = task;
    showMessage("Cập nhật công việc thành công!");
  }

  saveTasks();
  renderTasks();
  closeModal();
});

// ===== EVENT DELEGATION CHO SỬA / XÓA / ĐỔI TRẠNG THÁI =====

taskList.addEventListener("click", function (event) {
  const clicked = event.target;

  if (clicked.classList.contains("btn-edit")) {
    const index = clicked.getAttribute("data-index");
    editTask(index);
  }

  if (clicked.classList.contains("btn-delete")) {
    const index = clicked.getAttribute("data-index");
    deleteTask(index);
  }

  if (clicked.classList.contains("btn-toggle")) {
    const index = clicked.getAttribute("data-index");
    toggleTaskStatus(index);
  }
});

// ===== SỬA CÔNG VIỆC =====

function editTask(index) {
  const task = tasks[index];

  taskTitle.value = task.title;
  taskDescription.value = task.description;
  taskDeadline.value = task.deadline;
  taskPriority.value = task.priority;

  editIndex = index;
  formTitle.innerText = "Cập nhật công việc";

  openModal();
}

// ===== XÓA CÔNG VIỆC =====

function deleteTask(index) {
  const confirmDelete = confirm("Bạn có chắc muốn xóa công việc này không?");

  if (confirmDelete) {
    tasks.splice(index, 1);

    saveTasks();
    renderTasks();

    showMessage("Xóa công việc thành công!");
  }
}

// ===== ĐỔI TRẠNG THÁI HOÀN THÀNH =====

function toggleTaskStatus(index) {
  tasks[index].completed = !tasks[index].completed;

  saveTasks();
  renderTasks();

  showMessage("Cập nhật trạng thái thành công!");
}

// ===== GỌI KHI TẢI TRANG =====

renderTasks();