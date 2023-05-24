import React from "react"
import { Button, Nav, NavLink} from "react-bootstrap"



export default function  navBar(){
    return (
        <Nav>
            <NavLink to='/'>
                <p>Logo</p>
                <img src='' alt='' />
            </NavLink>
             
                <NavLink to='./blog'>
                 Blog   
                </NavLink>
                <NavLink to='./merch'>
                   Merch
                </NavLink>
                <NavLink to='./contactus'>
                    Contact Us
                </NavLink>
                <Button to='./signin'>
                    Sign in
                </Button>
            

        </Nav>
    )
}