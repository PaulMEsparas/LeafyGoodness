import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 6,
    padding: 5,
  },
  // welcomeText: (color, top) => ({
  //   fontFamily: "bold",
  //   fontSize: SIZES.xxLarge - 5,
  //   marginTop: top,
  //   color: color,
  //   marginHorizontal: SIZES.small,
  // }),
  welcomeText: (color, space) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge - 5,
    color: color,
    marginTop: space,
  }),

  backgroundImage: {
    height: "100%",
    width: SIZES.width,
    flex: 1,
  },
  gradient: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  welcomeSubTxt: {
    color: COLORS.lightWhite,
    fontFamily: "monospace",
    letterSpacing: 3,
  },
  entryText: {
    cursor: "pointer",
  },
});

export default styles;
