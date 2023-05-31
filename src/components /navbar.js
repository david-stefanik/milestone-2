import React from "react"
import { Nav, NavLink} from "react-bootstrap"
import {Link} from 'react-router-dom'
import './Merch.css';



export default function  NavBar(){
    return (
        <div className="nav">
        <Nav>
            <NavLink to='/'>
                <p>CODING FOR SUCCESS</p>
                
            </NavLink>
             
                <NavLink to='./blog'>
                 Blog   
                </NavLink>
               
                <NavLink to='./merch'>
                   Merch
                </NavLink>
            
            
                <Link className="cart-logo" to={'/cart'}>🛒</Link>
        </Nav>
        

        </div>
        
    )
}