import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import {Box} from 'native-base';

type Props = {
    children: React.ReactNode;
    barStyle: StatusBarStyle;
    base: boolean;
    
}

const Container: React.FC<Props> & any = ( {children, barStyle, base = false, ...rest}) => {
    return (
        <>
            <StatusBar barStyle={barStyle ?? 'dark-content'}/>
            <Box variant={base ? "base" : ""} {...rest}>
                {children}
            </Box>
        </>
    )
}

export default Container;