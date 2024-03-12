import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='nav-logo'><NavLink style={({isActive})=>isActive?{color:"red",fontWeight:"700",fontFamily:"cursive"}:{color:"white"}} to='/'>Scribble</NavLink></div>
        
        <div className='center-nav-item'>
            <NavLink className='nav-add' style={({isActive})=>isActive?{color:"red",fontWeight:"700"}:{color:"white"}} to='/addData'>Add </NavLink>

            {/* <NavLink style={({isActive})=>isActive?{color:"red",fontWeight:"700"}:{color:"white"}} to='/search'>Update</NavLink> */}
             <NavLink  className='nav-all' style={({isActive})=>isActive?{color:"red",fontWeight:"700"}:{color:"white"}} to='/show'>Notes</NavLink>
        </div>
        
    </nav>
  )
}

export default Navbar