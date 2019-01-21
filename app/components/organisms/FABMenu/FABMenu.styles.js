import { getThemedStyle } from '../../../utils/styles-util';

const base = {
    container: {
        flex: 1,
        alignSelf: 'flex-end'
    },
}

const themed = {
    light: {
    },

    dark: {
    },

    celsius: {
    }
}

const FabMenuStyle = (theme) => getThemedStyle(theme, base, themed);

export default FabMenuStyle