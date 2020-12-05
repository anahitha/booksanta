import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './appTabNavigator';
import CustomMenu from './CustomMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {screen: AppTabNavigator},
},{
    contentCompenent: CustomMenu
},{
    initialRouteName: 'Home'
}
)