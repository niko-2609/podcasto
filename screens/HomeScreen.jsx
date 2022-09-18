import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Constants from 'expo-constants';
import CustomIcon from '../components/UI/CustomIcon';
import TopPodcasts from '../components/TopPodcasts/TopPodcasts';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.iconContainer}>
       <View style={styles.iconCover}>
       <CustomIcon icon="add-alert" size={32}/>
       </View>
       <View style={styles.iconCover}>
       <CustomIcon icon="bookmark" size={32} />
       </View>
      </View>
      <View style={styles.imageContainer}>
              <Image
                  source={require('../assets/Highlight.png')}
                  resizeMode={'cover'}
                  transition={false}
              />
              <View style={{ position: 'absolute', top: 7, left: 55, right: 0, height: 100, alignItems: 'flex-start', justifyContent: 'center' }}>
                  <Text style={styles.text}>Discover new</Text>
                  <Text style={styles.text}>podcast everyday</Text>
              </View>
      </View>
      <View>
      <TopPodcasts />
      </View>
    </ScrollView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
    root: {
        marginTop: Constants.statusBarHeight,
    },
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 40,
        marginHorizontal: 30
    },
    iconCover: {
        borderRadius: 7,
        backgroundColor: '#EDEDED',
        padding: 5
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#EDEDED',
        fontSize: 23,
        fontWeight: 'bold'
    }
})

