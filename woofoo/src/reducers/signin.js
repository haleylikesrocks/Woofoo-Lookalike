import { sign_in } from "../actions/action-types";

export default function signin (state = {}, action) {
    switch (action.type) {
        case sign_in:
            const { username, isSignedIn, provider } = action;
            return {
                ...state,
                username,
                isSignedIn,
                provider,
            };
        default:
            return state;
    }
}
