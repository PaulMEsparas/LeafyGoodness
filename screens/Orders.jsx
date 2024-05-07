import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

const Orders = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-circle" size={30} />
      </TouchableOpacity>
      <Text>Orders</Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
