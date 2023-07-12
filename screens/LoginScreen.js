import {View, Text, Button} from "react-native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { user, signInWithGoogle } = useAuth()
  return (
    <View>
      <Text>
        Login { user }
      </Text>
      <Button title="Login Google" onPress={signInWithGoogle}/>
    </View>
  )
}

export default LoginScreen