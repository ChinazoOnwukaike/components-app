import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Link, router } from "expo-router";
import { View, Text } from "react-native";

const ModalScreen = () => {
  return (
    <ThemedView>
      <Link asChild href="/modal/modalWindow" className="mx-4">
        <Text className="text-light-text dark:text-dark-text my-2 text-xl">
          Open Modal
        </Text>
      </Link>

      <ThemedButton
        onPress={() => router.push("/modal/modalWindow")}
        className="mx-4"
      >
        Open Modal
      </ThemedButton>
    </ThemedView>
  );
};
export default ModalScreen;
