import React from "react";


const FoodCard =({foods})=>{

    const {idMeal, strMeal , strCategory , strMealThumb} = foods
    return(<>


        <div className="food-cards" >
        
        
            <img src={strMealThumb} alt={strMeal} className="food-img" />
        
            <div className="food-box">
                <span className="food-category">{strCategory}</span>
                <h3 className="food-title">{strMeal}</h3>
        
               <div className="food-link"><a href={`https://www.themealdb.com/meal/${idMeal}`} target="_blank"  rel="noreferrer">Check Ingredients</a></div>
            </div>
        </div>
        
        
            </>)




}



export default FoodCard