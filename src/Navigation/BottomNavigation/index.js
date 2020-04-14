import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

import Trends from '../../Screens/Trends';
import Search from '../../Screens/Search';
import Favorites from '../../Screens/Favorites';
import Profile from '../../Screens/Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigation = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="Trends"
            activeColor="black"
            inactiveColor="black"
            barStyle={{ backgroundColor: '#fff' }}
        >
        <Tab.Screen
            name="Trends"
            component={Trends}
            options={{
                tabBarLabel: 'Trends',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="fire" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Search"
            component={Search}
            options={{
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="search-web" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="heart" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomNavigation;