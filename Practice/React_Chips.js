import * as React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {Chip} from 'react-native-paper';

const ChipsArray = [
  'omkar',
  'satish',
  'lonkar',
  'aroes',
  'omkar',
  'satish',
  'lonkar',
  'aroes',
  'omkar',
  'satish',
  'lonkar',
  'aroes',
  'omkar',
  'satish',
  'lonkar',
  'aroes',
];

const MyComponent = () => (
  <ScrollView style={styles.container}>
    <View style={styles.row}>
      {ChipsArray.map((item) => (
        <Chip style={styles.chip}>
          <Text style={styles.chipText}>Adventure</Text>
        </Chip>
      ))}
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  chip: {
    backgroundColor: '#2096F3',
    margin: 4,
  },
  chipText: {
    color: '#ffffff',
  },
});

export default MyComponent;
