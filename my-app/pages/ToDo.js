import { useState } from "react";
import { View, Text, Switch } from "react-native";
import { styles, stylesText } from "../styles";

export const ToDo = ({ text }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      <Switch
        onValueChange={() => setIsEnabled((previousState) => !previousState)}
        value={isEnabled}
      />
    </View>
  );
};
