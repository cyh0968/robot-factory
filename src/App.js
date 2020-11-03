import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchFiled: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  handleChange = (event) => {
    this.setState({ searchFiled: event.target.value })
  }

  render() {
    const { robots, searchFiled } = this.state;
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchFiled.toLowerCase())
    )
    return (
      <div className='App'>
        <h1> Robot Factory </h1>
        <SearchBox placeholder='search robot friends' handleChange={this.handleChange} />
        <CardList robots={filteredRobots} />
      </div>
    )
  }
}

export default App;