
export const FORM_SAVED_STATE = 'FORM_STATE';
const CURRENT_FORM_SESSION_DATA = 'CURRENT_FORM_SESSION_DATA';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(CURRENT_FORM_SESSION_DATA);
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Problem loading local storage state: " + err);
        return undefined;
    }
}

export const persistState = (formState) => {
    try {
        const serializedState = JSON.stringify(formState);
        localStorage.setItem(CURRENT_FORM_SESSION_DATA, serializedState);
    } catch (err) {
        console.error("Problem saving to local storage: " + err);
    }
}
