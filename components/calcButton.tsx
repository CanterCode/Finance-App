import { Text, TouchableOpacity } from "react-native";
import { styles } from "../app/styles/styles";
import { colors } from "../app/styles/colors"

const calcButton = ({
  title,
  type,
}: {
  title: string;
  type: "top" | "right" | "num";
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.calcButton,
        {
          backgroundColor:
            type === "top"
              ? colors.primary
              : type === "right"
              ? colors.secondary
              : type === "num"
              ? colors.card
              : "transparent",
        },
      ]}
      onPress={() => {}}
    >
      <Text style={[
        styles.calcButtonText,
        {
          color:
            type === "num"
              ? colors.secondary
              : "white",
        },
      ]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default calcButton;