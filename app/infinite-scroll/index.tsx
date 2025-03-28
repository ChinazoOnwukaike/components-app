import { useThemeColor } from "@/hooks/useThemeColor";
import FadeInImage from "@/presentation/images/FadeInImage";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";

type ListItemType = {
  number: number;
};

const ListItem = ({ number }: ListItemType) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{
        height: 400,
        width: "100%",
      }}
    />
  );
};

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, "primary");

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };
  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View>
            <ActivityIndicator
              size={40}
              style={{
                height: 150,
                justifyContent: "center",
              }}
              color={primaryColor}
            />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;
