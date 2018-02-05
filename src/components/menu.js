import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


//Menu component renders menu Link
class Menu extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to={'/#home'}>Home</Link></li>
            <li><Link to="/home#about">About</Link></li>
            <li><Link to={'/archive'}>Archive</Link></li>
            <li className="contactMobile"><a href="mailto:magdamargaretha@gmail.com?Subject=magdenmagden">Contact</a></li>
            <li className="contactWeb"><Link to="/home#contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Menu;
