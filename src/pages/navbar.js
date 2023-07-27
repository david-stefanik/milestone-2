import React from "react"
// import { Button, Nav, NavLink} from "react-bootstrap"
// import { render } from "react-dom"

import { Link } from "react-router-dom"

export default function  NavBar(){
    return 
        <Nav>
           
               
          
            <h4>
                <Link to='/blog'>
                 Blog   
                </Link>
                </h4>
                <h4>
                <Link to='/merch'>
                   Merch
                  
                </Link>
                </h4>
               
               
                
                
                
                

        </Nav>
    
}  


 /* <NavLink to='/contactus'>
                    Contact Us
                </NavLink> */
                // <Button to='/signin'>
                //     Sign in
                // </Button>