import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, ScrollView } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function CreatePost({ navigation }) {
  const textInputRef = React.useRef();

  useEffect(() => {
    textInputRef.current?.focus();
  }, []);

  onClickPost = () => {
    navigation.navigate('Home', { createPost: true });
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={(e) => { { navigation.goBack(); } }}
        />
        <Text style={styles.Txt432}>Create Post</Text>
        <View style={{ backgroundColor: '#1455F5', borderRadius: 8, width: 70, height: 30, position: 'absolute', right: 10 }} onTouchEnd={() => onClickPost()}><Text style={{ color: 'white', alignSelf: 'center', marginTop: 5, fontSize: 12 }}>Post</Text></View>
      </View>
      <View><Image source={require('./avatar.png')} style={{ alignSelf: 'center', marginTop: 30, width: 100, aspectRatio: 1, height: 'auto' }} /><Text style={{ color: 'white', alignSelf: 'center', fontSize: 14 }}>John Doe</Text></View>
      <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column', backgroundColor: '#2d2d2d', marginTop: 20, color: 'white', justifyContent: 'flex-start' }}>
        <TextInput
          multiline={true}
          numberOfLines={20}
          ref={textInputRef}
          style={{ color: 'white', textAlignVertical: 'top' }}
          placeholder="Type here"
          placeholderTextColor={'#2ff2ff'}
        >
        </TextInput>
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  PrivacyPolicy: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    backgroundColor: "rgba(0,0,0,1)",
    width: width,
    height: height,
  },
  Group642: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
  },
  Group379: {
    position: 'absolute',
    left: 0,
    width: 33.57,
    height: 33.57,
    zIndex: 1,
  },
  Group380: {
    position: 'absolute',
    right: 0,
    width: 33.57,
    height: 33.57,
    zIndex: 1,
  },
  Txt432: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "600",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
  },
  iconNumber: {
    backgroundColor: 'red',
    width: 16, height: 16,
    borderRadius: 8,
    position: 'absolute',
    top: -5,
    right: 0,
    textAlign: 'center',
    paddingLeft: 3,
    paddingTop: 1
  },
})
