import { SPORT, SportsProduct } from "./product.js";
import { Cart } from "./cart.js"
import { sizeFormatter, costFormatter } from "./formatters.js";
import debug from "debug";
import chalk from "chalk";

let kayak = new SportsProduct(1, "Kayak", 275, SPORT.Watersport);
let hat = new SportsProduct(2, "Hat", 22.10, SPORT.Running, SPORT.Watersport);
let ball = new SportsProduct(3, "Soccer Ball", 19.50, SPORT.Soccer);

let cart = new Cart("Bob");
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);

sizeFormatter("Cart", cart.totalCount);
costFormatter("Cart", `${cart.totalPrice}`);

let db = debug("Example App");
db.enabled = true;
db("Message: %s", "Test message");

console.log(chalk.greenBright("Formated message"));