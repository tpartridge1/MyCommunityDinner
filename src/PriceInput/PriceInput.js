import React, {Component} from 'react';

class PriceInput extends Component {
  render() {
    return (    
      <div>
      <form>
      <p>Enter price: </p>
      <input
        type="text" onChange={this.myChangeHandler}
      />
    </form>
    </div>
   );
 }
}

export default PriceInput;