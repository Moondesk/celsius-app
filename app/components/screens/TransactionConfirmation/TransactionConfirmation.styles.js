import { StyleSheet } from "react-native";
import { COLORS, FONT_SCALE } from "../../../config/constants/style";

const TransactionConfirmationStyle = StyleSheet.create({
  screenContentWrapper: {
    marginRight: 36,
    marginLeft: 36,
  },
  withdrawalAddressNotSetText: {
    marginVertical: 30,
  },
  scanQrCode: {
    paddingVertical: 5,
    color: COLORS.blue,
  },
  addressViewWrapper: {
    backgroundColor: 'rgba(206, 209, 212, 0.4)',
    borderRadius: 8,
    shadowOpacity: 1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
    shadowColor: 'rgba(0,0,0,0.05)',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom: 10
  },
  toAddress: {
    fontFamily: "agile-book",
    fontSize: FONT_SCALE * 11,
    color: "rgba(61,72,83,0.3)",
  },
  address: {
    fontFamily: "agile-book",
    fontSize: FONT_SCALE * 18,
    color: "rgba(61,72,83,1)",
    textAlign: 'left'
  }
});

export default TransactionConfirmationStyle;
