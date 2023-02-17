import 'react-native-gesture-handler'
import React from "react";
import {RootNavigator} from './src/navigation/RootNavigator';
import { NativeBaseProvider, Box, extendTheme } from "native-base";

const phyxiColorTheme = {
  brandPrimary : {
    900: "#03989E",
    800: "#1ca2a7",
    700: "#35ACB1",
    600: "#4EB6BB",
    500: "#67C1C4"
  }
}

const theme = extendTheme(
  {colors : phyxiColorTheme}
)

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigator/>
      
    </NativeBaseProvider>
  );
}