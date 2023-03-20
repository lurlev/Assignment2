import "./styles.css";
//Quiz 2
const arr2 = new Array(101).fill(0, 0);
console.log(arr2);

const arr3 = arr2.fill().map((_, index) => index);
console.log(arr3);

const arr4 = arr3.filter(function (number) {
  return number % 2 === 0;
});
console.log(arr4);

const dateArray = arr4.map((i) => Date.now() - i * 86400000);
//dateArray.map((i) => Date(i));
//dateArray.map((i) => i.toLocaleString());
console.log(dateArray);

//Assignment 2: Working with Data
const randomValues = dateArray.map((i) => ({ i, val: Math.random() * 50 }));
console.log(randomValues);

export default function dot() {
  const dotSize = 10;
  const dotMargin = 3;
  const middleY = window.innerHeight / 2;

  randomValues.forEach((value, i) => {
    const dot = document.createElement("div");
    const x = i * (dotSize + 2 * dotMargin);
    const y = middleY - value.val;

    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "green";
    dot.style.position = "absolute";
    dot.style.left = x + "px";
    dot.style.top = y + "px";

    document.body.appendChild(dot);
  });
}
