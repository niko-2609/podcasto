import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import CustomIcon from '../UI/CustomIcon';

const TopPodItem = () => {
  return (
    <Pressable style={({pressed}) => [styles.itemRoot, pressed && styles.pressed]}>
        <LinearGradient 
        colors={[ '#16d1f2','#6e02e0']} 
        style={styles.linearGradient} 
        start={{x: 0.7, y: 0}} >
            <View style={styles.itemContainer}>
                <Image style={styles.image} source={require('../../assets/eclipse.png')}/>
                <View style={styles.textContainer}>
                    <Text style={styles.podDetails}>S2.EP 3</Text>
                    <Text style={styles.podName}>Romance Up</Text>
                </View>
                <View style={styles.icon}>
                 <CustomIcon icon="favorite" size={32} />
                </View>
            </View>
        </LinearGradient>
    </Pressable>
  )
}

export default TopPodItem;

const styles = StyleSheet.create({
    itemRoot:{
        flex: 1,
        margin: 5
    },
    linearGradient: {
        flex: 1, 
        borderRadius: 7
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    image:{
        height:90, 
        width:90,
        borderRadius:5,
        marginLeft: 5
    },
    textContainer: {
        justifyContent: 'center',
        flex: 0.7,
        
    },
    podDetails: {
        color: '#EDEDED',
        fontWeight: 'bold',
        fontSize: 16
    },
    podName: {
        color: '#EDEDED',
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pressed: {
        opacity: 0.7
    }

})
