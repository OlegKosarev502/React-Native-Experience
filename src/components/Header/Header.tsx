import React from "react";
import { Header } from "react-native-elements";
import { Route } from "@react-navigation/native";
import { Scene } from "@react-navigation/stack/lib/typescript/src/types";

import { BackButton } from "../BackButton/BackButton";
import { SearchButton } from "../SearchButton/SearchButton";
import { colorPrimary } from "../../constants/styles";

interface HeaderComponentProps {
  title: string;
  goBack(): void;
  previous?: Scene<Route<string>>;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  title,
  goBack,
  previous,
}) => (
  <Header
    placement="center"
    leftComponent={previous && <BackButton goBack={goBack} />}
    centerComponent={{
      text: title,
      style: { fontSize: 24, color: "white" },
    }}
    rightComponent={<SearchButton />}
    rightContainerStyle={{
      justifyContent: "center",
    }}
    backgroundColor={colorPrimary}
  />
);
