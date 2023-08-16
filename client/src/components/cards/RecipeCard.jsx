import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <a
      href={`/recipes/${recipe.id}`}
      className="col text-center category__link"
    >
      <div className="category__img category__img--large shadow">
        <img
          src={`uploads/${recipe.image}`}
          alt={`${recipe.name}`}
          loading="lazy"
        />
      </div>
      <div className="pt-1">{recipe.name}</div>
    </a>
  );
};

export default RecipeCard;
