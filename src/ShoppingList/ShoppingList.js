import React, {Component} from 'react';
import './ShoppingList.css'
import ShoppingListItems from '../ShoppingListItems/ShoppingListItems';
import PriceInput from '../PriceInput/PriceInput';
import Unit from '../Unit/Unit';
import Quantity from './Quantity';
import Calculate from '../Calculate';




class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        value: 'ea'
      }
      this.createTasks = this.createTasks.bind(this);
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this); 
    };
    
 
  
   
    addItem(e) {
      if (this._inputElement.value !== "") {
        let newItem = {
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


    
    deleteItem(key){
      let filteredItems = this.state.items.filter(function (item) {
        return (item.key !== key);
      });
      this.setState({
        items: filteredItems
      });
    }



  render() {
    return(
      <div>
        <h2 id="header">My Shopping List</h2>
          <form onSubmit={this.addItem} >  
             <input ref={(a) => this._inputElement = a} 
                placeholder="Item Name">
             </input>
             <button type="submit">Add</button>
          </form>
          <div>
          <ShoppingListItems entries={this.state.items}
          delete={this.deleteItem}/>
          <Unit/>
          <Quantity />
          <PriceInput />
          <Calculate />
          </div>
    </div>
    )
  }
}

export default ShoppingList;