import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import RecipesCard from '../components/RecipesCard';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const { foodname } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`);

      if (res.data.meals) {
        setRecipes(res.data.meals);
      } else {
        setRecipes([]);
      }

      console.log(res.data);
    };

    getData();
  }, [foodname]);

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