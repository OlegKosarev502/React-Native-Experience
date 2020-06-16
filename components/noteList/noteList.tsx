import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

import { INote, NoteFormStates } from '../../interfaces/intrefaces';

enum DisplayOptions {
  list = "list",
  grid = "grid",
}

interface INoteListProps {
  notes: INote[];
  showTodoDetails: (todo: INote) => any;
  updateFormState: any;
  navigation: any;
}

export const NoteList: FunctionComponent<INoteListProps> = ({
  notes,
  showTodoDetails,
  updateFormState,
  navigation,
}) => {
  const [display, setDisplay] = useState(DisplayOptions.list);

  const updateDisplay = () => {
    const newDisplay = display === DisplayOptions.list ? DisplayOptions.grid : DisplayOptions.list;
    return setDisplay(newDisplay);
  };

  const showDetails = (todo: INote): void => {
    updateFormState(NoteFormStates.edit);
    showTodoDetails(todo);
    navigation.navigate("Details");
  };

  const openTodoForm = (): void => {
    updateFormState(NoteFormStates.create);
    navigation.navigate("New note");
  };

  const getNotesInfo = (): string => {
    if (!notes || !notes.length) {
      return "No Records";
    }

    return notes.length === 1 ? "One Note" : `${notes.length} Notes`; 
  };

  const renderListItems = (notes: INote[]): React.ReactNode => {
    return notes && notes.map((note, index) => {
      return (
        <ListItem
          key={index}
          title={note.title}
          onPress={() => showDetails(note)}
          bottomDivider
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      {display === DisplayOptions.list && (
        <ScrollView>
          {renderListItems(notes)}
        </ScrollView>
      ) || (
        <FlatList
          data={notes}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={styles.listItem}
              >
                <TouchableOpacity
                  style={styles.itemContent}
                  onPress={() => showDetails(item)}
                  activeOpacity={0.5}
                >
                  <Text style={styles.itemTitle}>
                    {item.title}
                  </Text>

                  <Text numberOfLines={8}>
                    {item.description}
                  </Text>

                  <Text style={styles.itemDate}>
                    {item.creationDate.format('MMM DD, YYYY')}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={item => item.title}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      )}

      <View style={styles.footer}>
        <Icon
          raised
          name={display === DisplayOptions.list ? "table" : "list"}
          type="font-awesome"
          color="#f50"
          onPress={updateDisplay}
        />
        
        <Text>
          {getNotesInfo()}
        </Text>

        <Icon
          raised
          name="plus"
          type="font-awesome"
          color="#f50"
          onPress={openTodoForm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
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
  footer: {
    height: "14%",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});