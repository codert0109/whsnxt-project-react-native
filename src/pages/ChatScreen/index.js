import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, ScrollView, TextInput } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('./Group.png')}
          onTouchEnd={(e) => { { navigation.goBack(); } }}
        />
        <Image source={require('./user1.png')} />
      </View>
      <Text style={{ color: 'white', alignSelf: 'center', marginTop: 10, fontSize: 14 }}>Jenny Morison</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 40 }}>
        <Image source={require('./i_voice_call.png')} style={{ marginHorizontal: 15 }} onTouchEnd={() => navigation.navigate('VideoCall')} />
        <Image source={require('./i_video_call.png')} style={{ marginHorizontal: 15 }} onTouchEnd={() => navigation.navigate('VideoCall')} />
      </View>
      <ScrollView style={{ width: width, borderRadius: 20, backgroundColor: '#0f0f0f', height: 400, marginLeft: -20, marginTop: 50, paddingHorizontal: 20, paddingVertical: 40 }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./user_me.png')} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'column', marginRight: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: '#1455F5', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>Better than yesterday</Text><Text style={{ color: 'white', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
          <Image source={require('./user_you.png')} style={{ marginTop: 20 }} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={require('./user_me.png')} />
          <View style={{ flexDirection: 'column', marginLeft: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
            <View style={{ borderRadius: 20, backgroundColor: 'black', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>How was your day How was your day?</Text><Text style={{ color: 'grey', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{ flexDirection: 'column', marginRight: 10 }}>
            <View style={{ borderRadius: 20, backgroundColor: '#1455F5', padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5, maxWidth: width / 1 }}><Text style={{ color: 'white' }}>Better than yesterday</Text><Text style={{ color: 'white', marginLeft: 10, fontSize: 6 }}>4:02 am</Text></View>
          </View>
          <Image source={require('./user_you.png')} style={{ marginTop: 20 }} />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', zIndex: 1, position: 'absolute', bottom: 40, width: width, height: 40, paddingHorizontal: 20 }}>
        <Image source={require('./i_bookmark.png')} style={{ alignSelf: 'center' }} />
        <TextInput
          style={{ marginLeft: 10, backgroundColor: 'white', borderRadius: 5, flexGrow: 1, paddingLeft: 10 }}
          placeholder={"Send a message."}
          placeholderTextColor="grey"
        />
        <Image source={require('./i_record.png')} style={{ position: 'absolute', right: 90, alignSelf: 'center' }} />
        <Image source={require('./i_face.png')} style={{ position: 'absolute', right: 70, alignSelf: 'center' }} />
        <Image source={require('./i_send.png')} style={{ position: 'absolute', right: 10, alignSelf: 'center' }} />
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
  },
})
