import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import names from "./names";

const namesAsObject = names.map((name) => {
  return {
    name: name,
  };
});

export default function App() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.listItem}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={namesAsObject}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    padding: 30,
    margin: 10,
    backgroundColor: "lightpink",
    borderBottomColor: "#999",
    borderBottomWidth: 1,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { x: 0, height: 3 },
  },
});
