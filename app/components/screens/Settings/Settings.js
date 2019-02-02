import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import testUtil from "../../../utils/test-util";
import * as appActions from "../../../redux/actions";
import SettingsStyle from "./Settings.styles";
import StaticScreen from "../StaticScreen/StaticScreen";
import { EMPTY_STATES } from "../../../constants/UI";

@connect(
  state => ({
    style: SettingsStyle(state.ui.theme),
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class Settings extends Component {

  static propTypes = {
    // text: PropTypes.string
  };
  static defaultProps = {
  }

  constructor(props) {
    super(props);
    this.state = {
      header: {
        title: "Settings",
        left: "back",
        right: "logout"
      }
    };
  }

  render() {
    const { header } = this.state
    // const { style } = this.props
    return (
      <StaticScreen
        header={header}
        emptyState={{ purpose: EMPTY_STATES.COMPLIANCE }}
      />
    );
  }
}

export default testUtil.hookComponent(Settings);
