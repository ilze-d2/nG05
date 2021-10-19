import * as React from 'react';
import { Text, View, StyleSheet, Image, logo } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Hello World from group nG05! Member: Ilze Daukšte
      </Text>
      <Text style={styles.paragraph}>
       This is my Ilze Daukšte first React Native application!
      </Text>
      <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 18,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
