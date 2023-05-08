quizStart = document.querySelector("#start");

function hide() {
    var x = document.querySelector("#quiz");
    if (x.style.display === "none") {
      x.style.display = "block";
      quizStart.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }

  quizStart.addEventListener("click", hide);



