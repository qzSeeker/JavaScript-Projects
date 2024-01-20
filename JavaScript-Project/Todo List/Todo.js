// Variables

const addBtn = document.getElementById("add-btn");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

const taskCollection = document.getElementById("taskCollection");
const taskCollectionComplete = document.getElementById(
  "taskCollectionComplete"
);

// Event Listeners for Add Button

addBtn.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter Task");
  } else {
    taskContainer.appendChild(task);
    count1++;
    taskCollection.innerText = count1 + " task added!";
  }

  inputTask.value = "";

  // Check button
  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
    count2++;
    taskCollectionComplete.textContent = count2 + " task completed!";
  });

  // Delete button
  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.remove();
    count2--;
    taskCollectionComplete.textContent = count2 + " task completed!";
    count1--;
    taskCollection.innerText = count1 + " task added!";

    // Delete Alert
    setTimeout(() => {
      const deletealert = document.createElement("div");
      deletealert.classList.add("deletealert");
      adddeletealert.appendChild(deletealert);
      deletealert.innerText = "Task deleted successfully!";
    }, 100);
    
    setTimeout(() => {
        const deletetime = document.querySelector(".deletealert")
        deletetime.classList.remove("deletealert")
        deletetime.innerText = "";
        
    }, 800)
  });
});

const adddeletealert = document.querySelector(".adddeletecontent");

let count1 = 0;
let count2 = 0;
