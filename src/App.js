import React, { Component } from 'react';

import { Cardlist } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    };
    //you do this if you are not using arrow functions to bind
    //the function to the class
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() { 
    const {monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return ( 
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <Cardlist monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
