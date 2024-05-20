import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const itemImageSize = SIZES.width * 0.2; // Adjust percentage as needed

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  innerContainer: {
    height: "75%",
    marginVertical: 30,
    marginHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: COLORS.offwhite,
  },
  quantityContainer: {
    alignItems: "center",
    padding: 20,
  },

  itemImage: {
    width: itemImageSize + 20,
    height: itemImageSize,
    marginHorizontal: 10,
    borderRadius: 12, // Make it a circle
  },
  itemDetails: {
    flex: 1,
    width: itemImageSize,
    height: itemImageSize,

    marginHorizontal: 10,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
  },
  itemPrice: {
    fontSize: SIZES.medium,
    fontFamily: "semiBold",
    color: COLORS.primary,
  },
  itemQuantity: {
    fontSize: 16,
    paddingVertical: 10,
    fontFamily: "bold",
    color: COLORS.gray,
  },
  itemSubtotal: {
    fontSize: 14,
  },
  removeItem: {
    fontSize: 14,
    color: "red",
  },
  deleteCOn: {
    marginHorizontal: 10,
  },
  totalContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
    paddingTop: 10,
  },
  totalText: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    paddingHorizontal: 20,
  },
  payContainer: {
    backgroundColor: COLORS.lightWhite,
    // width: itemImageSize * 4,
    height: itemImageSize / 1.5,
    marginHorizontal: 20,
    borderRadius: 5,
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
  payText: {
    color: COLORS.green, // Green text color
    fontSize: SIZES.large,
    fontFamily: "bold",
    letterSpacing: 1,
  },
});

export default styles;
