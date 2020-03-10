import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
import HodlDeactivationCodeStyle from "./HodlDeactivationCode.styles";
import CelText from "../../atoms/CelText/CelText";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import CelInput from "../../atoms/CelInput/CelInputText";
import CelButton from "../../atoms/CelButton/CelButton";
import CelNumpad from "../../molecules/CelNumpad/CelNumpad";
import { KEYPAD_PURPOSES } from "../../../constants/UI";
import STYLES from "../../../constants/STYLES";
import Card from "../../atoms/Card/Card";

@connect(
  state => ({
    formData: state.forms.formData,
    formErrors: state.forms.formErrors,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class HodlDeactivationCode extends Component {
  static propTypes = {};
  static defaultProps = {};

  static navigationOptions = () => ({
    title: "HODL mode",
    right: "profile",
  });

  render() {
    const style = HodlDeactivationCodeStyle();
    const { formData, actions } = this.props;
    // code will be 8 digits
    const isEligible = formData.hodlCode && formData.hodlCode.length === 8;
    return (
      <RegularLayout>
        <CelText
          align={"left"}
          margin={"10 0 10 0"}
          type={"H2"}
          weight={"bold"}
        >
          Deactivation code
        </CelText>
        <CelText type={"H4"} align={"left"}>
          Please type below deactivation code to successfully deactivate HODL
          mode.
        </CelText>

        <Card styles={style.inputCel} margin={"20 0 20 0"}>
          <CelInput
            placeholder={"  X X X X X X X X  "}
            type="text"
            returnKeyType={"done"}
            style={{ textAlign: "center", fontSize: 30 }}
            maxLenght={8}
            field={"hodlCode"}
            value={formData.hodlCode}
          />
        </Card>

        <CelButton
          disabled={!isEligible}
          onPress={() => actions.deactivateHodlMode()}
        >
          Send email verification
        </CelButton>

        <CelText margin={"20 0 0 0"} type={"H4"} align={"center"}>
          Forgot your code?
        </CelText>
        <CelText type={"H4"} align={"center"}>
          <CelText
            color={STYLES.COLORS.CELSIUS_BLUE}
            onPress={() => actions.navigateTo("Support")}
          >
            Contact our support
          </CelText>{" "}
          for help
        </CelText>

        <CelNumpad
          field={"hodlCode"}
          value={formData.hodlCode}
          toggleKeypad={() => ({})}
          updateFormField={actions.updateFormField}
          setKeypadInput={actions.setKeypadInput}
          purpose={KEYPAD_PURPOSES.VERIFICATION}
        />
      </RegularLayout>
    );
  }
}

export default HodlDeactivationCode;