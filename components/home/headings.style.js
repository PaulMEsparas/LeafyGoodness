import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.medium,
    // marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    fontFamily: "pfSemiBold",
    fontSize: SIZES.xLarge - 2,
    letterSpacing: 2,
  },
});

export default styles;
