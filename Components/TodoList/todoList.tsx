import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

import { ITodo } from '../../interfaces/intrefaces';

enum Display {
  list = "list",
  grid = "grid",
}

interface ITodoListProps {
  todos: ITodo[];
  showTodoDetails: (todo: ITodo) => any;
  navigation: any;
}

export const TodoList: FunctionComponent<ITodoListProps> = ({
  todos,
  showTodoDetails,
  navigation,
}) => {
  const [display, setDisplay] = useState(Display.list);

  const updateDisplay = () => {
    const newDisplay = display === Display.list ? Display.grid : Display.list;
    return setDisplay(newDisplay);
  };

  const showDetails = (todo: ITodo): void => {
    showTodoDetails(todo);
    navigation.navigate("Details");
  };

  const openTodoForm = (): void => {
    navigation.navigate("Form");
  };

  const getNotesInfo = (): string => {
    if (!todos || !todos.length) {
      return "No Records";
    }

    return todos.length === 1 ? "One Note" : `${todos.length} Notes`; 
  };

  const renderListItems = (todos: ITodo[]): React.ReactNode => {
    return todos && todos.map((todo, index) => {
      return (
        <ListItem
          key={index}
          title={todo.title}
          onPress={() => showDetails(todo)}
          bottomDivider
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      {display === Display.list && (
        <ScrollView>
          {renderListItems(todos)}
        </ScrollView>
      ) || (
        <FlatList
          data={todos}
          renderItem={({ item, index }) => {
            return (
              <View
                key={index}
                style={styles.listItem}
              >
                <TouchableOpacity
                  style={styles.itemContent}
                  onPress={() => showDetails(item)}
                >
                  <Text style={styles.itemTitle}>
                    {item.title}
                  </Text>

                  <Text numberOfLines={8}>
                    {item.description}
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
          name={display === Display.list ? "table" : "list"}
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
    borderRadius: 30,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
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