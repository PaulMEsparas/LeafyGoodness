import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const COLORS = {
  primary: "#006400", // Dark green
  secondary: "#FFD700", // Gold
  tertiary: "#4169E1", // Royal blue

  gray: "#808080", // Gray
  gray2: "#A9A9A9", // Dark gray

  offwhite: "#F8F8FF", // Off-white
  white: "#FFFFFF", // White
  black: "#000000", // Black
  red: "#FF0000", // Red
  green: "#008000", // Green
  lightWhite: "#F5F5F5", // Light white
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 44,
  height,
  width,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, SIZES, SHADOWS };
