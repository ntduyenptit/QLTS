import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

const ProfileComponent = ({ profileUrl, username, email }) =>
  <View style={{flexDirection:'column', padding:10, backgroundColor:'#f5dba2'}}>
    <Image source={require('../assets/admin.png')} resizeMode="contain" style={{margin:15, width:60, height:60, borderRadius:20, alignSelf:'center'}} />
  	<View style ={{justifyContent:'center', margin:15}}>
    	<Text style={{fontWeight:'700', fontSize:25, color:'#444',textAlign:'center'}}>{username}</Text>
    	<Text style={{fontWeight:'200', color:'black', maxWidth:200,textAlign:'center'}}>{email}</Text>
  	</View>
  </View>


export default ProfileComponent
