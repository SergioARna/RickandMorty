import React from "react";

const LocationInfo = ({ location }) => {
  return (
    <article className="locationInfo">
      <ul className="locationInfo-ul">
        <li>
          <span>Name:</span>
          {location?.name}
        </li>
        <li>
          <span>Type: </span>
          {location?.type}
        </li>
        <li>
          <span>Dimension: </span>
          {location?.dimension}
        </li>
        <li>
          <span>Population:</span>
          {location?.residents.length}
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
