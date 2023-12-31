import {View, Text, TouchableOpacity, Image} from "react-native";
import useAuth from "../hooks/useAuth";
import {globalStyles} from "../global";
import {useNavigation} from "@react-navigation/native";
import logoImage from "../assets/logo.png";

const LoginScreen = () => {
  const {  signInWithGoogle } = useAuth();
  const fb = require('../assets/fb.png');
  const google = require('../assets/google.png');
  const apple = require('../assets/apple.png');

  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Profile");
    // signInWithGoogle();
  }

  return (
    <View style={globalStyles.loginView}>
      <View style={globalStyles.logoWrapper}>
        <Image
          source={logoImage}
          style={globalStyles.logo}
        />
      </View>

      <View style={globalStyles.loginWrapper}>
        <Text style={[globalStyles.headingText, globalStyles.stylesHeading]}>
          Zaloguj się
        </Text>

        <TouchableOpacity style={globalStyles.loginButton} onPress={handleLogin}>
          <Image source={fb} style={{width: 30, height: 30}}/>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text style={[globalStyles.buttonText, globalStyles.loginButtonText]}>Zaloguj się przez Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.loginButton} onPress={handleLogin}>
          <Image source={google} style={{width: 30, height: 30}}/>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text style={[globalStyles.buttonText, globalStyles.loginButtonText]}>Zaloguj się przez Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={globalStyles.loginButton} onPress={handleLogin}>
          <Image source={apple} style={{width: 28, height: 30}}/>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text style={[globalStyles.buttonText, globalStyles.loginButtonText]}>Zaloguj się przez Apple</Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={globalStyles.loginFooterInfo}>
        <Text style={[globalStyles.headingText, globalStyles.loginHeadingInfo]}>Pamiętaj</Text>
        <Text style={globalStyles.footerText}>Logując się, akceptujesz <Text onPress={() => navigation.navigate("Regulamin")}><Text style={globalStyles.footerLink}>Regulamin.</Text></Text></Text>
        <Text style={globalStyles.footerText}>Informacje na temat sposobu, w jaki wykorzystujemy Twoje dane, znajdziesz w naszej <Text onPress={() => navigation.navigate("Polityka")}><Text style={globalStyles.footerLink}>Polityce prywatności.</Text></Text>
        </Text>
      </View>
    </View>
  )
}

export default LoginScreen