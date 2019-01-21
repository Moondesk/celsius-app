import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import testUtil from "../../../utils/test-util";
import * as appActions from "../../../redux/actions";
import FabMenuStyle from "./FabMenu.styles";
import Fab from '../../molecules/Fab/Fab';

@connect(
  state => ({
    style: FabMenuStyle(state.ui.theme),
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class FabMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style } = this.props
    return (
      <View style={style.container}>
        <Fab />
      </View>
    );
  }
}

export default testUtil.hookComponent(FabMenu);
