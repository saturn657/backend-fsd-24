//Promises for asych
// const promiseOne=new Promise((resolve, reject)=>{ //Callback necessary
// console.log("Promise task 1");     // or use function(){}
// //resolve("Promises passed by using resolve");
// let msg=true;
// if(!msg==true){
//     console.log("Message using promises failed");
// }else{
//     console.log("Error....");
// }
// // setTimeout(()=>{
// //     console.log(resolve());
// // },2000)
// });

// promiseOne.then((result)=>{
// console.log(result);
// }).catch((error)=>{
// console.log(error);
// })

// new Promise((resolve, reject)=>{ //Callback necessary
// console.log("Promise task 1");     // or use function(){}
// //resolve("Promises passed by using resolve");
// let msg=true;
// if(!msg==true){
//     console.log("Message using promises failed");
// }else{
//     console.log("Error....");
// }
// // setTimeout(()=>{
// //     console.log(resolve());
// // },2000)
// }).then((result)=>{
// console.log(result);
// }).catch((error)=>{
// console.log(error);
// })

//Async /Await
// console.log("1");
// async function test(){
//     console.log("2");
//     await console.log("3");
//     console.log("4");
// }
// // t1=test();
// test();
// console.log("5");

// Create promises that will print username and password using resolve and
// if username and password not found then it will call
// reject state and print ERROR message

// new Promise((resolve, reject)=>{
// setTimeout(function(){  
//     console.log("This is promises");
//     let error=true;
//     if(!error){
//         resolve("user:Saturn, password:3344");
//     }else{
//         reject("Error..:datafail")
//     }
// },2000);
// }).then((result)=>{
// console.log(result);
// }).catch((error)=>{ // use result and error variables for calling in Promise Chaining
// console.log(error);
// })

async function test(){
    console.log("message:1");

    const response=await fetch("./student.json");
    console.log(response.status);

    const std=await response.json();

    return std;
    console.log("message:3");
}

test().then((data)=>{
    console.log(data);
});

console.log("message:4");