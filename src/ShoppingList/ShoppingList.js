import React, {Component} from 'react';
import './ShoppingList.css'
import ItemInput from './ItemInput';
import PriceInput from '../PriceInput/PriceInput';
import Unit from '../Unit/Unit';
import Quantity from './Quantity';
import Calculate from '../Calculate';





class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        value: '',
        price: '0'
      };
      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
      this.setState({value: event.target.value});
      this.setState({price: event.target.price});
    }

    handleSubmit(event) {
      //add function here
      event.preventDefault();
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
          <ItemInput entries={this.state.items}
          delete={this.deleteItem}/>
          <Unit />
          <Quantity />
          <PriceInput />
          <Calculate />
          </div>
    </div>
    )
  }
}

export default ShoppingList;