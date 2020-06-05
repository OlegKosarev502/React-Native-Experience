import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Platform, Text } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import { Picker } from '../DateTimePicker/picker';

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
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');

  const createTodo = (): void => {
    const data = {
      title,
      description,
      date: dateString,
      time: timeString,
    };
    
    addTodo(data);
    navigation.navigate("Notes");
  };

  return (
    <Text>Form</Text>
    // <Container>
    //   <Content>
    //     <Form>
    //       <Item stackedLabel>
    //         <Label>Title</Label>
    //         <Input onChangeText={value => setTitle(value)} />
    //       </Item>

    //       <Item stackedLabel>
    //         <Label>Description</Label>
    //         <Input onChangeText={value => setDescription(value)} />
    //       </Item>
    //     </Form>

    //     {Platform.OS !== "ios" && (
    //       <Picker
    //         updateDate={(value) => setDateString(value)}
    //         updateTime={(value) => setTimeString(value)}
    //       />
    //     )}

    //     <Button
    //       block
    //       onPress={createTodo}
    //       style={styles.button}
    //     >
    //       <Text>CREATE TO-DO</Text>
    //     </Button>
    //   </Content>
    // </Container>
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