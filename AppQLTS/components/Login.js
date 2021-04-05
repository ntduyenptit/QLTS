import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import Global from './Global';
import logIn from './api/SignIn';
import saveToken from './api/saveToken';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        email: 'admin',
        password: '123qwe',
    };
}

  signIn(email, password) {
    logIn(email, password)
        .then(res => {
          console.log(res);
            if (res) {
              //  Alert.alert('SignIn successfully!');
                this.props.navigation.navigate('HomeScreen');
                saveToken(res.token);
               // Global.onSignIn(res.user);
               // this.props.navigation.goBack();
            } else {
                Alert.alert('SignIn failed!');
            }
        })
        .catch(err => console.log(err));
}

  render(){
    return (
      <View style={styles.container}>
        <Image source={require('../assets/icon.png')} style ={styles.iconImage} />
        <Text style={styles.logo}>Quản lý tài sản</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            value ='admin'
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            value ='123qwe'
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.signIn(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#addffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:40,
    color:"#101a5f",
    marginBottom:40
  },
  iconImage: {
    alignItems:"center",
    justifyContent:"center",
    width:"60%",
    height:80,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#e5e5e5",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"40%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
