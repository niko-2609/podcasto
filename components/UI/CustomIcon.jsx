import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

function CustomIcon({icon, color, size, containerStyle}) {
  return (
    <View style={containerStyle}>
      <MaterialIcons name={icon} color={color} size={size} />
    </View>
  )
}

export default CustomIcon;