import React, {Component} from 'react';

class ItemInput extends Component {
  render() {
    return (    
      <div>
      <form>
      <h1>My Shopping List </h1>
      <p>Enter items: </p>
      <input
        type="text" onChange={this.myChangeHandler}
      />
    </form>
    </div>
   );
 }
}


export default ItemInput;

