import { LOAN_STATUS, LOAN_TYPES, LOAN_PAYMENT_TYPES } from "../constants/DATA";

export default {

  CONFIRM_LOAN: {
    "id": "CONFIRM_LOAN",
    "loan_amount": "5120",
    "loan_coin":"USDC",
    "loan_amount_usd": "5120",
    "type": LOAN_TYPES.STABLE_COIN_LOAN,
    "estimated_collateral":"8.57",
    "estimated_collateral_coin":"BTC",
    "term_of_loan": 12,
    "annual_interest_rate":0.09,
    "monthly_payment":"37.5",
    "total_interest":450,
    "interest_coin":"USDC",
    "total_payments":"5450",
    "CEL_discount":0.15,
    "CEL_monthly_interest":"453.38",
    "CEL_total_interest":"5404.38",
    "CEL_original_monthly_interest":"37.5",
    "CEL_discounted_monthly_interest":"31.38",
    "CEL_original_total_interest":"450.12",
    "CEL_discounted_total_interest":"453.38",
    "bank_name":"Deutch bank",
    "bank_address":"Berlin strase",
    "bank_zip":"1000",
    "bank_city":"Berlin",
    "bank_country":"Germany",
    "bank_country_short":"GER",
    "bank_swift":"223344",
    "bank_account_number":"32512312312312",
    "liquidation_at":"345",
    "collateral_usd_rate": "0",
    "collateral_coin": "BTG",
    "amount_collateral_crypto": "4",
    "originating_date": "2019-07-19T07:32:31.228Z",
    "status": LOAN_STATUS.PENDING,
    "created_at": "2019-07-19T09:29:26.796Z",
    "interest": "0.03",
    "coin_loan_asset": "USD",
    "amortization_table": [],
    "next_payment": {},
    "margin_call": {
      "id": "margin_call_id_1",
      "collateral_coin": "BTC",
      "margin_call_amount": 2.3,
      "margin_call_usd_amount": 219536,
      "due_date": "2019-07-19T09:29:26.796Z",
    },
    "margin_call_price": 0,
    "margin_call_activated": false,
    "liquidation_call_price": 0,
    "maturity_date": null,
    "approved_at": null,
    "activated_at": null,
    "actions_required": [
      "PENDING_APPROVAL"
    ],
    "transaction_id": null
  },

  ALL_LOANS: {
    PENDING_USD_LOAN: {
      "id": "PENDING_USD_LOAN",
      "amount_collateral_crypto": "4",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3",
      "status": LOAN_STATUS.PENDING,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "0",
      "total_interest": "0",
      "coin_loan_asset": "USD",
      "type": LOAN_TYPES.USD_LOAN,
      "amortization_table": [],
      "next_payment": {},
      "margin_call": {
        "id": "margin_call_id_1",
        "collateral_coin": "BTC",
        "margin_call_amount": 2.3,
        "margin_call_usd_amount": 219536,
        "due_date": "2019-07-19T09:29:26.796Z",
      },
      "margin_call_price": 0,
      "margin_call_activated": false,
      "liquidation_call_price": 0,
      "maturity_date": null,
      "approved_at": null,
      "activated_at": null,
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    },

    PENDING_STABLE_COIN_LOAN: {
      "id": "PENDING_STABLE_COIN_LOAN",
      "amount_collateral_crypto": "12314",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3500",
      "status": LOAN_STATUS.PENDING,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "0",
      "total_interest": "0",
      "coin_loan_asset": "USDT",
      "type": LOAN_TYPES.STABLE_COIN_LOAN,
      "amortization_table": [],
      "next_payment": {},
      "margin_call": {
        "id": "margin_call_id_1",
        "collateral_coin": "BTC",
        "margin_call_amount": 2.3,
        "margin_call_usd_amount": 219536,
        "due_date": "2019-07-19T09:29:26.796Z",
      },
      "margin_call_price": 0,
      "margin_call_activated": false,
      "liquidation_call_price": 0,
      "maturity_date": null,
      "approved_at": null,
      "activated_at": null,
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    },
    CANCELED_LOAN: {
      "id": "CANCELED_LOAN",
      "amount_collateral_crypto": "12314",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3500",
      "status": LOAN_STATUS.CANCELED,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "0",
      "total_interest": "0",
      "coin_loan_asset": "USDT",
      "type": LOAN_TYPES.STABLE_COIN_LOAN,
      "amortization_table": [],
      "next_payment": {},
      "margin_call": {
        "id": "margin_call_id_1",
        "collateral_coin": "BTC",
        "margin_call_amount": 2.3,
        "margin_call_usd_amount": 219536,
        "due_date": "2019-07-19T09:29:26.796Z",
      },
      "margin_call_price": 0,
      "margin_call_activated": false,
      "liquidation_call_price": 0,
      "maturity_date": null,
      "approved_at": null,
      "activated_at": null,
      "canceled": "2019-07-22T09:29:26.796Z",
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    },
    APPROVED_LOAN: {
      "id": "APPROVED_LOAN",
      "amount_collateral_crypto": "1214",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3120",
      "loan_amount_usd": "3120",
      "status": LOAN_STATUS.APPROVED,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "120",
      "total_interest": "670",
      "total_interest_paid": "0",
      "coin_loan_asset": "USDT",
      "type": LOAN_TYPES.STABLE_COIN_LOAN,
      "amortization_table": [],
      "next_payment": {},
      "margin_call": {
        "id": "margin_call_id_1",
        "collateral_coin": "BTC",
        "margin_call_amount": 2.3,
        "margin_call_usd_amount": 219536,
        "due_date": "2019-07-19T09:29:26.796Z",
      },
      "margin_call_price": 0,
      "margin_call_activated": false,
      "liquidation_call_price": 0,
      "maturity_date": null,
      "approved_at": null,
      "activated_at": null,
      "canceled": "2019-07-22T09:29:26.796Z",
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    },
    ACTIVE_LOAN: {
      "id": "ACTIVE_LOAN",
      "amount_collateral_crypto": "1214",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3120",
      "loan_amount_usd": "3120",
      "status": LOAN_STATUS.ACTIVE,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "120",
      "total_interest": "670",
      "total_interest_paid": "195",
      "coin_loan_asset": "USDT",
      "type": LOAN_TYPES.STABLE_COIN_LOAN,
      "amortization_table": [
        {
          "amountToPay": "600",
          "amountPaid": "0",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "70",
          "amountPaid": "70",
          "coin": "USDC",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "600",
          "amountPaid": "600",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "600",
          "amountPaid": "600",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "250",
          "amountPaid": "250",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "300",
          "amountPaid": "300",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "270",
          "amountPaid": "270",
          "coin": "USDC",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "600",
          "amountPaid": "600",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "70",
          "amountPaid": "70",
          "coin": "USDC",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        }
      ],
      "next_payment": {},
      "margin_call": {
        "id": "margin_call_id_1",
        "collateral_coin": "BTC",
        "margin_call_amount": 2.3,
        "margin_call_usd_amount": 219536,
        "due_date": "2019-07-19T09:29:26.796Z",
      },
      "margin_call_price": 0,
      "margin_call_activated": false,
      "liquidation_call_price": 0,
      "maturity_date": null,
      "approved_at": null,
      "activated_at": null,
      "canceled": "2019-07-22T09:29:26.796Z",
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    },
    ACTIVE_LOAN_PAID_INTEREST: {
      "id": "ACTIVE_LOAN_PAID_INTEREST",
      "amount_collateral_crypto": "1214",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3120",
      "loan_amount_usd": "3120",
      "status": LOAN_STATUS.ACTIVE,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "120",
      "total_interest": "670",
      "total_interest_paid": "670",
      "coin_loan_asset": "USDT",
      "type": LOAN_TYPES.STABLE_COIN_LOAN,
      "amortization_table": [
        {
          "amountToPay": "600",
          "amountPaid": "600",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "70",
          "amountPaid": "70",
          "coin": "USDC",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "5000",
          "amountPaid": "0",
          "type": LOAN_PAYMENT_TYPES.RECEIVING_PRINCIPAL_BACK,
          "dueDate": "2019-07-29T09:29:26.796Z"
        }
      ],
      "next_payment": {},
      "margin_call_price": 0,
      "margin_call_activated": true,
      "margin_call": {
        "collateral_coin": "BTC",
        "due_date": "2019-07-19T09:29:26.796Z",
        "margin_call_amount": 2.3,
        "margin_call_usd_amount": 219536,
        "id": "margin_call_id_1",
      },
      "liquidation_call_price": 0,
      "maturity_date": "2019-07-27T09:29:26.796Z",
      "approved_at": "2019-07-29T09:29:26.796Z",
      "activated_at": null,
      "canceled": "2019-07-22T09:29:26.796Z",
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    },
    LOAN_COMPLETED: {
      "id": "LOAN_COMPLETED",
      "amount_collateral_crypto": "1214",
      "collateral_usd_rate": "0",
      "collateral_coin": "BTG",
      "originating_date": "2019-07-19T07:32:31.228Z",
      "loan_amount": "3120",
      "loan_amount_usd": "3120",
      "status": LOAN_STATUS.COMPLETED,
      "created_at": "2019-07-19T09:29:26.796Z",
      "interest": "0.03",
      "term_of_loan": 7,
      "monthly_payment": "120",
      "total_interest": "670",
      "total_interest_paid": "670",
      "coin_loan_asset": "USDT",
      "type": LOAN_TYPES.STABLE_COIN_LOAN,
      "amortization_table": [
        {
          "amountToPay": "600",
          "amountPaid": "600",
          "coin": "USDT",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "70",
          "amountPaid": "70",
          "coin": "USDC",
          "type": LOAN_PAYMENT_TYPES.MONTHLY_INTEREST,
          "dueDate": "2019-07-19T09:29:26.796Z"
        },
        {
          "amountToPay": "5000",
          "amountPaid": "5000",
          "type": LOAN_PAYMENT_TYPES.RECEIVING_PRINCIPAL_BACK,
          "dueDate": "2019-07-29T09:29:26.796Z"
        }
      ],
      "next_payment": {},
      "margin_call": {
        "id": "margin_call_id_1",
        "collateral_coin": "BTC",
        "margin_call_amount": 0.2,
        "margin_call_usd_amount": 219536,
        "due_date": "2019-07-19T09:29:26.796Z",
      },
      "margin_call_price": 0,
      "margin_call_activated": false,
      "liquidation_call_price": 0,
      "maturity_date": "2019-08-29T09:29:26.796Z",
      "approved_at": "2019-07-29T09:29:26.796Z",
      "activated_at": null,
      "canceled": "2019-07-22T09:29:26.796Z",
      "actions_required": [
        "PENDING_APPROVAL"
      ],
      "transaction_id": null
    }
  }

};