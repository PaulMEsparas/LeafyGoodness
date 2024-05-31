import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "../../constants/index";
import { Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: SIZES.width * 0.3,
    marginRight: 10,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: "100%",
    borderRadius: SIZES.xSmall,
  },
  details: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  description: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  priceBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",

    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.gray2,
  },
  price: {
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
  },
  button: {
    backgroundColor: COLORS.lightWhite,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: COLORS.gray2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  buttonText: {
    color: COLORS.green, // Green text color
    fontSize: SIZES.small,
    fontFamily: "medium",
  },
});

export default styles;
