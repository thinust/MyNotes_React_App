
import { NavigationContainer } from "@react-navigation/native";
import { SignupUi } from "./signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SigninUi } from "./signin";
import { Noteview } from "./noteview";
import { Addnote } from "./addNote";

const Stack = createNativeStackNavigator();

function App() {
  const ui = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signin" component={SigninUi} options={{headerShown:false,animation:"fade"}}/>
        <Stack.Screen name="signup" component={SignupUi} options={{headerShown:false,animation:"fade"}}/>
        <Stack.Screen name="noteview" component={Noteview}  options={{headerShown:false,animation:"fade"}}/>
        <Stack.Screen name="addNote" component={Addnote}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  return ui;
}
export default App;


