import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

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
    navigation.navigate("Notes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text h1>
          {data.title}
        </Text>

        <Text style={styles.description}>
          {data.description}
        </Text>
      </View>

      <View style={styles.footer}>
        <Icon
          raised
          type="font-awesome"
          name="close"
          color="#f50"
          onPress={complete}
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
  content: {
    height: "86%",
    padding: 10,
    backgroundColor: "white"
  },
  footer: {
    height: "14%",
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: "4%",
  },
  description: {
    marginTop: 12,
    fontSize: 16,
  }
});