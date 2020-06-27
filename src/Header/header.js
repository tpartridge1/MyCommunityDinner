import React, {Component} from 'react';
import './header.css'; 


class Header extends Component {
	 render() {
	   return (     
        <div className="header">
        <h1>My Community Dinner</h1>
        <p>Add your recipe items, find prices, make a list, know your cost.</p>
      </div>
    );
  }
}


export default Header;