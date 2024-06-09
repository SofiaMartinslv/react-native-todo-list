import { Appbar, Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";

import { StackParamList } from "../../../App";
import { addTodo } from "../../../db";
import * as S from "./styles";
import { Text } from 'react-native';

type Props = NativeStackScreenProps<StackParamList, "AddTodo">;

function AddTodo({ navigation }: Props) {
  const [text, setText] = useState("");

  const handleAddTodo = async () => {
    await addTodo(text);
    setText('');
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.navigate("Home")} />
      </Appbar.Header>
      <S.Container>
        <S.TextInput
          value={text}
          onChangeText={(value) => setText(value)}
          label="Novo Todo"
          mode="outlined"
        />
        <S.Button
          contentStyle={{ flexDirection: "row-reverse" }}
          disabled={text.length < 1}
          icon="plus"
          mode="contained"
          onPress={handleAddTodo}
        >
          Salvar
        </S.Button>
      </S.Container>
    </>
  );
}

export default AddTodo;
