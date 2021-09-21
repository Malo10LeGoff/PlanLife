import firebase from './config/firebaseDB';

export function GetTasks() {
    const Todo = (await firebase.firestore().collection('Work').doc("example_tasklist").get()).data();
}

export function CreateTask() {

}

export function DeleteTask() {

}