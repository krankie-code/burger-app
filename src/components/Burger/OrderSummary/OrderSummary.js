import React from 'react';
import Auxilliar from '../../../hoc/Auxilliar/Auxilliar';
import Button from '../../UI/Button/Button';

export default function OrderSummary(props) {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey =>{
        return <li key = {ingKey}><span 
                style ={{textTransform:'capitalize'}}>{ingKey}</span>:{props.ingredients[ingKey]}
                </li>
    });
    return (
        <Auxilliar>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p><strong>TotalPrice: {props.price .toFixed(2)}$</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType = "Danger" clicked ={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType = "Success" clicked ={props.purchaseContinue}>CONTINUE</Button>
        </Auxilliar>
    )
}
