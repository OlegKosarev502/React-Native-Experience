import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import { ITodo } from '../../interfaces/intrefaces';
import { MainStyles } from '../../shared/mainStyles';

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
    <View style={MainStyles.container}>
      <Text style={MainStyles.header}>
        { data.title }
      </Text>

      <Text style={styles.description}>
        { data.description }
      </Text>

      <Button
        onPress={complete}
        title="Complete To-Do"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
  },
});