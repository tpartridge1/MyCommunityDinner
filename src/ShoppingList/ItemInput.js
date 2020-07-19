import React, {Component} from 'react';



class ItemInput extends Component {
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
    let shoppingEntries = this.props.entries;
    let listItems = shoppingEntries.map(this.createTasks);
  
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

