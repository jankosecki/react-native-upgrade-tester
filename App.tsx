import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

enableScreens(false);

const Stack = createNativeStackNavigator();

const names = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
  { id: "3", name: "Paul" },
  { id: "4", name: "Anna" },
  { id: "5", name: "Mike" },
];

function MainScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main View</Text>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => {
          navigation.navigate("List");
        }}
      >
        <Text style={styles.buttonText}>Go to List View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => {
          navigation.navigate("Empty");
        }}
      >
        <Text style={styles.buttonText}>Go to Empty View</Text>
      </TouchableOpacity>
    </View>
  );
}

function EmptyScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empty View</Text>
      <TouchableOpacity style={styles.button} onPressIn={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Main</Text>
      </TouchableOpacity>
    </View>
  );
}

function ListScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List View</Text>
      <FlatList
        data={names}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        style={styles.list}
      />
      <TouchableOpacity style={styles.button} onPressIn={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Main</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Empty" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light grey background
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28, // Larger font size
    fontWeight: "bold", // Bold text
    color: "#333", // Darker text color
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007BFF", // Blue background
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18, // Larger font size
    color: "#fff", // White text color
    fontWeight: "600",
  },
  list: {
    width: "100%", // Take full width
    marginVertical: 20, // Add vertical margin
  },
  item: {
    fontSize: 20, // Larger font size
    color: "#555", // Darker text color
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#e0e0e0", // Light grey item background
    borderRadius: 8,
    marginVertical: 5,
    textAlign: "center",
  },
});
