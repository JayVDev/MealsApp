import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

import { CATEGORIES } from "./data/dummy-data";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
