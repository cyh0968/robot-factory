import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMosters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchFiled.toLowerCase())
    )
    return (
      <div className='App'>
        <SearchBox 
          placeholder='search monsters'
          handleChange={(event) => this.setState({ searchFiled: event.target.value })}
        />
        <CardList monsters={filteredMosters} />
      </div>
    )
  }
}

export default App;