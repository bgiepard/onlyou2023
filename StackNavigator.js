import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import {globalStyles} from "./global";

import HomeScreen from "./screens/HomeScreen";
import Events from "./screens/Events";
import AddEvent from "./screens/AddEvent";
import MatchingView from "./screens/MatchingView";

import ChatAll from "./screens/ChatAll";
import MyProfile from "./screens/MyProfile";
import MyEvents from "./screens/MyEvents"

import Notifications from "./screens/Nofitications";
import Payments from "./screens/Payments";

import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import useAuth from "./hooks/useAuth";
import Regulations from "./screens/Regulations";
import PrivatePolicy from "./screens/PrivatePolicy";


const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const { user } = useAuth();

  return (
    <View style={globalStyles.mainView}>
      <Stack.Navigator>
        {user?.name ? (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Events" component={Events} />
            <Stack.Screen options={{ headerShown: false }} name="AddEvent" component={AddEvent} />
            <Stack.Screen options={{ headerShown: false }} name="Profiles" component={MatchingView} />
            <Stack.Screen options={{ headerShown: false }} name="Chat" component={ChatAll} />
            <Stack.Screen options={{ headerShown: false }} name="MyProfile" component={MyProfile} />
            <Stack.Screen options={{ headerShown: false }} name="MyEvents" component={MyEvents} />
            <Stack.Screen options={{ headerShown: false }} name="Notifications" component={Notifications} />
            <Stack.Screen options={{ headerShown: false }} name="Payments" component={Payments} />

            <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Regulamin" component={Regulations} />
            <Stack.Screen options={{ headerShown: false }} name="Polityka" component={PrivatePolicy} />
          </>
        )}
      </Stack.Navigator>
    </View>
  )
}

export default StackNavigator