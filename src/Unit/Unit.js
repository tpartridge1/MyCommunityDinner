import React from 'react';



class Unit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'ea'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Select Unit of Issue  :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="ea">Each</option>
            <option value="can">Can</option>
            <option value="pkg">Package</option>
            <option value="lb">Pound</option>
            <option value="oz">Ounce</option>
            <option value="bag">Bag</option>
            <option value="cup">Cup</option>
            <option value="box">Box</option>
            <option value="other"></option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Unit;