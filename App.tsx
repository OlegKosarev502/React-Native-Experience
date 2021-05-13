import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store/store";
import { Navigator } from "./src/components/Navigator/Navigator";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
