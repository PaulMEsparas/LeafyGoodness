import { Text, View, FlatList } from "react-native";
import useFetch from "../../hook/useFetch";
import React from "react";
import { ActivityIndicator } from "react-native";
import { SIZES, COLORS } from "../../constants";

import ProductCardView from "./ProductCardView";

import styles from "./productList.style";

const ProductList = () => {
  const { data, isLoading, error } = useFetch();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <ProductCardView item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ProductList;
