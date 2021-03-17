import React from "react";

const Header = (props) => {
  const {search, onInputChange} = props;
  return (
    <div className="jumbotron">
      <h1 className="display-1">
        
        <span className="material-icons brand-icon">brunch_dining</span> Food Recipe
      </h1>

      <div className="input-group w-50 mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search  Your Recipe..."
          value={props.search}
          onChange={props.onInputChange}
        />

        <span className="input-group-text" id="basic-addon2">
          <button className="btn">Search Recipe</button>
        </span>
      </div>
    </div>
  );
}

export default Header;
