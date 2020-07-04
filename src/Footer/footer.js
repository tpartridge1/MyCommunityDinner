import React, {Component} from 'react';
import './footer.css'; 


class Footer extends Component {
	 render() {
	   return (     
        <div className="footer">
        <button className="" type="submit">Save</button><button className="" type="submit">Print</button><button className="" type="submit">Start Over</button>
        <p>Footer</p>
       
      </div>
    );
  }
}


export default Footer;