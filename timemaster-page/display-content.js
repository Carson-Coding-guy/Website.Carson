console.log("hello world");
function rendertask() {

    //gets text input from task field
  const textinput = document.getElementById("task-input").value;
  console.log(textinput);

  //this is setting task panel text to input
  const textdisplay = document.getElementById("tt-text1");
  textdisplay.innerText = textinput;


  //gets image from input field
  const imageinput = document.getElementById("image-input").value;
  console.log("Image URL address", imageinput);
  const img = document.createElement("img");

  
  img.src = imageinput;
  img.style.maxWidth = "100%";
  console.log("image element created:", img);

  const imageDisplay = document.getElementById("imageDisplay");
  imageDisplay.innerHTML = "";
  imageDisplay.appendChild(img);
  console.log("Image displayed:", img);

  event.preventDefault();
}
