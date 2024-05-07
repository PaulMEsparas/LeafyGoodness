import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./loginPage.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Button, BackBtn } from "../components";

import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Must be at least 8 characters")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});

const LoginPage = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState([]);
  const [obscureText, setObscureText] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };

  const inValidForm = () => {
    Alert.alert("Invalid Form", "Please provide all required fields", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },
      {
        text: "Continue",
        onPress: () => console.log("logout pressed"),
      },
    ]);
  };

  const login = async (values) => {
    setLoader(true);

    try {
      const endPoint = "http://192.168.254.117:3000/api/login";
      const data = values;

      const response = await axios.post(endPoint, data);
      // if (response) {
      //   if (response.status === 200) {
      //     setLoader(false);
      //     setResponseData(response.data);

      //     await AsyncStorage.setItem(
      //       `user${responseData._id}`,
      //       JSON.stringify(responseData)
      //     );

      //     await AsyncStorage.setItem("id", JSON.stringify(responseData._id));

      //     navigation.replace("BottomNavigation");

      //     // const newUser = await AsyncStorage.getItem(`user${responseData._id}`);
      //     // console.log(newUser);
      //   } else {
      //     Alert.alert("Error", "Please provide valid credentials", [
      //       {
      //         text: "Cancel",
      //         onPress: () => console.log("cancel pressed"),
      //       },
      //       {
      //         text: "Continue",
      //         onPress: () => console.log("logout pressed"),
      //       },
      //     ]);
      //   }
      // }

      if (response && response.status === 200) {
        setLoader(false);
        setResponseData(response.data);

        // Save user data to AsyncStorage
        try {
          await AsyncStorage.setItem(
            `user${response.data._id}`,
            JSON.stringify(response.data)
          );
          await AsyncStorage.setItem("id", JSON.stringify(response.data._id));
        } catch (error) {
          console.error("Error saving user data to AsyncStorage:", error);
          // Handle error (e.g., show error message)
        }

        // Navigate to the next screen
        navigation.replace("BottomNavigation");
      } else {
        // Display an error message if response status is not 200
        Alert.alert("Error", "Please provide valid credentials", [
          {
            text: "Cancel",
            onPress: () => console.log("cancel pressed"),
          },
          {
            text: "Continue",
            onPress: () => console.log("logout pressed"),
          },
        ]);
      }
    } catch (error) {
      Alert.alert("Error", "Oops, Error loggin in! Try again ", [
        {
          text: "Cancel",
          onPress: () => console.log("cancel pressed"),
        },
        {
          text: "Continue",
          onPress: () => console.log("logout pressed"),
        },
      ]);
    } finally {
      setLoader(false);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require("../assets/images/loginBG.gif")}
            style={styles.cover}
          />
          <Text style={styles.title}>Luxurious Furniture</Text>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              login(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
              touched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Enter email"
                      value={values.email}
                      onChangeText={handleChange("email")}
                      onFocus={() => setFieldTouched("email")}
                      onBlur={() => setFieldTouched("email", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>

                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      secureTextEntry={obscureText}
                      placeholder="Enter password"
                      value={values.password}
                      onChangeText={handleChange("password")}
                      onFocus={() => setFieldTouched("password")}
                      onBlur={() => setFieldTouched("password", "")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => setObscureText(!obscureText)}
                    >
                      <MaterialCommunityIcons
                        name={obscureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  title={"L O G I N"}
                  onPress={isValid ? handleSubmit : inValidForm}
                  isValid={isValid}
                  loader={loader}
                />

                <Text
                  style={styles.registration}
                  onPress={() => navigation.navigate("Register")}
                >
                  Register
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
