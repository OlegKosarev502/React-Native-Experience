import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { INote, NoteFormStates } from '../../interfaces/intrefaces';
import { PreviewList } from '../previewList/PreviewList';
import { SimpleList } from '../simpleList/SimpleList';

// import { addNotes } from '../../store/actions';

enum DisplayOptions {
    list = "list",
    grid = "grid",
}

interface INoteListProps {
    notes: INote[];
    addNotes: any;
    setNoteToDisplay: (note: INote) => any;
    updateFormState: (state: NoteFormStates) => any;
    navigation: any;
}

interface INoteListState {
    display: DisplayOptions;
}

export class NoteList extends React.Component<INoteListProps, INoteListState> {
    constructor(props: INoteListProps) {
        super(props);
        this.state = {
            display: DisplayOptions.list,
        }
    }

    async componentDidMount() {
        try {
            const jsonValue = await AsyncStorage.getItem('@notes');
            const result = jsonValue != null ? JSON.parse(jsonValue) : null;
            // addNotes([result]);
            console.log(result);
        } catch (e) {
            console.log('Failed to load notes...');
        }
    }

    private updateDisplay = () => {
        const newDisplay = this.state.display === DisplayOptions.list ? DisplayOptions.grid : DisplayOptions.list;
        
        this.setState({
            display: newDisplay,
        });
    };

    private showDetails = (note: INote): void => {
        this.props.updateFormState(NoteFormStates.edit);
        this.props.setNoteToDisplay(note);
        this.props.navigation.navigate("Details");
    };

    private openNoteForm = (): void => {
        this.props.updateFormState(NoteFormStates.create);
        this.props.navigation.navigate("New note");
    };

    private getNotesInfo = (): string => {
        if (!this.props.notes || !this.props.notes.length) {
            return "No Records";
        }

        return this.props.notes.length === 1 ? "One Note" : `${this.props.notes.length} Notes`;
    };

    // const alo = async () => {
    //     try {
    //         const jsonValue = await AsyncStorage.getItem('@notes');
    //         const result = jsonValue != null ? JSON.parse(jsonValue) : null;
    //         console.log(result);
    //     } catch (e) {
    //         console.log('Failed to load notes...');
    //     }
    // };

    render() {
        return (
            <View style={styles.container}>
                {this.state.display === DisplayOptions.list && (
                    <SimpleList 
                        notes={this.props.notes}
                        showDetails={this.showDetails}
                    />
                ) || (
                    <PreviewList 
                        notes={this.props.notes}
                        showDetails={this.showDetails}
                    />
                )}

                <View style={styles.footer}>
                    <Icon
                        raised
                        name={this.state.display === DisplayOptions.list ? "table" : "list"}
                        type="font-awesome"
                        color="#f50"
                        onPress={this.updateDisplay}
                    />

                    <Text>
                        {this.getNotesInfo()}
                    </Text>

                    <Icon
                        raised
                        name="plus"
                        type="font-awesome"
                        color="#f50"
                        onPress={this.openNoteForm}
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    footer: {
        height: "14%",
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});