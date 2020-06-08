import React, { FunctionComponent, useState, useEffect } from 'react';
import { Keyboard, StyleSheet, View, TextInput } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import { Picker } from '../DateTimePicker/picker';

interface ITodoFormProps {
  addTodo: any;
  navigation: any;
}

export const TodoForm: FunctionComponent<ITodoFormProps> = ({
  addTodo,
  navigation,
}) => {
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
      title: "...",
      description,
    };
    
    addTodo(data);
    navigation.navigate("Notes");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          multiline={true}
          placeholder="Description"
          onChangeText={value => setDescription(value)}
          onSubmitEditing={Keyboard.dismiss}
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
    padding: 10,
    paddingTop: 20,
    backgroundColor: "white",
  },
  footer: {
    height: "14%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});