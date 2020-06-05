import 'react-native-gesture-handler';
import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './store/store';
import { TodoListContainer } from './Components/TodoList/todoListContainer';
import { TodoDetailsContainer } from './Components/TodoDetails/todoDetailsContainer';
import { TodoFormContainer } from './Components/TodoForm/todoFormContainer';

import { Header, Icon } from 'react-native-elements';

const Stack = createStackNavigator();

interface ILeftComponent {
  goBack: any;
}

const LeftComponent: FunctionComponent<ILeftComponent> = ({
  goBack
}) => {
  return (
    <Icon 
      type="font-awesome"
      name="angle-left"
      color="white"
      onPress={goBack}
      size={36}
    />
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;
            
              return (
                <Header
                  placement="left"
                  leftComponent={
                    previous && <LeftComponent goBack={navigation.goBack} />
                  }
                  centerComponent={{ text: title as string, style: { fontSize: 24, color: "white" } }}
                  rightComponent={{ icon: "menu", color: "white" }}
                  containerStyle={Platform.OS === "android" ? { justifyContent: "center", alignItems:"center", height: 60, paddingTop: 0} : {}}
                  backgroundColor="#f50"
                />
              );
            }
          }}
        >
          <Stack.Screen
            name="Notes"
            component={TodoListContainer}
            options={{ title: "Notes" }}
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
