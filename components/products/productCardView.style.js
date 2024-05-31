import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.7,
    height: SIZES.height * 0.3,
    marginEnd: 22,
    borderRadius: SIZES.small,
    borderTopRadius: SIZES.small,
    backgroundColor: COLORS.lightWhite,
  },
  imageContainer: {
    flex: 1,

    height: SIZES.height * 0.19,
    // marginLeft: SIZES.small / 2,
    // marginTop: SIZES.small / 2,
    borderTopLeftRadius: SIZES.small,
    borderTopRightRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "pfBold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: "pfBold",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "pfBold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
