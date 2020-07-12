import React, { FunctionComponent } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

import { INote } from '../../interfaces/intrefaces';

interface ISimpleListProps {
    notes: INote[];
    showDetails: any;
}

export const SimpleList: FunctionComponent<ISimpleListProps> = ({
    notes,
    showDetails,
}) => {
    return (
        <ScrollView>
            {notes.map((note: INote) => (
                <ListItem
                    key={note.id}
                    title={note.title}
                    onPress={() => showDetails(note)}
                    bottomDivider
                />
            ))}
        </ScrollView>
    );
};