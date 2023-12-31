import {View, Text, Image, TouchableOpacity} from "react-native";
import {globalStyles} from "../global";
import logoImage from "../assets/logo.png";

import ico1 from "../assets/homeIcons/ico1.png";
import ico2 from "../assets/homeIcons/ico2.png";
import ico3 from "../assets/homeIcons/ico3.png";
import ico4 from "../assets/homeIcons/ico4.png";
import ico5 from "../assets/homeIcons/ico5.png";
import ico6 from "../assets/homeIcons/ico6.png";
import ico7 from "../assets/homeIcons/ico7.png";
import ico8 from "../assets/homeIcons/ico8.png";
import ico9 from "../assets/homeIcons/ico9.png";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.mainView}>
      <View style={globalStyles.logoWrapper}>
        <Image
          source={logoImage}
          style={globalStyles.logo}
        />
      </View>
      <View style={globalStyles.homeIconsWrapper}>
        <View style={globalStyles.homeRow}>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("Events")}>
              <Image
                source={ico1}
                style={{width: 100, height: 100}}
              />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("AddEvent")}>
              <Image
                source={ico2}
                style={{width: 100, height: 100}}
              />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("Profiles")}>
            <Image
              source={ico3}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.homeRow}>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("Chat")}>
            <Image
              source={ico4}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("MyProfile")}>
            <Image
              source={ico5}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("MyEvents")}>
            <Image
              source={ico6}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.homeRow}>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("Notifications")}>
            <Image
              source={ico7}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon} onPress={() => navigation.navigate("Payments")}>
            <Image
              source={ico8}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico9}
              style={{width: 100, height: 100}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[globalStyles.footerInfo, globalStyles.homeFooter]}>
        <View>
          <Text style={globalStyles.headingText}>Wiek</Text>
        </View>
        <View>
          <Text style={globalStyles.headingText}>Odległość</Text>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen