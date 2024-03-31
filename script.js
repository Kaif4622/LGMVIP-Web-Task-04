//Make M+ M- and MC function
let string = "";
let buttons = document.getElementsByClassName("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML == "=") {
        string = eval(string);
        document.getElementsByClassName("input")[0].value = string;
      } else if (e.target.innerHTML == "C") {
        string = "";
        document.getElementsByClassName("input")[0].value = string;
      } else {
        string = string + e.target.innerHTML;
        document.getElementsByClassName("input")[0].value = string;
      }
    } catch (err) {
      console.log("Invalid input");
    }
  });
});
