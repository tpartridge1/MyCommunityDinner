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
    constructor(props) {
      super(props);
      this.state = {
        items: [], //items input

     };

      this.addItem = this.addItem.bind(this); //bind calls an item and waits
      //this.setNewListItem = this.setNewListItem.bind(this); //bind adds the new item
          
    }

    //itemValue(e) { 
    //  this.setState({    //setState laods item value to memory (event)
   //     items: e.target.value  
    //  });
    //}

    //setNewListItem(e) {    //setState accepts new item and sets to memory 
   //   this.setState({
    //    newItem: this.state.items
   //   });

    //  this._input.focus();   //places a focus surrounding input text area
   //   this._input.value = "";

      //e.preventDefault(); //clear the input when submitting
    //}

    addItem(e) {
      if (this._inputElement.value !== "") {
        var newItem = {
          text: this._inputElement.value,
          key: Date.now()
        };
     
        this.setState((prevState) => {
          return { 
            items: prevState.items.concat(newItem) 
          };
        });
       
        this._inputElement.value = "";
      }
       
      console.log(this.state.items);
         
      e.preventDefault();
    }
    

  
    

    
    render() {
      return (     
        <div className="App">
            <Navigation />
            <Header />
            {/*<ItemInput > */}
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
  