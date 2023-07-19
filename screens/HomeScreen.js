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

const HomeScreen = () => {
  return (
    <View style={globalStyles.homeView}>
      <View style={globalStyles.logoWrapper}>
        <Image
          source={logoImage}
          style={globalStyles.logo}
        />
      </View>
      <View style={globalStyles.homeIconsWrapper}>
        <View style={globalStyles.homeRow}>
          <TouchableOpacity style={globalStyles.homeIcon}>
              <Image
                source={ico1}
                style={{width: 60, height: 60}}
              />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
              <Image
                source={ico2}
                style={{width: 60, height: 60}}
              />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico3}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.homeRow}>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico4}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico5}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico6}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.homeRow}>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico7}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico8}
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.homeIcon}>
            <Image
              source={ico9}
              style={{width: 60, height: 60}}
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