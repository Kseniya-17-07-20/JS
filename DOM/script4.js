let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
console.log(this.id);
}, false);
btn.addEventListener("click", () => {
console.log("Hello world!");
}, false);

btn.removeEventListener("click", function() { // won't work!
  console.log(this.id);
  }, false);

  