//when the user clicks each product 
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import "./CartContent.css"


const CartElement = () => {
    const { cart } =useContext(dataContext);
    return cart.map((products)=> {
        return(
            <div className="cartContent" key={products.id}>
               <img src={products.image} alt="product-card"/>
               <h3 className="name-product">{products.title}</h3> 
               <h4 className="price-product">{products.price}</h4>
            </div>
        )
    });

}

export default CartElement
