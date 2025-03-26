import { StatusBar } from "expo-status-bar";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemedText from "@/presentation/shared/ThemedText";
import { Platform } from "react-native";
import ThemedButton from "@/presentation/shared/ThemedButton";
import { router } from "expo-router";

const ModalWindow = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <ThemedText>Hola, soy un modal</ThemedText>

      <ThemedButton
        className="mb-3"
        onPress={() => router.push("/modal/modalWindow2")}
      >
        Another Modal
      </ThemedButton>
      <ThemedButton onPress={() => router.dismiss()}>Close</ThemedButton>

      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
    </ThemedView>
  );
};

export default ModalWindow;
