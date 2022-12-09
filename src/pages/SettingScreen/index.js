import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Alert } from "react-native"
import { TabRouter } from "react-navigation";

const { width, height } = Dimensions.get('screen');

export default function SettingScreen({ navigation, route }) {
  onClickLogOut = () => {
    Alert.alert(
      '',
      'Are you sure?',
      [
        {
          text: 'Yes',
          onPress: () => navigation.navigate('SignIn')
        },
        {
          text: 'No',
        }
      ],
      {
        cancelable: true
      }
    )
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onTouchEnd={(e) => { { e.stopPropagation(); navigation.goBack() } }}
        />
        <Text style={styles.Txt432}>Setting</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 10 }}>
        <Image source={require('./user.png')} style={{ alignSelf: 'center' }} />
        <View style={{ flexDirection: 'column', marginLeft: 30 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'white' }}>Johnny</Text>
          <Text style={{ fontSize: 24, color: 'white' }}>Morrison</Text>
        </View>
      </View>
      <View style={{ width: '100%', borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop: 30 }}>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('EditProfile', { accountType: route.params?.accountType })}>
        <Image source={require('./i_profile.png')} />
        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Edit Profile</Text>
        <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
      </View>
      <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('AccountSetting')}>
        <Image source={require('./i_account.png')} />
        <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Account Setting</Text>
        <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
      </View>
      {
        route.params?.accountType == 'talent' &&
        <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('Dashboard')}>
          <Image source={require('./i_dashboard.png')} />
          <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Dashboard</Text>
          <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
        </View>
      }
      {
        route.params?.accountType == 'talent' && <>
          <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('SubscriptionPlan')}>
            <Image source={require('./i_subscription.png')} />
            <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Subscriptions</Text>
            <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('AddedProduct')}>
            <Image source={require('./i_products.png')} />
            <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Products</Text>
            <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
          </View>
        </>
      }
      {
        route.params?.accountType == 'user' &&
        <>
          <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('Favorites')}>
            <Image source={require('./i_favorites.png')} />
            <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Favorites</Text>
            <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30 }} onTouchEnd={() => navigation.navigate('EventCalendar')}>
            <Image source={require('./i_calendar.png')} />
            <Text style={{ color: 'white', alignSelf: 'center', marginLeft: 30 }}>Calendar</Text>
            <Image source={require('./i_right.png')} style={{ position: 'absolute', right: 0 }} />
          </View></>
      }
      <View style={{ position: 'absolute', bottom: 70, left: 30, backgroundColor: '#1455F5', borderRadius: 10, paddingHorizontal: 30, paddingVertical: 10 }} onTouchEnd={() => onClickLogOut()}>
        <Text style={{ color: 'white' }}>Log out</Text>
      </View>
    </View>
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
