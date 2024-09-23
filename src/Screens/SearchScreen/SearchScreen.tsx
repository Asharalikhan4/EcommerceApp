import { FC, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Input from "../../components/Input/Input";

const SearchScreen = () => {

    const [search, setSearch] = useState<string>("");

    return (
        <View>
            <Input text="Search" style={styles.searchBox} value={search} onChange={(text) => setSearch(text)} />
        </View>
    );
};

const styles = StyleSheet.create({
    searchBox: {
        width: 400,
        height: 50,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
    }
});

export default SearchScreen;