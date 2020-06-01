import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store/store';
import { TodoListContainer } from './Components/TodoList/todoListContainer';
import { TodoDetailsContainer } from './Components/TodoDetails/todoDetailsContainer';
import { TodoFormContainer } from './Components/TodoForm/todoFormContainer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="List"
            component={TodoListContainer}
            options={{ title: "List" }}
          />
          <Stack.Screen
            name="Details"
            component={TodoDetailsContainer}
            options={{ title: "Details" }}
          />
          <Stack.Screen
            name="Form"
            component={TodoFormContainer}
            options={{ title: "Form" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
