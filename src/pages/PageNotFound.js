import React from 'react';
import {NavLink} from 'react-router-dom'
  
const PageNotFound= () =>{
    return (

    <div>
        <h5>Zuitt Booking</h5>
        <h1>Page Not Found</h1>
        <p>Go back to <NavLink to="/">homepage</NavLink></p>
        
    </div>
    )
}

export default PageNotFound;