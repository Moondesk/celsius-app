// import STYLES from '../../../constants/STYLES';
import { getThemedStyle } from '../../../utils/styles-util';

const base = {
    container: {
        flex: 1
    },
    buttons: {
        position: 'absolute',
        right: 0,
    }
}

const themed = {
    light: {
    },

    dark: {
    },

    celsius: {
    }
}

const CoinDetailsStyle = () => getThemedStyle(base, themed);

export default CoinDetailsStyle