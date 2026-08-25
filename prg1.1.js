//Event
//EventEmitter - on(emit event param, callback)- register event or event listener, emit(event, param)- trigger event / create event / fire event
const EventEmitter=require('events');
class MyEvent extends EventEmitter{
}
const event = new MyEvent();

event.once("greet",(name)=>{ // use once for listening one time else use on
    console.log(`Hello My name is ${name}`); //template literals- `${var}`
})
event.on("exit",()=>{
    console.log("Exiting the application");
})
event.emit("greet","Saturn");
event.emit("greet","Saturn");

event.emit("exit");