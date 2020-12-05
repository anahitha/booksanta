import * as React from 'react';
import {View, ScrollView, Text, TextInput, KeyboardAvoidingView} from 'react-native'

export default class Settings extends React.Component{
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            address: '',
            firstName: '',
            lastName: '',
            contact: '',
            confirmPassword: '',
            isModalVisible: false
        }
    }
    render(){
        return(
            <View>
                    <ScrollView style = {{width: '100%'}}>
                        <KeyboardAvoidingView >
                            <Text style = {styles.modaltitle}>Update</Text>
                            <TextInput style = {styles.textinput} placeholder = {"first name"}
                            maxLength = {8} onChangeText = {(text)=>{
                                this.setState({
                                    firstName: text
                                })
                            }}>
                            </TextInput>
                            <TextInput style = {styles.textinput} placeholder = {"last name"}
                            maxLength = {8} onChangeText = {(text)=>{
                                this.setState({
                                    lastName: text
                                })
                            }}>
                            </TextInput>
                            <TextInput style = {styles.textinput} placeholder = {"address"}
                            multiline = {true} onChangeText = {(text)=>{
                                this.setState({
                                    address: text
                                })
                            }}>
                            </TextInput>
                            <TextInput style = {styles.textinput} placeholder = {"contact"}
                            maxLength = {10} keyboardType= {'numeric'} onChangeText = {(text)=>{
                                this.setState({
                                    contact: text
                                })
                            }}>
                            </TextInput>
                            <TextInput style = {styles.textinput} placeholder = {'email'}
                            keyboardType = {'email-address'} onChangeText = {(text)=>{
                                this.setState({
                                    email: text
                                })
                            }}>
                            </TextInput>
                            
                            <TextInput style = {styles.textinput} placeholder = {"password"}
                            secureTextEntry = {true} onChangeText = {(text)=>{
                                this.setState({
                                    password: text
                                })
                            }}>
                            </TextInput>
                            <TextInput style = {styles.textinput} placeholder = {"confirm password"}
                            secureTextEntry = {true} onChangeText = {(text)=>{
                                this.setState({
                                    confirmPassword: text
                                })
                            }}>
                            </TextInput>
                            <View>
                                <TouchableOpacity style = {styles.register} onPress = {()=>{
                                    this.signUp(this.state.email, this.state.password, this.state.confirmPassword)
                                }}>
                                    <Text style = {styles.buttonText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style = {styles.register} onPress = {()=>this.setState({isModalVisible: false})}>
                                    <Text style = {styles.buttonText}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8be85',
    },
    buttonText:{
        color: 'black',
        fontSize: 20
    },
    keyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modaltitle: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 30,
        color:'#ff5722',
        margin: 50
    },
    modalcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 80,
        marginBottom: 80
    },
    textinput: {
        width: '75%',
        height: 30,
        borderBottomWidth: 1.5,
        borderColor: '#ff8a65',
        fontSize: 12,
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center'
    },
    register: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ff5722',
        fontSize: 15,
        fontWeight: 'bold'
    },
    cancel: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 30,
        marginTop: 5
    }

})