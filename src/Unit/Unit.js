import React, {Component} from 'react';

class Unit extends Component {
  render() {
    return (    
      <div>
      <form>
      <p>Unit of Issue: </p>
      <input
        type="text" onChange={this.myChangeHandler}
      />
    </form>
    </div>
   );
 }
}

export default Unit;