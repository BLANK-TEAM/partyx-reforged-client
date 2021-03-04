import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import CategoryTags from "../components/CategoryTags";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*
      1 - Events bar with tags for fast displaying events
      2 - Horizontal list of events with [see all] button
      */}
      <CategoryTags />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
