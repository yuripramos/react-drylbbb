import React from "react";
import NavBar from "./navbar.js";
import NavBarLink from "./navbarLink.js";

export class NavBarItem extends React.Component {
  render() {
    return (
      <li>
        <NavBarLink url={this.props.url} text={this.props.text}/>
        {this.props.submenu && <NavBar items={this.props.submenu}/>}
      </li>
    );
  }
}

export default NavBarItem;