import React, {Component} from 'react';
import './ShoppingList.css'
import ItemInput from './ItemInput'


class ShoppingList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        value: 'ea',
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
          </div>
          <div>
          <form onSubmit={this.handleSubmit}>
        <label>
          Unit of Issue:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="ea">ea</option>
            <option value="pkg">pkg</option>
            <option value="pound">lb</option>
            <option value="ounce">oz</option>
            <option value="bag">bag</option>
            <option value="cup">cup</option>
            <option value="box">box</option>
            <option value="other">other</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
          </div>
          <div>
          <form onSubmit={this.handleSubmit}>
        <label>
          Price:
          <select value={this.state.price} onChange={this.handleChange}>
            
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
          </div>
    </div>
    )
  }
}

export default ShoppingList;