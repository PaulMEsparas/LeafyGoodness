import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backBtnContainer: {
    marginHorizontal: 20,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    position: "absolute",
    top: SIZES.xLarge * 1.7,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  backBtnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backBtnTxt: {
    fontSize: SIZES.medium,
    marginLeft: 10,
    fontFamily: "bold",
    color: COLORS.gray2,
  },

  imageContainer: {
    // flex: 1,
    width: SIZES.width,
    height: SIZES.height * 0.3,
    backgroundColor: "rgba(0, 128, 0, 0.6)",

    // // marginLeft: SIZES.small / 2,
    // // marginTop: SIZES.small / 2,
    // borderTopLeftRadius: SIZES.small,
    // borderTopRightRadius: SIZES.small,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    opacity: 0.8,
  },
  products: {
    backgroundColor: COLORS.lightWhite,
    flex: 1,
  },
  prodTxtContainer: {
    width: SIZES.width,
    height: SIZES.height * 0.12,
    alignItems: "center",
    justifyContent: "center",
  },

  prodTxt: (fontFamily, color, size) => ({
    fontFamily: fontFamily,
    fontSize: size,
    color: color,
  }),
  // details: {
  //   padding: SIZES.small,
  // },
  // title: {
  //   fontFamily: "bold",
  //   fontSize: SIZES.large,
  //   marginBottom: 2,
  // },
  // supplier: {
  //   fontFamily: "regular",
  //   fontSize: SIZES.small,
  //   color: COLORS.gray,
  // },
  // price: {
  //   fontFamily: "semiBold",
  //   fontSize: SIZES.medium,
  // },
  // addBtn: {
  //   position: "absolute",
  //   bottom: SIZES.xSmall,
  //   right: SIZES.xSmall,
  // },
});

export default styles;
