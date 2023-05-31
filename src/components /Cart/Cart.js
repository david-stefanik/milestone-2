//as cart home page
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import CartElement from "./CartElement";
import CartTotal from "./CartTotal";



const  Cart = ()=> {
    const {cart} = useContext(dataContext)


    return cart.lenght > 0 ?(
        <>
        <CartElement />
        <CartTotal />
        </>
    ): (
        <h2 className="cart-empty">Your cart is empty</h2>
    )
    
}

export default Cart