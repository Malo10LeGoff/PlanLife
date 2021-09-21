import firebase from '../config/firebaseDB';

export async function GetTasks() {
    const Todo = (await firebase.firestore().collection('Work').doc("example_tasklist").get()).data();
}

export async function CreateTask() {
    firebase.firestore()
        .collection('Work')
        .add({
            task1: 'Make your sport',
        })
        .then(() => {
            console.log('Task added!');
        });
}

export async function DeleteTask() {

    firebase.firestore()
        .collection('Work')
        .doc('Make your sport')
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}