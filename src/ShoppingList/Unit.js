import React, {Component} from 'react';

class Unit extends Component {
  render() {
    return (    
      <div>
      <form>
      <p>Unit of Issue: </p>
      <input
        type="text" 
      />
      <select name="unit" id="unit">
            <option value="ea">each</option>
            <option value="can">can</option>
            <option value="pkg">package</option>
            <option value="pound">lb</option>
            <option value="ounces">oz</option>
            <option value="bag">bag</option>
            <option value="cup">cup</option>
            <option value="box">box</option>
            </select>
            <input type="Submit" onChange={this.handleChange}/>
    </form>
    </div>
   );
 }
}

export default Unit;