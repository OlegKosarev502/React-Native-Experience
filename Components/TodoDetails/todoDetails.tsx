import React, { FunctionComponent } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  H1,
  Text,
  Card,
  CardItem,
  Body,
  Button
} from 'native-base';

import { ITodo } from '../../interfaces/intrefaces';

interface ITodoDetailsProps {
  data: ITodo;
  completeTodo: (todo: ITodo) => any;
  navigation: any;
}

export const TodoDetails: FunctionComponent<ITodoDetailsProps> = ({
  data,
  completeTodo,
  navigation,
}) => {
  const complete = () => {
    completeTodo(data);
    navigation.navigate("List");
  };

  return (
    <Container>
      <Content style={styles.content}>
        <H1 style={styles.header}>
          { data.title }
        </H1>

        <Card>
          <CardItem header>
            <Text style={styles.cardHeader}>
              Description
            </Text>
          </CardItem>

          <CardItem>
            <Body>
              <Text>
                { data.description }
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Button
          block
          onPress={complete}
          style={styles.button}
        >
          <Text>COMPLETE</Text>
        </Button>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
  },
  header: {
    marginBottom: 8,
  },
  cardHeader: {
    fontWeight: "700",
  },
  button: {
    marginTop: 32,
  },
});