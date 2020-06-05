import React, { FunctionComponent, useState, useEffect } from 'react';
import { StyleSheet, Platform, ScrollView } from 'react-native';
import {
  Spinner,
  Container,
  Text,
  List,
  ListItem,
  Button,
} from 'native-base';
import * as Font from 'expo-font';
import { Icon } from 'react-native-elements'

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
    <Container >
      <ScrollView style={styles.scrollView}>
        <List>
          {renderListItems(todos)}
        </List>
      </ScrollView>

      {Platform.OS === "ios" && (
        <Button block onPress={openTodoForm} style={styles.iosButton}>
          <Text>Add To-Do</Text>
        </Button>
      ) || (
        <Icon
          raised
          name="plus"
          type="font-awesome"
          color="#f50"
          size={26}
          onPress={openTodoForm}
          containerStyle={styles.androidIcon}
        />
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  spiner: {
    flex: 1,
    alignSelf: "center",
  },
  scrollView: {
    maxHeight: "85%",
    overflow: "hidden",
  },
  androidIcon: {
    position: "absolute",
    bottom: "2%",
    right: "4%",
  },
  iosButton: {
    marginTop: 20,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#f50",
  },
});