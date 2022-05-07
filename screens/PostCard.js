import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

import { RFValue } from 'react-native-responsive-fontsize';

export default class PostCard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return(
       <TouchableOpacity style={styles.container} onPress = { () => this.props.navigation.navigate("PostScreen" , {post : this.props.post})}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>{this.props.post.author}</Text>
            </View>
          </View>
          <Image source={require("../assets/post.jpeg")} style={styles.postImage}></Image>
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(20)} color={"white"}/>
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }}
}
const styles = StyleSheet.create({
  container:{
 flex: 1
  },
  cardContainer:{
margin: RFValue(13),
    backgroundColor: "#373737",
    borderRadius: RFValue(20)
  },
  authorContainer:{

  },
  authorImageContainer:{
    alignSelf:"center",
    alignItems:"center"
  }, 
  profileImage:{
    width:RFValue(3),
    height:RFValue(3),
    alignSelf:"center"
  },
  authorNameContainer:{
paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  authorNameText:{
    fontSize: RFValue(25),
   
    color: "white"
  },
  postImage:{
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  captionContainer:{

  },
  captionText:{

    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer:{
justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton:{
width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#000000",
    borderRadius: RFValue(30)
  },
  likeText:{
color: "white",
    
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
});
