import firebase from "firebase";
import "firebase/firestore";
import { Alert } from "react-native";

export async function registration(email, password) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;

        const db = firebase.firestore();
        db.collection("users")
            .doc(currentUser.uid)
            .set({
                email: currentUser.email,
            }).then(() => {
                console.log('Task added!');
            });
        return currentUser.uid

    } catch (err) {
        console.log("Registration failed !");
        console.log(err.message);
        Alert.alert("There is something wrong!!!!", err.message);
    }
}

export async function signIn(email, password) {
    if (email.length == 0 || password.length == 0) {
        Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
            { text: 'Okay' }
        ]);
        return;
    }

    try {
        await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
        return currentUser.uid

    } catch (err) {
        Alert.alert("There is something wrong!", err.message);
    }
}

export async function loggingOut() {
    try {
        await firebase.auth().signOut();
    } catch (err) {
        Alert.alert('There is something wrong!', err.message);
    }
}