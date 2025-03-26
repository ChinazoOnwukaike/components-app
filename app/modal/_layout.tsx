import { Stack } from "expo-router";
import { View, Text } from "react-native";

const ModalLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modalWindow"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="modalWindow2"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default ModalLayout;

//to make layout the default, must change routes to be modal and not modal/index
