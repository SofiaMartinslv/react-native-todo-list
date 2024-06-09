import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { StackParamList } from "../../../App";
import { deleteTodo, getAllTodos, updateComplete } from "../../../db";
import {
  FlatList,
  TouchableHighlight,
  View,
  Text,
  Platform,
} from "react-native";
import * as S from "./styles";
import { Checkbox, Icon, IconButton } from "react-native-paper";

type Props = NativeStackScreenProps<StackParamList, "Home">;

interface Todo {
  id: number;
  completed: boolean;
  description: string;
}

function Home({ navigation }: Props) {
  const isFocused = useIsFocused();
  const date = new Date();

  const [tasks, setTasks] = useState<Todo[]>([
    { id: 1, description: "Doctor Appointment", completed: true },
    { id: 2, description: "Meeting at School", completed: false },
  ]);

  useEffect(() => {
    getTodos();
  }, [isFocused]);

  const getTodos = async () => {
    const todos = await getAllTodos();
    setTasks(todos);
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodo(id);
    getTodos();
  };

  const toggleComplete = async (todo: Todo) => {
    await updateComplete(todo.id, !todo.completed);
    getTodos();
  };

  return (
    <>
      <S.Header>
        <S.Title>{format(date, "EE, dd,  MMMM", { locale: ptBR })}</S.Title>
      </S.Header>
      <S.Container>
        <S.Fab
          icon="plus"
          color="white"
          onPress={() => navigation.navigate("AddTodo")}
          style={{ zIndex: 9 }}
        />
        <FlatList
          style={{ width: "100%" }}
          data={tasks}
          renderItem={({ item }) => (
            <S.ListItem
              key={item.id}
              underlayColor="#DDDDDD"
              onPress={() => toggleComplete(item)}
            >
              <>
                <S.Item>
                  <Checkbox status={item.completed ? "checked" : "unchecked"} />
                  <Text>{item.description}</Text>
                </S.Item>
                <IconButton
                  icon="trash-can"
                  iconColor={"#152536"}
                  size={20}
                  onPress={() => handleDeleteTodo(item.id)}
                />
              </>
            </S.ListItem>
          )}
        />
      </S.Container>
    </>
  );
}

export default Home;
