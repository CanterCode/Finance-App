import { Text, View, Image } from "react-native";
import { styles } from "./styles/styles";

const tipGenieImage = require("../assets/images/tipGenie.png");
const genieOne = require("../assets/images/genieOne.png")

const TipScreen = () => {
  return (
    <View style={styles.genieContainer}>
        <Image source={tipGenieImage} style={styles.tipGenieImage} />
        <Text style={styles.titleSmall}>{"Hi! I'm your Tip Genie ✨"}</Text>
      <View style={styles.stepsContainer}>
        <View>
          <Text style={styles.step}>1. Choose the service.</Text>
          <Text style={styles.step}>2. Enter the total bill.</Text>
        </View>
        <View>
          <Text style={styles.step}>3. Rate the experience.</Text>
          <Text style={styles.step}>4. Get the perfect tip!</Text>
        </View>
      </View>
    </View>
  );
};

export default TipScreen;
