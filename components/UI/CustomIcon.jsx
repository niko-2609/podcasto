import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

function CustomIcon({icon, color, size}) {
  return (
    <Pressable style={({pressed}) => [pressed && styles.pressed]}>
      <MaterialIcons name={icon} color={color} size={size} />
    </Pressable>
  )
}

export default CustomIcon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7
  }
})