import React, {Component} from 'react';



class ItemInput extends Component {

  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
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


export default ItemInput;

