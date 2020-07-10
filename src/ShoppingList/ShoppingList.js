import React, {Component} from 'react';
import './ShoppingList.css'

class ShoppingList extends Component {

	 render() {
	   return (     
       <div>
         <h1>Make a list</h1>
         <form onSubmit={this.addItem}>
          <input id='add-listItem' placeholder='enter item' />
          <select name="unit" id="unit">
            <option value="ea">Each</option>
            <option value="pkg">Package</option>
            <option value="pound">lb</option>
            <option value="ounces">oz</option>
            <option value="bag">Bag</option>
            <option value="cup">Cup</option>
            <option value="box">Box</option>
            </select>
          <button className= 'enter-btn' type='submit'>Add</button>
         </form>
     </div>
    );
  }
}


export default ShoppingList;