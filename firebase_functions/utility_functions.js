import firebase from '../config/firebaseDB';

export async function GetTasks_Work() {
    const list_tasks_work = (await firebase.firestore().collection('Work').get());
    return Array.from(list_tasks_work.docs.map(doc => doc.data().text));
}


export async function GetTasks_Leisures() {
    const list_tasks_leisures = (await firebase.firestore().collection('Leisures').get());
    return Array.from(list_tasks_leisures.docs.map(doc => doc.data().text));
}

export async function GetTasks_Health() {
    firebase.firestore()
        .collection('Health')
        .get().docs
        .map(doc => doc.data().text)
        .then(function (result) {
            console.log(result);
            return result;
        });
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