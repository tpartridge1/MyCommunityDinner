import React, {Component} from 'react';
import './header.css'; 


class Header extends Component {
	 render() {
	   return (     
        <div className="header">
        <h1>My Community Dinner</h1>
        <p>Add Your Recipe Items. Find Prices. Make a List. Know Your Cost.</p>
      </div>
    );
  }
}


export default Header;