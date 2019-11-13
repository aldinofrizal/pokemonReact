import React from 'react'
import { StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import StackNav from './StackNavigation'
import Collection from './views/Collection';

const TabNavigator = createBottomTabNavigator({
  Home: StackNav,
  Collection: Collection,
}, 
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      if (routeName === 'Home') {
        iconName = `pokeball`;
        return <MaterialCommunityIcons name={iconName} size={40} color={tintColor} style={styles.icons}/>
      } else if (routeName === 'Collection') {
        iconName = `folder-o`;
        return <FontAwesome name={iconName} size={40} color={tintColor} style={styles.icons}/>;
      }
    },
  }),
  tabBarOptions: {
    showLabel : false,
    activeTintColor: '#379191',
    inactiveTintColor: '#0A3241',
  },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  icons: {
    marginTop : 3
  },
});
