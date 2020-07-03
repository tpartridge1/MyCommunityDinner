import React, {Component} from 'react';



class Calculate extends Component {
	 render() {
	   return (     
        <div className="calculate">
        <form>
      <p>Calculate: </p>
      <input
        type="text" onChange={this.myChangeHandler}
      />
    </form>
      </div>
    );
  }
}


export default Calculate;