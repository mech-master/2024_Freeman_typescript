import { Product, Order } from "./data/entities";

export class DomDisplay {
    props: {
        products: Product[],
        order: Order
    }

    getElementText() {
        return `${this.props.products.length} Products, `
        +`Order total: $${this.props.order.total}`;
    }

    getContent(): HTMLElement {
        let elem = document.createElement("h3");
        elem.innerText = this.getElementText();
        elem.classList.add("bg-primary", "text-center", "text-write", "p-2");
        return elem;
    }
}