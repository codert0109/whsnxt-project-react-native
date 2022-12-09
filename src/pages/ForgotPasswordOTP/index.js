import React from "react"
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput
} from "react-native";
const { width, height } = Dimensions.get('screen');

export default function Forgotpassword({ navigation }) {

  onClickSubmit = () => {
    navigation.navigate('ForgotPasswordNewPassword');
  }

  return (
    <View style={styles.Forgotpassword}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('./Group.png')}
          onTouchEnd={(e) => { { e.stopPropagation(); navigation.navigate('ForgotPasswordEmail') } }}
        />
        <Text style={styles.Txt432}>Enter OTP</Text>
      </View>
      <View style={{ height: 350 }}>
        <Text style={styles.Txt133}>Please enter OTP that we have sent you on your email adress</Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginHorizontal: 40, paddingTop: 40 }}>
          <View style={styles.Rectangle92}><TextInput style={{}} textContentType="number" maxLength={1}></TextInput></View>
          <View style={styles.Rectangle92}><TextInput></TextInput></View>
          <View style={styles.Rectangle92}><TextInput></TextInput></View>
          <View style={styles.Rectangle92}><TextInput></TextInput></View>
        </View>
      </View>
      <View style={styles.Group359} onTouchEnd={() => onClickSubmit()}><Text style={styles.Txt676}>Submit</Text></View>
    </View >
  )
}

const styles = StyleSheet.create({
  Forgotpassword: {
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
  Txt133: {
    fontSize: 14,
    fontFamily: "",
    fontWeight: "500",
    lineHeight: 20,
    color: "rgba(255, 255, 255, 1)",
    marginVertical: 25,
  },
  Txt853: {
    fontSize: 14,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(189,189,189,1)",
    marginBottom: 1,
  },
  Group725: {
    marginTop: 20,
    paddingLeft: 20,
    borderRadius: 6,
    backgroundColor: "rgba(242,242,242,1)",
    height: 40,
  },
  Group359: {
    borderRadius: 39,
    backgroundColor: "rgba(0,93,227,1)",
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Txt676: {
    fontSize: 16,
    fontFamily: "",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
  },
  Rectangle92: {
    borderWidth: 1.3,
    borderStyle: "solid",
    borderColor: "white",
    width: 42,
    height: 42,
    borderRadius: 6,
  },
})