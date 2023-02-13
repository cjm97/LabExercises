document.getElementById("demo").className = "red";
function helloWorld() {
  alert("Hello");
  let button = document.getElementById("btn");
  button.style.backgroundColor = "red";
  button.style.color = "white";
}

function countdown() {
  let button = document.getElementById("btnTwo");
  button.style.backgroundColor = "purple";
  button.style.color = "pink";
  // for (i=10; i>-1; i--){
  //     if (i>0){
  //         alert(i);
  //     }
  //     else {
  //         alert("Blast off!");
  //     }
  // }
  let i = 10;
  while (i > -1) {
    if (i > 0) {
      alert(i);
    } else {
      alert("Blast off!");
    }
    i--;
  }
}

function changeParagraph(){
  document.getElementById("demo").textContent="Paragraph changed...";
}