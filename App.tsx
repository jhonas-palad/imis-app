import 'react-native-reanimated';
import 'react-native-gesture-handler';
import React from "react";

import Navigator from './src/navigation/Navigator';
import { NativeBaseProvider, extendTheme } from "native-base";
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {brandColor, phyxiColorTheme, phyxiComponentsTheme, phyxiFontTheme, robotoConfig} from './src/constants';


import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';




export default function App() {
  const [fontsLoaded] = useFonts(robotoConfig);
  
  const theme = extendTheme({ 
    colors : brandColor,
    fontConfig: phyxiFontTheme.fontConfig,
    fonts: phyxiFontTheme.fonts,
    components: phyxiComponentsTheme
  })

  React.useEffect(()=> {
    (async ()=> {
      await SplashScreen.preventAutoHideAsync();
    })();

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
        <Navigator/>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}