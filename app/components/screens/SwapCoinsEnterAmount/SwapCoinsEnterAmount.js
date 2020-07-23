import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
import SwapCoinsEnterAmountStyle from "./SwapCoinsEnterAmount.styles";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import STYLES from "../../../constants/STYLES";
import CoinPicker from "../../molecules/CoinPicker/CoinPicker";
import CelNumpad from "../../molecules/CelNumpad/CelNumpad";
import { KEYPAD_PURPOSES, MODALS } from "../../../constants/UI";
import formatter from "../../../utils/formatter";
import CelButton from "../../atoms/CelButton/CelButton";
import CelText from "../../atoms/CelText/CelText";
import GetCoinsConfirmModal from "../../modals/GetCoinsConfirmModal/GetCoinsConfirmModal";
import apiUtil from "../../../utils/api-util";
import API from "../../../constants/API";
import Spinner from "../../atoms/Spinner/Spinner";
import getCoinsUtil from "../../../utils/get-coins-util";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { getColor } from "../../../utils/styles-util";
import { COLOR_KEYS } from "../../../constants/COLORS";

@connect(
  state => ({
    formData: state.forms.formData,
    keypadOpen: state.ui.isKeypadOpen,
    currencyRatesShort: state.currencies.currencyRatesShort,
    buyCoinsSettings: state.generalData.buyCoinsSettings,
    depositCompliance: state.compliance.deposit,
    simplexCompliance: state.compliance.simplex,
    currencies: state.currencies.rates,
    simplexData: state.buyCoins.simplexData,
    callsInProgress: state.api.callsInProgress,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class SwapCoinsEnterAmount extends Component {
  static propTypes = {};
  static defaultProps = {};

  static navigationOptions = () => ({
    title: "Buy with Crypto",
    right: "profile",
  });

  constructor(props) {
    super(props);
    const { currencies, simplexCompliance, actions, formData } = this.props;

    const availableCryptoCoins = simplexCompliance
      ? currencies &&
        currencies
          .filter(c => simplexCompliance.coins.includes(c.short))
          .map(c => ({
            label: `${formatter.capitalize(c.name)} (${c.short})`,
            value: c.short,
          }))
      : [];

    actions.updateFormFields({
      fromAmount: "",
      toAmount: "",
      isFrom: false,
      fromCoin: formData.fromCoin || "BTC",
      toCoin: formData.toCoin || simplexCompliance.coins[0],
    });

    this.state = {
      availableCryptoCoins,
    };
  }

  handleNextStep = () => {
    const { actions, formData, currencyRatesShort } = this.props;

    const cryptoProp = formData.toCoin.toLowerCase();
    const amountFromCoin =
      currencyRatesShort[cryptoProp] * Number(formData.toAmount);

    actions.updateFormField("fromAmount", amountFromCoin);
    actions.openModal(MODALS.GET_COINS_CONFIRM_MODAL);
  };

  setCryptoAmount = simplexCryptoAmount =>
    Math.max(simplexCryptoAmount, 0).toString();

  handleAmountChange = async newValue => {
    const { formData, actions } = this.props;
    const splitedValue = newValue.toString().split(".");

    if (splitedValue && splitedValue.length > 2) return;

    let fromAmount = formatter.setCurrencyDecimals(newValue);
    let toAmount = formatter.setCurrencyDecimals(newValue);

    // Change value '.' to '0.'
    if (fromAmount[0] === ".") fromAmount = `0${fromAmount}`;
    // if the crypto amount is eg. 01 the value will be 1, 00 -> 0
    if (
      fromAmount.length > 1 &&
      fromAmount[0] === "0" &&
      fromAmount[1] !== "."
    ) {
      fromAmount = fromAmount[1];
    }

    // if crypto amount is undefined, set it to empty string
    if (!toAmount) toAmount = "";
    // Change value '.' to '0.'
    if (toAmount[0] === ".") toAmount = `0${toAmount}`;
    // if the crypto amount is eg. 01 the value will be 1, 00 -> 0
    if (toAmount.length > 1 && toAmount[0] === "0" && toAmount[1] !== ".") {
      toAmount = toAmount[1];
    }

    actions.updateFormFields({
      fromAmount: fromAmount.toString(),
      toAmount: toAmount.toString(),
    });

    if (getCoinsUtil.isAmountInScope()) {
      await actions.getSimplexQuote();

      const { simplexData } = this.props;

      if (formData.isFrom) {
        actions.updateFormField(
          "toAmount",
          this.setCryptoAmount(
            simplexData &&
              simplexData.digital_money &&
              simplexData.digital_money.amount
          )
        );
      } else {
        actions.updateFormField(
          "fromAmount",
          simplexData &&
            simplexData.digital_money &&
            simplexData.digital_money.total_amount.toString()
        );
      }
    } else {
      this.handleEnterAmountErrors();

      if (formData.isFrom) {
        actions.updateFormField("toAmount", "0");
      } else {
        actions.updateFormField("fromAmount", "0");
      }
    }
  };

  handleFromCoinSelect = async (field, value) => {
    const { actions } = this.props;
    actions.updateFormFields({
      fromCoin: value,
      fromAmount: "0",
      toAmount: "0",
      isFrom: true,
    });
  };

  handleToCoinSelect = async (field, value) => {
    const { actions } = this.props;
    actions.updateFormFields({
      toCoin: value,
      toAmount: "0",
      fromAmount: "0",
      isFrom: false,
    });
  };

  handleEnterAmountErrors = () => {
    const { formData, actions } = this.props;

    const limits = getCoinsUtil.getBuyLimitsPerCrypto(formData.cryptoCoin);

    let minDisplay;
    let maxDisplay;

    if (formData.isFrom) {
      minDisplay = formatter.crypto(limits.min, formData.fromCoin);
      maxDisplay = formatter.crypto(limits.max, formData.fromCoin);
    } else {
      minDisplay = formatter.crypto(limits.min, formData.toCoin);
      maxDisplay = formatter.crypto(limits.max, formData.toCoin);
    }

    actions.showMessage(
      "warning",
      `Transaction amount out of limits. Please enter a value between ${minDisplay} and ${maxDisplay}`
    );
  };

  handleAmountTextStyle = type => {
    const { formData } = this.props;
    const isZero = formData.isFrom
      ? !Number(formData.fromAmount)
      : !Number(formData.toAmount);

    if (!isZero && !getCoinsUtil.isAmountInScope()) {
      return {
        color: getColor(COLOR_KEYS.NEGATIVE_STATE),
      };
    }

    if (
      (!formData.isFrom && type === "to") ||
      (formData.isFrom && type === "from")
    ) {
      return { color: STYLES.COLORS.WHITE };
    }

    return null;
  };

  handleAmountBackColor = type => {
    const { formData } = this.props;

    if (
      (!formData.isFrom && type === "to") ||
      (formData.isFrom && type === "from")
    ) {
      return {
        backgroundColor: getColor(COLOR_KEYS.LINK),
      };
    }

    return null;
  };

  render() {
    const { actions, formData, callInProgress, buyCoinsSettings } = this.props;
    const style = SwapCoinsEnterAmountStyle();
    const { availableCryptoCoins } = this.state;
    const isFetchingQuotes = apiUtil.areCallsInProgress(
      [API.GET_SIMPLEX_QUOTE],
      callInProgress
    );

    const activeTextStyle = [style.text, { color: STYLES.COLORS.WHITE }];

    if (!buyCoinsSettings.limit_per_crypto_currency) {
      return <LoadingScreen />;
    }
    return (
      <RegularLayout fabType={"hide"} padding={"0 0 0 0"}>
        <View style={[style.fiatSection, this.handleAmountBackColor("from")]}>
          <View style={style.amounts}>
            <CelText
              align={"center"}
              margin={"0 0 10 0"}
              style={formData.isFrom ? activeTextStyle : null}
            >
              PAY WITH
            </CelText>
            <CoinPicker
              type={"basic"}
              updateFormField={actions.updateFormField}
              onChange={this.handleFromCoinSelect}
              coin={formData.fromCoin}
              field="fromCoin"
              defaultSelected={formData.fromCoin || "BTC"}
              availableCoins={availableCryptoCoins}
              navigateTo={actions.navigateTo}
            />
          </View>
          {isFetchingQuotes && !formData.isFrom ? (
            <View style={{ marginVertical: 15 }}>
              <Spinner size={30} color={style.text.color} />
            </View>
          ) : (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => {
                actions.updateFormFields({
                  isFrom: true,
                });
                actions.toggleKeypad(true);
              }}
            >
              <CelText style={this.handleAmountTextStyle("from")} type={"H2"}>
                {" "}
                {formatter.crypto(formData.fromAmount, formData.fromCoin)}
              </CelText>
            </TouchableOpacity>
          )}
        </View>
        <View style={[style.cryptoSection, this.handleAmountBackColor("to")]}>
          <View style={style.amounts}>
            <CelText
              align={"center"}
              margin={"0 0 10 0"}
              style={!formData.isFrom ? activeTextStyle : null}
            >
              RECEIVE
            </CelText>
            <CoinPicker
              type={"basic"}
              updateFormField={actions.updateFormField}
              onChange={this.handleToCoinSelect}
              coin={formData.toCoin}
              field="toCoin"
              defaultSelected={formData.toCoin || "ETH"}
              availableCoins={availableCryptoCoins}
              navigateTo={actions.navigateTo}
            />
          </View>
          {isFetchingQuotes && formData.isFrom ? (
            <View style={{ marginVertical: 15 }}>
              <Spinner size={30} color={style.text.color} />
            </View>
          ) : (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => {
                actions.updateFormFields({
                  isFrom: false,
                });
                actions.toggleKeypad(true);
              }}
            >
              <CelText style={this.handleAmountTextStyle("to")} type={"H2"}>
                {" "}
                {formatter.crypto(formData.toAmount, formData.toCoin)}
              </CelText>
            </TouchableOpacity>
          )}
        </View>
        <CelButton
          margin="30 0 0 0"
          onPress={this.handleNextStep}
          iconRight={
            formData.fromAmount && Number(formData.fromAmount) > 0
              ? "IconArrowRight"
              : ""
          }
        >
          {formData.fromAmount && Number(formData.fromAmount) > 0
            ? "Buy Coins"
            : "Enter amount above"}
        </CelButton>
        <CelNumpad
          field={formData.isFrom ? "fromAmount" : "toAmount"}
          value={formData.isFrom ? formData.fromAmount : formData.toAmount}
          toggleKeypad={actions.toggleKeypad}
          updateFormField={actions.updateFormField}
          setKeypadInput={actions.setKeypadInput}
          onPress={this.handleAmountChange}
          purpose={KEYPAD_PURPOSES.BUY_COINS}
          autofocus
        />
        <GetCoinsConfirmModal />
      </RegularLayout>
    );
  }
}

export default SwapCoinsEnterAmount;
