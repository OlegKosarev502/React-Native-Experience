import React from "react";
import { Icon } from "react-native-elements";

interface BackButtonProps {
  goBack(): void;
}

export const BackButton: React.FC<BackButtonProps> = ({ goBack }) => {
  return (
    <Icon
      type="font-awesome"
      name="angle-left"
      color="white"
      onPress={goBack}
      size={32}
    />
  );
};
