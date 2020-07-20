import { storiesOf } from "@storybook/react-native/dist";

import WalletLandingStories from "./WalletLanding/WalletLanding.stories";
import VerifyProfileStories from "./VerifyProfile/VerifyProfile.stories";
import CoinDetailsStories from "./CoinDetails/CoinDetails.stories";
import WelcomeStories from "./Welcome/Welcome.stories";
import DepositStories from "./Deposit/Deposit.stories";
import ProfileStories from "./Profile/Profile.stories";
import LoginStories from "./Login/Login.stories";
import SelectCoinStories from "./SelectCoin/SelectCoin.stories";
import LoginLandingStories from "./LoginLanding/LoginLanding.stories";
import GetCoinsLandingStories from "./GetCoinsLanding/GetCoinsLanding.stories";
import WithdrawEnterAmountStories from "./WithdrawEnterAmount/WithdrawEnterAmount.stories";
import MyCelStories from "./MyCel/MyCel.stories";
import TransactionsIntersectionStories from "./TransactionsIntersection/TransactionsIntersection.stories";
import InterestRatesStories from "./InterestRates/InterestRates.stories";
import WalletInterestStories from "./WalletInterest/WalletInterest.stories";
import GetCoinsEnterAmountStories from "./GetCoinsEnterAmount/GetCoinsEnterAmount.stories";
import SecuritySettingsStories from "./SecuritySettings/SecuritySettings.stories";
import AllTransactionsStories from "./AllTransactions/AllTransactions.stories";
import BalanceHistoryStories from "./BalanceHistory/BalanceHistory.stories";
import WalletSettingsStories from "./WalletSettings/WalletSettings.stories";
import BorrowLandingStories from "./BorrowLanding/BorrowLanding.stories";
import ConfirmCameraStories from "./ConfirmCamera/ConfirmCamera.stories";
import RegisterInitialStories from "./RegisterInitial/RegisterInitial.stories";
import CameraScreenStories from "./CameraScreen/CameraScreen.stories";
import KYCProfileDetailsStories from "./KYCProfileDetails/KYCProfileDetails.stories";
import CommunityStories from "./Community/Community.stories";
import KYCAddressInfoStories from "./KYCAddressInfo/KYCAddressInfo.stories";
import SelectCountryStories from "./SelectCountry/SelectCountry.stories";
import BorrowEnterAmountStories from "./BorrowEnterAmount/BorrowEnterAmount.stories";
import BorrowChooseLoanStories from "./BorrowChooseLoan/BorrowChooseLoan.stories";
import WithdrawAddressOverviewStories from "./WithdrawAddressOverview/WithdrawAddressOverview.stories";
import CelPayLandingStories from "./CelPayLanding/CelPayLanding.stories";
import WithdrawConfirmStories from "./WithdrawConfirm/WithdrawConfirm.stories";
import WithdrawConfirmAddressStories from "./WithdrawConfirmAddress/WithdrawConfirmAddress.stories";
import KYCVerifyIdentityStories from "./KYCVerifyIdentity/KYCVerifyIdentity.stories";
import TwoFactorSettingsStories from "./TwoFactorSettings/TwoFactorSettings.stories";
import PersonalInformationStories from "./PersonalInformation/PersonalInformation.stories";
import WithdrawCreateAddressStories from "./WithdrawCreateAddress/WithdrawCreateAddress.stories";
import KYCCheckPhotosStories from "./KYCCheckPhotos/KYCCheckPhotos.stories";
import RegisterSetPinStories from "./RegisterSetPin/RegisterSetPin.stories";
import HodlLandingStories from "./HodlLanding/HodlLanding.stories";
import TwoFaAuthAppConfirmationCodeStories from "./TwoFaAuthAppConfirmationCode/TwoFaAuthAppConfirmationCode.stories";
import KYCTaxpayerStories from "./KYCTaxpayer/KYCTaxpayer.stories";
import BorrowCollateralStories from "./BorrowCollateral/BorrowCollateral.stories";
import AppearanceStories from "./Appearance/Appearance.stories";
import TooManyRequestsStories from "./TooManyRequests/TooManyRequests.stories";
import SupportStories from "./Support/Support.stories";
import ForgotPasswordStories from "./ForgotPassword/ForgotPassword.stories";
import SecurityOverviewStories from "./SecurityOverview/SecurityOverview.stories";
import SimplexScreenStories from "./Simplex/SimplexScreen.stories";
import ApiAuthorizationStories from "./ApiAuthorization/ApiAuthorization.stories";
import ChangePasswordStories from "./ChangePassword/ChangePassword.stories";
import ChangeAvatarStories from "./ChangeAvatar/ChangeAvatar.stories";
import HODLViewCodeStories from "./HODLViewCode/HODLViewCode.stories";
import BorrowCalculatorScreenStories from "./BorrowCalculatorScreen/BorrowCalculatorScreen.stories";
import HODLInfoCheckboxesStories from "./HODLInfoCheckboxes/HODLInfoCheckboxes.stories";
import CelPayEnterAmountStories from "./CelPayEnterAmount/CelPayEnterAmount.stories";
import ActionsByUserStories from "./ActionsByUser/ActionsByUser.stories";
import LoyaltyProgramStories from "./LoyaltyProgram/LoyaltyProgram.stories";
import SelectStateStories from "./SelectState/SelectState.stories";
import LoanPaymentListStories from "./LoanPaymentList/LoanPaymentList.stories";
import BorrowLoanTermStories from "./BorrowLoanTerm/BorrowLoanTerm.stories";
import WithdrawAddressLabelStories from "./WithdrawAddressLabel/WithdrawAddressLabel.stories";
import InterestCalculatorScreenStories from "./InterestCalculatorScreen/InterestCalculatorScreen.stories";
import LoanSettingsStories from "./LoanSettings/LoanSettings.stories";
import InterestPaymentSettingsStories from "./InterestPaymentSettings/InterestPaymentSettings.stories";
import BorrowLoanOptionStories from "./BorrowLoanOption/BorrowLoanOption.stories";
import CellphoneEnterStories from "./CellphoneEnter/CellphoneEnter.stories";
import CellphoneVerifyStories from "./CellphoneVerify/CellphoneVerify.stories";
import GetCoinsTransactionDetailsStories from "./GetCoinsTransactionDetails/GetCoinsTransactionDetails.stories";
import CelPayChooseFriendStories from "./CelPayChooseFriend/CelPayChooseFriend.stories";
import QRScannerStories from "./QRScanner/QRScanner.stories";
import ChoosePaymentMethodStories from "./ChoosePaymentMethod/ChoosePaymentMethod.stories";
import LoanRequestDetailsStories from "./LoanRequestDetails/LoanRequestDetails.stories";

