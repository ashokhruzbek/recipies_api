import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Cuisine() {
    const [cuisines, setCuisines] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const info = async () => {
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
                setCuisines(res.data.meals)
                console.log(res.data.meals);
            }
            info();
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <div className='cuisine_cards' >
            {cuisines?.map((cuisine, index) => (
                <div className="cuisine_card"
                    key={index}
                    onClick={() => {
                        navigate(`${cuisine.strArea}/food`)
                    }}
                >
                    <h3>{cuisine.strArea}</h3>
                </div>
            ))}
        </div>
    )
}

export default Cuisine