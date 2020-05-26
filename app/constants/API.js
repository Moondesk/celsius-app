export default {
  // auth api calls
  LOGIN_USER: "LOGIN_USER",
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_TWITTER: "REGISTER_USER_TWITTER",
  LOGIN_USER_TWITTER: "LOGIN_USER_TWITTER",
  REGISTER_USER_FACEBOOK: "REGISTER_USER_FACEBOOK",
  LOGIN_USER_FACEBOOK: "LOGIN_USER_FACEBOOK",
  REGISTER_USER_GOOGLE: "REGISTER_USER_GOOGLE",
  SOCIAL_REGISTER: "SOCIAL_REGISTER",
  LOGIN_USER_GOOGLE: "LOGIN_USER_GOOGLE",
  UPDATE_USER: "UPDATE_USER",
  SEND_RESET_LINK: "SEND_RESET_LINK",
  RESET_PASSWORD: "RESET_PASSWORD",
  LOGOUT_FROM_ALL_DEVICES: "LOGOUT_FROM_ALL_DEVICES",
  CHANGE_PIN: "CHANGE_PIN",
  GET_PREVIOUS_SCREEN: "GET_PREVIOUS_SCREEN",
  REFRESH_AUTH_TOKEN: "REFRESH_AUTH_TOKEN",

  // user api calls
  GET_USER_PERSONAL_INFO: "GET_USER_PERSONAL_INFO",
  GET_USER_TAXPAYER_INFO: "GET_USER_TAXPAYER_INFO",
  UPDATE_USER_PERSONAL_INFO: "UPDATE_USER_PERSONAL_INFO",
  UPDATE_USER_ADDRESS_INFO: "UPDATE_USER_ADDRESS_INFO",
  UPDATE_USER_TAXPAYER_INFO: "UPDATE_USER_TAXPAYER_INFO",
  UPLOAD_PLOFILE_IMAGE: "UPLOAD_PLOFILE_IMAGE",
  CREATE_KYC_DOCUMENTS: "CREATE_KYC_DOCUMENTS",
  GET_KYC_DOCUMENTS: "GET_KYC_DOCUMENTS",
  SEND_VERIFICATION_SMS: "SEND_VERIFICATION_SMS",
  VERIFY_SMS: "VERIFY_SMS",
  START_KYC: "START_KYC",
  GET_KYC_STATUS: "GET_KYC_STATUS",
  GET_ICO_USERS_INFO: "GET_ICO_USERS_INFO",
  GET_COMPLIANCE_INFO: "GET_COMPLIANCE_INFO",
  CHECK_PIN: "CHECK_PIN",
  CHECK_TWO_FACTOR: "CHECK_TWO_FACTOR",
  DISABLE_TWO_FACTOR: "DISABLE_TWO_FACTOR",
  CONNECT_PHONE_CONTACTS: "CONNECT_PHONE_CONTACTS",
  GET_CONNECT_CONTACTS: "GET_CONNECT_CONTACTS",
  GET_LINKED_BANK_ACCOUNT: "GET_LINKED_BANK_ACCOUNT",
  LINK_BANK_ACCOUNT: "LINK_BANK_ACCOUNT",
  GET_LOYALTY_INFO: "GET_LOYALTY_INFO",
  GET_MEMBER_STATUS: "GET_MEMBER_STATUS",
  GET_APP_SETTINGS: "GET_APP_SETTINGS",
  SET_APP_SETTINGS: "SET_APP_SETTINGS",
  GET_USER_SECURITY_OVERVIEW: "GET_USER_SECURITY_OVERVIEW",
  GET_UTILITY_BILL: "GET_UTILITY_BILL",
  SET_UTILITY_BILL: "SET_UTILITY_BILL",
  GET_PRIMETRUST_TOU_LINK: "GET_PRIMETRUST_TOU_LINK",
  POLL_USER_DATA: "POLL_USER_DATA",

  // wallet api calls
  GET_WALLET_DETAILS: "GET_WALLET_DETAILS",
  GET_WALLET_SUMMARY: "GET_WALLET_SUMMARY",
  GET_COIN_BALANCE: "GET_COIN_BALANCE",
  GET_COIN_ADDRESS: "GET_COIN_ADDRESS",
  GET_COIN_ORIGINATING_ADDRESS: "GET_COIN_ORIGINATING_ADDRESS",
  SET_COIN_WITHDRAWAL_ADDRESS: "SET_COIN_WITHDRAWAL_ADDRESS",
  SET_COIN_WITHDRAWAL_ADDRESS_LABEL: "SET_COIN_WITHDRAWAL_ADDRESS_LABEL",

  CHECK_USER_PIN_STATUS: "CHECK_USER_PIN_STATUS",
  SET_PIN: "SET_PIN",
  WITHDRAW_CRYPTO: "WITHDRAW_CRYPTO",
  GET_TRANSACTION_DETAILS: "GET_TRANSACTION_DETAILS",
  GET_ALL_TRANSACTIONS: "GET_ALL_TRANSACTIONS",
  GET_COIN_TRANSACTIONS: "GET_COIN_TRANSACTIONS",
  GET_ALL_COIN_WITHDRAWAL_ADDRESSES: "GET_ALL_COIN_WITHDRAWAL_ADDRESSES",
  CANCEL_WITHDRAWAL_TRANSACTION: "CANCEL_WITHDRAWAL_TRANSACTION",
  GET_CSV_EMAIL: "GET_CSV_EMAIL",

  // graph action
  GET_WALLET_BALANCE_DATA: "GET_WALLET_BALANCE_DATA",
  GET_COIN_WALLET_BALANCE_DATA: "GET_COIN_WALLET_BALANCE_DATA",
  GET_INTEREST_GRAPH_DATA: "GET_INTEREST_GRAPH_DATA",
  GET_COIN_INTEREST_GRAPH_DATA: "GET_COIN_INTEREST_GRAPH_DATA",

  // root api calls
  GET_SUPPORTED_CURRENCIES: "GET_SUPPORTED_CURRENCIES",
  GET_BACKEND_STATUS: "GET_BACKEND_STATUS",
  GET_KYC_DOC_TYPES: "GET_KYC_DOC_TYPES",
  GET_INITIAL_CELSIUS_DATA: "GET_INITIAL_CELSIUS_DATA",

  // interest api calls
  GET_INTEREST_RATES: "GET_INTEREST_RATES",
  GET_INTEREST_CHART_DATA: "GET_INTEREST_CHART_DATA",

  // currencies api calls
  GET_CURRENCY_RATES: "GET_CURRENCY_RATES",
  GET_CURRENCY_GRAPHS: "GET_CURRENCY_GRAPHS",

  // transfer api calls
  GET_ALL_TRANSFERS: "GET_ALL_TRANSFERS",
  GET_TRANSFER: "GET_TRANSFER",
  CLAIM_TRANSFER: "CLAIM_TRANSFER",
  CANCEL_TRANSFER: "CANCEL_TRANSFER",
  CREATE_TRANSFER: "CREATE_TRANSFER",

  // campaign calls
  CREATE_BRANCH_LINK: "CREATE_BRANCH_LINK",
  SAVE_BRANCH_LINK: "SAVE_BRANCH_LINK",
  GET_LINK_BY_URL: "GET_LINK_BY_URL",
  CHECK_PROFILE_PROMO_CODE: "CHECK_PROFILE_PROMO_CODE",
  SUBMIT_PROMO_CODE: "SUBMIT_PROMO_CODE",
  GET_INDIVIDUAL_LINK: "GET_INDIVIDUAL_LINK",

  // camera roll calls
  GET_CAMERA_ROLL: "GET_CAMERA_ROLL",
  TAKE_CAMERA_PHOTO: "TAKE_CAMERA_PHOTO",

  // community statistics
  GET_COMMUNITY_STATISTICS: "GET_COMMUNITY_STATISTICS",

  // loan calls
  APPLY_FOR_LOAN: "APPLY_FOR_LOAN",
  APPLY_FOR_LOAN_PREVIEW_DATA: "APPLY_FOR_LOAN_PREVIEW_DATA",
  GET_ALL_LOANS: "GET_ALL_LOANS",
  GET_LOAN: "GET_LOAN",
  CANCEL_LOAN: "CANCEL_LOAN",
  GET_MARGIN_CALLS: "GET_MARGIN_CALLS",
  LOCK_MARGIN_CALL_COLLATERAL: "LOCK_MARGIN_CALL_COLLATERAL",
  UPDATE_LOAN_SETTINGS: "UPDATE_LOAN_SETTINGS",
  GET_CONFIRM_LOAN_INFO: "GET_CONFIRM_LOAN_INFO",
  GET_LOAN_SETTINGS: "GET_LOAN_SETTINGS",
  PREPAY_LOAN_INTEREST: "PREPAY_LOAN_INTEREST",
  PAY_LOAN_PRINCIPAL: "PAY_LOAN_PRINCIPAL",
  PAY_LOAN_INTEREST: "PAY_LOAN_INTEREST",
  GET_AMORTIZATION_TABLE: "GET_AMORTIZATION_TABLE",
  SEND_BANK_WIRING_INFO_DETAIL: "SEND_BANK_WIRING_INFO_DETAIL",
  PAY_MARGIN_CALL: "PAY_MARGIN_CALL",

  // hodl mode calls
  GET_HODL_CODE: "GET_HODL_CODE",
  ACTIVATE_HODL_MODE: "ACTIVATE_HODL_MODE",
  DEACTIVATE_HODL_MODE: "DEACTIVATE_HODL_MODE",

  // apy key calls
  CREATE_API_KEY: "CREATE_API_KEY",
  DELETE_API_KEY: "DELETE_API_KEY",
  GET_API_KEYS: "GET_API_KEYS",

  // terms of use
  GET_LOAN_TERMS_OF_USE: "GET_LOAN_TERMS_OF_USE",

  // simplex calls
  GET_QUOTE: "GET_QUOTE",
  CREATE_PAYMENT_REQUEST: "CREATE_PAYMENT_REQUEST",
  GET_PAYMENT_REQUESTS: "GET_PAYMENT_REQUESTS",
  GET_CRYPTO_LIMITS: "GET_CRYPTO_LIMITS",
};
