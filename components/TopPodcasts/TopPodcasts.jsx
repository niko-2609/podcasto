import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import TopPodItem from './TopPodItem'
import CustomIcon from '../UI/CustomIcon'

const TopPodcasts = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Top Podcaster</Text>
        <CustomIcon icon='chevron-right' color='#EDEDED' size={40} />
      </View>
      <View>
        <TopPodItem />
        <TopPodItem />
        <TopPodItem />
      </View>
    </View>
  )
}

export default TopPodcasts;

const styles = StyleSheet.create({
    rootContainer: {
      paddingHorizontal:20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 15
      },
    headerText: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#EDEDED'
    },
})