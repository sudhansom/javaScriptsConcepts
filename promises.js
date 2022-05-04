const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("ooh no... smthing went wrong");
  }, 1000);
});

console.log(promise);

promise.then(console.log).catch(console.log);
