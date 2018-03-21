import React, {Component} from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {Container, Content, Form, View} from 'native-base';
import {bindActionCreators} from 'redux';
import DatePicker from 'react-native-datepicker'

import {MainHeader} from '../../components/Headers/MainHeader/MainHeader';
import {AnimatedHeading} from '../../components/Headings/AnimatedHeading/AnimatedHeading';
import {Message} from '../../components/Message/Message';
import KycStyles from "./styles";
import * as actions from "../../redux/actions";
import {STYLES} from "../../config/constants/style";
import PrimaryInput from "../../components/Inputs/PrimaryInput/PrimaryInput";
import {KEYBOARD_TYPE} from "../../config/constants/common";
import SelectModal from "../../components/Modals/SelectModal/SelectModal";

@connect(
  state => ({
    nav: state.nav,
  }),
  dispatch => bindActionCreators(actions, dispatch),
)

class PersonalInfoScreen extends Component {
  constructor() {
    super();

    this.state = {
      first_name: '',
      lastName: '',
      middleName: '',
      dateOfBirth: '',
      gender: '',
      phoneNumber: '',
      modalVisible: false
    };
  }

  onScroll = event => {
    this.heading.animateHeading(event);
  };

  closeModal = (value) => {
    if (value) {
      this.setState({gender: value.label})
    }

    this.setState({modalVisible: false})
  };

  render() {
    const {firstName, lastName, middleName, dateOfBirth, gender, phoneNumber, modalVisible} = this.state;

    return (
      <Container>
        <StatusBar barStyle="dark-content"/>
        <MainHeader {...this.props} backButton customStyle={{backgroundColor: STYLES.PRIMARY_BLUE}}/>
        <AnimatedHeading
          containerCustomStyles={{backgroundColor: STYLES.PRIMARY_BLUE}}
          ref={(heading) => {
            this.heading = heading;
          }}
          text={'Personal Info'}/>

        <Message/>

        <Content
          bounces={false}
          style={KycStyles.content}
          onScroll={this.onScroll}>
          <View>
            <SelectModal
              visible={modalVisible}
              items={GENDER}
              customHeaderStyle={{backgroundColor: STYLES.PRIMARY_BLUE}}
              onClose={(value) => this.closeModal(value)}/>

            <Form>
              <PrimaryInput labelText={'First Name'} keyboardType={KEYBOARD_TYPE.DEFAULT} value={firstName}
                            onChange={(text) => this.setState({firstName: text})}/>

              <PrimaryInput labelText={'Last Name'} keyboardType={KEYBOARD_TYPE.DEFAULT} value={lastName}
                            onChange={(text) => this.setState({lastName: text})}/>

              <PrimaryInput labelText={'Middle Name'} keyboardType={KEYBOARD_TYPE.DEFAULT} value={middleName}
                            onChange={(text) => this.setState({middleName: text})}/>

              <TouchableOpacity onPress={() => this.datePicker.onPressDate()}>
                <PrimaryInput
                  labelText={'Date of Birth'}
                  clickable
                  editable={false}
                  onPress={() => this.datePicker.onPressDate()}
                  keyboardType={KEYBOARD_TYPE.DEFAULT}
                  value={dateOfBirth}
                  onChange={(text) => console.log(text)}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                <PrimaryInput
                  clickable
                  onPress={() => this.setState({modalVisible: true})}
                  labelText={'Gender'}
                  keyboardType={KEYBOARD_TYPE.DEFAULT}
                  value={gender}
                  onChange={(text) => this.setState({gender: text})}/>
              </TouchableOpacity>

              <PrimaryInput labelText={'Phone Number'} placeholder={'+0000000000'}
                            keyboardType={KEYBOARD_TYPE.PHONE} value={phoneNumber}
                            onChange={(text) => this.setState({phoneNumber: text})}/>
            </Form>

            <DatePicker
              ref={(datePicker) => {
                this.datePicker = datePicker;
              }}
              style={{opacity: 0}}
              customStyles={{alignItems: 'left', borderWidth: 0}}
              date={this.state.date}
              mode="date"
              placeholder={'Date of Birth'}
              showIcon={false}
              format="MM/DD/YYYY"
              confirmBtnText="Ok"
              cancelBtnText="Cancel"
              onDateChange={(date) => {
                this.setState({dateOfBirth: date})
              }}
            />

          </View>
        </Content>
      </Container>
    );
  }
}

const GENDER = [{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}, {label: 'Other', value: 'value'}];

export default PersonalInfoScreen;
