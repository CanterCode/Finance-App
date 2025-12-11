import { Text, View, StyleSheet } from "react-native";

export default function Index() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    backgroundColor: "#25292e",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  subTitle: {
    color: "rgba(255, 255, 255, 0.85)",
    fontSize: 24,
    lineHeight: 26,
    textAlign: "center",
  },
});
