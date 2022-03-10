setTimeout(() => {
  console.log("Timer ends....");
}, 5000);

function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("Y");
});
