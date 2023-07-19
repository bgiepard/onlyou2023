import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import useAuth from "./hooks/useAuth";
import Regulations from "./screens/Regulations";
import PrivatePolicy from "./screens/PrivatePolicy";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {

  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {user?.name ? (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </>
      ) : (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Regulamin" component={Regulations} />
          <Stack.Screen options={{ headerShown: false }} name="Polityka" component={PrivatePolicy} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        </>
      )}
    </Stack.Navigator>
  )
}

export default StackNavigator