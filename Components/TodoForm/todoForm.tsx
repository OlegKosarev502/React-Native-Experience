import React, { FunctionComponent, useState, useEffect } from 'react';
import moment from 'moment';
import { Keyboard, StyleSheet, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

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
  const [isFooterVisible, setFooterVisibility] = useState(true);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setFooterVisibility(false);
  };

  const _keyboardDidHide = () => {
    setFooterVisibility(true);
  };

  const createTodo = (): void => {
    const data = {
      title: title || "No title",
      description: description || "No description",
      creationDate: moment(),
    };
    
    addTodo(data);
    navigation.navigate("Notes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={title}
          placeholder="Title"
          onChangeText={value => setTitle(value)}
          onSubmitEditing={Keyboard.dismiss}
          style={styles.title}
        />

        <TextInput
          value={description}
          multiline={true}
          placeholder="Description"
          onChangeText={value => setDescription(value)}
          onSubmitEditing={Keyboard.dismiss}
          style={styles.description}
        />
      </View>

      {isFooterVisible && (
        <View style={styles.footer}>
          <Icon
            raised
            type="font-awesome"
            name="image"
            color="#f50"
            onPress={createTodo}
          />

          <Icon
            raised
            type="font-awesome"
            name="check"
            color="#f50"
            onPress={createTodo}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  form: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    marginBottom: 12,
    fontSize: 32,
    fontWeight: "700",
  },
  description: {
    fontSize: 16,
  },
  footer: {
    height: "14%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});