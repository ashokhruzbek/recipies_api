import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RecipesCard from '../components/RecipesCard';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const { foodname } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`);
        setRecipes(res.data.meals);
        console.log(res.data.meals);
      }
      getData();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); 
    }

  }, []);

  if (loading) {
    return (
        <div className="loading-spinner">
            <div className="spinner" />
            <p>Loading categories...</p>
        </div>
    );
}

  return (
    <div>
      {recipes?.length > 0 ? (
        recipes.map((item) => (
          <RecipesCard
            key={item.idMeal}
            meal={item}
          />
        ))
      ) : (
        <p>No recipes found for {foodname}</p>
      )}
    </div>
  );
}

export default Recipes;