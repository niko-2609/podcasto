import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import CustomIcon from '../UI/CustomIcon';

const BottomTab = () => {

const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    screenOptions={{
        headerStyle: {
            backgroundColor: '#171717',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,   
        },
        headerShown: false,
        headerTitleStyle:{
            color: "#D6E0F0"
          },
        tabBarStyle: {
          backgroundColor: '#171717',
          position: 'absolute',
          borderRadius: 8,
          paddingHorizontal: 7,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
          marginBottom: 0,
          height:85
        },
        tabBarLabelStyle: {
            fontSize: 13,
        },
        tabBarActiveTintColor: "#EDEDED",
        tabBarInactiveTintColor: "gray",
    }}
     >
        <Tab.Screen name="Home" component={HomeScreen} options={{
        
            tabBarIcon: ({color}) => {
            return <CustomIcon color={color} icon="home" size={28} />
        }
        }}/>
        <Tab.Screen name="Search" component={HomeScreen} options={{
      
            tabBarIcon: ({color}) => {
            return <CustomIcon color={color} icon="search" size={28} />
        }
        }}/>
        <Tab.Screen name="Favorite" component={HomeScreen} options={{

            tabBarIcon: ({color}) => { 
            return <CustomIcon color={color} icon="favorite" size={28} />
        }
        }}/>
        <Tab.Screen name="Profile" component={HomeScreen} options={{

            tabBarIcon: ({color}) => {
            return <CustomIcon color={color} icon="account-circle" size={28} />
        }
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTab