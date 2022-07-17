import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
          };
  }

  
  componentDidMount() {
    this.loadFonts();
  }
  render() {
   

      return (

        <View style={styles.container}>
        <View style={styles.cardContainer}>
      <Image source={require('../assets/story_image_1.png')} style={styles.storyImage}
         ></Image>
<Text style={styles.storyTextTitle} >{this.props.story.title}</Text>
                  <Text  style={styles.storyText}>{this.props.story.author}</Text>
         <Text  style={styles.storyText}>{this.props.story.description}</Text>
      </View>

        <View style={styles.likeButton}>
        <Ionicons name={"heart"} color={"white"} size={RFValue(30)}/>
        <Text style={styles.storyText}> 12k</Text>
        </View>


        </View>
      )
    
    }
  }



const styles=StyleSheet.create({
  container:{
    flex:1
  },
  postImage:{
    resizeMode:"contain",
    width:"95%",
    height:RFValue(250),
    alignSelf:"center"
  },
  cardContainer:{
   margin:RFValue(13),
   borderRadius:RFValue(20)
  },
  postText:{
    color:"white"
  },
  postTextTitle:{
 fontSize:RFValue(25),
 color:"white",
  },
likeButton:{
 alignItems:"center",
 flexDirection:"row",
 justifyContent:"center",
 borderRadius:RFValue(30),
 backgroundColor:'#eb3948',
 width:RFValue(160),
 height:RFValue(40)
},
})