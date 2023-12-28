import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import meta from '../assets/meta.png'

class NavBar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav>

        <div className="Main-header">
        <div className="logo1">
        <img src={meta}  alt="img"/>
        </div>
        <div className="Title">
          <h1 >
            Alternative Uniswap Interface
          </h1>
        </div>

        <div className="NavbarItems1">
          <ul className={`nav-menu`}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={"nav-links"} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;





