import { dom } from "../data.js";
import { addSwitchButton } from "../handlers/addSwitchButtonHandler.js";

console.log("hello");

dom.btn.addEventListener("click", addSwitchButton);
