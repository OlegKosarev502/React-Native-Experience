import AsyncStorage from '@react-native-community/async-storage';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { INote, NoteFormStates } from '../../interfaces/intrefaces';
import { uuidv4 } from '../../shared/uuid';

interface INoteFormProps {
    formState: NoteFormStates;
    note: INote;
    notes: INote[];
    setNotes: (note: INote[] | []) => any;
    removeNote: (noteId: string) => any;
    updateNote: (note: INote) => any;
    navigation: any;
}

export const NoteForm: FunctionComponent<INoteFormProps> = ({
    formState,
    note,
    notes,
    setNotes,
    removeNote,
    updateNote,
    navigation,
}) => {
    const [title, setTitle] = useState(
        formState === NoteFormStates.edit ? note.title : ''
    );
    const [description, setDescription] = useState(
        formState === NoteFormStates.edit ? note.description : ''
    );
    const [isFooterVisible, setFooterVisibility] = useState(true);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

        // cleanup function
        return () => {
            Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
            Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
        };
    }, []);

    const _keyboardDidShow = () => {
        setFooterVisibility(false);
    };

    const _keyboardDidHide = () => {
        setFooterVisibility(true);
    };

    const saveNotesInStorage = async (newNotes: INote[] | []) => {
        try {
            const jsonValue = JSON.stringify(newNotes);
            await AsyncStorage.setItem('@notes', jsonValue);
        } catch (e) {
            console.log('Failed to save notes...');
        }
    };

    const addRecord = async () => {
        const data = {
            id: uuidv4(),
            title: title || "No title",
            description: description || "No description",
            creationDate: new Date().toISOString(),
        };

        const newNotes = [...notes, data];

        setNotes(newNotes);
        await saveNotesInStorage(newNotes);

        navigation.navigate("Notes");
    };

    const removeRecord = (): void => {
        removeNote(note.id);
        navigation.navigate("Notes");
    };

    const updateRecord = (): void => {
        const data = Object.assign({}, note);
        data.title = title;
        data.description = description;

        updateNote(data);
        navigation.navigate("Notes");
    };

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    value={title}
                    placeholder="Title"
                    onChangeText={value => setTitle(value)}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.title}
                />

                <TextInput
                    value={description}
                    multiline={true}
                    placeholder="Description"
                    onChangeText={value => setDescription(value)}
                    onSubmitEditing={Keyboard.dismiss}
                    style={styles.description}
                />
            </View>

            {isFooterVisible && (
                <View style={styles.footer}>
                    {formState === NoteFormStates.edit && (
                        <Icon
                            raised
                            type="font-awesome"
                            name="close"
                            color="#f50"
                            onPress={removeRecord}
                        />
                    )}

                    <Icon
                        raised
                        type="font-awesome"
                        name={formState === NoteFormStates.create ? "check" : "save"}
                        color="#f50"
                        onPress={formState === NoteFormStates.create ? addRecord : updateRecord}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    form: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
    },
    title: {
        marginBottom: 12,
        fontSize: 32,
        fontWeight: "700",
    },
    description: {
        fontSize: 16,
    },
    footer: {
        height: "14%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
});