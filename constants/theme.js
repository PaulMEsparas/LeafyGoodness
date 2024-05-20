import { Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

// import bold from "../assets/fonts/Poppins-Bold.ttf";
// import extraBold from "../assets/fonts/Poppins-ExtraBold.ttf";
// import light from "../assets/fonts/Poppins-Light.ttf";
// import medium from "../assets/fonts/Poppins-Medium.ttf";
// import regular from "../assets/fonts/Poppins-Regular.ttf";
// import semiBold from "../assets/fonts/Poppins-SemiBold.ttf";

const COLORS = {
  // primary: "#006400", // Dark green
  // secondary: "#FFD700", // Gold
  // tertiary: "#4169E1", // Royal blue

  primary: "#4CAF50", // Green (freshness, health)
  secondary: "#FFA000", // Orange (warmth, energy)
  tertiary: "#FF4081", // Pink (sweetness, playfulness)
  quaternary: "#5C6BC0", // Indigo (sophistication, richness)
  quinary: "#FF5722", // Deep Orange (appetizing, bold)

  gray: "#808080", // Gray
  gray2: "#A9A9A9", // Dark gray

  offwhite: "#F8F8FF", // Off-white
  white: "#FFFFFF", // White
  black: "#000000", // Black
  red: "#FF0000", // Red
  green: "#008000", // Green
  lightWhite: "#F5F5F5", // Light white
};

// const FONTS = {
//   bold: bold,
//   extraBold: extraBold,
//   light: light,
//   medium: medium,
//   regular: regular,
//   semiBold: semiBold,
// };

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
