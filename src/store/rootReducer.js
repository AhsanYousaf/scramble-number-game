const initialState = {

    randomNumbers: [],
    clickedNumbers: [],
    input: 100,
    counter: 5,
    max: 100,
    min: 1,
    currentNumber: 0,
    previousNumber: {}
};

const reducer =  ( state = initialState , action ) => {
    switch(action.type){
        
        case 'UPDATE_NUMBER':
            return{
                ...state,
                randomNumbers: [...state.randomNumbers, action.payload ]
            };
        case 'DECREMENT_COUNTER':
            return{
                ...state,
                counter: state.counter - 1,
            };
        case 'SET_INPUT':
            return{
                ...state,
                input: action.payload,
            };
        case 'SELECTED_NUMBER':
            return{
                ...state,
                clickedNumbers: [...state.clickedNumbers, action.payload],
            };
        case 'SET_MIN':
            return{
                ...state,
                min: action.payload,
            };  
        case 'SET_MAX':
            return{
                ...state,
                max: action.payload,
            };
        case 'DELETE_LIST':
            return{
                ...state,
                randomNumbers: [],
            };
        case 'CURRENT_NUMBER':
            return{
                ...state,
                currentNumber: state.randomNumbers[action.payload].number,
            };
        case 'PREVIOUS_NUMBER':
            return{
                ...state,
                previousNumber: { id: action.payload.id , number: action.payload.number , stat: 'active' }
            };
        case 'KEEP_NUMBER':
            return{
                ...state,
                randomNumbers: [ ...state.randomNumbers ,
                    state.randomNumbers[state.previousNumber.id].id = state.previousNumber.id,
                    state.randomNumbers[state.previousNumber.id].number = state.previousNumber.number,
                    state.randomNumbers[state.previousNumber.id].stat = state.previousNumber.stat,
                ]
            }; 
        default:{
            return state;
        }
    }
}

export default reducer;