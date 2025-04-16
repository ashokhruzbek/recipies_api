import React from 'react';

function RecipesCard({ meal }) {
    if (!meal) return <p>Loading...</p>;  // Loading message

    const getYoutubeEmbedUrl = (url) => {
        if (!url) return null;
        const videoId = url.split("v=")[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };
    return (
        <div className="recipe-card">
          <div className="recipe-header">
            <h1>{meal.strMeal}</h1>
          </div>
      
          <div className="recipe-info">
            <h5>Area: {meal.strArea} | Category: {meal.strCategory}</h5>
            <hr />
          </div>
       
          <div className="media-section">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="recipe-image" />
            {meal.strYoutube && (
              <div className="video-container">
                <iframe
                  src={getYoutubeEmbedUrl(meal.strYoutube)}
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
      
          <div className="instructions">
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      );
      
}

export default RecipesCard;