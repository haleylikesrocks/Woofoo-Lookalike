import { signInWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth';
import { auth } from './firebaseConfig';

export const emailSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;    
            console.log(JSON.stringify(user));
            console.log(`User ${user} just signed in`);
            return user;
        })
        .catch(error => {
            console.error("Error signing in: " + error.message);
        });
}
