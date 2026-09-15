async function fetchData() {
  try {
    await Promise.reject("Error: Unable to fetch data");
  } catch(error) {
    console.log(error);
  }
}

fetchData();