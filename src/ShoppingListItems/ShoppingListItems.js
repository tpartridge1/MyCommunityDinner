import React, {Component} from 'react';



class ShoppingListItems extends Component {

  createTasks(item) {
    return <li onClick={() => this.delete(item.key)} 
    key={item.key}>{item.text}</li>
  }

  render() {
    var shoppingEntries = this.props.entries;
    var listItems = shoppingEntries.map(this.createTasks);
  
    return (    
      <div>
        <ul className="theList">
          {listItems}
      </ul>
     
    </div>
   );
 }
};


export default ShoppingListItems;

