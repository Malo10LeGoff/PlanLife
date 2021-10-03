import firebase from '../config/firebaseDB';


export function GetTasks(user_id, category) {
    const tasks = firebase.firestore().collection('users').doc(user_id).collection(category);
    if (tasks.empty) {
        console.log('no documents found');
    }
    return tasks
}


export async function CreateTask(name_task_to_create, user_id, category) {
    firebase.firestore()
        .collection('users').doc(user_id).collection(category)
        .add({
            text: name_task_to_create,
        })
        .then(() => {
            console.log('Task added!');
        });
}


export async function DeleteTask(id_task_to_delete, user_id, category) {
    // I must have the name of the document to be deleted
    firebase.firestore()
        .collection('users')
        .doc(user_id).
        collection(category)
        .doc(id_task_to_delete)
        .delete()
        .then(() => {
            console.log('Task deleted!');
        });
}

export function get_doc_id(task_name, mapping_task_doc_id) {
    var arrayLength = mapping_task_doc_id.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(mapping_task_doc_id[i]);
        if (mapping_task_doc_id[i].task_name_parsed == task_name) {
            return mapping_task_doc_id[i].id;
        }
    }
}
