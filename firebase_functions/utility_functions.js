import firebase from '../config/firebaseDB';

export async function GetTasks_Work() {
    const tasks = firebase.firestore().collection('Work')
    return tasks
}


export async function GetTasks_Leisures() {
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

export async function DeleteTask_Health(index_task_to_delete) {
    // I must have the name of the document to be deleted
    firebase.firestore()
        .collection('Health')
        .doc(index_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}

export async function DeleteTask_Work(name_task_to_delete) {

    firebase.firestore()
        .collection('Work')
        .doc(name_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}

export async function DeleteTask_Leisures(name_task_to_delete) {

    firebase.firestore()
        .collection('Work')
        .doc(name_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}