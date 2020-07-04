import React from 'react';

const PriceInput = props => {
  console.log(props);
    return (    
      <div>
      <form>
      <p>Search Price: </p>
      <input type="search" placeholder="search item price" onChange={e => console.log(e.target.value)}
      />
      <button>Submit</button>
      <p>Enter price: </p>
      <input type="currency" placeholder="enter item price" />
    </form>
    </div>
   );
 }


export default PriceInput;