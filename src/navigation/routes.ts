const mapName = (name: string, container: typeof navigators) => {
    container[name] = name;
};

export const navigators = {}
mapName("BaseTabNavigation", navigators);
mapName("AuthenticationStack", navigators);

export const routes =  {
    SPLASH_SCREEN : {
        navigator: '',
        screen: 'SplashScreen'
    },
    SIGN_IN_SCREEN: {
        navigator: 'AuthenticationStack',
        screen: 'Signin'
    },
    SIGN_UP_SCREEN : {
        navigator : 'AuthenticationStack',
        screen: 'Signup'
    },
}