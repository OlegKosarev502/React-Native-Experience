import React, { FunctionComponent, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import {
  Spinner,
  Container,
  Content,
  Text,
  List,
  ListItem,
  Button
} from 'native-base';
import * as Font from 'expo-font';

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      });

      setIsReady(true);
    }

    loadFonts();
  }, []);

  const showDetails = (todo: ITodo): void => {
    showTodoDetails(todo);
    navigation.navigate("Details");
  };

  const openTodoForm = (): void => {
    navigation.navigate("Form");
  };

  const renderListItems = (todos: ITodo[]): React.ReactNode => {
    if (!todos) {
      return null;
    }

    return todos.map((todo, index) => {
      return (
        <ListItem
          key={index}
          button={true}
          onPress={() => showDetails(todo)}
        >
          <Text>
            {todo.title}
          </Text>
        </ListItem>
      );
    });
  };

  if (!isReady) {
    return (
      <Spinner style={styles.spiner}/>
    );
  }

  return (
    <Container>
      <Content>
        <List>
          <ListItem itemHeader>
            <Text>TO-DO LIST</Text>
          </ListItem>

          {renderListItems(todos)}
        </List>

        <Button block onPress={openTodoForm} style={styles.button}>
          <Text>Add To-Do</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  spiner: {
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
  },
});