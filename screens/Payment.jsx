import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { COLORS, SIZES } from "../constants";
import { AccordionItem } from "../components";

const Payment = () => {
  return (
    <View>
      <View>
        <TouchableOpacity>
          <Image
            source={require(".././assets/myQR.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text>Favorites</Text>
      </View>
      <View style={styles.container}>
        <AccordionItem title="Section 1">Content for section 1.</AccordionItem>
        <AccordionItem title="Section 2">Content for section 2.</AccordionItem>
        <AccordionItem title="Section 3">Content for section 3.</AccordionItem>
        <AccordionItem title="Section 1">Content for section 1.</AccordionItem>
        <AccordionItem title="Section 2">Content for section 2.</AccordionItem>
        <AccordionItem title="Section 3">Content for section 3.</AccordionItem>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    padding: SIZES.width * 0.01,
  },
  image: {
    width: "100",
    height: "100",
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: SIZES.width * 0.15, // Responsive border radius (half of image height)
  },
});
