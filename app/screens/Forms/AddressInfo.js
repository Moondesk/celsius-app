import React, {Component} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Container, Content, Form, View, Button, Text} from 'native-base';
import {bindActionCreators} from 'redux';
import * as _ from 'lodash';

import {MainHeader} from '../../components/Headers/MainHeader/MainHeader';
import {AnimatedHeading} from '../../components/Headings/AnimatedHeading/AnimatedHeading';
import {Message} from '../../components/Message/Message';
import Styles from "./styles";
import * as actions from "../../redux/actions";
import {STYLES} from "../../config/constants/style";
import PrimaryInput from "../../components/Inputs/PrimaryInput";
import {KEYBOARD_TYPE} from "../../config/constants/common";
import {PrimaryButton} from "../../components/Buttons/Button/Button";
import SelectCountryModal from "../../components/Modals/SelectCountryModal/SelectCountryModal";
import API from "../../config/constants/API";
import apiUtil from "../../utils/api-util";

@connect(
  state => ({
    nav: state.nav,
    user: state.users.user,
    lastCompletedCall: state.api.lastCompletedCall,
    callsInProgress: state.api.callsInProgress,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)

class AddressInfoScreen extends Component {
  constructor(props) {
    super();

    this.state = {
      addressInfo: {
        country: props.user.country,
        state: props.user.us_state,
        city: props.user.city,
        zip: props.user.zip,
        street: props.user.street,
        buildingNumber: props.user.building_number,
      },
      modalVisible: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  componentDidMount() {
    const {getUserAddressInfo} = this.props;
    getUserAddressInfo();
  }

  componentWillReceiveProps = (nextProps) => {
    const {user, lastCompletedCall, navigateTo} = this.props;

    if (!_.isEqual(user, nextProps.user)) {
      this.setState({
        addressInfo: {
          country: nextProps.user.country,
          state: nextProps.user.us_state,
          city: nextProps.user.city,
          zip: nextProps.user.zip,
          street: nextProps.user.street,
          buildingNumber: nextProps.user.building_number,
        }
      });
    }

    if (lastCompletedCall !== nextProps.lastCompletedCall && nextProps.lastCompletedCall === API.CREATE_USER_ADDRESS_INFO) {
      navigateTo('ContactInfo');
    }
  };

  onScroll = event => {
    this.heading.animateHeading(event);
  };

  onSubmit = () => {
    const {createUserAddressInfo, showMessage} = this.props;
    const {
      country,
      state,
      city,
      zip,
      street,
      buildingNumber,
    } = this.state.addressInfo;

    const error = this.validateForm();

    if (!error) {
      createUserAddressInfo({
        country,
        state,
        city,
        zip,
        street,
        buildingNumber,
      });
    } else {
      showMessage('error', error);
    }

  };

  validateForm = () => {
    const {
      country,
      city,
      zip,
      street,
      buildingNumber,
    } = this.state.addressInfo;

    if (!country) return 'Country is required!';
    if (!city) return 'City is required!';
    if (!zip) return 'Zip number is required!';
    if (!street) return 'Street name is required!';
    if (!buildingNumber) return 'Building number is required!';
  };

  closeModal = (data) => {
    this.setState({
      modalVisible: false,
    });
    this.updateField('country', data || this.state.country)
  };

  updateField(field, text) {
    this.setState({
      addressInfo: {
        ...this.state.addressInfo,
        [field]: text,
      }
    })
  }

  render() {
    const { callsInProgress, cancelLoanRequest } = this.props;
    const { addressInfo, modalVisible } = this.state;

    const {
      country,
      state,
      city,
      zip,
      street,
      buildingNumber,
    } = addressInfo;

    const isLoading = apiUtil.areCallsInProgress([API.CREATE_USER_ADDRESS_INFO], callsInProgress);

    return (
      <Container>
        <StatusBar barStyle="dark-content"/>
        <MainHeader {...this.props} backButton customStyle={{backgroundColor: STYLES.PRIMARY_BLUE}}/>
        <AnimatedHeading
          containerCustomStyles={{backgroundColor: STYLES.PRIMARY_BLUE}}
          ref={(heading) => {
            this.heading = heading;
          }}
          text={'Address Info'}/>

        <Message/>

        <Content
          bounces={false}
          style={Styles.content}
          onScroll={this.onScroll}>
          <View pointerEvents={isLoading ? 'none' : null} style={isLoading ? Styles.disabledForm : null}>
            <SelectCountryModal
              visible={modalVisible}
              modalTitle={'Country'}
              onClose={(countryName) => this.closeModal(countryName)}/>

            <Form>
              <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                <PrimaryInput
                  clickable
                  onPress={() => this.setState({modalVisible: true})}
                  labelText={'Country *'}
                  keyboardType={KEYBOARD_TYPE.DEFAULT}
                  value={country}/>
              </TouchableOpacity>

              {
                country === 'United States' ?
                  <PrimaryInput
                    labelText={'State'}
                    keyboardType={KEYBOARD_TYPE.DEFAULT}
                    value={state}
                    autoCapitalize={'characters'}
                    onChange={(text) => this.updateField('state', text)}/>
                  : null
              }

              <PrimaryInput
                labelText={'City *'}
                keyboardType={KEYBOARD_TYPE.DEFAULT}
                value={city}
                autoCapitalize={'words'}
                onChange={(text) => this.updateField('city', text)}/>

              <PrimaryInput
                labelText={'ZIP *'}
                keyboardType={KEYBOARD_TYPE.NUMERIC}
                value={zip}
                autoCapitalize={'words'}
                onChange={(text) => this.updateField('zip', text)}/>

              <PrimaryInput
                labelText={'Street *'}
                keyboardType={KEYBOARD_TYPE.DEFAULT}
                value={street}
                autoCapitalize={'words'}
                onChange={(text) => this.updateField('street', text)}/>

              <PrimaryInput
                labelText={'Building number *'}
                keyboardType={KEYBOARD_TYPE.DEFAULT}
                value={buildingNumber}
                autoCapitalize={'words'}
                onChange={(text) => this.updateField('buildingNumber', text)}/>

              <View style={Styles.buttonWrapper}>
                <PrimaryButton
                  loading={isLoading}
                  onPress={this.onSubmit}
                  title={'Next'}/>
              </View>

              <View>
                <Button
                  block
                  style={{ marginBottom: 50 }}
                  transparent
                  onPress={ cancelLoanRequest }
                >
                  <Text style={{ color: '#EF461A' }}>Cancel Loan Request</Text>
                </Button>
              </View>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}

export default AddressInfoScreen;
