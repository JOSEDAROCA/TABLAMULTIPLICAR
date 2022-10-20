import "./styles.css";

import "./styles.css";

let num1: number = document.getElementById("num1");
let num2: number = document.getElementById("num2");
const btn = document.getElementById("btn");
let mult: number = 0;
let sumIndex: number = 0;

btn.addEventListener("click", () => {
  let nro1 = Number(num1.value);
  let nro2 = Number(num2.value);

  for (let index = 0; index <= nro2; index++) {
    mult = nro1 * index;

    console.log(nro1 + "x" + sumIndex + "=" + mult);
    //txt.innerText +=(sumIndex);
    txt.innerText += " " + nro1 + " x " + sumIndex + " = " + mult + " ";
  }
});
