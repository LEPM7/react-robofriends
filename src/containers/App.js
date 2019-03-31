import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value
    });
  };

  render () {
    const filteredRobots = this.state.robots.filter((r) =>
      r.name.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          < CardList robots={filteredRobots}/>
        </Scroll>
      </div>
    );
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(users =>
        this.setState({ robots: users }))
  }
}
