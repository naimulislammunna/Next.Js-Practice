"use client"
import { useEffect, useState } from "react";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    const getAllMeals = async () => {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
        const data = await res.json();
        setMeals(data.meals);
    }

    useEffect(() => {
        getAllMeals();
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value)

    }
    console.log(meals);

    return (
        <div>
            <div className='flex gap-2 justify-center my-4'>
                <input
                    onChange={handleSearch}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-info w-full max-w-xs" />
                <button className='btn btn-primary'>Search</button>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    meals?.length > 0 && <> {meals?.map(({ idMeal, strMeal, strCategory }) => <div key={idMeal} className="p-5 border-2 rounded-lg space-y-2">
                        <h1>Title: {strMeal}</h1>
                        <h2>Category: {strCategory}</h2>
                    </div>)}</>
                }
            </div>
        </div>
    );
};

export default Meals;