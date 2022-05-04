const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

console.log(promise);
