import {SPORT, SportsProduct} from "./product.js";
import { Cart } from "./cart.js";
import { sizeFormatter, costFormatter, writeMessage } from "./formatters.js"

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersports);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersports);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

//console.log(`Cart has ${cart.itemCount} items`);
//console.log(`Cart value $${cart.totalPrice.toFixed(2)}`);

sizeFormatter("Cart", cart.itemCount);
costFormatter("Cart", `${cart.totalPrice}`);
writeMessage("Test message");