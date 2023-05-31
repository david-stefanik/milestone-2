import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

import './products.css'

const Products = () => {
    const {data, cart, setCart} = useContext(dataContext);

    const buyProducts = (products) => {
       
        setCart([...cart, products])          


    }    
    return data.map((products) => {
        return(
            <div className="card" key={products.id}>
                <img src={products.image} alt="img-product-card" />
                <h3>{products.title}</h3>
                <h5>{products.price}</h5>
                <button onClick={() => buyProducts(products)}>Add To Cart</button>
            </div>
        )
    })
};

export default Products
