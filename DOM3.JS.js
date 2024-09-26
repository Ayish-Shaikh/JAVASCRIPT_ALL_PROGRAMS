//MAKING A NEW BUTTON IN THE BODY TAG
//USING PREPEND METHOD

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);