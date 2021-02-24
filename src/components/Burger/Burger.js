import React from 'react'

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {

    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey =>{
        console.log(ingKey);
        return [...Array(props.ingredients[ingKey])]
        .map((_,i)=>{
            return <BurgerIngredient key = {ingKey + i} type = {ingKey}/>;
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start introducing ingredients</p>
    }
    console.log(transformedIngredients);
    return (

        <div className = {styles.Burger}>
            <BurgerIngredient type = "bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"/>
        </div>
    )
}
