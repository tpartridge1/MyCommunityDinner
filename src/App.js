import React from 'react';
import ItemInput from './ItemInput/ItemInput';
import ShoppingList from './ShoppingList/ShoppingList';
import './App.css';
import 'tachyons';


const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        lists: 0,
        joined: ''
      }
    }



class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;


}

  render() {
    return (     
      <div className="App">
      My community Dinner!
        <ItemInput />
        <ShoppingList />
      </div>
    );
  }
}


export default App;

