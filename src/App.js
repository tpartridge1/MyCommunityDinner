import React, {Component} from 'react';
import Navigation from './Navigation/navigation';
import ShoppingList from './ShoppingList/ShoppingList';
import Footer from './Footer/footer';
import './App.css';
import 'tachyons';




class App extends Component {
 
    render() {
      return (     
        <div className="App">
            <Navigation />
            <ShoppingList/>
            <Footer />
        </div>
      );
    }
  }
  
  
  
  export default App;
  