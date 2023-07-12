import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import useAuth from "./hooks/useAuth";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {

  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator