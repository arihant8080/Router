import React from "react";
import { Link,NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        // <div>
        //     <a href="/About" >About</a>
        //     <br/> <br />
        //     <a href="/Contact" >Contact</a>
        //    <br/> <br />
        //     <a href="/Email" >Email</a>
        // </div>

        // <div>
        //    <Link to="/About" >About</Link>
        //    <br/> <br />
        //    <Link to="/Contact" >Contact</Link>
        //    <br/> <br />
        //    <Link to="/Email" >Email</Link>
          
        // </div>

           <div>
       <ul>        
        <li>  <NavLink style={({isActive})=>{
               return{
                    backgroundColor: isActive ? "lightgreen":"red"
                  }
               }}        
                      to="/About" >About</NavLink></li>
     <br/> <br />
                 <li> <NavLink style={({isActive})=>{
                  return{backgroundColor: isActive ? "lightgreen":"red"}
                 }} to="/Contact" >Contact</NavLink></li>
     <br/> <br />
             <li>  <NavLink style={({isActive})=>{
              return{
                  backgroundColor: isActive? "lightgreen":"red"
              }
            }}
               to="/Email" >Email</NavLink></li>
       </ul> 
         </div>

    )
};
export default Menu;