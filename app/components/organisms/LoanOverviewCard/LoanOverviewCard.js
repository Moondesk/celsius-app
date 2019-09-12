import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import moment from "moment";

import LoanOverviewCardStyle from "./LoanOverviewCard.styles";
import CelText from "../../atoms/CelText/CelText";
import Card from "../../atoms/Card/Card";
import Separator from "../../atoms/Separator/Separator";
import CelButton from "../../atoms/CelButton/CelButton";
import Icon from "../../atoms/Icon/Icon";
import formatter from "../../../utils/formatter";
import { getMargins, widthPercentageToDP } from "../../../utils/styles-util";
import CircularProgressBar from "../../graphs/CircularProgressBar/CircularProgressBar";
import { LOAN_STATUS } from "../../../constants/DATA";
import PaymentListItem from "../../atoms/PaymentListItem/PaymentListItem";
import STYLES from "../../../constants/STYLES";

class LoanOverviewCard extends Component {

  static propTypes = {
    loan: PropTypes.instanceOf(Object),
    navigateTo: PropTypes.func.isRequired,
    index: PropTypes.number,
    actions: PropTypes.instanceOf(Object),
    length: PropTypes.number,
    hasEnoughOriginalCoin: PropTypes.bool,
    hasEnoughOtherCoins: PropTypes.bool
  };
  static defaultProps = {
    payed: false,
    loanSettings: false,
    index: 0
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  getMarginForIndex(index, length) {
    if (index === 0) return `0 0 0 ${widthPercentageToDP("15%")}`;
    if (index === length) return `0 ${widthPercentageToDP("15%")} 0 0`;
    return `0 0 0 0`;
  }

  lockMarginCollateral = () => {
    const { loan, actions } = this.props;

    const marginCallData = {
      coin: loan.margin_call.collateral_coin,
      amount_collateral_usd: loan.margin_call.margin_call_usd_amount,
      amount_collateral_crypto: loan.margin_call.margin_call_amount
    };
    actions.lockMarginCollateral(loan.margin_call.id, marginCallData);
  };

  render() {
    const { loan, navigateTo, index, length, actions, hasEnoughOtherCoins, hasEnoughOriginalCoin } = this.props;
    const style = LoanOverviewCardStyle();

    const previousPayments = loan.amortization_table.filter(p => p.isPaid);
    const previous5Payments = previousPayments.slice(0, 5);

    return (
      <View style={[style.container, getMargins(this.getMarginForIndex(index, length))]}>
        <Card padding={"0 0 0 0"}>
          <View style={style.info}>
            <View style={style.status}>
              <Icon name={"TransactionLoan"} fill={loan.uiProps.color} width={"25"} height={"25"}/>
              <CelText type={"H5"} color={loan.uiProps.color} margin={"0 5 0 0"}>{loan.uiProps.displayText}</CelText>
            </View>

            <CelText type={"H2"} weight={"600"} margin={"5 0 5 0"}>{loan.uiProps.displayAmount}</CelText>

            {loan.status === LOAN_STATUS.COMPLETED && (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <CelText type={"H6"}>Loan Completed:</CelText>
                <CelText type={"H6"}>{moment(loan.maturity_date).format("MMMM DD, YYYY")}</CelText>
              </View>
            )}

            {loan.status === LOAN_STATUS.CANCELED && (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <CelText type={"H6"}>Request Canceled:</CelText>
                <CelText type={"H6"}>{moment(loan.canceled_at).format("MMMM DD, YYYY")}</CelText>
              </View>
            )}

            {[LOAN_STATUS.APPROVED, LOAN_STATUS.ACTIVE].includes(loan.status) && (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <CelText type={"H6"}>Loan Approved:</CelText>
                <CelText type={"H6"}>{moment(loan.approved_at).format("MMMM DD, YYYY")}</CelText>
              </View>
            )}

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <CelText type={"H6"}>Loan Requested:</CelText>
              <CelText type={"H6"}>{moment(loan.created_at).format("MMMM DD, YYYY")}</CelText>
            </View>

            {loan.status === LOAN_STATUS.PENDING &&
            <Card color={style.card.color} margin={"30 0 0 0"}>
              <CelText type={"H7"}>
                Someone from our team is already reviewing your request. You will be notified when your request is
                approved.
              </CelText>
            </Card>
            }
          </View>

          {loan.status === LOAN_STATUS.ACTIVE && loan.margin_call_activated &&
          <Card styles={{ alignSelf: "center" }} size={"twoThirds"} color={STYLES.COLORS.RED}>
            <CelText weight={"500"} type={"H5"} color={STYLES.COLORS.WHITE}>Margin Call Warning</CelText>
            <CelText weight={"300"} type={"H6"} color={STYLES.COLORS.WHITE}
                     margin={"10 0 0 0"}>{`The value of your collateral has dropped significantly. To match the value with the current market prices, we will need to lock an additional ${formatter.crypto(loan.margin_call.margin_call_amount, loan.margin_call.collateral_coin)} from your wallet balance. You can also deposit more funds or choose other coins from your wallet.`}</CelText>
            {hasEnoughOriginalCoin &&
            <View>
              <CelButton onPress={this.lockMarginCollateral} size={"small"} margin={"10 0 10 0"}
                         textColor={STYLES.COLORS.RED} basic color={"red"}>Approve BTC Lock</CelButton>
              <CelButton onPress={() => actions.navigateTo("BorrowCollateral")} size={"small"}
                         textColor={STYLES.COLORS.WHITE} ghost color={"red"}>Use Other Coins</CelButton>
            </View>
            }
            {!hasEnoughOriginalCoin && hasEnoughOtherCoins &&
            <CelButton onPress={() => actions.navigateTo("BorrowCollateral")} size={"small"}
                       textColor={STYLES.COLORS.WHITE} ghost color={"red"}>Use Other Coins</CelButton>
            }
            {!hasEnoughOriginalCoin && !hasEnoughOtherCoins &&
            <CelButton onPress={() => actions.navigateTo("Deposit")} size={"small"} margin={"10 0 10 0"}
                       textColor={STYLES.COLORS.RED} basic color={"red"}>Deposit Coins</CelButton>
            }
          </Card>
          }

          {[LOAN_STATUS.ACTIVE, LOAN_STATUS.APPROVED].includes(loan.status) && (
            <View>
              <Separator size={2} margin={"0 0 10 0"}/>
              <View style={style.interest}>
                <View>
                  <CelText type={"H6"} weight={"300"}>Monthly interest</CelText>
                  <CelText type={"H3"} weight={"600"}>{formatter.usd(loan.monthly_payment)}</CelText>
                  <CelText type={"H6"} weight={"300"} margin={"15 0 0 0"}>Total interest</CelText>
                  <CelText type={"H3"} weight={"600"}>{formatter.usd(loan.total_interest)}</CelText>

                  <Card color={style.card.color} padding={"5 5 5 5"}>
                    <CelText type={"H7"} weight={"300"}>{"-XX if paid in CEL"}</CelText>
                  </Card>

                </View>
                <View style={style.progress}>
                  <CircularProgressBar
                    amountLoaned={Number(loan.total_interest)}
                    amountPaid={Number(loan.total_interest_paid)}
                  />
                </View>
              </View>
            </View>
          )}

          <Separator size={2} margin={"10 0 0 0"}/>

          <View style={style.buttonContainer}>
            <CelButton
              onPress={() => navigateTo("LoanRequestDetails", { id: loan.id })}
              basic
              textSize={"H6"}
            >
              Loan Details
            </CelButton>

            {[LOAN_STATUS.ACTIVE, LOAN_STATUS.APPROVED].includes(loan.status) &&
              <Separator vertical/>
            }

            {[LOAN_STATUS.ACTIVE, LOAN_STATUS.APPROVED].includes(loan.status) && (
                <CelButton
                  onPress={() => navigateTo("LoanSettings", { id: loan.id })}
                  basic
                  textSize={"H6"}
                >
                  Loan Settings
                </CelButton>
            )}
          </View>

          {loan.hasInterestPaymentFinished && loan.status === LOAN_STATUS.ACTIVE &&
          <View>
            <Separator size={2} margin={"0 0 0 0"}/>
            <CelButton
              onPress={() => navigateTo("LoanRequestDetails", { id: loan.id })}
              margin={"15 0 15 0"}
              color="green"
            >
              Payout Principal
            </CelButton>
          </View>
          }
        </Card>

        {loan.status === LOAN_STATUS.PENDING && (
          <CelButton
            margin="15 0 15 0"
            onPress={() => {
              actions.cancelLoan(loan.id);
              navigateTo("LoanRequestDetails", { id: loan.id });
            }}
            color="red"
          >
            Cancel loan
          </CelButton>
        )}

        {loan.status === LOAN_STATUS.APPROVED && (
          <Card close>
            <CelText weight="500">
              Did you know you can prepay loan interest?
            </CelText>

            <CelText
              type="H6"
              style={{ opacity: 0.7 }}
            >
              Choose a period of six months or more to prepay your interest. You will get notified as soon as your
              interest payment is due again.
            </CelText>

            <CelButton
              basic
              textSize={"H6"}
              onPress={() => navigateTo("LoanRequestDetails", { id: loan.id })}
            >
              Prepay interest
            </CelButton>
          </Card>
        )}

        {loan.status === LOAN_STATUS.ACTIVE && (
          <View>
            <CelText>Payment History</CelText>

            {previous5Payments.map((p, i) => (
              <PaymentListItem key={`${p.dueDate}${i}`} payment={p}/>
            ))}

            {previousPayments.length > 5 && (
              <CelButton
                basic
                onPress={() => navigateTo("LoanPaymentHistory", { id: loan.id })}
              >
                See all
              </CelButton>
            )}

          </View>
        )}

        {loan.status === LOAN_STATUS.ACTIVE && !loan.hasInterestPaymentFinished && (
          <View>
            <Separator margin="10 0 10 0"/>
            <CelButton onPress={() => navigateTo("LoanPaymentList", { id: loan.id })}>
              Upcoming Payments
            </CelButton>
          </View>
        )}
      </View>
    );
  }
}

export default LoanOverviewCard;
