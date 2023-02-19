import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from "react";
import {RootNavigator} from './src/navigation/RootNavigator';
import { NativeBaseProvider, Box, extendTheme } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {phyxiColorTheme, phyxiFontTheme} from './src/constants';

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('./assets/fonts/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf')
  });
  
  const theme = extendTheme({ 
    colors : phyxiColorTheme,
    fontConfig: phyxiFontTheme.fontConfig,
    fonts: phyxiFontTheme.fonts
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