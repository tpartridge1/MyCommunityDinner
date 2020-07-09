import React, {Component} from 'react';


class ShoppingList extends Component {
	 render() {
	   return (     
       <div>
         <h1>Make a list</h1>
         <ul>
           {this.props.items.map(items => (
             <li>{items}</li>
           ))}
         </ul>
         <form>
           <input className= 'enter-itm' type='text' placeholder='enter item'></input>
           <button className= 'enter-btn' type='submit'>Add</button>
         </form>
     </div>
    );
  }
}


export default ShoppingList;