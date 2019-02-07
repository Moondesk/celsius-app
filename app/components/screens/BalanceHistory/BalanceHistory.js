import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import testUtil from "../../../utils/test-util";
import formatter from "../../../utils/formatter";
import * as appActions from "../../../redux/actions";
import BalanceHistoryStyle from "./BalanceHistory.styles";
import CelText from '../../atoms/CelText/CelText';
import Card from "../../atoms/Card/Card";
import RegularLayout from '../../layouts/RegularLayout/RegularLayout';
import TransactionsHistory from '../../molecules/TransactionsHistory/TransactionsHistory';

@connect(
  state => ({
    style: BalanceHistoryStyle(state.ui.theme),
    transactions: state.wallet.transactions,
    currencyRatesShort: state.generalData.currencyRatesShort
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class BalanceHistory extends Component {

  static propTypes = {
    // text: PropTypes.string
  };
  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: "Wallet",
        left: "back",
        right: "profile"
      }
    };
  }

  componentDidMount = () => {
    const { actions } = this.props;
    actions.getSupportedCurrencies();
  }

  getTransactions() {
    const { transactions } = this.props;
    if (!transactions) return [];

    const transactionIds = Object.keys(transactions);
    const transactionArray = [];
    transactionIds.forEach(tid => transactionArray.push(transactions[tid]));
    return transactionArray;
  }

  render() {
    const { actions, currencyRatesShort } = this.props
    const { header } = this.state;
    const transactions = this.getTransactions();

    return (
      <RegularLayout header={header} >
        <View>
          <Card>
            <CelText>Total wallet balance</CelText>
            <CelText bold>{formatter.usd(12313.14)}</CelText>
          </Card>
          <TransactionsHistory transactions={transactions} currencyRatesShort={currencyRatesShort} navigateTo={actions.navigateTo} />
        </View>
      </RegularLayout>
    );
  }
}

export default testUtil.hookComponent(BalanceHistory);
