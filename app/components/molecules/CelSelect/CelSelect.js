import React, { Component } from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RNPickerSelect from "react-native-picker-select";
import { lookup, countries } from "country-data";

import * as appActions from "../../../redux/actions";

import CelSelectStyle from "./CelSelect.styles";
import { getColor, getMargins } from "../../../utils/styles-util";
import Icon from "../../atoms/Icon/Icon";
import SELECT_VALUES from "../../../constants/SELECT_VALUES";
import CelText from "../../atoms/CelText/CelText";
import STYLES from "../../../constants/STYLES";
import { COLOR_KEYS } from "../../../constants/COLORS";

const { PERSON_TITLE, GENDER, STATE, DAYS, YEARS, MONTHS } = SELECT_VALUES;

@connect(
  () => ({}),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class CelSelect extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      "gender",
      "title",
      "country",
      "native",
      "state",
      "day",
      "month",
      "year",
      "phone",
    ]),
    items: PropTypes.instanceOf(Array),
    value: PropTypes.oneOfType([
      PropTypes.instanceOf(Object),
      PropTypes.string,
    ]),
    field: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    margin: PropTypes.string,
    error: PropTypes.string,
    flex: PropTypes.number,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    transparent: PropTypes.bool,
    showCountryFlag: PropTypes.bool,
    hideCallingCodes: PropTypes.bool,
  };
  static defaultProps = {
    type: "native",
    value: "",
    items: [],
    labelText: "",
    margin: "0 0 15 0",
    disabled: false,
    transparent: false,
    showCountryFlag: false,
    hideCallingCodes: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const value = nextProps.value;
    const type = nextProps.type;
    const items = prevState.items;

    if (value && items && type) {
      const item =
        type === "country"
          ? lookup.countries({ name: value.name })[0]
          : items.filter(i => i.value === value)[0];
      return {
        value: item,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const items = this.getItems(props);

    this.state = {
      visible: false,
      items,
      value: undefined,
    };
  }

  componentDidMount() {
    this.changeColorProp();
  }

  getItems = ({ type, items }) => {
    switch (type) {
      case "title":
        return PERSON_TITLE;
      case "gender":
        return GENDER;
      case "state":
        return STATE;
      case "day":
        return DAYS;
      case "year":
        return YEARS;
      case "month":
        return MONTHS;
      default:
        return items;
    }
  };

  getInputStyle = () => {
    const { disabled, margin, transparent } = this.props;

    const cmpStyle = CelSelectStyle();
    const style = [];

    if (!transparent) style.push(cmpStyle.container, getMargins(margin));
    if (disabled) style.push(cmpStyle.disabledInput);

    return style;
  };

  getIconColor = style => StyleSheet.flatten(style.iconColor).color; // get color from raw json depending on style theme

  getTextColor = style => {
    const { value } = this.state;
    if (value) return StyleSheet.flatten(style.textColor).color; // get color from raw json depending on style theme
    return this.getIconColor(style);
  };

  changeColorProp = () => {
    const { items } = this.state;
    const tempItems = [];
    let item;
    items.forEach(element => {
      item = element;
      item.color = STYLES.COLORS.DARK_GRAY;
      tempItems.push(item);
    });

    this.setState({
      items: tempItems,
    });
  };

  handlePickerSelect = value => {
    const { actions, field } = this.props;

    if (value) {
      actions.updateFormField(field, value);
    }
  };

  renderSelect() {
    const {
      disabled,
      labelText,
      type,
      actions,
      field,
      showCountryFlag,
      hideCallingCodes,
    } = this.props;
    const { visible, value } = this.state;

    const inputStyle = this.getInputStyle();
    const cmpStyle = CelSelectStyle();
    const textColor = this.getTextColor(cmpStyle);
    const iconColor = this.getIconColor(cmpStyle);

    let onPress = () => this.setState({ visible: !visible });

    if (type === "country") {
      onPress = () =>
        actions.navigateTo("SelectCountry", {
          field_name: field,
          hideCallingCodes,
        });
    } else if (type === "phone") {
      onPress = () =>
        actions.navigateTo("SelectCountry", {
          field_name: field,
          hideCallingCodes,
        });
    } else if (type === "state") {
      onPress = () => actions.navigateTo("SelectState", { field });
    }

    const country = this.props.value ? this.props.value : countries.US;

    if (type === "phone") {
      return (
        <TouchableOpacity onPress={onPress}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 10,
              borderRadius: 8,
            }}
          >
            {this.renderImage(cmpStyle.flagImage, country.alpha2)}
            <CelText
              type="H4"
              weight="light"
              align="left"
              style={{ marginLeft: 10, marginRight: 5 }}
            >
              {country.countryCallingCodes
                ? country.countryCallingCodes[0]
                : ""}
            </CelText>
            <View
              style={{
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon name="CaretDown" height="9" width="15" fill={iconColor} />
            </View>
          </View>
        </TouchableOpacity>
      );
    }

    if (type === "state") {
      return (
        <TouchableOpacity
          onPress={onPress}
          style={[inputStyle, { flexDirection: "row", alignItems: "center" }]}
        >
          <View style={{ flexDirection: "row" }}>
            <CelText type="H4" weight="light" color={textColor}>
              {value ? value.label : labelText}
            </CelText>
            {!disabled && (
              <View
                style={{
                  flex: 1,
                  marginTop: countryInput ? 11 : 2,
                  position: countryInput ? "absolute" : "relative",
                  marginLeft: countryInput ? 292 : 0,
                  justifyContent: "center",
                  alignItems: countryInput ? "center" : "flex-end",
                }}
              >
                <Icon name="CaretDown" height="9" width="15" fill={iconColor} />
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    }

    const countryInput =
      type === "country" &&
      showCountryFlag &&
      this.state.value &&
      this.state.value.alpha2;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[inputStyle, { flexDirection: "row", alignItems: "center" }]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {countryInput
              ? this.renderImage(
                  [cmpStyle.flagImage, { marginRight: 5 }],
                  this.state.value.alpha2
                )
              : null}
            <CelText type="H4" weight="light" color={textColor}>
              {value ? value.label || value.name : labelText}
            </CelText>
          </View>
          {!disabled && (
            <View
              style={{
                marginTop: 5,
                justifyContent: "center",
                alignItems: countryInput ? "center" : "flex-end",
              }}
            >
              <Icon name="CaretDown" height="9" width="15" fill={iconColor} />
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }

  renderImage = (style, iso = "") => (
    <Image
      source={{
        uri: `https://raw.githubusercontent.com/hjnilsson/country-flags/master/png250px/${iso.toLowerCase()}.png`,
      }}
      resizeMode="cover"
      style={style}
    />
  );

  render() {
    const { type, flex, disabled, onChange, error, style } = this.props;
    const { items, value } = this.state;

    return (
      <View style={[flex ? { flex } : {}, style]}>
        {!["state", "country", "phone"].includes(type) ? (
          <RNPickerSelect
            disabled={disabled}
            items={items}
            onValueChange={onChange || this.handlePickerSelect}
            value={value ? value.value : null}
            style={{ height: 23 }}
          >
            {this.renderSelect()}
          </RNPickerSelect>
        ) : (
          this.renderSelect()
        )}

        {!!error && (
          <View>
            <CelText
              margin="5 0 0 0"
              color={getColor(COLOR_KEYS.NEGATIVE_STATE)}
              style={{ height: 20 }}
              type="H6"
            >
              {!!error && error}
            </CelText>
          </View>
        )}
      </View>
    );
  }
}

export default CelSelect;
