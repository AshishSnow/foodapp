import React, { useEffect, useState } from "react";
import { MdOutlineFastfood } from 'react-icons/md';
import FoodCard from "./FoodCard";


const FoodData = () => {

    const [search, setsearch] = useState("")
    const [btn, setbtn] = useState('')
    const [cardfood, setcardfood] = useState([])

    const searchinput = (e) => {

        e.preventDefault()
        setsearch(e.target.value)

    }



    const foodApi = async () => {

        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)

        const res = await response.json()

        setcardfood(res.meals)
    }


    useEffect(() => {

        foodApi()

    }, [btn])


    return (<>

        <div className="food-main-container">



            <h1><MdOutlineFastfood /> <a href="/">Recipe App</a></h1>
            <h2>Discover new dishes you’ll love</h2>

            <div className="food-input">

                <input type="text" value={search} onChange={searchinput} placeholder='Example: Egg , Meat' />
                <button onClick={() => {
                    setbtn(search)

                }}>Search</button>


            </div>


            <div className="food-card">

{cardfood ? cardfood.map((foods)=>{

return (

<FoodCard
key={foods.idMeal}
foods ={foods} />
)

}): "No Food"}

            </div>


        </div>



    </>)

}


export default FoodData;