import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, TextInput, Alert, Pressable } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const SignInClick = () => {
    if (email == 'user' && password == '123') navigation.navigate('Home', { accountType: 'user' });
    else if (email == 'talent' && password == '123') navigation.navigate('Home', { accountType: 'talent' });
    else {
      return Alert.alert(
        "",
        "Incorrect Email or Password",
        [
          {
            text: "OK",
            style: "cancel",
          },
        ],
        {
          cancelable: true,
        }
      );;
    }
  }

  return (
    <View style={styles.LogIn}>
      <Image
        style={styles.Group2}
        source={require('./Group.png')}
      />
      <View style={styles.Group579}>
        <Text style={styles.Txt066}> Email </Text>
        <Text style={styles.Txt498}> Password </Text>
        <View style={styles.Rectangle17} />
        <View style={styles.Rectangle15} />
        <View style={styles.Group4}>
          <View style={styles.Rectangle14}>
            <TextInput style={{ color: 'white' }} autoFocus textContentType='emailAddress' value={email} onChangeText={(v) => setEmail(v)} /></View>
          <View style={styles.Rectangle12}>
            <TextInput secureTextEntry={true} style={{ color: 'white' }} textContentType='password' value={password} onChangeText={(v) => setPassword(v)} /></View>
        </View>
        <View style={styles.Group252}>
          <View style={styles.Group345}>
            <Text style={styles.Txt501} onStartShouldSetResponder={() => { navigation.navigate('ForgotPasswordEmail', { method: 'forgot' }) }}> Forget your password! </Text>
            <View style={styles.Group3}>
              <Pressable android_ripple={{ color: 'cyan' }} onPress={() => SignInClick()} style={{
                alignSelf: 'stretch', borderRadius: 42, elevation: 25,
              }}>
                <Text style={styles.Txt203}> Sign In </Text>
              </Pressable>
            </View>
          </View>
          <Text style={{ color: 'white', fontSize: 10 }}> Dont have an Account {' '}<Text style={styles.multiple1} onStartShouldSetResponder={() => { navigation.navigate('SignUp') }}>Sign Up</Text></Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  LogIn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.93)',
    width: width,
    height: height,
  },
  Group2: {
    width: width,
    height: 382 / 375 * width,
    zIndex: -1
  },
  Txt1024: {
    position: 'absolute',
    top: height / 3.5,
    left: width / 2.5,
    fontSize: 14,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
  },
  Group525: {
    paddingTop: 39,
    paddingBottom: 39,
    paddingLeft: 39,
    paddingRight: 39,
    borderRadius: 174.5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(20,85,245,1)',
    width: width,
    height: 349,
  },
  Group579: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(20,85,245,1)',
    width: width,
    height: 350,
  },
  Txt498: {
    position: 'absolute',
    top: 110,
    left: 70,
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    width: 120,
    height: 50,
    zIndex: 5,
  },
  Txt066: {
    position: 'absolute',
    top: 40,
    left: 70,
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    width: 60,
    height: 50,
    zIndex: 5,
  },
  Rectangle17: {
    position: 'absolute',
    top: 45,
    left: 60,
    backgroundColor: 'rgba(20,85,245,1)',
    width: 60,
    height: 20,
    zIndex: 3,
  },
  Rectangle15: {
    position: 'absolute',
    top: 110,
    left: 60,
    backgroundColor: 'rgba(20,85,245,1)',
    width: 90,
    height: 20,
    zIndex: 3,
  },
  Group4: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    top: 50,
    width: width,
    zIndex: 0,
  },
  Rectangle14: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20,85,245,1)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 50,
    borderRadius: 42,
    marginBottom: 20,
  },
  Rectangle12: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20,85,245,1)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 50,
    borderRadius: 42,
  },

  Group252: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: 180,
    width: width,
    height: 122,
  },
  Group345: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  Txt501: {
    fontSize: 10,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: 20,
  },
  Group3: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: 'rgba(0,0,0,1)',
    width: width / 1.2,
    height: 53,
    overflow: 'hidden'
  },
  Txt203: {
    fontSize: 18,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    lineHeight: 48,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center'
  },

  multiple1: {
    fontSize: 10,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    lineHeight: 12,
    color: 'black',
  },
  multiple2: {
    fontSize: 10,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    lineHeight: 12,
    color: '#fff',
  },

  Txt1082: {
    position: 'absolute',
    top: 203,
    left: 154,
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
    width: 67,
    height: 18,
  },
  UnsplashCwy7qoyv9me: {
    position: 'absolute',
    top: 9,
    left: 4,
    width: 36,
    height: 36,
  },
  Ellipse6: {
    position: 'absolute',
    top: 312,
    left: 205,
    width: 36,
    height: 36,
  },
  Unsplash0polbhssf80: {
    position: 'absolute',
    top: 227,
    left: 205,
    width: 36,
    height: 36,
  },
  Ellipse11: {
    position: 'absolute',
    top: 169,
    left: 343,
    width: 36,
    height: 36,
  },
  Ellipse10: {
    position: 'absolute',
    top: 80,
    left: 96,
    width: 36,
    height: 36,
  },
  Unsplash7rie9dpdo80: {
    position: 'absolute',
    top: 191,
    left: 46,
    width: 36,
    height: 36,
  },
  Unsplash2egnqazbamk: {
    position: 'absolute',
    top: 62,
    left: 270,
    width: 36,
    height: 36,
  },
  Group1: {
    position: 'absolute',
    top: 134,
    left: 154,
    width: 66.52,
    height: 67.34,
  },
});
