import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

const Favorites = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle" size={30} />
      </TouchableOpacity>
      <Text>Favorites</Text>
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({});
