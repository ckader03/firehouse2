import React from "react";

class HouseList extends React.Component {
  renderHouse() {
    return this.props.houses.map((house, index) => {
      return (
        <li key={index} onClick={() => this.props.selectHouse(house)}>
          {house.FacilityName}
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderHouse()}</ul>;
  }
}

export default HouseList;
