import { Pressable, Icon,Text } from 'native-base'
import React from 'react'

type Props = {
    title: string;
    icon?: any;
    borderColor: string;
    bg: string;
    textColor?: string;
    key?: string | number;
    _style?: any;
    _textStyle?: any;
    onPress : () => void;
}

const AuthButton : React.FC<Props> = ({
    title,
    icon,
    borderColor,
    bg,
    textColor,
    key,
    _style,
    _textStyle,
    onPress
}) => {
  return (
    <Pressable
        key={key?? ''} 
        px={5}
        py={4}
        flexDir="row" 
        justifyContent="center" 
        alignItems="center"
        bg={bg}
        borderColor={borderColor}
        borderWidth={2}
        mx={5}
        my={2}
        rounded="full"
        {..._style}
        onPress={onPress}
    >
        {
            icon && 
            <Icon {...icon} position="absolute" left={6}/>
        }
        <Text fontSize="md" fontWeight="bold" color={textColor ?? ''} {..._textStyle}>
            {title}
        </Text>
    </Pressable>
  )
}

export default AuthButton