// Link to screens spreadsheet
// https://docs.google.com/spreadsheets/d/17kUJoGJvZJlHQcAi62mVN6Td2tBXAZ2acly_VmeUse0/edit#gid=0

storiesOf("WalletLanding", module)
  .add("Grid", WalletLandingStories.grid)
  .add("List", WalletLandingStories.list)
  .add("Not Verified", WalletLandingStories.notVerified)
  .add("Pending Verification", WalletLandingStories.pendingVerification)
  .add("KYC Rejeceted", WalletLandingStories.rejeceted)
  .add("Loan & Referral Banner", WalletLandingStories.loanReferralBanner)
  .add("No SSN", WalletLandingStories.noSSN)
  .add("No Address", WalletLandingStories.noAddress);

storiesOf("VerifyProfile", module)
  .add("PIN", VerifyProfileStories.pin)
  .add("2FA", VerifyProfileStories.twoFA);

storiesOf("CoinDetails", module)
  .add("BTC", CoinDetailsStories.btc)
  .add("OMG", CoinDetailsStories.omg);

storiesOf("Welcome", module).add("Regular", WelcomeStories.regular);

storiesOf("Deposit", module)
  .add("Loading", DepositStories.btc)
  .add("Alternate address - BCH", DepositStories.bch)
  .add("ETH", DepositStories.eth)
  .add("With Loyalty - CEL", DepositStories.cel)
  .add("With Tag - XRP", DepositStories.xrp)
  .add("With Memo ID - XLM", DepositStories.xlm);

