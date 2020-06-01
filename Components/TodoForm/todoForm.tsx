import React, { FunctionComponent, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

import { MainStyles } from '../../shared/mainStyles';

interface ITodoFormProps {
  addTodo: any;
  navigation: any;
}

export const TodoForm: FunctionComponent<ITodoFormProps> = ({
  addTodo,
  navigation,
}) => {
  const [text, setText] = useState('');

  return (
    <View style={MainStyles.container}>
      <Text style={MainStyles.header}>
        To-Do Form:
      </Text>

      <TextInput
        value={text}
        onChangeText={value => setText(value)}
        placeholder={"To-Do Title"}
        style={styles.titleInput}
      />

      <Button
        onPress={() => {
          addTodo({
            title: text,
            description: text,
          })
          navigation.navigate("List");
        }}
        title="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    height: 40,
    paddingLeft: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
});