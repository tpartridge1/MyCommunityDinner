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
       search: [,
       {language:'EN'},
       {keywords: ''},
       {country: 'US'}
       ],
       item: '',
       curency: '$',
       price: '',
       google_shopping_id: 'NULL'
    }
  }  
  

componentDidMount () {
  fetch("https://google-shopping.p.rapidapi.com/search?language=EN&keywords=laptop&country=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "google-shopping.p.rapidapi.com",
		"x-rapidapi-key": ""
	}
})
.then(response => response.json())
.then(items => this.setState({search}))
.catch(err => {
	console.log(err);
});
}



 
  render() {
    return (     
      <div className="App">
          <Navigation />
          <Header />
          <ItemInput />
          <Unit />
          <PriceInput  />
          <ShoppingList />
          <Calculate />
          <Footer />
      </div>
    );
  }
}


export default App;

