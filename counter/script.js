const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

console.log(counter, increase, decrease, ".........");

const handleIncrease = () => {
  let data = parseInt(counter.innerHTML);
  const val = data + 1;
  counter.innerHTML = val;
};

const handleDecrease = () => {
  let data = parseInt(counter.innerHTML);
  if (data == "0") {
    alert("Your counter value is already 0");
  } else {
    const val = data - 1;
    counter.innerHTML = val;
  }
};
