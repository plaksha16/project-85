import  React,{Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Platform } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import DropDownPicker from "react-native-dropdown-picker "


let customFont = {
    bubbleGum: require('../assets/fonts/BubblegumSans-Regular.ttf'),
  };

export default class Feed extends Component{

   
    constructor() {
        super();
        this.state = {
          fontsLoaded: false,
        };
      }
    
      async loadFonts() {
        await Font.loadAsync(customFont);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this.loadFonts();
      }
      render() {
        if (!this.state.fontsLoaded) {
          return <AppLoading />;
        }
   
  

   return(
<View style={styles.container}>
    <SafeAreaView style={styles.driodSafeArea}/>
    <View style={styles.appTitle}>
    <View style={styles.appIcon}>
<Image 
source={require("../assetss/logo.png")}
style={styles.iconImage}></Image>
 </View>
 <View style={styles.appTitleTextContainer}>
     <Text style={styles.appTtileText}>Spectagram</Text>
 </View>
    </View>

    <View style={styles.cardContainer}>
        <FlatList 
        keyExtractor={this.keyExtractor}
        data={posts}
        renderItem={this.renderItem}
        />
    </View>
</View>

   )

   }
}
   
  const styles=StyleSheet.create({
      container:{
  flex:1,
  backgroundColor:"black"
      },
      driodSafeArea:{
marginTop:Platform.OS ==="android"? statusbar.currentHeight: RFValue(35)
      },
      appTitle:{
      flex:0.07,
      flexDirection:"row"
      },
      appIcon:{
       flex:0.2,
       justifyContent:"center",
       alignItems:"center"
      },
      iconImage:{
      width:"100%",
      height:"100%",
      resizeMode:"contain"
      },
      appTitleTextContainer:{
         flex:0.8,
         justifyContent:"center"   
      },
      appTtileText:{
      color:"white",
      fontSize:RFValue(28)
      },
      cardContainer:{
     flex:8.5
      }
  })