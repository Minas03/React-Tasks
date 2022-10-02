import { Component } from 'react';

class Search extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  render() {

    let searchItems = this.props.items,
      searchInput = this.state.searchInput.toLowerCase();

    if (searchInput.length > 0) {
      searchItems = searchItems.filter((item) => {
        return item.name.toLowerCase().includes(searchInput);
      });
    }

    return (
      <div>
        <input className='input' value={this.state.searchInput}
          onChange={this.handleChange} placeholder='Type here...' />
        <ul className='countries'>
          {searchItems.map((item) => {
            return <li>{item.name}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default Search

