import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function CuisineFood() {
  const [cuisineFoods, setCuisineFoods] = useState(null)
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const { cuisineName } = useParams()
  console.log(cuisineName);


  useEffect(() => {
    try {
      const info = async () => {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisineName}`)
        setCuisineFoods(res.data.meals)
        console.log(res.data.meals);
      }
      info();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
  }
  }, [])
  if (loading) {
    return (
        <div className="loading-spinner">
            <div className="spinner" />
            <p>Loading categories...</p>
        </div>
    );
}


  return (
    <div className='cuisineFood-cards' >
      {cuisineFoods?.map((cuisineFood) => (
        <div className="cuisineFood-card" key={cuisineFood.idMeal}
          onClick={() => {
            navigate(`/recipes/${cuisineFood.strMeal}`)
          }}
        >
          <h3>{cuisineFood.strMeal}</h3>
          <img className='cuisineFood-image' src={cuisineFood.strMealThumb} alt="" />
        </div>

      ))}
    </div>
  )
}

export default CuisineFood