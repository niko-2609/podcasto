import { View, Text, StyleSheet, Image, Button, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import ThreeDots from '../components/Custom/Threedots';
import CustomButton from '../components/UI/CustomButton';


const Modal = () => {
  
    
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/eclipse.png')} />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.heading}>What is Podcasto?</Text>
        <Text style={styles.info}>A digital audio file made available on the internet for downloading to a computer or mobile device, typically available as a series, new installments of which can be received by subscribers automatically.</Text>
      </View>
      <ThreeDots />
      <CustomButton />
    </SafeAreaView>
  )
}

export default Modal;

const styles = StyleSheet.create({
  root:{
    flex: 1,
    paddingVertical: 5,
    alignItems: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  textArea: {
    height: 300,
    width: 300,
    marginTop: 40,
    alignItems: 'center',
  },
  heading:{ 
    fontSize: 35,
    marginVertical: 20,
    color: '#EDEDED'
  },
  info: {
    fontSize: 22,
    color: '#EDEDED'
  },
  
})