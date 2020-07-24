import React, {Component} from 'react';



class ShoppingListItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  
  delete(key) {
    this.props.delete(key);
  }


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

