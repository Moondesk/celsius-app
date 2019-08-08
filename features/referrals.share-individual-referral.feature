@referrals
Feature: Share individual referral link
  As a user
  ISBAT share my personal referral code
  in order to refer friends to Celsius app and receive rewards

  @happy
  Scenario: User shares his individual promo code
    Given A user is logged in
    And User has navigated to `Profile` screen
    When User presses `Refer friends`
    Then A modal should open informing the user about referral conditions
    And Showing his referral code

    When User shares the code
    Then Native share dialog will open
    And User can share his referral code
