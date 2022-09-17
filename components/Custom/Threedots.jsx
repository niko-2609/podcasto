import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function ThreeDots() {
  const [checked, setChecked] = useState('first');
  return (
    <View style={styles.radioBtn}>
    <RadioButton
      value="first"
      status={ checked === 'first' ? 'checked' : 'unchecked' }
      onPress={() => setChecked('first')}
      color='#EDEDED'
    />
     <RadioButton
    value="second"
    status={ checked === 'second' ? 'checked' : 'unchecked' }
    onPress={() => setChecked('second')}
    color='#EDEDED'
  />
  <RadioButton
    value="third"
    status={ checked === 'third' ? 'checked' : 'unchecked' }
    onPress={() => setChecked('third')}
    color='#EDEDED'
  />
  </View>
  );

}

const styles = StyleSheet.create({
  radioBtn: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 25,
    
  }
})