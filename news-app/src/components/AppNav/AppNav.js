import { Navbar } from 'reactstrap';

function AppNav(props) {
  return (
    <Navbar color="light">
      {
        props.navItems.map((navItem) =>
          <a href="#" onClick={ () => props.handleNavClick( navItem.value )} >
            { navItem.label } |
          </a>
      )}
    </Navbar>
  )
}

export default AppNav;

