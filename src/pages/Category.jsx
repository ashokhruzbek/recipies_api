import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"
function Category() {
    // if (!categor || categor.length === 0) {
    //     return <p className='loading'>Loading...</p>;
    //   }
    const [categories, setCategories] = useState();
    useEffect(() => {
        try {
            const info = async () => {
                const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
                setCategories(res.data.categories)
                console.log(res.data.categories);
            }
            info();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className='category-cards' >
            {categories?.map((category)=>(
                <div className="category-card" key={category.idCategory}>
                    <h3>{category.strCategory}</h3>
                    <img src={category.strCategoryThumb} alt="" />
                </div>

            ))}
        </div>
    )
}

export default Category