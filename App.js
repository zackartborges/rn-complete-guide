import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };
  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    padding: 50,
  },
});
