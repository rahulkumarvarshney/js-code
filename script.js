const body = document.querySelector("body");
const button = document.querySelectorAll(".button");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e);
    //console.log(e.target.id)
    if (e.target.id === "redButton") {
      body.style.backgroundColor = "red";
    }
    if (e.target.id === "greenButton") {
      body.style.backgroundColor = "green";
    }
    if (e.target.id === "blueButton") {
      body.style.backgroundColor = "blue";
    }
    if (e.target.id === "yellowButton") {
      body.style.backgroundColor = "yellow";
    }
  });
});
