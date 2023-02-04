import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Switch,
  Button,
  TextInput,
} from "react-native";

const styles = StyleSheet.create({
  toDo: {
    flexDirection: "row",
    display: "flex",
  },
});

const ToDo = ({ text }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View>
      <Text>{text}</Text>
      <Switch
        onValueChange={() => setIsEnabled((previousState) => !previousState)}
        value={isEnabled}
      />
      <Button title="Delete" />
    </View>
  );
};

export default function ToDoPage() {
  const [text, setText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);
  return (
    <ScrollView>
      <TextInput onChangeText={setText} value={text} />
      <Button
        title="Submit"
        onPress={() => {
          if (text && text.length) {
            toDoList.push(text);
          }
          setText("");
        }}
      />
      {toDoList.map((toDo, index) => (
        <ToDo key={index} text={toDo} />
      ))}
    </ScrollView>
  );
}
