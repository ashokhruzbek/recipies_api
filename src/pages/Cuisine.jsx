import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cuisine() {
    const [cuisines, setCuisines] = useState();
    useEffect(() => {
        try {
            const info = async () => {
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
                setCuisines(res.data.meals)
                console.log(res.data);
            }
            info();
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className='cuisine-cards' >
            {cuisines?.map((cuisine, index) => (
                <div className="cuisine-card" key={index}>
                    <h3>{cuisine.strArea}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cuisine