import * as actionTypes from '../actions/action-types';

export default function addFields(state = {}, action) {

    switch(action.type) {
        case actionTypes.add_single_line_type:
            const copy = { ...state };
            const fieldsCopy = [...state.currentFields];
            fieldsCopy.push({ type: action.type, fieldSettings: {}});

            return {
                ...copy,
                currentFields: fieldsCopy,
            };

        default:
          return state;  
    }
    
}