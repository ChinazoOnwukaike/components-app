import { useAnimation } from "@/hooks/useAnimation";
import { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
  Image,
  Animated,
} from "react-native";

type FadeInImageType = {
  uri: string;
  style: StyleProp<ImageStyle>;
};

const FadeInImage = ({ uri, style }: FadeInImageType) => {
  const [isLoading, setIsLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color="grey"
          size={30}
        />
      ) : null}
      <Animated.Image
        source={{ uri }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
};

export default FadeInImage;
