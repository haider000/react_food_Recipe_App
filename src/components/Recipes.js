import React from "react";

const Recipes = (props) => {
  const {recipes} = props;
  return (
    <div className="row">
      {
      recipes.map( recipe => (
        <div className="col-md-3">
          <div className="card py-2 my-4 text-center">
            <img
              src={recipe.recipe.image}
              className="img-fluid w-50 mx-auto rounded-circle"
            />
            <div className="card-body">
              <h5>{recipe.recipe.label}</h5>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  );
};

export default Recipes;
