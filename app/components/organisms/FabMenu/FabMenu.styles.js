import {
  getThemedStyle,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/styles-util";
import STYLES from "../../../constants/STYLES";
import { COLOR_KEYS } from "../../../constants/COLORS";

const base = {
  container: {},
  fabButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  menuContainer: {
    position: "absolute",
    left: widthPercentageToDP("10%"),
    bottom: heightPercentageToDP("15%"),
    width: widthPercentageToDP("80%"),
  },
  helpCard: {
    position: "absolute",
    left: widthPercentageToDP("30%"),
    top: heightPercentageToDP("5.5%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  opacityCircle: {
    backgroundColor: STYLES.COLORS.CELSIUS,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  menuItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  background: {
    opacity: 0.95,
    backgroundColor: COLOR_KEYS.BACKGROUND,
  },
  shadowStyle: {
    shadowColor: STYLES.COLORS.FAB_BUTTON_LIGHT_MODE_SHADOW,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
};

const themed = {
  light: {},
  dark: {
    shadowStyle: {
      shadowColor: STYLES.COLORS.FAB_BUTTON_DARK_MODE_SHADOW,
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      width: 60,
      height: 60,
      borderRadius: 30,
    },
  },
  unicorn: {},
};

const FabMenuStyle = () => getThemedStyle(base, themed);

export default FabMenuStyle;
