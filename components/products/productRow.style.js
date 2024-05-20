import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: SIZES.medium,
    marginBottom: -SIZES.xSmall,
    marginHorizontal: 12,
    marginVertical: 12,
    // flex: 1,
    flexGrow: 1,
    paddingBottom: 50,
  },
});

export default styles;
