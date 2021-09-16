import * as actionTypes from '../actions/action-types';

export default function addFields(state = {}, action) {

    switch(action.type) {
        case actionTypes.add_single_line_type:
            const copy = { ...state };
            copy.currentFields.push({ type: action.type, fieldSettings: {}});

            return {
                ...copy
            };

        default:
          return state;  
    }
    
}