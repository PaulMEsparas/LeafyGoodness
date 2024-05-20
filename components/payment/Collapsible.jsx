import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "./collapsible.styles";
import { COLORS, SIZES } from "../../constants";

import { useNavigation } from "@react-navigation/native";

//Icons
import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";

import Collapsible from "react-native-collapsible";

const AccordionItem = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity
        onPress={() => setCollapsed(!collapsed)}
        style={styles.accordionHeader}
      >
        <Text style={styles.accordionHeaderText}>{title}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={collapsed}>
        <View style={styles.accordionContent}>
          <Text>{children}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

export default AccordionItem;
