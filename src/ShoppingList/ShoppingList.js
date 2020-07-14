import React, {Component} from 'react';
import './ShoppingList.css'
//import ItemInput from '../ItemInput/ItemInput';


class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: []
      };
      this.addItem = this.addItem.bind(this);
    }
    addItem(e) {
      if (this._inputElement.value !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });
       
        this._inputElement.value = "";
      }
      console.log(this.state.items);
         
      e.preventDefault();
    }
    

  render() {
    return(
      <div>
        <h2 id="header">My Shopping List</h2>
          <form onSubmit={this.addItem}> 
             <input ref={(a) => this._inputElement = a} 
                placeholder="Item Name">
             </input>
             <button type="submit">Add</button>
          </form>
    </div>
    )
  }
}

export default ShoppingList;