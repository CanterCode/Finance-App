import { Text, View } from "react-native";
import { styles } from "./styles/styles";
import Button from "../components/calcButton";

const CalculatorScreen = () => {
  return (
    <View style={styles.containerTwo}>
      <View style={styles.calcDisplay}>
        <Text style={styles.calcResult}>3223</Text>
      </View>
      <View style={styles.calcKeypad}>
        <Button title="C" type="top" />
        <Button title="⌫" type="top" />
        <Button title="%" type="top" />
        <Button title="÷" type="right" />
        <Button title="7" type="num" />
        <Button title="8" type="num" />
        <Button title="9" type="num" />
        <Button title="x" type="right" />
        <Button title="4" type="num" />
        <Button title="5" type="num" />
        <Button title="6" type="num" />
        <Button title="-" type="right" />
        <Button title="1" type="num" />
        <Button title="2" type="num" />
        <Button title="3" type="num" />
        <Button title="+" type="right" />
        <Button title="0" type="num" />
        <Button title="00" type="num" />
        <Button title="." type="num" />
        <Button title="=" type="right" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
