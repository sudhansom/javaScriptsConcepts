const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.forEach((element) => {
  setTimeout(() => {
    console.log(element);
  }, element * 100);
});

setTimeout(() => {
  console.log("element");
}, 1000);

function callMe() {
  let a = 0;
  document.getElementById("Button").addEventListener("click", function xyz() {
    console.log("Button clicked...", ++a);
  });
}
callMe();
