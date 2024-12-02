import Meals from '@/Components/Meals';
import React from 'react';

const allMeals = () => {
    return (
        <div className='w-[90%] mx-auto my-10'>
            <h1 className='text-xl font-bold text-center'>All Meal From MealDB</h1>
            <Meals/>
            <div>
                all meals.....
            </div>
        </div>
    );
};

export default allMeals;