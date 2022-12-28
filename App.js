import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import image from './assets/sett_Flor_espiritual.jpg';

const App = () => {
  return(
    <View style={styles.container}>
    <Text style={[styles.title, styles.colors]}>Hola Mundo!!</Text>
    <Image
      source={image}
      style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{flex :1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff5ee'},
  title: {fontSize: 30},
  colors: {color: 'red'},
  image: {height: 200, width: 200, borderRadius: 100}
});

export default App;