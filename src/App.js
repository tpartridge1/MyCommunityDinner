import React, {Component} from 'react';
import Header from './Header/header';
import ItemInput from './ItemInput/ItemInput';
import ShoppingList from './ShoppingList/ShoppingList';
import Footer from './Footer/footer';
import './App.css';
import 'tachyons';
import Navigation from './Navigation/navigation';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = { enteritem: '' };
}

myChangeHandler = (event) => {
  this.setState({enteritem: event.target.value});
}

 
  render() {
    return (     
      <div className="App">
          <Navigation />
          <Header />
          <ItemInput />
          <ShoppingList />
          <p>Save, Print, Start Over</p>
          <Footer />
      </div>
    );
  }
}


export default App;

