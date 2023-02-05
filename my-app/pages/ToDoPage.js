import { useEffect, useState } from "react";
import { ScrollView, Button, TextInput } from "react-native";
import { styles, stylesText } from "../styles";
import { ToDo } from "./ToDo";

export default function ToDoPage() {
  const [text, setText] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    console.log(toDoList);
  }, [toDoList]);
  return (
    <ScrollView>
      <TextInput style={stylesText.input} onChangeText={setText} value={text} />
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
