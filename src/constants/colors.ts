type ColorProps = {
    [colorName: string] : ToneProps;
}

type ToneProps = {
    [toneNum: number] : string;
}
export const brandColor : ColorProps = {
    
    primary: {
        800: '#0071CE',
        700: '#007EE5',
        600: '#198AE7',
        500: '#3297EA',
        400: '#4CA4EC',
        300: '#66B1EF',
        200: '#7FBEF2',
        100: '#99CBF4'
    },
    secondary: {
        800: '#3376E5',
        700: '#3984FF',
        600: '#4C90FF',
        500: '#609CFF',
        400: '#74A8FF',
        300: '#88B5FF',
        200: '#9CC1FF',
        100: '#AFCDFF'
    },
    base: {
        800: '#1E1919',
        700: '#242121',
        600: '#393736',
        500: '#54514F',
        400: '#C2BDB6',
        300: '#EEE9E2',
        200: '#F7F5F2', //Coconut
        100: '#FAF9F7'
    }
}