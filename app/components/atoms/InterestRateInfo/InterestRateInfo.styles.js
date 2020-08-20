import {
  getThemedStyle,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/styles-util";
import STYLES from "../../../constants/STYLES";
import { COLOR_KEYS } from "../../../constants/COLORS";

const currencyImageSize = widthPercentageToDP("10.67%");

const base = {
  container: {
    flex: 1,
  },
  mainWrapper: {
    paddingVertical: 11,
    marginVertical: 15,
  },
  mainWrapperCompact: {
    borderTopWidth: 0,
    marginVertical: 0,
  },
  mainInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: currencyImageSize,
    height: currencyImageSize,
    marginRight: 11,
  },
  currencyImage: {
    width: currencyImageSize,
    height: currencyImageSize,
  },
  infoWrapper: {},
  currencyName: {
    marginBottom: 2,
    color: STYLES.COLORS.DARK_GRAY,
  },
  currencyShort: {
    color: STYLES.COLORS.DARK_GRAY,
  },
  imageInfoWrapper: {
    flexDirection: "row",
    paddingVertical: heightPercentageToDP("3.5%"),
    marginLeft: 10,
    alignItems: "center",
  },
  celRateWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: widthPercentageToDP("37%"),
    height: heightPercentageToDP("5%"),
    backgroundColor: COLOR_KEYS.POSITIVE_STATE,
  },
  regularRateWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: widthPercentageToDP("37%"),
    height: heightPercentageToDP("5%"),
  },
  usdInfoWrapper: {
    marginTop: 10,
    backgroundColor: STYLES.COLORS.DARK_GRAY,
    borderRadius: 5,
    padding: 10,
  },
  regularRateText: {
    color: STYLES.COLORS.MEDIUM_GRAY,
  },
  celRateText: {
    color: "#fff",
  },
  regRateText: {
    color: STYLES.COLORS.MEDIUM_GRAY,
  },
  celsiusRateText: {
    color: "#fff",
  },
  rateInfoCard: {
    marginTop: 20,
  },
  inKindColor: {
    backgroundColor: COLOR_KEYS.BACKGROUND,
  },
};

const themed = {
  light: {},
  dark: {},
  unicorn: {},
};

const InterestRateInfoStyle = () => getThemedStyle(base, themed);

export default InterestRateInfoStyle;
