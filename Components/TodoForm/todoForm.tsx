import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Platform, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

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

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const format = (value: Date) => {
    const dateFormat = "MMMM DD YYYY";
    // const timeFormat = "";

    return moment(value).format(dateFormat);
  };

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

          <Item stackedLabel>
            <Label>Description</Label>
            <Input onChangeText={value => setDescription(value)} />
          </Item>
        </Form>

        <View style={styles.pickerContainer}>
          <View>
            <Text style={styles.pickerTitle}>
              Date
            </Text>
          </View>
          <TouchableOpacity
            style={styles.pickerTouchable}
            onPress={showDatepicker}
          >
            <Text>
              {format(date)}
            </Text>
          </TouchableOpacity>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode as any}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

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
  },
  pickerContainer: {
    marginTop: 10,
    marginLeft: 16,
    borderBottomWidth: .5,
    borderStyle: 'solid',
    borderBottomColor: '#BBB',
  },
  pickerTitle: {
    color: '#666',
  },
  pickerTouchable: {
    height: 40,
    paddingTop: 16,
    paddingBottom: 12,
    justifyContent: 'flex-end',
  },
});