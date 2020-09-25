const display = document.querySelector(".display");

const digitButtons = document.querySelectorAll(".digits button");
digitButtons.forEach((button) =>
  button.addEventListener("click", digitClicked)
);

function digitClicked(ev) {
  display.value += ev.target.innerText;
}

const operButtons = document.querySelectorAll(".opers button");
operButtons.forEach((button) => button.addEventListener("click", operClicked));

function operClicked(ev) {
  const lDigit = Number(display.value[display.value.length - 1]);
  const operator = ev.target.innerText;
  if (isNaN(lDigit)) {
    console.log(lDigit);
    display.value = display.value.substring(0, display.value.length - 1);
  }

  display.value += operator;
}

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  display.value = `${parseFloat(eval(display.value).toFixed(4))}`;
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.value = "";
});

const clearLastDigit = document.querySelector(".clearLastDigit");
clearLastDigit.addEventListener("click", () => {
  display.value = display.value.substring(0, display.value.length - 1);
});
