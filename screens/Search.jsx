//Icons
import { Feather, Ionicons } from "@expo/vector-icons";

//contants
import { COLORS, SIZES } from "../constants";

import { useState } from "react";

import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./search.styles";
import axios from "axios";
import SearchTile from "../components/products/SearchTile";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://192.168.254.117:3000/api/products/search/${searchKey}`
      );
      setSearchResults(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("Failed to get product", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            onChangeText={setSearchKey}
            value={searchKey}
            placeholder="What are you looking for?"
            style={styles.searchInput}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => handleSearch()}
            style={styles.searchBtn}
          >
            <Feather
              name="search"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            ></Feather>
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../assets/images/no-results.jpg")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <SearchTile item={item} />}
          style={{ marginHorizontal: 12 }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
