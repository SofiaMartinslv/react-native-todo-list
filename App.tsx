import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

import Home from "./src/screens/Home/Home";
import AddTodo from "./src/screens/AddTodo/AddTodo";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator<StackParamList>();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#152536"
  },
};

export type StackParamList = {
  Home: undefined;
  AddTodo: undefined;
};

function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddTodo" component={AddTodo} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default App;
