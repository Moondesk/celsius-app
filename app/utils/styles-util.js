import { Dimensions, PixelRatio, Text, TextInput, StyleSheet } from "react-native";
import formatter from './formatter';
import store from '../redux/store';

const { width, height } = Dimensions.get("window");

export {
  getMargins,
  getPadding,
  getScaledFont,
  getThemedStyle,
  disableAccessibilityFontScaling,
  widthPercentageToDP,
  heightPercentageToDP,
  getFont,
  getFontSize
};


/**
 * Formats margins from CSS style declaration
 *
 * @param {string} margin - eg. '10 20 10 20'
 * @returns {Object}
 */
function getMargins(margin) {
  if (!margin) return getMargins("0 0 0 0");

  const margins = margin.split(" ");
  if (margins.length !== 4) return getMargins();

  return StyleSheet.create({
    margins: {
      marginTop: Number(margins[0]),
      marginRight: Number(margins[1]),
      marginBottom: Number(margins[2]),
      marginLeft: Number(margins[3])
    }
  }).margins;
}


/**
 * Formats padding from CSS style declaration
 *
 * @param {string} padding - eg. '10 20 10 20'
 * @returns {Object}
 */
function getPadding(padding) {
  if (!padding) return getPadding("0 0 0 0");

  const paddings = padding.split(" ");
  if (paddings.length !== 4) return getPadding();

  return StyleSheet.create({
    paddings: {
      paddingTop: Number(paddings[0]),
      paddingRight: Number(paddings[1]),
      paddingBottom: Number(paddings[2]),
      paddingLeft: Number(paddings[3])
    }
  }).paddings;
}


/**
 * Sets theme styles for component
 *
 * @param {Object} base - base styles for component
 * @param {Object} themed - styles for all themes
 * @param {string} theme - current active theme
 * @returns {Object} themed styles
 */
function getThemedStyle(base, themed, theme = store.getState().ui.theme) {
  return StyleSheet.create(formatter.deepmerge(base, themed[theme]));
  // return StyleSheet.flatten([StyleSheet.create(base), StyleSheet.create(themed[theme])])
  // return StyleSheet.create(_.merge({ ...base }, { ...themed[theme] }));
  // return _.mergeWith({ ...base }, { ...themed[theme] });
  // return formatter.deepmerge(base, themed[theme])
}


/**
 * Disables native font scaling from device accessibility settings
 */
function disableAccessibilityFontScaling() {
  // disables letter sizing in phone's Accessibility menu
  if (Text.defaultProps == null) Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;

  // same same as with Text, but different
  if (TextInput.defaultProps == null) TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}


/**
 * Calculates screen percentage in pixels from device width
 *
 * @param {number} widthPercent
 * @returns {number}
 */
function widthPercentageToDP(widthPercent) {
  const screenWidth = width;
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};


/**
 * Calculates screen percentage in pixels from device height
 *
 * @param {number} heightPercent
 * @returns {number}
 */
function heightPercentageToDP(heightPercent) {
  const screenHeight = height;
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};


/**
 * Gets scaled font size for different devices or different themes
 *
 * @param {number} fontSize
 * @retunrs {number}
 */

function getScaledFont(fontSize) {
  return fontSize;
}



/**
 * Gets scaled font size for different devices or different themes
 *
 * @param {number} fontSize
 * @retunrs {number}
 */

function getFont(fontSize) {
  const scale = 350

  const ratio = fontSize / scale; // get ratio based on your standard scale 
  const newSize = Math.round(ratio * width);
  return newSize;

}

/**
 * Gets scaled font size type 
 *
 * @param {number} newSize
 * @retunrs {number}
 */

function getFontSize() {
  let newSize;

  if (width > 350) {
    newSize = 'H4'
  } else if (width < 350 && width > 250) {
    newSize = 'H6'
  } else
    newSize = 'H7'

  return newSize;

}