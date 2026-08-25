// click and button trigger button class ( click and mouse hover inside button class) custom button class

//extends event emitter on 
// Simulate DOM-like event handling in Node.js using events

const EventEmitter = require("events");
class Button extends EventEmitter {
  click() {
    this.emit("click");
  }
  mouseHover() {
    this.emit("mouseHover");
  }
}
const btn = new Button();

btn.on("click", () => {
  console.log("Button clicked");
});

btn.on("mouseHover", () => {
  console.log("Mouse hovered on button");
});

btn.click();
btn.mouseHover();
