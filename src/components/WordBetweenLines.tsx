import { Box, Text } from 'native-base';
import React from 'react';

type Props = {
    _text?: any;
    children: React.ReactNode;
    color?: string;

}
const WordBetweenLines: React.FC<Props> = ({color, _text, children}) => {
  return (
    <Box flexDir="row" alignItems="center">
        <Box borderColor={color ?? ''} borderTopWidth={0.5} flexGrow={1}/>
        <Box mx={5}>
            <Text color={color} {..._text}>{children}</Text>
        </Box>
        <Box borderTopWidth={0.5} borderColor={color ?? ''} flexGrow={1}/>
    </Box>
  )
}

export default WordBetweenLines