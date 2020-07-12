import React, {Component} from 'react';
import './ShoppingList.css'

class ShoppingList extends Component {

	 render() {
	   return (     
       <div>
         <h2 id="shopListHeader">My Shopping List</h2>
         <form onSubmit={this.handleSubmit}>
           <label>
             Add Item: 
            <input type="text" items={this.state} onSubmit={this.onSubmit}/>
           </label>
          <select name="unit" id="unit">
            <option value="ea">each</option>
            <option value="can">can</option>
            <option value="pkg">package</option>
            <option value="pound">lb</option>
            <option value="ounces">oz</option>
            <option value="bag">bag</option>
            <option value="cup">cup</option>
            <option value="box">box</option>
            </select>
            <input type="Submit" onChange={this.handleChange}/>
         </form>
     </div>
    );
  }
}


export default ShoppingList;