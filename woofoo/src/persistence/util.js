
const FORM_SAVED_STATE = 'FORM_STATE';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(FORM_SAVED_STATE);
        if (!serializedState) {
            return undefined;
        }
        console.log(JSON.parse(serializedState));
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Problem loading local storage state: " + err);
        return undefined;
    }
}

export const persistState = (formState) => {
    try {
        const serializedState = JSON.stringify(formState);
        localStorage.setItem(FORM_SAVED_STATE, serializedState);
    } catch (err) {
        console.error("Problem saving to local storage: " + err);
    }
}