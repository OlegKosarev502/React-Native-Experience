import React, { FunctionComponent, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base';

interface ITodoFormProps {
  addTodo: any;
  navigation: any;
}

export const TodoForm: FunctionComponent<ITodoFormProps> = ({
  addTodo,
  navigation,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createTodo = (): void => {
    const data = {
      title,
      description,
    };
    
    addTodo(data);
    navigation.navigate("List");
  };

  return (
    <Container>
      <Content>
        <Form>
          <Item stackedLabel>
            <Label>Title</Label>
            <Input onChangeText={value => setTitle(value)} />
          </Item>

          <Item stackedLabel last>
            <Label>Description</Label>
            <Input onChangeText={value => setDescription(value)} />
          </Item>
        </Form>

        <Button
          block
          onPress={createTodo}
          style={styles.button}
        >
          <Text>CREATE TO-DO</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 32,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: "#f50",
  },
});