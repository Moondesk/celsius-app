import { Dimensions } from "react-native";
import { getThemedStyle } from "../../../utils/styles-util";
import { COLOR_KEYS } from "../../../constants/COLORS";

const SCREEN_WIDTH = Dimensions.get("window").width;

const smallImageSize = SCREEN_WIDTH / 4 - 8;

const base = {
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "flex-start",
    alignItems: "center",
    marginTop: 10,
  },
  activeImage: {
    borderColor: COLOR_KEYS.POSITIVE_STATE,
    width: smallImageSize,
    height: smallImageSize,
    zIndex: -20,
  },
  imageWrapper: {
    width: smallImageSize,
    height: smallImageSize,
    borderColor: "transparent",
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  image: {
    width: smallImageSize,
    height: smallImageSize,
    borderRadius: smallImageSize / 2,
    borderColor: "transparent",
    borderWidth: 5,
  },
  avatar: {
    marginLeft: 20,
    marginTop: 20,
  },
  button: {
    paddingTop: 30,
  },
};

const themed = {
  light: {},

  dark: {},

  unicorn: {},
};

const ChangeAvatarStyle = () => getThemedStyle(base, themed);

export default ChangeAvatarStyle;
