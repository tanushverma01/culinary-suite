import React, { useState } from "react";

function RecipeCard({ title, time, ingredients, instructions, img }) {
  const [showIngredients, setShowIngredients] = useState(true);

  return (
    <div className="recipe-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>⏱ {time}</p>

      <div className="toggle-buttons">
        <button onClick={() => setShowIngredients(true)}>Ingredients</button>
        <button onClick={() => setShowIngredients(false)}>Instructions</button>
      </div>

      {showIngredients ? (
        <ul>
          {ingredients.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      ) : (
        <p className="instructions">{instructions}</p>
      )}

      <button className="bookmark-btn">🔖 Bookmark</button>
    </div>
  );
}

export default RecipeCard;
