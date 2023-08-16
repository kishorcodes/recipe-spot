import React from "react";
import chin from "../../assets/images/chinese-steak-tofu-stew.jpg";
import { useNavigate } from "react-router-dom";
const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/recipes/${recipe._id}`)}
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
    </div>
  );
};

export default RecipeCard;
