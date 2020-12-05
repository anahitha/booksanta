import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomMenu extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.drawercont}>
                    <DrawerItems {...this.props}></DrawerItems>
                </View>
                <View style = {styles.logoutcontainer}>
                    <TouchableOpacity style = {styles.logoutButton} onPress = {()=>{
                        this.props.navigation.navigate('WelcomeScreen')
                        firebase.auth().signOut()
                    }}>
                        <Text style = {styles.logouttext}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawercont: {
        flex: 0.8
    },
    logoutcontainer: {
        flex: 0.2,
        justifyContent: 'flex-end',
        paddingBottom: 30,
    },
    logoutButton: {
        height: 30,
        width: '100%',
        justifyContent: 'center',
        padding: 10
    },
    logouttext:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})