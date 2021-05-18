import React from 'react';

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className='input'>
        <label htmlFor='search'>Search Books</label>
        <input
          id='search'
          name='searchValue'
          value={searchValue}
          type='text'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default SearchField;