storiesOf("Profile", module)
  .add("Regular", ProfileStories.regular)
  .add("Not Verified", ProfileStories.notVerified)
  .add("Pending Verification", ProfileStories.pendingVerification)
  .add("Rejeceted", ProfileStories.rejeceted);

storiesOf("Login", module).add("Regular", LoginStories.regular);

storiesOf("SelectCoin", module)
  .add("Crypto", SelectCoinStories.crypto)
  .add("Fiat", SelectCoinStories.fiat);

storiesOf("LoginLanding", module)
  .add("Login", LoginLandingStories.login)
  .add("Register", LoginLandingStories.register);

storiesOf("GetCoinsLanding", module)
  .add("No Transactions", GetCoinsLandingStories.noTransactions)
  .add("Not Compliant", GetCoinsLandingStories.notCompliant)
  .add("Pending Verification", GetCoinsLandingStories.pendingVerification)
  .add("Not Verified", GetCoinsLandingStories.notVerified);

storiesOf("WithdrawEnterAmount", module)
  .add("Regular", WithdrawEnterAmountStories.regular)
  .add("Locked Address", WithdrawEnterAmountStories.lockedAddress)
  .add("Without Amount", WithdrawEnterAmountStories.withoutAmount)
  .add("Not Compliant", WithdrawEnterAmountStories.notCompliant)
  .add("Pending Verification", WithdrawEnterAmountStories.pendingVerification)
  .add("Not Verified", WithdrawEnterAmountStories.notVerified)
  .add("HODL Mode Activated", WithdrawEnterAmountStories.hodlModeActive);

storiesOf("MyCel", module)
  .add("None", MyCelStories.none)
  .add("Silver", MyCelStories.silver)
  .add("Gold", MyCelStories.gold)
  .add("Platinum", MyCelStories.platinum)
  .add("Overview", MyCelStories.overview)
  .add("Interest", MyCelStories.interest)
  .add("Loans", MyCelStories.loans);

storiesOf("TransactionsIntersection", module)
  .add("Deposit Pending", TransactionsIntersectionStories.depositPending)
  .add("Deposit Confirmed", TransactionsIntersectionStories.depositConfirmed)
  .add("Withdrawal Pending", TransactionsIntersectionStories.withdrawalPending)
  .add(
    "Withdrawal Confirmed",
    TransactionsIntersectionStories.withdrawalConfirmed
  )
  .add(
    "Withdrawal Canceled",
    TransactionsIntersectionStories.withdrawalCanceled
  )
  .add(
    "Withdrawal Pending Verification",
    TransactionsIntersectionStories.withdrawalPendingVerification
  )
  .add(
    "Withdrawal Pending Review",
    TransactionsIntersectionStories.withdrawalPendingReview
  )
  .add("Loan Interest", TransactionsIntersectionStories.loanInterest)
  .add(
    "Loan Principal Received",
    TransactionsIntersectionStories.loanPrincipalReceived
  )
  .add("Interest", TransactionsIntersectionStories.interest)
  .add("Bonus Token", TransactionsIntersectionStories.bonusToken)
  .add("CelPay Claimed", TransactionsIntersectionStories.celpayClaimed)
  .add("CelPay Sent", TransactionsIntersectionStories.celpaySent)
  .add("CelPay Received", TransactionsIntersectionStories.celpayReceived)
  .add("CelPay Returned", TransactionsIntersectionStories.celpayReturned)
  .add("CelPay Canceled", TransactionsIntersectionStories.celpayCanceled)
  .add("Collateral Pending", TransactionsIntersectionStories.collateralPending)
  .add("Collateral Locked", TransactionsIntersectionStories.collateralLocked)
  .add(
    "Collateral Unlocked",
    TransactionsIntersectionStories.collateralUnlocked
  )
  .add("Promo Code Bonus", TransactionsIntersectionStories.promoCodeBonus)
  .add("Referred HODL", TransactionsIntersectionStories.referredHodl)
  .add("Referred Pending", TransactionsIntersectionStories.referredPending)
  .add("Referrer", TransactionsIntersectionStories.referrer)
  .add("Referrer Pending", TransactionsIntersectionStories.referrerPending)
  .add("Canceled", TransactionsIntersectionStories.canceled);

