import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import React, { useState, useEffect } from "react";

import styles from "./profile.style.js";

import { COLORS } from "../constants";

//icons
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const userLogout = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;
    try {
      await AsyncStorage.multiRemove([useId, "id"]);
      navigation.replace("BottomNavigation");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };
  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error retrieving the data:", error);
    }
  };

  const logout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => console.log("cancel pressed"),
      },
      {
        text: "Continue",
        onPress: () => userLogout(),
      },
    ]);
  };

  const clearCache = () => {
    Alert.alert("Clear Cache", "All data will be lost.", [
      {
        text: "Cancel",
        onPress: () => console.log("clear cache cancel"),
      },
      {
        text: "Continue",
        onPress: () => console.log("clear cache pressed"),
      },
    ]);
  };

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your acccount?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("cancel delete pressed"),
        },
        {
          text: "Continue",
          onPress: () => console.log("delete pressed"),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {/* <StatusBar backgroundColor={COLORS.gray} /> */}
        <View style={{ width: "100%" }}>
          <Image
            source={require("../assets/images/profileBg.jpg")}
            style={styles.cover}
            resizeMode="cover"
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/Profile.jpg")}
            style={styles.profile}
            resizeMode="cover"
          />
          <Text style={styles.name}>
            {userLogin === true ? "Paul" : "Please login into your account"}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <View style={styles.loginBtn}>
                <Text style={styles.menuTxt}>LogIn</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.menuTxt}>Email</Text>
            </View>
          )}

          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
              >
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuTxt}>Favorites</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuTxt}>Orders</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}}>
                <View style={styles.menuItem(0.5)}>
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuTxt}>Cart</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  clearCache();
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuTxt}>Clear Cache</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  deleteAccount();
                }}
              >
                <View style={styles.menuItem(0.5)}>
                  <AntDesign
                    name="deleteuser"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuTxt}>Delete Account</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.5)}>
                  <AntDesign name="logout" size={24} color={COLORS.primary} />
                  <Text style={styles.menuTxt}>Logout</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
