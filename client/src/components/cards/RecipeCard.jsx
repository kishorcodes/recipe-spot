import React from "react";
import chin from '../../assets/images/chinese-steak-tofu-stew.jpg'
const RecipeCard = ({ recipe }) => {
    console.log(recipe);
  return (
    <a
      href={`/recipes/${recipe._id}`}
      className="col text-center category__link"
    >
      <div className="category__img category__img--large shadow">
        <img
        src={chin}
        //   src={`uploads/${recipe.image}`}
          alt={`${recipe.name}`}
          loading="lazy"
        />
      </div>
      <div className="pt-1">{recipe.name}</div>
    </a>
  );
};

export default RecipeCard;
