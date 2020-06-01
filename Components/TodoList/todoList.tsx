import React, { FunctionComponent } from 'react';
import { View, Text, Button } from 'react-native';

import { MainStyles } from '../../shared/mainStyles';
import { Todo } from '../Todo/todo';
import { ITodo } from '../../interfaces/intrefaces';

// import { List, ListItem } from 'native-base';

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
  const openTodoForm = () => {
    navigation.navigate("Form");
  };

  return (
    <View style={MainStyles.container}>
      <Text style={MainStyles.header}>
        To-Do List:
      </Text>

      {/* <List>
        {todos && todos.map((todo, index) => {
          return (
            <ListItem key={index}>
              <Text>
                { todo.title }
              </Text>
            </ListItem>
          );
        })}
      </List> */}

      {todos && todos.map((todo, index) => {
        return (
          <Todo
            key={index}
            navigation={navigation}
            todoInfo={todo}
            showDetails={showTodoDetails}
          />
        );
      })}

      <Button
        onPress={openTodoForm}
        title="Add To-Do"
      />
    </View>
  );
};