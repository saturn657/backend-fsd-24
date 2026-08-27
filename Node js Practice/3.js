function loginUser() {
  return new Promise((resolve) => {
    resolve("User logged in");
  });
}

function getUserDetails() {
  return new Promise((resolve) => {
    resolve("User details fetched");
  });
}

function getUserOrders() {
  return new Promise((resolve) => {
    resolve("User orders fetched");
  });
}

loginUser()
  .then((result) => {
    console.log(result);
    return getUserDetails();
  })
  .then((result) => {
    console.log(result);
    return getUserOrders();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });