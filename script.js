const button = document.querySelector("#btn-color");
const body = document.querySelector("body");
const colors = [
  "rgb(172, 195, 166)",
  "rgb(0, 145, 173)",
  "rgb(158, 43, 37)",
  "rgb(48, 51, 46)",
  "rgb(236, 5, 142)",
  "rgb(166, 127, 142)",
  "rgb(255, 167, 55)",
  "rgb(179, 57, 81)",
  "rgb(255, 240, 124)",
  "rgb(102, 16, 242)",
  "rgb(31, 19, 0)",
  "rgb(46, 64, 87)",
  "rgb(131, 133, 140)",
  "rgb(77, 139, 49)",
  "rgb(255, 132, 39)",
  "rgb(255, 22, 84)",
  "rgb(194, 24, 7)",
];

button.addEventListener("click", () => {
  const randomColor = Math.random();
  const colorIndex = Math.floor((colors.length - 1) * randomColor);
  body.style.backgroundColor = colors[colorIndex];
});
