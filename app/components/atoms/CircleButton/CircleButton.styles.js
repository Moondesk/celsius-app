import { getThemedStyle } from '../../../utils/styles-util';
import STYLES from '../../../constants/STYLES';

const base = {
    container: {
        borderRadius: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',

        shadowColor: '#000000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
    },
    view: {
        width: 60,
        height: 60,
        borderRadius: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 10
    }
}

const themed = {
    light: {
        viewmenu: {
            backgroundColor: STYLES.COLORS.WHITE
        },
        textmenu: {
            color: STYLES.COLORS.DARK_GRAY
        },
        viewcoin: {
            backgroundColor: STYLES.COLORS.WHITE
        },
        textcoin: {
            color: STYLES.COLORS.DARK_GRAY
        }
    },

    dark: {
        viewmenu: {
            backgroundColor: STYLES.COLORS.DARK_HEADER
        },
        textmenu: {
            color: STYLES.COLORS.WHITE
        },
        viewcoin: {
            backgroundColor: STYLES.COLORS.DARK_HEADER
        },
        textcoin: {
            color: STYLES.COLORS.WHITE
        }
    },

    celsius: {
        viewmenu: {
            backgroundColor: STYLES.COLORS.CELSIUS,
        },
        textmenu: {
            color: STYLES.COLORS.WHITE
        },
        viewcoin: {
            backgroundColor: STYLES.COLORS.CELSIUS,
        },
        textcoin: {
            color: STYLES.COLORS.WHITE
        }
    }
}

const CircleButtonStyle = (theme) => getThemedStyle(theme, base, themed);

export default CircleButtonStyle