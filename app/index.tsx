import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./styles/styles";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Money Mate!</Text>
      <Text style={styles.subTitle}>
        Your friendly finance helper — calculate loans, split tips, plan your
        budget, and more.
      </Text>

      <Link href="/calculatorScreen" style={styles.button}>
        Calculator
      </Link>
      <Link href="/tipScreen" style={styles.button}>
        Tip Genie
      </Link>
      <Link href="/loanScreen" style={styles.button}>
        Loan Estimator
      </Link>
      <Link href="/budgetScreen" style={styles.button}>
        Budget Expert
      </Link>
    </View>
  );
}
