import { getThemedStyle } from "../../../utils/styles-util";
import STYLES from "../../../constants/STYLES";

const base = {
  container: {
    flex: 1,
  },
  background: {
    backgroundColor: STYLES.COLORS.GRAY,
  },
};

const themed = {
  light: {},

  dark: {},

  unicorn: {},
};

const MaintenanceStyle = () => getThemedStyle(base, themed);

export default MaintenanceStyle;
