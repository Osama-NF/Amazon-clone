import React from "react";
import { MyContext } from "./MyContext";
import fakeDB from "../util/fakeDB";

export default function BasketTotal() {
    const [basketItems,] = React.useContext(MyContext)

    let total = 0;
    for (const [productID ,quantity] of Object.entries(basketItems)) {
        total += (fakeDB[productID].price * quantity)
    }

    return total
}