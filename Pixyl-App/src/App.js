import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCREENS
import ChatBot from "./screens/ChatBot";
import VoiceBot from "./screens/VoiceBot";
import Settings from "./screens/Settings";
import AskAccount from "./screens/AskAccount";
import Login from "./screens/Login";
import BotIntroduce from "./screens/BotIntroduce";
import Finish from "./screens/SignUp/Finish";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Finish" component={Finish} />
        
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name="VoiceBot" component={VoiceBot} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AskAccount" component={AskAccount} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BotIntroduce" component={BotIntroduce} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
