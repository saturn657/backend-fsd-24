const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});