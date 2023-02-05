import { StyleSheet, View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles";

const TextSwitch = ({ isEnabled, setIsEnabled, text }) => (
  <View style={styles.container}>
    <Text style={styles.heading}>{text}</Text>
    <Switch onValueChange={setIsEnabled} value={isEnabled} />
  </View>
);

export default function Settings() {
  const [isSMSEnabled, setIsSMSEnabled] = useState(false);
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);

  const toggleSwitch = (setSwitch) =>
    setSwitch((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <TextSwitch
        isEnabled={isSMSEnabled}
        setIsEnabled={() => toggleSwitch(setIsSMSEnabled)}
        text="SMS"
      />
      <TextSwitch
        isEnabled={isEmailEnabled}
        setIsEnabled={() => toggleSwitch(setIsEmailEnabled)}
        text="Email"
      />
      <TextSwitch
        isEnabled={isPushEnabled}
        setIsEnabled={() => toggleSwitch(setIsPushEnabled)}
        text="Push"
      />
    </View>
  );
}
