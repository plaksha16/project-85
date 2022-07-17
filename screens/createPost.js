import React, { Component } from 'react';
import {
  Text,
  View,
   TextInput,
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

let customFonts = {
  bubbleGum: require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      previewImage: 'image_1',
    };
  }

  async loadFonts() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }
  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      let preview_images = {
        image_1: require('../assets/story_image_1.png'),
        image_2: require('../assets/story_image_2.png'),
        image_3: require('../assets/story_image_3.png'),
        image_4: require('../assets/story_image_4.png'),
        image_5: require('../assets/story_image_5.png'),
      };
      return (
        <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require('../assets/logo.png')}
                style={styles.iconImage}></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>New Story</Text>
            </View>
          </View>
          <View>
          <Image
            source={preview_images[this.state.previewImage]}
            style={styles.previewImage}></Image>

          <DropDownPicker
            items={[
              { label: 'image 1', value: 'image_1' },
              { label: 'image 2', value: 'image_2' },
              { label: 'image 3', value: 'image_3' },
              { label: 'image 4', value: 'image_4' },
              { label: 'image 5', value: 'image_5' },
            ]}
            defaultValue={this.state.previewImage}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start',
              
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) =>
              this.setState({
                previewImage: item.value,
              })
            }
            
          />

          </View>

          <ScrollView>
          <TextInput placeholder={'title'} style={styles.input}></TextInput>
          <TextInput
            placeholder={'description'}
            style={styles.input}></TextInput>
          <TextInput placeholder={'story'} style={styles.input}></TextInput>
          </ScrollView>
        </View>
      );
    }
  }
}

