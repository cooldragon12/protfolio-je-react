import React from 'react';

const Burger = (props)=>{
    
    
    return(
        <div onClick={props.toggle} className={`nav-burger ${props.current? 'open': ''}`} id="nav-burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
export default Burger;