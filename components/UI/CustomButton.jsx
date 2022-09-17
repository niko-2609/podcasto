import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <Pressable style={({pressed}) => [styles.container, pressed && styles.pressed]}>
        <View>
            <Text style={styles.btnLabel}>NEXT</Text>
        </View>
    </Pressable>
  )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#787878',
      paddingHorizontal: 40,
      paddingVertical: 3,
      borderRadius: 20,
      marginVertical: 2
    },
    button: {
        
    },
    btnLabel: {
      fontSize: 32,
      color: '#EDEDED',
      fontWeight: 'bold',
    },
    pressed: {
      opacity: 0.65
    }
})