import React from "react";
import House from "./components/House";
import HouseList from "./components/HouseList";
import firehouse from "./components/data/firehouse";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      houses: firehouse,
      currentHouse: null
    };
    this.selectHouse = this.selectHouse.bind(this);
  }

  selectHouse(house) {
    this.setState({
      currentHouse: house
    });
  }

  render() {
    return (
      <div className='App'>
        <HouseList houses={this.state.houses} selectHouse={this.selectHouse} />
        <House current={this.state.currentHouse} />
      </div>
    );
  }
}
export default App;
