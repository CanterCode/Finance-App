import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./styles/styles";

export default function IndexScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Money Mate!</Text>
      <Text style={styles.subTitle}>
        Your friendly finance helper — calculate loans, split tips, plan your
        budget, and more.
      </Text>

      
    </View>
  );
}
