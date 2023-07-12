import {View, Text} from "react-native";
// import {useNavigation} from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const HomeScreen = () => {
  // const navigation = useNavigation();
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>
        Home Profil zapisany
      </Text>
      <Text>
       {JSON.stringify(user, 0, 2)}
      </Text>
    </View>
  )
}

export default HomeScreen