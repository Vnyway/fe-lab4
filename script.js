function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const el1Click = () => {
  const element = document.getElementById("el1");
  element.style.color = getRandomColor();
  element.style.backgroundColor = getRandomColor();
};

const el2Click = () => {
  const element = document.querySelector(".el2");
  element.style.color = getRandomColor();
  element.style.backgroundColor = getRandomColor();
};
