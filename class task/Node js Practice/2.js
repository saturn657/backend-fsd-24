const age = 32;

const checkAge = new Promise((resolve,reject) => {
  if(age>=18)
    resolve("Eligible");
  else
    reject("Not Eligible");
});

checkAge
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });