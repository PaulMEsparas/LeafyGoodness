import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xxLarge,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "50%",
  },
  details: {
    flex: 1,
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  gradient: {
    flex: 1,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    // backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.large,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semiBold",
    fontSize: SIZES.large,
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    color: COLORS.gray,
    fontFamily: "medium",
    paddingHorizontal: SIZES.small,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large - 2,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.secondary,
    padding: 5,
    marginHorizontal: 12,
    borderRadius: SIZES.large,
  },
  locText: {
    paddingHorizontal: SIZES.small,
  },
  delText: {
    paddingHorizontal: SIZES.small,
  },
  cartRow: {
    // paddingBottom: SIZES.small,
    // flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartBtn: {
    backgroundColor: COLORS.lightWhite,

    paddingVertical: SIZES.small,
    width: "100%",
    borderRadius: SIZES.width,

    ...SHADOWS.medium,
    shadowColor: COLORS.primary,
  },
  cartTitle: {
    color: COLORS.primary,
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
    // marginLeft: SIZES.small,
    textAlign: "center",
    letterSpacing: 1,
  },
  // addCart: {
  //   width: 37,
  //   height: 37,
  //   borderRadius: 50,
  //   margin: SIZES.small,
  //   backgroundColor: COLORS.black,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});

export default styles;
