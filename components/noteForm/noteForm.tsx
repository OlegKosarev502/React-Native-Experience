import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
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

interface INoteFormState {
    title: string;
    description: string | undefined;
    isFooterVisible: boolean;
}

class NoteForm extends React.Component<INoteFormProps, INoteFormState> {
    constructor(props: INoteFormProps) {
        super(props);
        this.state = {
            title: this.props.formState === NoteFormStates.edit ? this.props.note.title : '',
            description: this.props.formState === NoteFormStates.edit ? this.props.note.description : '',
            isFooterVisible: true,
        };
    }

    componentDidMount() {
        Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
    }

    componentWillUnmount() {
        Keyboard.removeListener("keyboardDidShow", this.keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", this.keyboardDidHide);
    }

    private keyboardDidShow = () => {
        this.setState({
            isFooterVisible: false,
        });
    };

    private keyboardDidHide = () => {
        this.setState({
            isFooterVisible: true,
        });
    };

    private saveNotesInStorage = async (notes: INote[] | []) => {
        try {
            const jsonValue = JSON.stringify(notes);
            await AsyncStorage.setItem('@notes', jsonValue);
        } catch(error) {
            console.log('Failed to save notes...');
        }
    };

    private addNote = async () => {
        const note = {
            id: uuidv4(),
            title: this.state.title || "No title",
            description: this.state.description || "No description",
            creationDate: new Date().toISOString(),
        };

        const notes = [...this.props.notes, note];

        this.props.setNotes(notes);
        await this.saveNotesInStorage(notes);

        this.props.navigation.navigate("Notes");
    };

    private removeNote = (): void => {
        this.props.removeNote(this.props.note.id);
        this.props.navigation.navigate("Notes");
    };

    private updateNote = (): void => {
        const data = Object.assign({}, this.props.note);
        data.title = this.state.title;
        data.description = this.state.description;

        this.props.updateNote(data);
        this.props.navigation.navigate("Notes");
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        value={this.state.title}
                        placeholder="Title"
                        onChangeText={value => this.setState({ title: value })}
                        onSubmitEditing={Keyboard.dismiss}
                        style={styles.title}
                    />
    
                    <TextInput
                        value={this.state.description}
                        multiline={true}
                        placeholder="Description"
                        onChangeText={value => this.setState({ description: value })}
                        onSubmitEditing={Keyboard.dismiss}
                        style={styles.description}
                    />
                </View>
    
                {this.state.isFooterVisible && (
                    <View style={styles.footer}>
                        {this.props.formState === NoteFormStates.edit && (
                            <Icon
                                raised
                                type="font-awesome"
                                name="close"
                                color="#f50"
                                onPress={this.removeNote}
                            />
                        )}
    
                        <Icon
                            raised
                            type="font-awesome"
                            name={this.props.formState === NoteFormStates.create ? "check" : "save"}
                            color="#f50"
                            onPress={this.props.formState === NoteFormStates.create ? this.addNote : this.updateNote}
                        />
                    </View>
                )}
            </View>
        );
    }
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

export default NoteForm;
