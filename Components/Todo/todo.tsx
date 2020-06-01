import React, { FunctionComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { ITodo } from '../../interfaces/intrefaces';

interface ITodoProps {
  todoInfo: ITodo;
  showDetails: (todo: ITodo) => any;
  navigation: any;
}

export const Todo: FunctionComponent<ITodoProps> = ({
  todoInfo,
  showDetails,
  navigation,
}) => {
  const showTodoDetails = () => {
    showDetails(todoInfo);
    navigation.navigate("Details");
  };

  return (
    <TouchableOpacity
      onPress={showTodoDetails}
    >
      <View style={styles.container}>
        <Text style={styles.title}>
          { todoInfo.title }
        </Text>
      </View>
    </TouchableOpacity> 
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    minHeight: 42,
    marginBottom: 16,
    paddingLeft: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  title: {
    fontSize: 16,
  },
});