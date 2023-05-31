import React from "react";
import './Merch.css';
import {Card} from 'react-bootstrap'
// import {Nav, NavLink } from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import NavBar from "./navbar";
import Products from "./products/products";







export default function Merch(){
//     const merchItems= [{
//         title:'Programming T-Shirt',
//         image:'https://m.media-amazon.com/images/I/B1Ynn1-zR1S._CLa%7C2140%2C2000%7C71UWi9qLrFL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png',
//         price:19.99,
//     },{
//         title:'Stack Overflow',
//         image:'https://ih1.redbubble.net/image.869906908.3301/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg',
//         price:12.99,
//     },
//     {
//         title:'Git Sticker',
//         image:'https://ih1.redbubble.net/image.361921157.3811/st,small,507x507-pad,600x600,f8f8f8.u8.jpg',
//         price:1.99,
//     },{
//         title:'React-Reduc Combo Pack Stickers',
//         image:'https://ih1.redbubble.net/image.773468600.0260/st,small,507x507-pad,600x600,f8f8f8.u1.jpg',
//         price:5.99,
//     },{
//         title:'Girl Who Loves T-Shirt',
//         image:'https://ih1.redbubble.net/image.3967298654.9626/ssrco,classic_tee,womens,101010:01c5ca27c6,front_alt,square_product,600x600.jpg',
//         price:10.99,
//     },{
//         title:'Middle Finger T-Shirt',
//         image:'https://ih1.redbubble.net/image.451314999.1674/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,front,square_product,600x600.u1.jpg',
//         price:19.99,
//     },{
//         title:'Software Developer Socks',
//         image:'https://ih1.redbubble.net/image.4035485973.3465/ur,socks_flatlay_medium,square,600x600-bg,f8f8f8.1.jpg',
//         price:9.99,
//     },{
//         title:'Baby Programmer',
//         image:'https://ih1.redbubble.net/image.1583974296.0242/ra,shortsleeve_one_piece,x840,000000:44f0b734a5,front-c,120,132,600,600-bg,f8f8f8.jpg',
//         price:10.09,
//     },{
//         title:'Hello World! Sticker',
//         image:'https://ih1.redbubble.net/image.1325854832.3372/st,small,507x507-pad,600x600,f8f8f8.u2.jpg',
//         price:1.49,
//     },{
//         title:'Coding King Sticker',
//         image:'https://ih1.redbubble.net/image.1017958911.7778/st,small,507x507-pad,600x600,f8f8f8.jpg',
//         price:2.99,
//     },
// ];






    return(
        <>
       <NavBar />
       <div className="card-container">
       <Products />
       </div>
        {/* <div className="merch-cards">
            {merchItems.map((post,index) => (
                <Card key={index} className="merch-post">
                    
                    <Card.Img variant="left" src={post.image} alt={post.title} /> 
                    
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.price}</Card.Text>
                            <button className="btn-addcart"> Add to Cart</button>
                        </Card.Body>
                    
                </Card>
            ) )}
       
        </div> */}
        
    </>
    )
    
}