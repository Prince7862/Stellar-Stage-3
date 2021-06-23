import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import  WebView  from 'react-native-webview';

export default class StarMap extends Component {
  constructor(){
    super()
    this.state = {
      longitude:{},
      latitude:{}
    }
   
    
  }
  render() {
    return (
      
      <View style={styles.background}>
       <SafeAreaView style={styles.droidSafeArea} />
      <Text style={styles.titleText}>Star Map</Text>

      <TextInput
      style ={styles.input}
      placeholder = "Enter your Longitude"
      placeholderTextColor = "#ffff"
      onChangeText={(text)=>{
        this.setState({
          longitude: text
        })
      }}
      />

      <TextInput
      style ={styles.input}
      placeholder = "Enter your Latitude"
      placeholderTextColor = "#ffff"
      onChangeText={(text)=>{
        this.setState({
          latitude: text
        })
      }}
      />
      <WebView
      scalesPageToFit={true}
        source={{ uri: 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=false'}}
      style={{ marginTop: 20, marginBottom: 20 }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginRight: -10,
        textAlign: 'center',
       
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    background: {
      backgroundColor: '#1f0024'
    },
    input: {
        borderRadius: 100,
        top: 0,
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white'
    },

})

