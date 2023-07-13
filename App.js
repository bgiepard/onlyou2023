import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native"
import { AuthProvider } from "./hooks/useAuth";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useCallback} from "react";
import {View} from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Primary': require('./assets/fonts/CaveatBrush-Regular.ttf'),
    'Secondary': require('./assets/fonts/CalibriRegular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{flex: 1, backgroundColor: '#ffffff'}}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator></StackNavigator>
        </AuthProvider>
      </NavigationContainer>
    </View>
  );
}