import { Text, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "./styles/styles";

export default function NotFoundScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Oops! Page not found.</Text>
      <Link href="/" style={styles.button}>
        Go Home
      </Link>
    </View>
  );
}
