import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';
import { useState } from 'react';
import { GetTasks_Work, CreateTask_Work, DeleteTask_Work } from '../firebase_functions/utility_functions';


function get_doc_id(task_name, mapping_task_doc_id) {
    var arrayLength = mapping_task_doc_id.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(mapping_task_doc_id[i]);
        if (mapping_task_doc_id[i].task_name_parsed == task_name) {
            return mapping_task_doc_id[i].id;
        }
    }
}

export default function Tab_Work(props) {
    const [task, setTask] = useState();
    const task_array = [];
    const mapping_task_doc_id = [];
    if (props.text == "Work") {
        console.log(GetTasks_Work(props.uid['0']));
        var tasks_list = GetTasks_Work(props.uid['0']).get().then((querySnapshot) => {
            const tempDoc = querySnapshot.docs.map((doc) => {
                const text_taskoune = { ...doc.data() };
                const myJSON = JSON.stringify(text_taskoune);
                if (!task_array.includes(myJSON.substring(9, myJSON.length - 2).replace('\\"', "").replace('\"', "").replace('\\', ""))) {
                    const task_name_parsed = myJSON.substring(9, myJSON.length - 2).replace('\\"', "").replace('\"', "").replace('\\', "");
                    task_array.push(task_name_parsed)
                    mapping_task_doc_id.push({ id: doc.id, task_name_parsed })
                }
                return { id: doc.id, ...doc.data() }
            })
            return tempDoc;
        }
        );
    }

    const [taskItems, setTaskItems] = useState(task_array);
    console.log(taskItems);
    console.log(mapping_task_doc_id);

    // Put a props here taking the tasks from firebase and the function that creates a document in Firebase
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        CreateTask_Work(task);
        setTask(null);
    }

    // Add the delete function from firebase here
    const completeTask = (index, item) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        const doc_id = get_doc_id(item, mapping_task_doc_id)
        DeleteTask_Work(doc_id)
        setTaskItems(itemsCopy)
    }

    return (
        <View style={styles.container}>

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1
                }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.tasksWrapper}>
                    <Text style={styles.sectionTitle}>Today's tasks</Text>
                    <View style={styles.items}>
                        {
                            taskItems.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} onPress={() => completeTask(index, item)}>
                                        <Task text={item} />
                                    </TouchableOpacity>
                                )
                            }
                            )
                        }
                    </View>
                </View>
            </ScrollView>
            <KeyboardAvoidingView
                //  behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {},
});
