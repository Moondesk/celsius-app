// import STYLES from '../../../constants/STYLES';
import { getThemedStyle } from "../../../utils/styles-util";

const base = {
  container: {
    flex: 1
  },
  explanation: {
    marginTop: 20
  }
};

const themed = {
  light: {},

  dark: {},

  celsius: {}
};

const TodayInterestRatesModalStyle = () => getThemedStyle(base, themed);

export default TodayInterestRatesModalStyle;
