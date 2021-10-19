import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>
        Hello world from nG05!
      </Text>
       <Text style={styles.paragraph}>
        Maris Odzulis
      </Text>
      <Image style={styles.logo} source={require('./assets/snack-icon.png')} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
  },

  h1: {
    fontWeight: 500,
    fontSize: 30,

  },
  logo: {
    height: 128,
    width: 128,
  },
});