storiesOf("InterestRates", module).add("Regular", InterestRatesStories.regular);

storiesOf("WalletInterest", module)
  .add("Regular", WalletInterestStories.regular)
  .add("Non Compliant", WalletInterestStories.nonCompliant);

storiesOf("GetCoinsEnterAmount", module)
  .add("With Amount", GetCoinsEnterAmountStories.regular)
  .add("Out of Range", GetCoinsEnterAmountStories.notInRange)
  .add("No Amount", GetCoinsEnterAmountStories.withoutAmount)
  .add("In Fiat", GetCoinsEnterAmountStories.inFiat);

storiesOf("SecuritySettings", module)
  .add("Weak", SecuritySettingsStories.weak)
  .add("Fair", SecuritySettingsStories.fair)
  .add("Good", SecuritySettingsStories.good)
  .add("Strong", SecuritySettingsStories.strong);

storiesOf("AllTransactions", module)
  .add("Regular", AllTransactionsStories.regular)
  .add("Non Transactions", AllTransactionsStories.noTransactions);

storiesOf("BalanceHistory", module).add(
  "Regular",
  BalanceHistoryStories.regular
);

storiesOf("WalletSettings", module)
  .add(
    "Eligible for interest in CEL",
    WalletSettingsStories.eligibleForInterestInCEL
  )
  .add(
    "Not eligible for interest in CEL",
    WalletSettingsStories.notEligibleForInterestInCEL
  );

storiesOf("BorrowLanding", module)
  .add("With Loans", BorrowLandingStories.withLoans)
  .add("No Loans", BorrowLandingStories.noLoans)
  .add("Not Compliant", BorrowLandingStories.notCompliant)
  .add("Not Verified", BorrowLandingStories.notVerified);

storiesOf("ConfirmCamera", module)
  .add("Profile", ConfirmCameraStories.profile)
  .add("Document", ConfirmCameraStories.document)
  .add("Utility Bill", ConfirmCameraStories.utility);

storiesOf("RegisterInitial", module)
  .add("Empty", RegisterInitialStories.empty)
  .add("Filled", RegisterInitialStories.filled)
  .add("With Errors", RegisterInitialStories.withErrors)
  .add("With Referral", RegisterInitialStories.withReferral);

storiesOf("CameraScreen", module)
  .add("Profile", CameraScreenStories.profile)
  .add("Document", CameraScreenStories.document)
  .add("Utility Bill", CameraScreenStories.utility);

storiesOf("KYCProfileDetails", module)
  .add("Empty", KYCProfileDetailsStories.empty)
  .add("Prefilled", KYCProfileDetailsStories.prefilled)
  .add("With Errors", KYCProfileDetailsStories.withErrors);

storiesOf("Community", module).add("Regular", CommunityStories.regular);

storiesOf("KYCAddressInfo", module).add(
  "Address Info",
  KYCAddressInfoStories.regular
);

storiesOf("SelectCountry", module)
  .add("Calling Codes", SelectCountryStories.noCodes)
  .add("No Calling Codes", SelectCountryStories.withCodes);

storiesOf("BorrowEnterAmount", module)
  .add("Crypto Loan", BorrowEnterAmountStories.crypto)
  .add("USD", BorrowEnterAmountStories.usd)
  .add("No Amount", BorrowEnterAmountStories.noAmount);

