import { Link } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles/styles";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to{"\n"}Money Mate!</Text>
      <Text style={styles.subTitle}>
        Your friendly finance helper — calculate loans, split tips, plan your
        budget, and more.
      </Text>

      <Link href="/calculatorScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/tipScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tip Genie</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/loanScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Loan Estimator</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/stocksScreen" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Stocks Screen</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}