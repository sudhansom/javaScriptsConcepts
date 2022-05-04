const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

console.log(promise);

promise.then(console.log).catch((error) => console.log(error));
