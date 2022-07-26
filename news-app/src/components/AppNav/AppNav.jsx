import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import sections from '../../data/sections.json'
import "./appNav.css"
import {Link, NavLink} from 'react-router-dom'


function AppNav(props) {
  const[navItems,setNavItems  ] = useState(sections)
 

  return (
    <Navbar className="bar">
      <Nav>
        <a href={'/'}>
          Home
        </a>
        {
          navItems.map((navItem,index) => {
            return (
              <Nav.Link key={index} href={`/#/sections/${navItem.value}`} onClick={() => console.log(navItem.value)}>
                {navItem.label}
              </Nav.Link>
            )
          })
        }
        
      </Nav>

    </Navbar>
  )
}

export default AppNav;

