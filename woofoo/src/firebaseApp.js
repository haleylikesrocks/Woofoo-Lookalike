import firebaseConfig from "./firebaseConfig";
import React, { createContext, useEffect } from 'react';
import app from 'firebase/compat/app';
import {onValue, ref, getDatabase, set} from 'firebase/database';
import { useDispatch } from "react-redux";
import { FORM_SAVED_STATE } from "./persistence/util";
import * as actionCreator from './actions/actionCreator';
const FirebaseContext = createContext(null);
export { FirebaseContext };

const FirebaseApp = ({children}) => {
    let firebase = {
        app: null,
        database: null,
    }

    const dispatch = useDispatch();

    const readFormData = () => {
        const dbRef = ref(getDatabase(), FORM_SAVED_STATE);
        onValue(dbRef, (snapshot) => {
            console.log("Getting form data..." +  JSON.stringify(snapshot.val()));
        });
    }
    const writeFormData = (state) => {
        set(ref(getDatabase(), FORM_SAVED_STATE), state);
    }

    if (!app.apps.length) {
        app.initializeApp(firebaseConfig);
        firebase = {
            app: app,
            database: getDatabase(),
            api: {
                //todo
                readFormData,
                writeFormData
            }
        };
    }


    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseApp;