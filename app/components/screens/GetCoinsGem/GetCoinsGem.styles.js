import DeviceInfo from "react-native-device-info";
import { getThemedStyle } from "../../../utils/styles-util";
import STYLES from "../../../constants/STYLES";

const hasNotch = DeviceInfo.hasNotch();

const base = {
  container: {
    flex: 1,
    backgroundColor: STYLES.COLORS.LIGHT_GRAY,
    paddingTop: hasNotch ? 60 : 30,
  },
};

const themed = {
  light: {},

  dark: {},

  unicorn: {},
};

const GetCoinsGemStyle = () => getThemedStyle(base, themed);

export default GetCoinsGemStyle;
