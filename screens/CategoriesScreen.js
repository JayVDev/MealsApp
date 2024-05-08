import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../componets/CategoryGridTile";



function CategoriesScreen() {

    function renderCategoryItem(itemdata) {
        return (
            <CategoryGridTile
                title={itemdata.item.title}
                color={itemdata.item.color}
            />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: "#fff",
        // alignItems: "center",
        // justifyContent: "center",
    },
});

export default CategoriesScreen;
