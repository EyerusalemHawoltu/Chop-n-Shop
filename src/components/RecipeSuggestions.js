import React from 'react';

const RecipeSuggestions = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe Suggestions</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSuggestions;
