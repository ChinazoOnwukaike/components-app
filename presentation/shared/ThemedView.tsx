import { useThemeColor } from "@/hooks/useThemeColor";
import { View, Text, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ThemedViewType = ViewProps & {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
};
const ThemedView = ({
  style,
  className,
  margin = false,
  safe = false,
  bgColor,
  children,
}: ThemedViewType) => {
  const backgroundColor = bgColor ?? useThemeColor({}, "background");
  const safeArea = useSafeAreaInsets();

  return (
    // className="bg-light-background dark:bg-dark-background"
    <View
      style={[
        {
          backgroundColor,
          flex: 1,
          padding: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};

export default ThemedView;
