import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import Popup from "../components/Popup";

function MainPage() {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => setShowPopup(false);

  return (
    <>
      {showPopup && <Popup closePopup={closePopup} />}
      <Navbar />
      <Hero />
      <div className="recipe-container">
        <RecipeCard
          title="Paneer Butter Masala"
          time="30 mins"
          ingredients={["Paneer", "Butter", "Tomatoes", "Cream", "Spices"]}
          instructions="Cook tomatoes in butter, blend to puree, add spices and cream, then paneer cubes."
          img="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-butter-masala.jpg"
        />
        <RecipeCard
          title="Veg Biryani"
          time="45 mins"
          ingredients={["Rice", "Mixed Vegetables", "Yogurt", "Spices"]}
          instructions="Layer fried vegetables with rice, sprinkle saffron water, and steam for 15 mins."
          img="https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/veg-biryani-recipe.jpg"
        />
        <RecipeCard
          title="Chocolate Lava Cake"
          time="25 mins"
          ingredients={["Flour", "Cocoa", "Butter", "Sugar", "Eggs"]}
          instructions="Mix ingredients, bake at 200°C for 8 minutes until gooey inside."
          img="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/molten-lava-cake.jpg"
        />
      </div>
    </>
  );
}

export default MainPage;
