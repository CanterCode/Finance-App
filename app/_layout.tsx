import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Money Mate",
        headerBackTitle: "Back",
      }}
    />
  );
}
