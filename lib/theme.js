import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: props => ({
        body: {
            bg: mode('#ffffff', '#1a1a1a')(props),
            color: mode('gray.800', 'whiteAlpha.900')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },
            'page-title': {
                fontSize: { base: '2xl', md: '3xl' },
                fontWeight: 'bold',
                letterSpacing: '-0.02em'
            }
        }
    },
    Link: {
        baseStyle: props => ({
            color: mode('teal.600', 'teal.300')(props),
            textUnderlineOffset: 3,
            _hover: {
                color: mode('teal.700', 'teal.200')(props),
                textDecoration: 'underline'
            }
        })
    },
    Button: {
        baseStyle: {
            fontWeight: 'semibold',
            borderRadius: 'lg'
        }
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    grassTeal: '#88ccca'
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

const theme = extendTheme({
    config, 
    styles,
    components,
    colors,
    fonts
})

export default theme;