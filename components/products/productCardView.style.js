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
    // flex: 1,
    width: "100%",
    height: SIZES.height * 0.19,
    // marginLeft: SIZES.small / 2,
    // marginTop: SIZES.small / 2,
    borderTopLeftRadius: SIZES.small,
    borderTopRightRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: "auto",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
