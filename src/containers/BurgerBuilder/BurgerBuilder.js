import React, { Component } from 'react';

import Auxilliar from '../../hoc/Auxilliar/Auxilliar';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    salad: 0.5,
    bacon:1,
    cheese:1,
    meat:1.5
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state ={
            ingredients:{
                salad:0,
                bacon:0,
                cheese:0,
                meat:0
            },
            totalPrice:4,
            purchasable:false,
            purchasing:false
        }
    }

    updatePurchaseState =(ingredients)=>{
     
        const sum = Object.keys(ingredients).map(ingKey =>{
            return ingredients[ingKey];
        }).reduce((sum,el)=>{
            return sum + el;
        },0);

        this.setState({purchasable: sum > 0});
    }
    addIngredientsHandler = (type) =>{
         const oldCount = this.state.ingredients[type];
         const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        
        this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return
        const updatedCount = oldCount - 1;
       const updatedIngredients = {...this.state.ingredients}
       updatedIngredients[type] = updatedCount;
       const priceDeduction = INGRIDIENT_PRICES[type];
       const oldPrice = this.state.totalPrice;
       const newPrice = oldPrice - priceDeduction;
       
       this.setState({totalPrice:newPrice,ingredients:updatedIngredients})
       this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = () =>{
        this.setState({purchasing:true})
    }

    purchaseHandlerCancel = () =>{
        this.setState({purchasing:false})
    }

    purchaseContinueHandler = () =>{
        alert('You continue');
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            
            <Auxilliar>
                <Modal show = {this.state.purchasing} modalClosed = {this.purchaseHandlerCancel}>
                    <OrderSummary 
                    ingredients = {this.state.ingredients}
                    price = {this.state.totalPrice}
                    purchaseCanceled = {this.purchaseHandlerCancel}
                    purchaseContinue = {this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients = {this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientsHandler}
                ingredientRemoved = {this.removeIngredientsHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                ordered = {this.purchaseHandler}
                />
            </Auxilliar>
                
            
        )
    }
}

export default BurgerBuilder;
