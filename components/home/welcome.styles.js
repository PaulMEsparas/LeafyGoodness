import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  welcomeText: (color, top) => ({
    fontFamily: "pfExtraBold",
    fontSize: SIZES.xxLarge - 2,
    marginTop: top,
    color: color,
    marginHorizontal: SIZES.small,
  }),
  searchContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
    marginTop: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  // searchInput: {
  //   fontFamily: "pfExtraBold",
  //   width: "100%",
  //   height: "100%",
  //   paddingHorizontal: SIZES.small,
  // },
  // searchBtn: {
  //   width: 50,
  //   height: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: COLORS.primary,
  //   borderRadius: SIZES.medium,
  // },
});

export default styles;
