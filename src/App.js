import React, {Component} from 'react';
import Navigation from './Navigation/navigation';
import Header from './Header/header';
//import ItemInput from './ItemInput/ItemInput';
//import PriceInput from './PriceInput/PriceInput';
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
            <Header />
            {/*<ItemInput />*/}
            {/*<Unit />* /}
            {/*<PriceInput  /> */}
            <ShoppingList />
            {/*<Calculate /> */}
            <p>Save, Print, Start Over</p>
            <Footer />
        </div>
      );
    }
  }
  
  
  
  export default App;
  