import firebase from '../config/firebaseDB';

export function GetTasks_Work(user_id) {
    const tasks = firebase.firestore().collection('users').doc(user_id)
    return tasks
}


export function GetTasks_Leisures() {
    const tasks = firebase.firestore().collection('Leisures')
    return tasks
}

export function GetTasks_Health() {
    const tasks = firebase.firestore().collection('Health')
    return tasks
}


export async function CreateTask_Health(name_task_to_create) {
    firebase.firestore()
        .collection('Health')
        .add({
            text: name_task_to_create,
        })
        .then(() => {
            console.log('Task added!');
        });
}

export async function CreateTask_Work(name_task_to_create) {
    firebase.firestore()
        .collection('Work')
        .add({
            text: name_task_to_create,
        })
        .then(() => {
            console.log('Task added!');
        });
}

export async function CreateTask_Leisures(name_task_to_create) {
    firebase.firestore()
        .collection('Leisures')
        .add({
            text: name_task_to_create,
        })
        .then(() => {
            console.log('Task added!');
        });
}

export async function DeleteTask_Health(id_task_to_delete) {
    // I must have the name of the document to be deleted
    firebase.firestore()
        .collection('Health')
        .doc(id_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}

export async function DeleteTask_Work(id_task_to_delete) {

    firebase.firestore()
        .collection('Work')
        .doc(id_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}

export async function DeleteTask_Leisures(id_task_to_delete) {

    firebase.firestore()
        .collection('Leisures')
        .doc(id_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}
