import React from "react";
import thai from "../../assets/images/thai-food.jpg";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/categories/${category.name}`, {
          state: {
            apiURL: `/api/categories/${category.name}`,
            title: `Explore ${category.name} Recipes`,
          },
        })
      }
      className="col text-center category__link"
    >
      <div className="category__img shadow">
        <img
          //   src={`img/${category.image}`}
          src={thai}
          alt={`${category.name} Food`}
          loading="lazy"
        />
      </div>
      <div className="pt-1">{category.name} Food</div>
    </div>
  );
};

export default CategoryCard;
