const phyxiColorTheme = {
    brandPrimary : {
      900: "#03989E",
      800: "#1ca2a7",
      700: "#35ACB1",
      600: "#4EB6BB",
      500: "#67C1C4"
    },
    

  }
  
  const phyxiFontTheme = {
    fontConfig: {
      Roboto: {
        300: {
          normal: "Roboto-Light",
          italic: "Roboto-LightItalic",
        },
        400: {
          normal: "Roboto-Regular",
        },
        500: {
          normal: "Roboto-Medium",
          italic: "Roboto-MediumItalic"
        },
        700: {
          normal: "Roboto-Bold",
          italic: "Roboto-BoldItalic"
        }
      }
    },
    fonts : {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    }
  }

const phyxiComponentsTheme = {
  Text: {
    baseStyle : {
      color: 'darkBlue.800'
    },
    variants: {
      light:{
        fontSize: 'sm',
        color: 'coolGray.400'
      }
    }
  },
  Pressable: {
    baseStyle : {
      _pressed: {
        bg:'none',
        opacity: 0.5
      },
      _light: {

      },
      _dark:{

      }
    }
  },
  Box : {
    variants: {
      base : {
        flex: 1,
        safeArea: true
      }
    }
  }
}
export {
    phyxiColorTheme,
    phyxiFontTheme,
    phyxiComponentsTheme
  }