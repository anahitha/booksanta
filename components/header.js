import * as React from 'react';
import { StyleSheet, Alert, View } from 'react-native';
import {Header, Icon, Badge} from 'react-native-elements';

const MyHeader = props=>{
    return(
        <Header 
        centerComponent = {{text: props.title}} style= {{
            color: '#90a5a9',
            fontSize: 20,
            fontWeight: "bold",
            backgroundColor: '#eaf8fe'}}></Header>
    )
}


export default MyHeader;