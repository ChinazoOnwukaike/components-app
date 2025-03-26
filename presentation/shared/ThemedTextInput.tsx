import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";

type ThemedTextInputType = TextInputProps & {
  className?: string;
};

const ThemedTextInput = ({ className, ...rest }: TextInputProps) => {
  return (
    <TextInput
      className="py-4 px-2 text-black dark:text-white"
      placeholderTextColor="gray"
      {...rest}
    />
  );
};

export default ThemedTextInput;
