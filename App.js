import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import image from './assets/sett_Flor_espiritual.jpg';
import image2 from './assets/tanjiro.png';

const App = () => {
  return(
    <View style={styles.container}>
    <Text style={[styles.title, styles.colors]}>Tanjiro Kamado</Text>
    <Image
      source={image2}
      style={styles.image2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{flex :1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'},
  title: {fontSize: 30, fontWeight: 50},
  colors: {color: 'red', },
  image: {height: 50, width: 50, borderRadius: 25, padding: 20},
  image2: {height: 550, width: 270}
});

export default App;