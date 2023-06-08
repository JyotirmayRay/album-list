import React from 'react';
import { Link } from 'react-router-dom'

// For every component, retrieve the button name and path.
const Navbar = (props) => {

  return (
    <div className='navbar'>
      <h2 onClick={() => props.handleClick(false)}>
        <span className='navlogo'>Albums list React app</span>
        
      </h2>
      <Link to={props.path}><button>{props.page}</button></Link>
    </div>
  )
}

export default Navbar
