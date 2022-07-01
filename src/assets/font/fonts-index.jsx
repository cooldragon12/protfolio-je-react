import { createGlobalStyle } from 'styled-components';
import Tifax from './fonts/TIFAX.ttf.woff';
import Poppins_Bold from './fonts/Poppins-Bold.ttf';
import Poppins_Bold_italic from './fonts/Poppins-BoldItalic.ttf';
import Poppins_ExtraBold from './fonts/Poppins-ExtraBold.ttf';
import Poppins_ExtraBold_Italic from './fonts/Poppins-ExtraBoldItalic.ttf';
import Poppins_ExtraLight from './fonts/Poppins-ExtraLight.ttf';
import Poppins_ExtraLight_Italic from './fonts/Poppins-ExtraLightItalic.ttf';
import Poppins_Light from './fonts/Poppins-Light.ttf';
import Poppins_Light_Italic from './fonts/Poppins-LightItalic.ttf';
import Poppins_Medium from './fonts/Poppins-Medium.ttf';
import Poppins_Medium_Italic from './fonts/Poppins-MediumItalic.ttf';
import Poppins_Regular from './fonts/Poppins-Regular.ttf';
import Poppins_Regular_Italic from './fonts/Poppins-Italic.ttf';
import Poppins_SemiBold from './fonts/Poppins-SemiBold.ttf';
import Poppins_SemiBold_Italic from './fonts/Poppins-SemiBoldItalic.ttf';
import Poppins_Thin from './fonts/Poppins-Thin.ttf';
import Poppins_Thin_Italic from './fonts/Poppins-ThinItalic.ttf';
import Hacked_regular from './fonts/HACKED.TTF';

const GlobalFonts = createGlobalStyle`
    @font-face{
        font-family:'HACKED';
        src: url(${Hacked_regular});
        font-weight:400;
        font-style:normal;
    }
    @font-face{
        font-family: 'TIFAX';
        src:url(${Tifax}) format('truetype');
        font-weight: 300;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:url(${Poppins_Bold}) format('truetype');
        font-weight: 700;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Bold_italic}) format('truetype');
        font-weight: 700;
        font-style:italic;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_ExtraBold}) format('truetype');
        font-weight: 800;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_ExtraBold_Italic}) format('truetype');
        font-weight: 800;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_ExtraLight}) format('truetype');
        font-weight: 150;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_ExtraLight_Italic}) format('truetype');
        font-weight: 150;
        font-style:italic;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Light}) format('truetype');
        font-weight: 200;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Light_Italic}) format('truetype');
        font-weight: 200;
        font-style:italic;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Medium}) format('truetype');
        font-weight: 500;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Medium_Italic}) format('truetype');
        font-weight: 500;
        font-style:italic;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Regular}) format('truetype');
        font-weight: 400;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Regular_Italic}) format('truetype');
        font-weight: 400;
        font-style:italic;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_SemiBold}) format('truetype');
        font-weight: 600;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_SemiBold_Italic}) format('truetype');
        font-weight: 600;
        font-style:italic;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Thin}) format('truetype');
        font-weight: 100;
        font-style:normal;
    }
    @font-face{
        font-family: 'Poppins';
        src:
        url(${Poppins_Thin_Italic}) format('truetype');
        font-weight: 100;
        font-style:italic;
    }
`
export default GlobalFonts