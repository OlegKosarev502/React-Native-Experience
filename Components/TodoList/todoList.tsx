import React, { FunctionComponent } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'

import { ITodo } from '../../interfaces/intrefaces';

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
      <ScrollView style={styles.list}>
        {renderListItems(todos)}
      </ScrollView>

      <View style={styles.footer}>
        <Text>
          {getNotesInfo()}
        </Text>

        <Icon
          raised
          name="plus"
          type="font-awesome"
          color="#f50"
          onPress={openTodoForm}
          containerStyle={styles.icon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  list: {
    height: "86%",
    overflow: "hidden",
  },
  footer: {
    height: "14%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: "4%",
  },
});