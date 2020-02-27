import ACTIONS from "../../constants/ACTIONS";
import { apiError, startApiCall } from "../api/apiActions";
import API from "../../constants/API";
import { showMessage } from "../ui/uiActions";
import simplexService from "../../services/simplex-service";
import { navigateTo } from "../nav/navActions";
import mixpanelAnalytics from "../../utils/mixpanel-analytics";

export {
  simplexGetQuote,
  simplexCreatePaymentRequest,
  getAllSimplexPayments,
  getSimplexQuoteForCoin,
};

/**
 * Gets info for Simplex request
 */
function simplexGetQuote() {
  return async (dispatch, getState) => {
    const { formData } = getState().forms;
    try {
      dispatch(startApiCall(API.GET_QUOTE));

      const requestedCurrency = formData.isUsd ? "USD" : formData.coin;
      const amount = formData.isUsd
        ? formData.amountUsd
        : formData.amountCrypto;

      const quote = await simplexService.getQuote(
        formData.coin,
        "USD",
        requestedCurrency,
        amount
      );
      dispatch({
        type: ACTIONS.GET_QUOTE_SUCCESS,
        quote: quote.data,
      });

      mixpanelAnalytics.enteredBuyCoinsAmount(
        "CARD",
        formData.coin,
        "USD",
        formData.amountCrypto,
        formData.amountUsd
      );
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.GET_QUOTE, err));
    }
  };
}

/**
 * Gets info Simplex quote for coin
 *
 * @param {String} coin - ETH|BTC
 */
function getSimplexQuoteForCoin(coin) {
  return async dispatch => {
    try {
      dispatch(startApiCall(API.GET_QUOTE_FOR_COIN));

      const amountToCheck = 10000;
      const quote = await simplexService.getQuote(
        coin,
        "USD",
        "USD",
        amountToCheck
      );

      const fiatCurrency = quote.data.fiat_money.currency.toLowerCase();
      const cryptocurrency = quote.data.digital_money.currency.toLowerCase();
      const coinRate =
        quote.data.fiat_money.base_amount / quote.data.digital_money.amount;

      dispatch({
        type: ACTIONS.GET_QUOTE_FOR_COIN_SUCCESS,
        fiatCurrency,
        cryptocurrency,
        coinRate,
      });
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.GET_QUOTE_FOR_COIN, err));
    }
  };
}

/**
 * Creates Simplex payment request
 */
function simplexCreatePaymentRequest() {
  return async (dispatch, getState) => {
    try {
      const { formData } = getState().forms;
      const { simplexData } = getState().simplex;

      const { pin, code } = formData;

      dispatch(startApiCall(API.CREATE_PAYMENT_REQUEST));

      const payment = {
        quote_id: simplexData.quote_id,
        coin: simplexData.digital_money.currency,
        amount: simplexData.digital_money.amount,
        fiat_amount: simplexData.fiat_money.total_amount,
        fiat_currency: simplexData.fiat_money.currency,
        fiat_base_amount: simplexData.fiat_money.base_amount,
      };

      const paymentRequest = await simplexService.createPaymentRequest(
        payment,
        {
          pin,
          twoFactorCode: code,
        }
      );

      dispatch({
        type: ACTIONS.CREATE_PAYMENT_REQUEST_SUCCESS,
        paymentRequest: paymentRequest.data,
      });
      dispatch(navigateTo("Simplex"));

      mixpanelAnalytics.initiatedBuyCoinsRequest(
        "CARD",
        formData.coin,
        "USD",
        simplexData.digital_money.amount,
        simplexData.fiat_money.total_amount
      );
    } catch (err) {
      dispatch(showMessage("error", err.msg));
      dispatch(apiError(API.CREATE_PAYMENT_REQUEST, err));
    }
  };
}

/**
 * Gets all simplex payments
 */
function getAllSimplexPayments() {
  return async dispatch => {
    dispatch(startApiCall(API.GET_PAYMENT_REQUESTS));

    try {
      const res = await simplexService.getAllPayments();

      dispatch({
        type: ACTIONS.GET_PAYMENT_REQUESTS_SUCCESS,
        payments: res.data,
      });
    } catch (err) {
      dispatch(apiError(API.GET_PAYMENT_REQUESTS, err));
      dispatch(showMessage("error", err.msg));
    }
  };
}