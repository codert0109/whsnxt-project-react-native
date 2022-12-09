import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, ScrollView } from "react-native"

const { width, height } = Dimensions.get('screen');
let userImages = [
  require('./user1.png'),
  require('./user2.png'),
  require('./user3.png'),
  require('./user4.png'),
  require('./user5.png'),
  require('./user6.png'),
  require('./user7.png'),
]

export default function NotificationScreen({ navigation }) {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const _notifications = [
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
      { name: 'Magnolia', content: 'Commented on your post "Nice video"', time: '3 hours ago' },
    ];
    setNotifications(_notifications);
  }, [])

  clearNotifications = () => {
    setNotifications([]);
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('./Group.png')}
          onTouchEnd={(e) => { { navigation.goBack(); } }}
        />
        <Text style={styles.Txt432}>Notifications</Text>
        <Text style={styles.Txt433} onTouchEnd={() => clearNotifications()}>Clear</Text>
      </View>
      <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'column', height: height }} >
        {notifications.map((notification, index) => {
          return (
            <View style={{ width: '100%', height: 75, marginTop: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', paddingLeft: 20 }} key={index}>
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={userImages[index % 6]} />
                  <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 20 }}>
                    <Text style={{ fontSize: 14, color: 'white' }}>{notification.name}</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>{notification.content}</Text>
                    <Text style={{ fontSize: 12, color: 'grey' }}>{notification.time}</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      </ScrollView>
      {notifications.length == 0 && <Text style={{ fontSize: 16, color: 'white', alignSelf: 'center', position: 'absolute', top: '40%', zIndex: 1 }}>You have no notifications</Text>}
      <View style={{ flexDirection: 'row', position: 'absolute', height: width / 5, width: width, backgroundColor: 'white', opacity: .9, bottom: 0, alignItems: 'center', justifyContent: "space-around", paddingBottom: 20 }}>
        <Image source={require('./i_navbar1.png')} onTouchEnd={() => navigation.navigate('Home')} />
        <View onTouchEnd={() => navigation.navigate('Chatlist')}><Image source={require('./i_navbar2.png')} /><View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>12</Text></View></View>
        <View><Image source={require('./i_navbar3.png')} onTouchEnd={() => navigation.navigate('Notification')} />{notifications.length !== 0 && <View style={styles.iconNumber}><Text style={{ fontSize: 7, color: 'white' }}>{notifications.length}</Text></View>}</View>
        <Image source={require('./i_navbar4.png')} onTouchEnd={() => navigation.navigate('EditProfile')} />
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
