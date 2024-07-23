function rendertask() {
  event.preventDefault();
  const textinput = document.getElementById("task-input").value;

  const imageinput = document.getElementById("image-input").value;
console.log(imageinput);
  console.log("Image URL address", imageinput);
  //const img = document.createElement("img");
  const taskTemplate = document
    .getElementById("task-template")
    .firstElementChild.cloneNode(true);

  const taskText = taskTemplate.querySelector(".tt-text");
  
  taskText.innerText = textinput;

  const taskimgPanel = taskTemplate.querySelector(".task-panel-image");
  console.log(taskimgPanel);
  const taskimg = taskimgPanel.firstElementChild;
  console.log(taskimg);

  if (imageinput) {
    taskimg.src = imageinput;
    taskimg.style.display = "block";
  } else {
    taskimg.style.display = "none";
  }

  const taskList = document.getElementById("task-list");
  taskList.appendChild(taskTemplate);

  document.getElementById("task-input").value = "";
  document.getElementById("image-input").value = "";
}
