import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './Task';
import { useState } from 'react';
import { GetTasks_Health, GetTasks_Work, GetTasks_Leisures, CreateTask_Health, DeleteTask_Health } from '../firebase_functions/utility_functions';



export default function Tab() {
    const [task, setTask] = useState();
    const init_value_health = GetTasks_Health();
    const [taskItems, setTaskItems] = useState(init_value_health);


    // Put a props here taking the tasks from firebase and the function that creates a document in Firebase
    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        CreateTask_Health(task);
        setTask(null);
    }

    // Add the delete function from firebase here
    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        DeleteTask_Health(index)
        setTaskItems(itemsCopy)
    }

    console.log(GetTasks_Health());

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
                                    <TouchableOpacity key={index} onPress={() => completeTask(index)}>
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
