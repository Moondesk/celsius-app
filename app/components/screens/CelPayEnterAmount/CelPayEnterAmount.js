import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import testUtil from "../../../utils/test-util";
import * as appActions from "../../../redux/actions";
import CelPayEnterAmountStyle from "./CelPayEnterAmount.styles";
import CelButton from '../../atoms/CelButton/CelButton';
import RegularLayout from '../../layouts/RegularLayout/RegularLayout';
import CelNumpad from "../../molecules/CelNumpad/CelNumpad";
import { KEYPAD_PURPOSES, MODALS } from "../../../constants/UI";
import CoinSwitch from "../../atoms/CoinSwitch/CoinSwitch";
import SimpleSelect from "../../molecules/SimpleSelect/SimpleSelect";
import BalanceView from "../../atoms/BalanceView/BalanceView";
import STYLES from "../../../constants/STYLES";
import InfoModal from "../../molecules/InfoModal/InfoModal";
import PredefinedAmounts from "../../organisms/PredefinedAmounts/PredefinedAmounts";
import { PREDIFINED_AMOUNTS } from '../../../constants/DATA';

@connect(
  state => ({
    walletSummary: state.wallet.summary,
    celpayCompliance: state.user.compliance.celpay,
    currencyRatesShort: state.currencies.currencyRatesShort,
    currencies: state.currencies.rates,
    formData: state.forms.formData,
    withdrawalAddresses: state.wallet.withdrawalAddresses,
    loyaltyInfo: state.user.loyaltyInfo,
    isCelsiusMember: state.user.profile.celsius_member,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class CelPayEnterAmount extends Component {
  static propTypes = {};
  static defaultProps = {}

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state
    return {
      right: "profile",
      title: params && params.title ? params.title : 'CelPay',
    }
  };

  constructor(props) {
    super(props);
    const { currencies, celpayCompliance, formData, walletSummary } = this.props;

    const coinSelectItems = currencies
      .filter(c => celpayCompliance.coins.includes(c.short))
      .filter(c => {
        const balanceUsd = walletSummary.coins.filter(coin => coin.short === c.short.toUpperCase())[0].amount_usd;
        return balanceUsd > 0
      })
      .map(c => ({ label: `${c.displayName}  (${c.short})`, value: c.short }))

    this.setNavigationParams()

    this.state = {
      coinSelectItems,

    };

    if (!formData.coin) {
      props.actions.updateFormField('coin', 'BTC')
    }
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getLoyaltyInfo();
  }

  componentDidUpdate(prevProps) {
    const { formData } = this.props;

    if (prevProps.formData.friend !== formData.friend) {
      this.setNavigationParams()
    }
  }

  onPressPredefinedAmount = ({ label, value }) => {
    const { formData, walletSummary, currencyRatesShort, actions } = this.props;
    let amount;

    this.setState({ activePeriod: label});

    const coinRate = currencyRatesShort[formData.coin.toLowerCase()]
    const walletSummaryObj = walletSummary.coins.find(c => c.short === formData.coin.toUpperCase());

    if (label === "ALL") {
      amount = formData.isUsd ? walletSummaryObj.amount_usd.toString() : walletSummaryObj.amount;
    } else {
      amount = formData.isUsd ? value : (Number(value) / coinRate).toString()
    }
    this.handleAmountChange(amount, label)
    actions.toggleKeypad(false)
  }

  setNavigationParams() {
    const { formData, navigation } = this.props
    const names = (formData.friend && formData.friend.name) ? formData.friend.name.split(' ') : undefined;
    const screenTitle = names ? `Send to ${names[0] ? names[0] : ''} ${(!!names[1] && !!names[1][0]) ? names[1][0] : ''}` : 'CelPay'

    navigation.setParams({
      title: screenTitle,
      activePeriod: ""
    })
  }

  // TODO: move to formatter? check WithdrawEnterAmount
  getNumberOfDecimals(value) {
    const splitValue = value.split('.')
    const numberOfDecimals = splitValue[1] ? splitValue[1].length : 0;
    return numberOfDecimals;
  }

  // TODO: move to formatter? check WithdrawEnterAmount
  getAllowedDecimals = (currency) => currency === 'USD' ? 2 : 5

  getButtonCopy = () => {
    const { formData } = this.props;

    if (formData.amountUsd && formData.amountUsd > 0) {
      return formData.friend ? 'Add a note' : 'Send';
    }
    return 'Enter amount above';
  };

  // TODO: move to formatter? check WithdrawEnterAmount
  setCurrencyDecimals(value, currency) {
    if (!this.hasEnoughDecimals(value, currency)) return value;
    // remove last digit
    const numberOfDecimals = this.getNumberOfDecimals(value)
    const allowedDecimals = this.getAllowedDecimals(currency);

    return value.slice(0, allowedDecimals - numberOfDecimals);
  }

  getAmountColor = () => this.isAmountValid() ? STYLES.COLORS.DARK_GRAY : STYLES.COLORS.ORANGE

  handleAmountChange = (newValue) => {
    const { formData, currencyRatesShort, actions } = this.props;
    const coinRate = currencyRatesShort[formData.coin.toLowerCase()]

    let amountCrypto;
    let amountUsd;

    if (formData.isUsd) {
      amountUsd = this.setCurrencyDecimals(newValue, 'USD');
      amountCrypto = amountUsd / coinRate;
    } else {
      amountCrypto = this.setCurrencyDecimals(newValue);
      amountUsd = amountCrypto * coinRate;
    }

    actions.updateFormFields({
      amountCrypto: amountCrypto.toString(),
      amountUsd: amountUsd.toString(),
    })
  }

  isAmountValid = () => {
    const { formData, walletSummary } = this.props
    const balanceUsd = walletSummary.coins.filter(c => c.short === formData.coin.toUpperCase())[0].amount_usd;
    const { amountUsd } = formData

    if (amountUsd > balanceUsd) return false
    if (amountUsd > 2000) return false
    return true
  }

  // TODO: move to formatter? check WithdrawEnterAmount
  hasEnoughDecimals(value = '', currency) {
    const numberOfDecimals = this.getNumberOfDecimals(value)
    const allowedDecimals = this.getAllowedDecimals(currency);

    return numberOfDecimals > allowedDecimals;
  }

  handleCoinChange = (field, value) => {
    const { actions } = this.props

    actions.updateFormFields({
      [field]: value,
      amountUsd: undefined,
      amountCrypto: undefined,
    });
  }

  handleNextStep = () => {
    const { actions, formData, walletSummary, loyaltyInfo, isCelsiusMember } = this.props;

    const coinData = walletSummary.coins.filter(c => c.short === formData.coin.toUpperCase())[0];
    const newBalance = coinData.amount - formData.amountCrypto

    if (isCelsiusMember && formData.coin === 'CEL' && newBalance < 1) return actions.openModal(MODALS.CELPAY_LOSE_MEMBERSHIP_WARNING_MODAL)
    if (formData.coin === 'CEL' && newBalance < loyaltyInfo.min_for_tier) return actions.openModal(MODALS.CELPAY_LOSE_TIER_WARNING_MODAL)

    this.navigateToNextStep()
  }

  navigateToNextStep = () => {
    const { actions, formData } = this.props

    if (formData.friend) {
      actions.navigateTo('CelPayMessage')
      actions.closeModal()
    } else {
      actions.navigateTo('VerifyProfile', {
        onSuccess: actions.celPayShareLink
      })
      actions.closeModal()
    }
  };

  render() {
    const { coinSelectItems, activePeriod } = this.state;
    const { formData, actions, walletSummary, loyaltyInfo } = this.props;
    const style = CelPayEnterAmountStyle();
    if (!formData.coin) return null;

    const coinData = walletSummary.coins.filter(c => c.short === formData.coin.toUpperCase())[0];

    return (
      <RegularLayout padding='20 0 0 0' fabType={"hide"}>
        <View style={style.container}>
          <View style={style.wrapper}>
            <BalanceView opacity={0.65} coin={formData.coin} crypto={coinData.amount} usd={coinData.amount_usd} />

            <View style={style.amounts}>
              <View style={style.selectWrapper}>
                <SimpleSelect
                  items={coinSelectItems}
                  field="coin"
                  displayValue={formData.coin}
                  updateFormField={actions.updateFormField}
                  onChange={this.handleCoinChange}
                  placeholder="Choose a coin"
                />
              </View>

              <CoinSwitch
                updateFormField={actions.updateFormField}
                onAmountPress={actions.toggleKeypad}
                amountUsd={formData.amountUsd}
                amountCrypto={formData.amountCrypto}
                isUsd={formData.isUsd}
                coin={formData.coin}
                amountColor={this.getAmountColor()}
              />
            </View>

            <PredefinedAmounts data={PREDIFINED_AMOUNTS} onSelect={this.onPressPredefinedAmount} activePeriod={activePeriod}/>

            <CelButton
              margin="70 0 0 0"
              disabled={!this.isAmountValid() || !(formData.amountUsd && Number(formData.amountUsd) > 0)}
              onPress={this.handleNextStep}
            >
              {this.getButtonCopy()}
            </CelButton>
          </View>
        </View>

        <CelNumpad
          field={formData.isUsd ? "amountUsd" : "amountCrypto"}
          value={formData.isUsd ? formData.amountUsd : formData.amountCrypto}
          updateFormField={actions.updateFormField}
          setKeypadInput={actions.setKeypadInput}
          toggleKeypad={actions.toggleKeypad}
          onPress={this.handleAmountChange}
          purpose={KEYPAD_PURPOSES.CELPAY}
        />

        <InfoModal
          name={MODALS.CELPAY_LOSE_MEMBERSHIP_WARNING_MODAL}
          heading="Watch out"
          paragraphs={[
            "You are about to CelPay your last CEL token. Without CEL tokens you will lose your Celsius membership.",
            "Celsius members can earn interest on their coin, apply for a loan and utilize CelPay.",
          ]}
          yesCopy="Continue"
          onYes={this.navigateToNextStep}
          noCopy="Go back"
          onNo={actions.closeModal}
        />

        {loyaltyInfo && (
          <InfoModal
            name={MODALS.CELPAY_LOSE_TIER_WARNING_MODAL}
            heading="Watch out"
            paragraphs={[
              `You are about to lose you ${loyaltyInfo.tier} Celsius Loyalty Level.`,
              "Withdrawing CEL tokens affects your HODL ratio and Loyalty level.",
            ]}
            yesCopy="Continue"
            onYes={this.navigateToNextStep}
            noCopy="Go back"
            onNo={actions.closeModal}
          />
        )}
      </RegularLayout>
    );
  }
}

export default testUtil.hookComponent(CelPayEnterAmount);
