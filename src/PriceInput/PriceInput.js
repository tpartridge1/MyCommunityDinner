import React from 'react';

const PriceInput = props => {
  console.log(props);
    return (    
      <div>
      <form>
      <p>Enter Price: </p>
      <input type="text" placeholder="enter item price" onChange={e => console.log(e.target.value)}
      />
      <button>Add</button>
    </form>
    </div>
   );
 }


export default PriceInput;