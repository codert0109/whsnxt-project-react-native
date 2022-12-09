import { identity } from "lodash";
import React, { useEffect, useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, Button, Alert } from "react-native"

const { width, height } = Dimensions.get('screen');

export default function SubscriptionPlanScreen({ navigation, route }) {

  const [planNo, setPlanNo] = useState(null);

  useEffect(() => {
    if (route.params?.subscriptionPlan == 2) setPlanNo(2);
    else if (route.params?.subscriptionPlan == 1) setPlanNo(1);
    else setPlanNo(0);
  }, [])

  onClickSubscribe = () => {
    Alert.alert("Subscription successful", '', [], {
      cancelable: true,
      onDismiss: () => {
        navigation.navigate('Home');
      }
    });

  }

  onClickCancel = () => {
    Alert.alert('', 'Are you sure you want to cancel the subscription?',
      [
        {
          text: 'Yes',
          style: "OK",
          onPress: () => navigation.goBack()
        },
        {
          text: 'No',
          style: "Cancel"
        }
      ])
  }

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onTouchEnd={() => { navigation.goBack() }}
        />
        <Text style={styles.Txt432}>Subscription</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', flexGrow: 1, paddingVertical: 50 }}>
        {planNo == 0 && <View style={{ backgroundColor: 'white', marginTop: 0, width: '100%', borderRadius: 15, padding: 20, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>BRONZE</Text>
          <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginTop: 10 }}>FREE</Text>
          <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.6)', borderBottomWidth: 1, width: '100%', marginVertical: 30 }} />
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Upload media (photos, music, videos)</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>All basic social media features (post, comment, share, etc)
            GOLD (Tier II - $)
          </Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center', marginBottom: 50 }}>Create Events (these events will only show up on the talent user’s event calendar and
            not have an option to be displayed on the Master Calendar)</Text>
          <View style={{ backgroundColor: 'red', borderRadius: 23, paddingHorizontal: 20, paddingVertical: 5 }} onTouchEnd={() => onClickCancel()}><Text style={{ color: 'white' }}>Cancel</Text></View>
        </View>}
        {planNo == 1 && <View style={{ backgroundColor: 'white', marginTop: 0, width: '100%', borderRadius: 15, padding: 20, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>GOLD</Text>
          <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginTop: 10 }}>$99</Text>
          <Text style={{ color: 'black', fontSize: 18 }}>PER MONTH</Text>
          <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.6)', borderBottomWidth: 1, width: '100%', marginVertical: 30 }} />
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Everything in Bronze plus</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Create Events (shown in talent profile and master calendar)</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Partial Stats*</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center', marginBottom: 70 }}>Plan be promoted should be promoted in user timelines
          </Text>
        </View>}
        {planNo == 2 && <View style={{ backgroundColor: 'white', marginTop: 0, width: '100%', borderRadius: 15, padding: 20, justifyContent: 'center', alignItems: 'center', paddingTop: 30 }}>
          <Text style={{ color: 'black', fontSize: 18 }}>PLATINUM</Text>
          <Text style={{ color: 'black', fontSize: 32, fontWeight: 'bold', marginTop: 10 }}>$199</Text>
          <Text style={{ color: 'black', fontSize: 18 }}>PER MONTH</Text>
          <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.6)', borderBottomWidth: 1, width: '100%', marginVertical: 30 }} />
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Everything in Bronze plus</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Full stats**</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center' }}>Automatically promoted to all users</Text>
          <Text style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: 12, marginTop: 30, textAlign: 'center', marginBottom: 70 }}>Sell products in the store</Text>
        </View>}
        <View style={{ width: '100%', backgroundColor: '#1455F5', borderRadius: 85, paddingVertical: 10 }}><Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }} onTouchEnd={() => onClickSubscribe()}>Subscribe</Text></View>
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
    color: 'white'
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
