import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../App.css"
function Category() {
    const [categories, setCategories] = useState();
    const [loading, setLoading] = useState(true);
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