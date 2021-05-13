import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HeaderComponent } from "../Header/Header";
import { NoteListContainer } from "../NoteList/NoteList.container";
import { NoteFormContainer } from "../NoteForm/NoteForm.container";
import { Screens } from "../../interfaces/intrefaces";

const Stack = createStackNavigator();

export const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({ scene, previous, navigation }) => {
            const { headerTitle, title } = scene.descriptor.options;
            const routeName = scene.route.name;

            return (
              <HeaderComponent
                previous={previous}
                title={String(headerTitle || title || routeName)}
                goBack={navigation.goBack}
              />
            );
          },
        }}
      >
        <Stack.Screen
          name={Screens.Notes}
          component={NoteListContainer}
          options={{ title: "Notes" }}
        />
        <Stack.Screen
          name={Screens.Details}
          component={NoteFormContainer}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name={Screens.NewNote}
          component={NoteFormContainer}
          options={{ title: "New note" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
