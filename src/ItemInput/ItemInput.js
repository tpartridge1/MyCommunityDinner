import React from 'react';

class ItemInput extends React.Component {
	render() {
	  return (     
      <form className="pa4 black-80">
        <div className="measure">
           <label for="name" className="f6 b db mb2">Enter Item <span class="normal black-60"></span></label>
           <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
           <label for="name" className="f6 b db mb2">Price <span class="normal black-60"></span></label>
           <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
           <label for="name" className="f6 b db mb2">Qty <span class="normal black-60"></span></label>
           <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
           <label for="name" className="f6 b db mb2">Final Cost <span class="normal black-60"></span></label>
           <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
         <small id="name-desc" className="f6 black-60 db mb2"></small>
        </div>
      </form>
    );
  }
}


export default ItemInput;

