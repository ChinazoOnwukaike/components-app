import { View, Text, ViewProps } from "react-native";
import React from "react";

type ThemedCardType = ViewProps & {
  className?: string;
};
const ThemedCard = ({ className, children }: ThemedCardType) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow-black/5 ${className}`}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
