import React from 'react';



 const Unit = () => {

  return (
    <div> 
       <form onSubmit={this.handleFormSubmit}> 
        <p>Unit of Issue: </p>
          <select 
          value={this.state.selectedValue}
          onChange={this.handleSelectValue}
          className="form-control"
          id='unit'
          > <option value="ea">each</option>
            <option value="can">can</option>
            <option value="pkg">package</option>
            <option value="pound">lb</option>
            <option value="ounces">oz</option>
            <option value="bag">bag</option>
            <option value="cup">cup</option>
            <option value="box">box</option>
          </select>
    </form>
    </div>
   );
  }
 
 

export default Unit;