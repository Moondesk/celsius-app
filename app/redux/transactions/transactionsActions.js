import ACTIONS from "../../constants/ACTIONS";
import API from "../../constants/API";
import { apiError, startApiCall } from "../api/apiActions";
import { showMessage } from "../ui/uiActions";
import { clearForm } from "../forms/formsActions";
import transactions from "../../services/transactions-service";
import walletService from "../../services/wallet-service";
import { navigateTo } from "../nav/navActions";
import celUtilityUtil from "../../utils/cel-utility-util";
import { getWalletSummary } from "../wallet/walletActions";
import { TRANSACTION_TYPES } from "../../constants/DATA";
import mockTransactions from "../../mock-data/transactions.mock";
import mixpanelAnalytics from "../../utils/mixpanel-analytics";

export {
  getAllTransactions,
  getTransactionDetails,
  withdrawCrypto,
  cancelWithdrawal,
  sendCsvEmail,
};

/**
 * Sends csv file to your mail with all transactions
 */

function sendCsvEmail() {
  return async (dispatch, getState) => {
    try {
      const user = getState().user.profile;
      dispatch(startApiCall(API.GET_CSV_EMAIL));
      await transactions.sendCsvEmail();
      dispatch(
        showMessage(
          "info",
          `Check your mail. We've started creating your CSV file and will email it to ${user.email} when it's ready. This could take a few minutes.`
        )
      );
      dispatch({ type: ACTIONS.GET_CSV_EMAIL_SUCCESS });
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.GET_CSV_EMAIL, err));
    }
  };
}

/**
 * Gets transactions
 * @param {Object} query
 * @param {string} query.type - one of received|withdraw|interest
 * @param {string} query.coin - eg. BTC|ETH|XRP...
 */
function getAllTransactions(query = {}) {
  return async dispatch => {
    try {
      const { type, coin, period } = query;
      dispatch(startApiCall(API.GET_ALL_TRANSACTIONS));
      const response = await transactions.getAll({ type, coin, period });

      dispatch({
        type: ACTIONS.GET_ALL_TRANSACTIONS_SUCCESS,
        transactions: response.data,
      });
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.GET_ALL_TRANSACTIONS, err));
    }
  };
}

/**
 * Gets single transaction by id
 * @param {string} id
 */
function getTransactionDetails(id = "") {
  return async dispatch => {
    try {
      dispatch(startApiCall(API.GET_TRANSACTION_DETAILS));

      // NOTE(fj) when USE_MOCK_TRANSACTIONS is set to true
      if (Object.keys(TRANSACTION_TYPES).includes(id))
        return dispatch(getTransactionDetailsSuccess(mockTransactions[id]));

      const res = await transactions.getTransaction(id);
      dispatch(getTransactionDetailsSuccess(res.data.transaction));
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.GET_TRANSACTION_DETAILS, err));
    }
  };
}

/**
 * TODO add JSDoc
 */
function cancelWithdrawal(withdrawalId) {
  return async dispatch => {
    dispatch(startApiCall(API.CANCEL_WITHDRAWAL_TRANSACTION));

    try {
      const response = await transactions.cancelWithdrawalService(withdrawalId);
      dispatch({
        type: ACTIONS.CANCEL_WITHDRAWAL_TRANSACTION_SUCCESS,
        callName: API.CANCEL_WITHDRAWAL_TRANSACTION,
        transaction: response.data.transaction,
      });

      dispatch(showMessage("success", "Withdrawal canceled"));
      dispatch(getWalletSummary());
    } catch (error) {
      dispatch(showMessage(`error`, error.msg));
      dispatch(apiError(API.CANCEL_WITHDRAWAL_TRANSACTION, error));
    }
  };
}

/**
 * TODO add JSDoc
 */
function getTransactionDetailsSuccess(transaction) {
  return {
    type: ACTIONS.GET_TRANSACTION_DETAILS_SUCCESS,
    callName: API.GET_TRANSACTION_DETAILS,
    transaction,
  };
}

/**
 * Withdraws crypto for the user
 */
function withdrawCrypto() {
  return async (dispatch, getState) => {
    try {
      const { formData } = getState().forms;
      const { coin, amountCrypto, pin, code } = formData;
      dispatch(startApiCall(API.WITHDRAW_CRYPTO));

      const res = await walletService.withdrawCrypto(coin, amountCrypto, {
        pin,
        twoFactorCode: code,
      });

      dispatch({
        type: ACTIONS.WITHDRAW_CRYPTO_SUCCESS,
        transaction: res.data.transaction,
      });

      await celUtilityUtil.refetchMembershipIfChanged(coin.toUpperCase());

      dispatch(
        navigateTo("TransactionDetails", {
          id: res.data.transaction.id,
          hideBack: true,
        })
      );

      dispatch(showMessage("success", "An email verification has been sent."));
      dispatch(clearForm());

      mixpanelAnalytics.withdrawCompleted(res.data.transaction);
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.WITHDRAW_CRYPTO, err));
    }
  };
}
