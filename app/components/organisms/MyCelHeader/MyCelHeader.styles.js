import STYLES from "../../../constants/STYLES";
import {
  getThemedStyle,
  widthPercentageToDP,
} from "../../../utils/styles-util";

const base = {
  container: {
    flex: 1,
  },
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 5,
    paddingHorizontal: 40,
  },
  arcChart: {
    marginHorizontal: widthPercentageToDP("8%"),
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  otherCoinsContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  celContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingBottom: 5,
  },
};

const themed = {
  light: {
    minPercentage: {
      backgroundColor: STYLES.COLORS.WHITE, // TODO create COLOR_KEYS and check all themes
    },
    bonus: {
      backgroundColor: STYLES.COLORS.WHITE, // TODO create COLOR_KEYS and check all themes
    },
    loan: {
      backgroundColor: STYLES.COLORS.WHITE, // TODO create COLOR_KEYS and check all themes
    },
    separator: {
      backgroundColor: STYLES.COLORS.MEDIUM_GRAY3, // TODO create COLOR_KEYS and check all themes
    },
    tierSilver: {
      backgroundColor: STYLES.COLORS.MEDIUM_GRAY, // TODO create COLOR_KEYS and check all themes
    },
  },

  dark: {
    minPercentage: {
      backgroundColor: STYLES.COLORS.DARK_HEADER, // TODO create COLOR_KEYS and check all themes
    },
    bonus: {
      backgroundColor: STYLES.COLORS.DARK_HEADER, // TODO create COLOR_KEYS and check all themes
    },
    loan: {
      backgroundColor: STYLES.COLORS.DARK_HEADER, // TODO create COLOR_KEYS and check all themes
    },
    separator: {
      backgroundColor: "rgb(95,105,122)", // TODO create COLOR_KEYS and check all themes
    },
    tierSilver: {
      borderColor: "#000", // TODO create COLOR_KEYS and check all themes
      borderRightWidth: 2,
    },
    tierGold: {
      borderColor: "#000", // TODO create COLOR_KEYS and check all themes
      borderRightWidth: 2,
    },
    tierPlatinum: {
      borderColor: "#000", // TODO create COLOR_KEYS and check all themes
    },
    tierWrapper: {
      borderBottomColor: "#000", // TODO create COLOR_KEYS and check all themes
    },
  },

  unicorn: {},
};
const MyCelHeaderStyle = () => getThemedStyle(base, themed);

export default MyCelHeaderStyle;