storiesOf("BorrowChooseLoan", module)
  .add("Stable Coins and USD", BorrowChooseLoanStories.stableAndUsd)
  .add("Stable Coins", BorrowChooseLoanStories.stable)
  .add("USD", BorrowChooseLoanStories.usd);

storiesOf("WithdrawAddressOverview", module).add(
  "regular",
  WithdrawAddressOverviewStories.regular
);

storiesOf("CelPayLanding", module).add(
  "Cel Pay Landing",
  CelPayLandingStories.regular
);

storiesOf("WithdrawConfirm", module).add(
  "Confirm",
  WithdrawConfirmStories.regular
);

storiesOf("WithdrawConfirmAddress", module)
  .add("Regular", WithdrawConfirmAddressStories.regular)
  .add("With Destination Tag / Memo ID", WithdrawConfirmAddressStories.withTag);

storiesOf("KYCVerifyIdentity", module)
  .add("All", KYCVerifyIdentityStories.all)
  .add("Passport", KYCVerifyIdentityStories.passport)
  .add(
    "Passport and Driving Licence",
    KYCVerifyIdentityStories.passportAndDrivingLicence
  );

storiesOf("TwoFactorSettings", module).add(
  "TwoFactorSettings",
  TwoFactorSettingsStories.regular
);

storiesOf("PersonalInformation", module).add(
  "Personal Information",
  PersonalInformationStories.regular
);

storiesOf("WithdrawCreateAddress", module)
  .add("Regular ", WithdrawCreateAddressStories.regular)
  .add("XRP", WithdrawCreateAddressStories.xrp)
  .add("XLM", WithdrawCreateAddressStories.xlm)
  .add("EOS", WithdrawCreateAddressStories.eos);

storiesOf("KYCCheckPhotos", module)
  .add("Single Photo", KYCCheckPhotosStories.singlePhoto)
  .add("Multiple Photos", KYCCheckPhotosStories.multiplePhotos);

storiesOf("RegisterSetPin", module)
  .add("Create PIN", RegisterSetPinStories.createPin)
  .add("Confirm PIN", RegisterSetPinStories.confirmPin);

storiesOf("HodlLanding", module).add("HodlLanding", HodlLandingStories.regular);

storiesOf("TwoFaAuthAppConfirmationCode", module).add(
  "Two FA Auth Confirmation Code",
  TwoFaAuthAppConfirmationCodeStories.regular
);

storiesOf("KYCTaxpayer", module)
  .add("SSN", KYCTaxpayerStories.ssn)
  .add("Tax payer", KYCTaxpayerStories.taxPayer);

storiesOf("HODLViewCode", module).add(
  "HODL View Code",
  HODLViewCodeStories.regular
);

storiesOf("SecurityOverview", module)
  .add("Weak", SecurityOverviewStories.weak)
  .add("Fair", SecurityOverviewStories.fair)
  .add("Good", SecurityOverviewStories.good)
  .add("Strong", SecurityOverviewStories.strong)
  .add("Disabled Cards", SecurityOverviewStories.disabledCards)
  .add("Enabled Cards", SecurityOverviewStories.enabledCards);

storiesOf("BorrowCollateral", module).add(
  "Borrow Collateral",
  BorrowCollateralStories.regular
);

storiesOf("Appearance", module).add("Apearance", AppearanceStories.regular);

storiesOf("TooManyRequests", module).add(
  "Too Many Requests",
  TooManyRequestsStories.regular
);

storiesOf("Support", module).add("Support", SupportStories.regular);

storiesOf("ForgotPassword", module).add(
  "Forgot Password",
  ForgotPasswordStories.regular
);

storiesOf("SimplexScreen", module).add("Regular", SimplexScreenStories.regular);

storiesOf("ApiAuthorization", module).add(
  "Regular",
  ApiAuthorizationStories.regular
);

storiesOf("ChangePassword", module).add(
  "Change Password",
  ChangePasswordStories.regular
);

storiesOf("ChangeAvatar", module).add(
  "Change Avatar",
  ChangeAvatarStories.regular
);

