import React from "react";

const House = props => {
  return !props.current ? (
    <p>Select A House</p>
  ) : (
    <div>
      <p>FacilityAddress: {props.current.FacilityAddress}</p>
      <p>Borough: {props.current.Borough}</p>
    </div>
  );
};
export default House;
