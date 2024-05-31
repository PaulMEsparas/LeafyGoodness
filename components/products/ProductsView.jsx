// import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import styles from "./productsView.style";

// import { useNavigation } from "@react-navigation/native";

// import { COLORS, SIZES } from "../../constants";

// import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../cart/CartReducer";

// const ProductsView = ({ item }) => {
//   //redux
//   // const cart = useSelector((state) => state.cart.cart);
//   // console.log(cart, "CART");
//   const dispatch = useDispatch();

//   const navigation = useNavigation();
//   // console.log(item.imageUrl, "ProductsView");

//   const addItemToCart = (item) => {
//     dispatch(addToCart(item));
//   };
//   return (
//     <TouchableOpacity
//       style={styles.container}
//       onPress={() => navigation.navigate("ProductDetails", { item })}
//     >
//       <View style={{ flexDirection: "row" }}>
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: item.imageUrl }} style={styles.image} />
//         </View>
//       </View>
//       <View style={styles.details}>
//         <View>
//           <Text style={styles.title} numberOfLines={1}>
//             {item.title}
//           </Text>
//           <Text style={styles.description}>{item.description}</Text>
//           <View style={styles.priceBtn}>
//             <Text style={styles.price} numberOfLines={1}>
//               ₱{item.price}
//             </Text>
//             <TouchableOpacity
//               style={styles.button}
//               // onPress={() => navigation.navigate("Cart")}
//               onPress={() => addItemToCart(item)}
//             >
//               <Text style={styles.buttonText}>Add to cart</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductsView;

// import React from "react";
// import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import styles from "./productsView.style";

// import { useNavigation } from "@react-navigation/native";

// import { useDispatch } from "react-redux";
// import { addToCart } from "../cart/CartReducer";

// const ProductsView = ({ item }) => {
//   const dispatch = useDispatch();
//   const navigation = useNavigation();

//   const addItemToCart = (item) => {
//     dispatch(addToCart(item));
//     Alert.alert("Added to cart successfully");
//   };

//   return (
//     <TouchableOpacity
//       style={styles.container}
//       onPress={() => navigation.navigate("ProductDetails", { item })}
//     >
//       <View style={{ flexDirection: "row" }}>
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: item.imageUrl }} style={styles.image} />
//         </View>
//       </View>
//       <View style={styles.details}>
//         <View>
//           <Text style={styles.title} numberOfLines={1}>
//             {item.title}
//           </Text>
//           <Text style={styles.description}>{item.description}</Text>
//           <View style={styles.priceBtn}>
//             <Text style={styles.price} numberOfLines={1}>
//               ₱{item.price}
//             </Text>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => addItemToCart(item)}
//             >
//               <Text style={styles.buttonText}>Add to cart</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// export default ProductsView;
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./productsView.style";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/CartReducer";
// import CustomAlert from "../CustomAlert";
import Toast from "react-native-toast-message";
import { COLORS } from "../../constants"; // Adjust the import based on your COLORS and SIZES file location

const ProductsView = ({ item }) => {
  // const [alertVisible, setAlertVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "Added to cart successfully",
    });
    // setAlertVisible(true);
  };

  return (
    // <TouchableOpacity
    //   style={styles.container}
    //   onPress={() => navigation.navigate("ProductDetails", { item })}
    // >
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>
      </View>
      <View style={styles.details}>
        <View>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.priceBtn}>
            <Text style={styles.price} numberOfLines={1}>
              ₱{item.price}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addItemToCart(item)}
            >
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <CustomAlert
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      /> */}
    </View>
    // </TouchableOpacity>
  );
};

export default ProductsView;
