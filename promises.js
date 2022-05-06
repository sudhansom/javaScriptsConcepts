const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

console.log(promise);

//promise.then(console.log).catch(console.log);
const result = async () => {
  const result = await promise;
  console.log(result);
};
console.log(result);
