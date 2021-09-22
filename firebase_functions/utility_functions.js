import firebase from '../config/firebaseDB';

export async function GetTasks_Work() {
    const list_tasks_work = (await firebase.firestore().collection('Work').get());
    return list_tasks_work.docs.map(doc => doc.data());
}


export async function GetTasks_Leisures() {
    const list_tasks_leisures = (await firebase.firestore().collection('Health').get());
    return list_tasks_leisures.docs.map(doc => doc.data());
}

export async function GetTasks_Health() {
    const list_tasks_health = (await firebase.firestore().collection('Leisures').get());
    return list_tasks_health.docs.map(doc => doc.data());
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