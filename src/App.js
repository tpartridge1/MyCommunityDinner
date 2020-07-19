import React, {Component} from 'react';
import Navigation from './Navigation/navigation';
import PriceInput from './PriceInput/PriceInput';
//import Unit from './Unit/Unit';
import ShoppingList from './ShoppingList/ShoppingList';
import Footer from './Footer/footer';
import './App.css';
import 'tachyons';




class App extends Component {
 
    render() {
      return (     
        <div className="App">
            <Navigation />
            {/*<Unit />
            <PriceInput  /> */}
            <ShoppingList/>
            {/*<Calculate /> */}
            <Footer />
        </div>
      );
    }
  }
  
  
  
  export default App;
  