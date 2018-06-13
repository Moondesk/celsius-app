import { StyleSheet } from 'react-native';
import { FONT_SCALE, COLORS } from "../../../config/constants/style";

const lightText = {
  fontFamily: 'agile-light',
  fontSize: FONT_SCALE * 14,
}

const TransactionHistoryStyles = StyleSheet.create({
  title: {
    fontSize: FONT_SCALE * 14,
    fontFamily: 'agile-light',
    color: COLORS.GRAY_2,
    marginTop: 30,
    marginBottom: 20,
  },
  listItem: {
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#C8C8C8',
  },
  usdAmount: {
    fontFamily: 'agile-medium',
    fontSize: FONT_SCALE * 21,
    color: '#3D4853',
  },
  coinAmount: {
    ...lightText,
  },
  time: {
    ...lightText,
  },
  status: {
    fontFamily: 'agile-medium',
    fontSize: FONT_SCALE * 14,
  }
});

export default TransactionHistoryStyles;
