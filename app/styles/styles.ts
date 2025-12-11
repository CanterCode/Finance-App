import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#4CAF50", // green background for button
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});