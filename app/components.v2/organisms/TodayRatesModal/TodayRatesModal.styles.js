import { StyleSheet } from "react-native";
import { FONT_SCALE, STYLES } from "../../../config/constants/style";

const TodayRatesModalStyle = StyleSheet.create({
  modalHeadingWrapper: {
    paddingVertical: 20,
    backgroundColor: STYLES.GRAY_1,
    alignItems: 'center',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  mainHeadingText: {
    fontFamily: 'barlow-extra-bold',
    fontSize: FONT_SCALE * 46,
    color: STYLES.GRAY_7,
  },
  secondaryHeadingText: {
    fontFamily: 'barlow-extra-bold',
    fontSize: FONT_SCALE * 20,
    color: STYLES.GRAY_7,
  },
  descriptionWrapper: {
    marginTop: 15,
  },
  descriptionTitleText: {
    fontFamily: 'barlow-bold',
    fontSize: FONT_SCALE * 22,
    marginBottom: 10,
  },
  descriptionText: {
    fontFamily: 'barlow-extra-light',
    fontSize: FONT_SCALE * 18,
  },
  checkboxWrapper: {
    marginTop: 20,
  }
});

export default TodayRatesModalStyle;
