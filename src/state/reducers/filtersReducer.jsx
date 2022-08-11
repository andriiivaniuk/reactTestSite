import { REMOVE_FILTER_CATEGORY, ADD_FILTER_CATEGORY, ADD_POSSIBLE_FILTER } from "../action-creators";

export const filtersReducer = (state = {}, action) => {

    let value = null;
    let category = null;

    const getCatArray = () => {

        category = Object.keys(action.payload)[0];
        value = Object.values(action.payload)[0];   
        let newArr = [...state[category]];

        return newArr;
    }

    switch (action.type){
        case ADD_POSSIBLE_FILTER: 
            let oldState = {...state};
            return {
                ...oldState,
                [action.payload]: []
            }
            
        case ADD_FILTER_CATEGORY: 
            
            let arr1 = getCatArray();
            arr1.push(value);

            return {
                ...state,
                [category]: arr1
            } 

        case REMOVE_FILTER_CATEGORY:
            
            let arr2 = getCatArray();
            arr2.splice(arr2.indexOf(value), 1);

            return {
                ...state,
                [category]: arr2
            } 

        default:
            return state;
    }
}

export default filtersReducer;