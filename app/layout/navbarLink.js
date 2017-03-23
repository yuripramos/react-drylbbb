import React from "react";
import NavBar from "./navbar.js";
import NavBarItem from "./navbarItem.js";


export class NavBarLink extends React.Component {
  render() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
}

export default NavBarLink;