import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function EventDetailScreen({ navigation }) {
  return (
    <View style={styles.PrivacyPolicy}>
      <ImageBackground source={require('./back.png')} style={{ width: width, aspectRatio: 375 / 281, height: 'auto' }}>
        <View style={styles.Group642}>
          <Image
            style={styles.Group379}
            source={require('../PrivacyPolicyScreen/Group.png')}
            onStartShouldSetResponder={(e) => true}
            onTouchEnd={(e) => { { e.stopPropagation(); navigation.goBack() } }}
          />
        </View>
        <Image source={require('./i_calendar.png')} style={{ position: 'absolute', bottom: 10, left: 20 }} onTouchEnd={() => navigation.navigate('Events')} />
        <View style={{ position: 'absolute', bottom: 10, right: 10, flexDirection: 'row' }}><View style={{ borderRadius: 40, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, height: 35, marginHorizontal: 10 }}><Text style={{ fontSize: 18, color: 'white' }}>Interested</Text></View><View style={{ borderRadius: 40, borderColor: 'white', borderWidth: 1, paddingHorizontal: 10, height: 35, marginHorizontal: 10 }}><Text style={{ fontSize: 18, color: 'white' }}>Going</Text></View></View>
      </ImageBackground>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 14, color: 'white' }}>TUESDAY, NOVEMBER</Text>
          <Text style={{ fontSize: 14, color: 'white' }}>7:45 PM-12 AM PST</Text>
        </View>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>Most Dope Tribute to Mac Miller</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Image source={require('./i_event.png')} />
          <Text style={{ color: 'white', fontSize: 10, marginLeft: 10 }}>Event by <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>The Thirsty Monkey</Text></Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Image source={require('./i_location.png')} />
          <Text style={{ color: 'white', fontSize: 10, textDecorationLine: 'underline', marginLeft: 10 }}>The Thirsty Monkey</Text>
        </View>
        <View style={{ width: '100%', borderBottomColor: 'white', borderBottomWidth: 1, marginTop: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginTop: 15 }}>Location</Text>
      </View>
      <Image source={require('./map.png')} style={{ width: width }} />
      <View style={{ flexDirection: 'row', position: 'absolute', height: width / 5, width: width, backgroundColor: 'white', opacity: .9, bottom: 0, alignItems: 'center', justifyContent: "space-around", paddingBottom: 20 }}>
        <Image source={require('../HomeScreen/i_navbar1.png')} />
        <View onTouchEnd={() => navigation.navigate('Chatlist')}><Image source={require('../HomeScreen/i_navbar2.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <View onTouchEnd={() => navigation.navigate('Notification')} ><Image source={require('../HomeScreen/i_navbar3.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <Image source={require('../HomeScreen/i_navbar4.png')} onTouchEnd={() => navigation.navigate('EditProfile')} />
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  PrivacyPolicy: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,1)",
    width: width,
    height: height,
  },
  Group642: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20
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
