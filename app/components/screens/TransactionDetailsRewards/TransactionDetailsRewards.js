import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import moment from "moment";

// import TransactionDetailsRewardsStyle from "./TransactionDetailsRewards.styles";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import TxInfoSection from "../../atoms/TxInfoSection/TxInfoSection";
import TxBasicSection from "../../atoms/TxBasicSection/TxBasicSection";
import CelButton from "../../atoms/CelButton/CelButton";
import TxReferralSection from "../../molecules/TxReferralSection/TxReferralSection";

class TransactionDetailsRewards extends Component {
  static propTypes = {
    transaction: PropTypes.instanceOf(Object),
    totalInterest: PropTypes.string,
    actions: PropTypes.instanceOf(Object),
  };
  static defaultProps = {};

  render() {
    // const style = TransactionDetailsRewardsStyle();
    const { transaction, actions } = this.props;
    const transactionProps = transaction.uiProps;

    return (
      <RegularLayout>
        <View>
          <TxInfoSection
            margin="40 0 20 0"
            transaction={transaction}
            transactionProps={transactionProps}
          />
          {!transaction.type.includes("BONUS") && (
            <TxReferralSection transaction={transaction} />
          )}

          <TxBasicSection
            label={"Date"}
            value={moment(transaction.time).format("D MMM YYYY")}
          />

          <TxBasicSection
            label={"Time"}
            value={moment.utc(transaction.time).format("h:mm A (z)")}
          />

          <CelButton
            margin={"20 0 0 0"}
            basic
            onPress={() => actions.navigateTo("WalletLanding")}
          >
            Go Back to Wallet
          </CelButton>
        </View>
      </RegularLayout>
    );
  }
}

export default TransactionDetailsRewards;