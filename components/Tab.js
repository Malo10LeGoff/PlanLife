import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';
import { useState } from 'react';
import { GetTasks, CreateTask, DeleteTask, get_doc_id } from '../firebase_functions/utility_functions';





export default function Tab(props) {

    const [task, setTask] = useState();
    const task_array = [];
    const mapping_task_doc_id = [];
    var tasks_list = GetTasks(props.uid, props.text).get().then((querySnapshot) => {

        const tempDoc = querySnapshot.docs.map((doc) => {
            const text_task = JSON.stringify({ ...doc.data() });
            const task_name_parsed = text_task.substring(9, text_task.length - 2).replace('\\"', "").replace('\"', "").replace('\\', "");
            if (!task_array.includes(task_name_parsed)) {
                task_array.push(task_name_parsed)
                mapping_task_doc_id.push({ id: doc.id, task_name_parsed })
            }
            return { id: doc.id, ...doc.data() }
        })
        return tempDoc;
    }
    );

    const [taskItems, setTaskItems] = useState(task_array);

    function set_task_wrapper(text) {
        setTask(text);
    }

    // Put a props here taking the tasks from firebase and the function that creates a document in Firebase
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        CreateTask(task, props.uid, props.text);
        setTask(null);
    }

    // Add the delete function from firebase here
    const completeTask = (index, item) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        const doc_id = get_doc_id(item, mapping_task_doc_id)
        DeleteTask(doc_id, props.uid, props.text)
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
                    <View>
                        <TouchableOpacity style={styles.sectionTitle} onPress={() => set_task_wrapper('Write a task')}>
                            <Text style={styles.sectionSubTitle}>Check your tasks !</Text>
                        </TouchableOpacity>
                    </View>
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
                <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => set_task_wrapper(text)} />
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
        fontSize: 28,
        fontWeight: 'bold'
    },
    sectionSubTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 40
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
