import { useEffect } from "react";
import { useState } from "react"
import { getStoredCart } from "../utilities/fakeDB";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if(products.length){
            const orderItems = getStoredCart();
            const orderItems2 = [];
            for(const key in orderItems){
                const addedItem = products.find(product => product.key === key);
                if(addedItem){
                    const quantity = orderItems[key];
                    addedItem.quantity = quantity;
                    orderItems2.push(addedItem);
                }
            }
            setCart(orderItems2);
        }
        
    }, [products])

    return [cart, setCart];
}

export default useCart;