storiesOf("BorrowCalculatorScreen", module) // TODO: add empty state cases
  .add("Borrow Calculator", BorrowCalculatorScreenStories.regular);

storiesOf("HODLInfoCheckboxes", module).add(
  "HODL Info Checkboxes",
  HODLInfoCheckboxesStories.regular
);

storiesOf("CelPayEnterAmount", module)
  .add("No Amount", CelPayEnterAmountStories.noAmount)
  .add("Crypto Amount", CelPayEnterAmountStories.cryptoAmount)
  .add("USD amount", CelPayEnterAmountStories.usdAmount);

storiesOf("QRScanner", module).add("QR Scanner", QRScannerStories.regular);

storiesOf("LoyaltyProgram", module)
  .add("None", LoyaltyProgramStories.none)
  .add("Silver", LoyaltyProgramStories.silver)
  .add("Gold", LoyaltyProgramStories.gold)
  .add("Platinum", LoyaltyProgramStories.platinum);

storiesOf("ChoosePaymentMethod", module)
  .add("Prepayment", ChoosePaymentMethodStories.prepayment)
  .add("Interest CEL", ChoosePaymentMethodStories.interestCEL)
  .add("Interest Crypto", ChoosePaymentMethodStories.interestCrytpo);

storiesOf("SelectState", module).add(
  "Select State",
  SelectStateStories.regular
);

storiesOf("LoanPaymentList", module).add(
  "Regular",
  LoanPaymentListStories.regular
);

storiesOf("BorrowLoanTerm", module)
  .add("Stable coin", BorrowLoanTermStories.stable)
  .add("USD", BorrowLoanTermStories.usd);

storiesOf("WithdrawAddressLabel", module).add(
  "Withdraw Address Label",
  WithdrawAddressLabelStories.regular
);

storiesOf("InterestCalculatorScreen", module).add(
  "Interest Calculator Screen",
  InterestCalculatorScreenStories.regular
);

storiesOf("LoanSettings", module).add("Regular", LoanSettingsStories.regular);

storiesOf("InterestPaymentSettings", module)
  .add("Manual", InterestPaymentSettingsStories.manualInterest)
  .add("Automatic", InterestPaymentSettingsStories.automaticInterest);

storiesOf("BorrowLoanOption", module).add(
  "Borrow Loan Option",
  BorrowLoanOptionStories.regular
);

storiesOf("ActionsByUser", module).add(
  "Actions By User",
  ActionsByUserStories.regular
);

storiesOf("Cellphone ", module)
  .add("Cellphone Enter", CellphoneEnterStories.regular)
  .add("Cellphone Verify", CellphoneVerifyStories.regular);

storiesOf("GetCoinsTransactionDetails", module)
  .add("Wire Pending", GetCoinsTransactionDetailsStories.wirePending)
  .add("Wire Confirmed", GetCoinsTransactionDetailsStories.wireConfirmed)
  .add("Wire Cancelled", GetCoinsTransactionDetailsStories.wireCancelled)
  .add("Card Pending", GetCoinsTransactionDetailsStories.cardPending)
  .add("Card Confirmed", GetCoinsTransactionDetailsStories.cardConfirmed)
  .add("Card Cancelled", GetCoinsTransactionDetailsStories.cardCancelled);

storiesOf("CelPayChooseFriend ", module)
  .add("Initial", CelPayChooseFriendStories.regular)
  .add("Has Contacts", CelPayChooseFriendStories.hasContacts)
  .add("No Contacts", CelPayChooseFriendStories.noContacts);

storiesOf("LoanRequestDetails", module)
  .add("Pending", LoanRequestDetailsStories.pending)
  .add("Approved", LoanRequestDetailsStories.approved)
  .add("Active", LoanRequestDetailsStories.active)
  .add("Completed", LoanRequestDetailsStories.completed)
  .add("Rejected", LoanRequestDetailsStories.rejected)
  .add("Canceled", LoanRequestDetailsStories.canceled)
  .add("Refinanced", LoanRequestDetailsStories.refinanced);
