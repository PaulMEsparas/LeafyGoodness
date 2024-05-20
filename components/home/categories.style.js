import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/index";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: SIZES.width * 0.04, // Responsive padding
  },
  container: {
    width: SIZES.width * 0.25,
    height: SIZES.height * 0.2, // Responsive height
    borderRadius: SIZES.width * 1, // Responsive border radius
    backgroundColor: COLORS.lightWhite,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.medium,
    shadowColor: COLORS.primary,
  },
  imageContainer: {
    width: "80%",
    height: SIZES.height * 0.1, // Responsive height
    alignItems: "center",
    padding: SIZES.width * 0.01,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: SIZES.width * 0.15, // Responsive border radius (half of image height)
  },
  details: {
    padding: SIZES.width * 0.02, // Responsive padding
  },
  title: {
    fontFamily: "pfExtraBold",
    fontSize: SIZES.width * 0.03, // Responsive font size
    letterSpacing: 3,
  },
  activeContainer: {
    borderColor: COLORS.green,
    borderWidth: 2,
  },
});

export default styles;
