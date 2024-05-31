import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Collapsible from "react-native-collapsible";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";

import { COLORS } from "../constants";

import barangaysData from "../assets/location/brgys.json";
import styles from "./payment.style";

import { useSelector, useDispatch } from "react-redux";
import useAddNewOrder from "../hook/useAddNewOrder";

import { useRoute } from "@react-navigation/native";

// import * as Clipboard from "expo-clipboard";
// import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";
import * as Linking from "expo-linking";

//
import AsyncStorage from "@react-native-async-storage/async-storage";
import { emptyCart } from "../components/cart/CartReducer";

const Payment = ({ navigation }) => {
  const cart = useSelector((state) => state.cart.cart);
  const { addNewOrder, loading, error } = useAddNewOrder();
  const route = useRoute();
  const { Total } = route.params;
  const [step, setStep] = useState(1);
  const [orderID, setOrderID] = useState(null);
  const [deliveryOption, setDeliveryOption] = useState("deliver");
  const phoneRegExp = /^09\d{9}$/;
  const dispatch = useDispatch();

  // console.log(cart, "CART");

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      pickUpLocation: "",
      deliveryOption: "deliver",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      mobile: Yup.string()
        .required("Mobile number is required")
        .matches(phoneRegExp, "Mobile must be a valid cellphone/mobile number"),
      address: Yup.string().when("deliveryOption", {
        is: "deliver",
        then: () => Yup.string().required("Address is required"),
        otherwise: () => Yup.string().notRequired(),
      }),
      pickUpLocation: Yup.string().when("deliveryOption", {
        is: "pickUp",
        then: () => Yup.string().required("Pick Up location is required"),
        otherwise: () => Yup.string().notRequired(),
      }),
      deliveryOption: Yup.string().required("Delivery option is required"),
    }),
    onSubmit: async (values) => {
      if (step === 2) {
        handleGenerateOrderID(values);
      } else {
        setStep(step + 1);
      }
    },
  });

  const handleGenerateOrderID = async (values) => {
    try {
      const orderData = {
        ...values,
        cart,
        total: parseFloat(Total),
      };

      const response = await addNewOrder(orderData); // Call your API function to add a new order
      if (response && response.orderId) {
        console.log("Order ID:", response.orderId);
      } else {
        console.error("Error placing order:", error);
      }
      setOrderID(response.orderId); // Assuming your API returns the order ID
      // Clear the cart in Redux
      dispatch(emptyCart());

      // Clear AsyncStorage
      await AsyncStorage.removeItem("cart");

      setStep(3);
      Toast.show({
        type: "success",
        text1: "Success",
        text2: "Order placed successfully.",
      });
    } catch (error) {
      console.error("Error placing order:", error);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Could not place order. Please try again.",
      });
    }
  };

  const handleCopyToClipboard = async () => {
    if (orderID) {
      await Clipboard.setStringAsync(orderID);
      Toast.show({
        type: "success",
        text1: "Copied",
        text2: "Order ID copied to clipboard.",
      });
    }
  };

  const handleOpenMessenger = () => {
    if (orderID) {
      const message = `Hello, I'm ${formik.values.name}, contact number ${formik.values.mobile} and my order ID is ${orderID}.`;
      const url = `https://m.me/pesparas?text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.green}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Checkout Page</Text>

        <View style={styles.section}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => setStep(1)}
          >
            <Text style={styles.sectionTitle}>
              Step 1: Customer Information
            </Text>
            <Ionicons name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
          <Collapsible collapsed={step !== 1}>
            <View style={styles.collapsibleContent}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={formik.values.name}
                onChangeText={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <Text style={styles.errorText}>{formik.errors.name}</Text>
              ) : null}
              <TextInput
                style={styles.input}
                placeholder="Mobile"
                value={formik.values.mobile}
                onChangeText={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
                keyboardType="phone-pad"
              />
              {formik.touched.mobile && formik.errors.mobile ? (
                <Text style={styles.errorText}>{formik.errors.mobile}</Text>
              ) : null}

              <Text style={styles.delOps}>Delivery Options</Text>
              <View style={styles.radioContainer}>
                <TouchableOpacity
                  style={styles.radioOption}
                  onPress={() => {
                    setDeliveryOption("pickUp");
                    formik.setFieldValue("deliveryOption", "pickUp");
                  }}
                >
                  <Ionicons
                    name={
                      deliveryOption === "pickUp"
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={18}
                    color={COLORS.green}
                  />
                  <Text style={styles.radioLabel}>Pick Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.radioOption}
                  onPress={() => {
                    setDeliveryOption("deliver");
                    formik.setFieldValue("deliveryOption", "deliver");
                  }}
                >
                  <Ionicons
                    name={
                      deliveryOption === "deliver"
                        ? "radio-button-on"
                        : "radio-button-off"
                    }
                    size={18}
                    color={COLORS.green}
                  />
                  <Text style={styles.radioLabel}>Deliver</Text>
                </TouchableOpacity>
              </View>

              {deliveryOption === "pickUp" ? (
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formik.values.pickUpLocation}
                    onValueChange={formik.handleChange("pickUpLocation")}
                    onBlur={formik.handleBlur("pickUpLocation")}
                  >
                    <Picker.Item label="Select a Pick Up Location" value="" />
                    <Picker.Item label="Prince" value="Prince" />
                    <Picker.Item label="Tulay, Marvel" value="Tulay, Marvel" />
                  </Picker>
                </View>
              ) : (
                <View style={styles.pickerContainer}>
                  <Picker
                    selectedValue={formik.values.address}
                    onValueChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  >
                    <Picker.Item label="Select a Barangay" value="" />
                    {barangaysData.brgys.map((barangay, index) => (
                      <Picker.Item
                        key={index}
                        label={barangay.name}
                        value={barangay.name}
                      />
                    ))}
                  </Picker>
                </View>
              )}
              {formik.touched.address && formik.errors.address ? (
                <Text style={styles.errorText}>{formik.errors.address}</Text>
              ) : null}
              {formik.touched.pickUpLocation && formik.errors.pickUpLocation ? (
                <Text style={styles.errorText}>
                  {formik.errors.pickUpLocation}
                </Text>
              ) : null}

              <TouchableOpacity
                style={styles.nextButton}
                onPress={formik.handleSubmit}
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
        </View>

        <View style={[styles.section, { opacity: step >= 2 ? 1 : 0.5 }]}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => step >= 2 && setStep(2)}
            disabled={step < 2}
          >
            <Text style={styles.sectionTitle}>Step 2: Confirm Information</Text>
            <Ionicons name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
          <Collapsible collapsed={step !== 2}>
            <View style={styles.collapsibleContent}>
              <Text>Name: {formik.values.name}</Text>
              <Text>Mobile: {formik.values.mobile}</Text>
              <Text>
                {deliveryOption === "pickUp"
                  ? `Pick Up Location: ${formik.values.pickUpLocation}`
                  : `Address: ${formik.values.address}`}
              </Text>
              <Text>
                Shipping Fee: ₱{" "}
                {
                  (
                    barangaysData.brgys.find(
                      (barangay) =>
                        barangay.name ===
                        (deliveryOption === "pickUp"
                          ? formik.values.pickUpLocation
                          : formik.values.address)
                    ) || { shippingFee: 0 }
                  ).shippingFee
                }
              </Text>
              <Text style={{ fontFamily: "semiBold" }}>
                Total: ₱{" "}
                {parseFloat(Total) +
                  (
                    barangaysData.brgys.find(
                      (barangay) =>
                        barangay.name ===
                        (deliveryOption === "pickUp"
                          ? formik.values.pickUpLocation
                          : formik.values.address)
                    ) || { shippingFee: 0 }
                  ).shippingFee}
              </Text>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={formik.handleSubmit}
              >
                <Text style={styles.nextButtonText}>
                  Confirm and Generate Order ID
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => setStep(1)}
              >
                <Text style={styles.backButtonText}>Back</Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
        </View>

        <View style={[styles.section, { opacity: step >= 3 ? 1 : 0.5 }]}>
          <TouchableOpacity
            style={styles.sectionHeader}
            onPress={() => step >= 3 && setStep(3)}
            disabled={step < 3}
          >
            <Text style={styles.sectionTitle}>Step 3: Order Confirmation</Text>
            <Ionicons name="chevron-down" size={24} color="black" />
          </TouchableOpacity>
          {/* <Collapsible collapsed={step !== 3}>
            <View style={styles.collapsibleContent}>
              <Text>Your order has been placed successfully.</Text>
              <Text>Order ID: {orderID}</Text>
            </View>
          </Collapsible> */}
          <Collapsible collapsed={step !== 3}>
            <View style={styles.collapsibleContent}>
              <Text style={styles.step3txt}>
                Your order has been placed successfully.
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.step3txt}>
                  Order ID:{" "}
                  <Text style={{ fontFamily: "semiBold" }}>{orderID}</Text>
                </Text>
                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={handleCopyToClipboard}
                >
                  <MaterialCommunityIcons
                    name="clipboard-file-outline"
                    color={COLORS.green}
                    size={20}
                    style={[styles.step3txt, { marginHorizontal: 15 }]}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.step3txt}>
                  Copy and Send 'Order ID' via Facebook Messenger
                </Text>
                <TouchableOpacity
                  style={styles.messengerButton}
                  onPress={handleOpenMessenger}
                >
                  <AntDesign
                    name="facebook-square"
                    color={COLORS.green}
                    size={20}
                    style={[styles.step3txt, { marginHorizontal: 15 }]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Collapsible>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;
