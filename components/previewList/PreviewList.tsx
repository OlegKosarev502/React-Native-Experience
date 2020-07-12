import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { INote } from '../../interfaces/intrefaces';

interface IPreviewListProps {
    notes: INote[];
    showDetails: any;
}

export const PreviewList: FunctionComponent<IPreviewListProps> = ({
    notes,
    showDetails,
}) => {
    const renderFlatListItems = (note: INote) => {
        return (
            <View
                key={note.id}
                style={styles.listItem}
            >
                <TouchableOpacity
                    style={styles.itemContent}
                    onPress={() => showDetails(note)}
                    activeOpacity={0.5}
                >
                    <Text style={styles.itemTitle}>
                        {note.title}
                    </Text>

                    <Text numberOfLines={8}>
                        {note.description}
                    </Text>

                    <Text style={styles.itemDate}>
                        {moment(note.creationDate).format('MMM DD, YYYY')}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <FlatList
            data={notes}
            renderItem={({ item }) => renderFlatListItems(item)}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.grid}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "white",
    },
    listItem: {
        flex: 1,
        height: 250,
        padding: 8,
    },
    itemContent: {
        flex: 1,
        alignItems: "center",
        padding: 12,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ccc",
        borderRadius: 20,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 6,
    },
    itemDate: {
        position: "absolute",
        bottom: 12,
        left: 12,
        fontSize: 12,
        color: "gray",
    },
});