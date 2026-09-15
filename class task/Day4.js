//Event Loop 
// Create one log synchronous task
// Create main function setTimeout*2 and 2 promises and outside main is synchonous task f1 f2 use callback
 // Synchronous Task
console.log("Synchronous task");

// Callback functions
const f1 = () => {
    console.log("f1");
};

const f2 = () => {
    console.log("f2");
};

function main() {
    console.log("This is event loop");

    // Macrotasks
    setTimeout(f1, 50);
    setTimeout(f2, 50);

    // Microtask 1
    new Promise((resolve, reject) => {
        resolve("I am Promise 1");
    }).then((result) => {
        console.log(result);
    });

    // Microtask 2
    new Promise((resolve, reject) => {
        resolve("This is Promise 2");
    }).then((result) => {
        console.log(result);
    });
}
main();   
// 

//execution 
