import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from "react";
import {RootNavigator} from './src/navigation/RootNavigator';
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {phyxiColorTheme, phyxiComponentsTheme, phyxiFontTheme} from './src/constants';

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


const quickSandConfig = {
  'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
  'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
  'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
  'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
  'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf')
}
const robotoConfig : {[name: string] : string} = {
    'Roboto-Light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
    'Roboto-LightItalic': require('./assets/fonts/Roboto/Roboto-LightItalic.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-MediumItalic' : require('./assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
    'Roboto-Regular' : require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Thin' : require('./assets/fonts/Roboto/Roboto-Thin.ttf'),
    'Roboto-ThinItalic' : require('./assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
    'Roboto-Bold' : require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-BoldItalic' : require('./assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
}

export default function App() {
  const [fontsLoaded] = useFonts(robotoConfig);
  
  const theme = extendTheme({ 
    colors : phyxiColorTheme,
    fontConfig: phyxiFontTheme.fontConfig,
    fonts: phyxiFontTheme.fonts,
    components: phyxiComponentsTheme
  })

  React.useEffect(()=> {
    async function preventAutoHide() {
      await SplashScreen.preventAutoHideAsync();
    }
    preventAutoHide();

    if(fontsLoaded){
      console.log("Done")
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        <RootNavigator/>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}