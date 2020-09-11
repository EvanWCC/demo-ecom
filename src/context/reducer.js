export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    
    switch(action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket

            return {
                ...state,
                basket:[...state.basket, action.item]
            }
                

        case 'REMOVE_FROM_BASKET':
           

            
            let newBasket = [...state.basket];
            const filtered = newBasket.filter(p => p.id !== action.id)
            return {
                ...state,
                basket: filtered,
            };
        
        default:
            return state;
        
    }
}

export default reducer;