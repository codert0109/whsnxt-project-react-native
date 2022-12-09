import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, ScrollView } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onTouchEnd={(e) => { { e.stopPropagation(); navigation.goBack() } }}
        />
        <Text style={styles.Txt432}>Normal User</Text>
        <Image source={require('./i_search.png')} style={{ position: 'absolute', right: 0, alignSelf: 'center' }} onTouchEnd={() => navigation.navigate('UserSearch')} />
      </View>
      <Image source={require('./user.png')} style={{ alignSelf: 'center', marginTop: 10 }} />
      <Text style={{ fontSize: 12, fontWeight: '600', color: 'white', alignSelf: 'center', marginTop: 20 }}>Lorem ipsum dor amit</Text>
      <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10 }}><Image source={require('./i_location.png')} style={{ alignSelf: 'center' }} /><Text style={{ fontSize: 8.26, color: 'white', marginLeft: 10 }}>Lorem ipsum dor amit</Text></View>
      <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 10 }}><Image source={require('./i_position.png')} style={{ alignSelf: 'center' }} /><Text style={{ fontSize: 8.26, color: 'white', marginLeft: 10 }}>Lorem ipsum dor amit</Text></View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <View style={{ backgroundColor: '#1455F5', borderRadius: 4, paddingHorizontal: 30, paddingVertical: 10, marginHorizontal: 10 }}><Text style={{ fontSize: 12, color: 'white' }}>Follow</Text></View>
        <View style={{ backgroundColor: 'white', borderRadius: 4, paddingHorizontal: 30, paddingVertical: 10, marginHorizontal: 10 }}><Text style={{ fontSize: 12, color: 'black' }}>Message</Text></View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        <View style={{ flexDirection: 'column', borderRightColor: 'grey', borderRightWidth: 1, width: '25%' }} >
          <Text style={{ color: 'grey', fontSize: 12, alignSelf: 'center' }}>15</Text>
          <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center' }}>Posts</Text>
        </View>
        <View style={{ flexDirection: 'column', borderRightColor: 'grey', borderRightWidth: 1, width: '25%' }} >
          <Text style={{ color: 'grey', fontSize: 12, alignSelf: 'center' }}>15k</Text>
          <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center' }}>Followers</Text>
        </View>
        <View style={{ flexDirection: 'column', borderRightColor: 'grey', borderRightWidth: 1, width: '25%' }} >
          <Text style={{ color: 'grey', fontSize: 12, alignSelf: 'center' }}>23k</Text>
          <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center' }}>Following</Text>
        </View>
        <View style={{ flexDirection: 'column', borderRightColor: 'grey', borderRightWidth: 0, width: '25%' }} >
          <Text style={{ color: 'grey', fontSize: 12, alignSelf: 'center' }}>23k</Text>
          <Text style={{ color: 'white', fontSize: 12, alignSelf: 'center' }}>Likes</Text>
        </View>
      </View>
      <ScrollView style={{ marginTop: 50, marginLeft: -20, width: width }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./portfolio1.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
          <Image source={require('./portfolio2.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
          <Image source={require('./portfolio3.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./portfolio4.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
          <Image source={require('./portfolio5.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
          <Image source={require('./portfolio6.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./portfolio7.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
          <Image source={require('./portfolio8.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
          <Image source={require('./portfolio9.png')} style={{ width: width / 3, aspectRatio: 1, height: 'auto' }} />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', position: 'absolute', height: width / 5, width: width, backgroundColor: 'white', opacity: .9, bottom: 0, alignItems: 'center', justifyContent: "space-around", paddingBottom: 20 }}>
        <Image source={require('../HomeScreen/i_navbar1.png')} onTouchEnd={() => navigation.navigate('Home')} />
        <View onTouchEnd={() => navigation.navigate('Chatlist')}><Image source={require('../HomeScreen/i_navbar2.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <View onTouchEnd={() => navigation.navigate('Notification')}><Image source={require('../HomeScreen/i_navbar3.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <Image source={require('../HomeScreen/i_navbar4.png')} onTouchEnd={() => navigation.navigate('EditProfile')} />
      </View>
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
  Txt432: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "600",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
    alignSelf: 'center'
  },
  Txt433: {
    fontSize: 14,
    fontFamily: "",
    fontWeight: "600",
    lineHeight: 30,
    color: "#1455F5",
    position: 'absolute',
    right: 20
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
