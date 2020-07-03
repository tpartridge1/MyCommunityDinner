import React, {Component} from 'react';
import Navigation from './Navigation/navigation';
import Header from './Header/header';
import ItemInput from './ItemInput/ItemInput';
import PriceInput from './PriceInput/PriceInput';
import Unit from './Unit/Unit';
import ShoppingList from './ShoppingList/ShoppingList';
import Calculate from './Calculate/Calculate';
import Footer from './Footer/footer';
import './App.css';
import 'tachyons';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      enteritem: '',
      enterprice: '',
      search: ''
    };
}

myChangeHandler = (event) => {
  this.setState({enteritem: event.target.value});
  this.setState({enterprice: event.target.value});
  this.setState({search: event.target.value});
}

 
  render() {
    return (     
      <div className="App">
          <Navigation />
          <Header />
          <ItemInput />
          <Unit />
          <PriceInput />
          <ShoppingList />
          <Calculate />
          <button className="" type="submit">Save</button>
          <button className="" type="submit">Print</button>
          <button className="" type="submit">Start Over</button>
          <Footer />
      </div>
    );
  }
}


export default App;

