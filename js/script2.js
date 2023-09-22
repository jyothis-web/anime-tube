var comments = document.querySelector(".comments");
var commentdisplay = document.querySelector(".comment-display");
var clickp = document.querySelector(".clickp");
var read = document.querySelector(".read");

comments.addEventListener("click", function () {
  commentdisplay.classList.toggle("commentclick");
});


clickp.addEventListener("click", function () {
    read.classList.toggle("read-display");
  });