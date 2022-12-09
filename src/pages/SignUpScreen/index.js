import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";
import { RadioButton } from 'react-native-paper';
import DropDown from '../../components/Dropdown';
const { width, height } = Dimensions.get('screen');

const yearDropdownItems = [2017, 2018, 2019, 2020, 2021, 2022];
const monthDropdownItems = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayDropdownItems = [1, 2, 3, 4, 5, 6, 7];
const categoryDropdownItems = ['Rock', 'Pop', 'Rythm', 'Blues', 'Music'];

function StyledInput({ label, type, onChangeText, value, autoFocus, width }) {
  return (
    <View style={styles.Group4}>
      <Text style={styles.Txt066}>{label}</Text>
      <View style={{ ...styles.Rectangle17_, width: width }} />
      <View style={styles.Rectangle14_}>
        <TextInput
          style={{ color: 'white' }}
          autoFocus={autoFocus}
          textContentType={type}
          value={value}
          onChange={onChangeText}
        />
      </View>
    </View>
  )
}

export default function LogIn({ navigation }) {
  const [accountType, setAccountType] = useState('talent');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [category, setCategory] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthYear, setBirthYear] = useState(null);
  const [birthMonth, setBirthMonth] = useState(null);
  const [birthDay, setBirthDay] = useState(null);
  const [gender, setGender] = useState('male');
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  onChangeInput = () => {

  }

  onSignUpClick = () => {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.LogIn} >
      <Image
        style={styles.Group2}
        source={require('./Group.png')}
      />
      <View style={styles.Group579}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.Txt161} > Account Type </Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <RadioButton
              value="talent"
              status={accountType === 'talent' ? 'checked' : 'unchecked'}
              onPress={() => setAccountType('talent')}
            />
            <Text style={styles.Txt7103_} > Talent </Text>
            <RadioButton
              value="user"
              status={accountType === 'user' ? 'checked' : 'unchecked'}
              onPress={() => setAccountType('user')}
            />
            <Text style={styles.Txt7104} > User </Text>
          </View>
          <StyledInput
            label={'First Name'}
            type={'text'}
            onChangeText={onChangeInput}
            value={firstName}
            width={80}
            autoFocus
          ></StyledInput>
          <StyledInput
            label={'Last Name'}
            type={'text'}
            onChangeText={onChangeInput}
            value={lastName}
            width={80}
          ></StyledInput>
          {accountType == 'talent' && (<>
            <StyledInput
              label={'User Name'}
              type={'text'}
              onChangeText={onChangeInput}
              value={userName}
              width={80}
            ></StyledInput>
            <StyledInput
              label={'Category'}
              type={'text'}
              onChangeText={onChangeInput}
              value={category}
              width={80}
            ></StyledInput>

          </>)}
          <StyledInput
            label={'Email'}
            type={'emailAddress'}
            onChangeText={onChangeInput}
            value={email}
            width={50}
          ></StyledInput>
          <StyledInput
            label={'Password'}
            type={'password'}
            onChangeText={onChangeInput}
            value={password}
            width={80}
          ></StyledInput>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.Txt594} > Date of Birth </Text>
            <View style={{
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'flex-start',
              flexDirection: 'row',
              marginTop: 5
            }}>
              <DropDown
                items={monthDropdownItems}
                style={{ width: 100, marginRight: 20, borderRadius: 20 }}
                color={'white'}
                placeholder={'Jan'}
                borderColor={'white'}
                positionLeft={20}
              ></DropDown>
              <DropDown items={dayDropdownItems} style={{ width: 100, marginRight: 20, borderRadius: 20 }} color={'white'} placeholder={'1'} borderColor={'white'} positionLeft={140}></DropDown>
              <DropDown items={yearDropdownItems} style={{ width: 100, borderRadius: 20 }} color={'white'} placeholder={'2022'} borderColor={'white'} positionLeft={260}></DropDown>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.Txt594} > Gender </Text>
            <DropDown
              items={['Male', 'Female', 'Not Both']}
              style={{ width: 100, marginRight: 20, borderRadius: 20, marginTop: 5 }}
              color={'white'}
              placeholder={'Male'}
              borderColor={'white'}
              positionLeft={20}
            ></DropDown>
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={styles.Txt594} > Genre </Text>
            <DropDown
              items={categoryDropdownItems}
              style={{ width: 100, marginRight: 20, borderRadius: 20, marginTop: 5 }}
              color={'white'}
              placeholder={'Rock'}
              borderColor={'white'}
              positionLeft={20}
            ></DropDown>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
            <RadioButton
              value="acceptPolicy"
              status={acceptPolicy ? 'checked' : 'unchecked'}
              onPress={() => setAcceptPolicy(acceptPolicy ? false : true)}
            />
            <Text style={styles.Txt7103} >By clicking Sign Up, you agree to our <Text style={{ color: 'black' }}>Terms</Text> and that you have read our <Text style={{ color: 'black' }}>Data Policy</Text>, including our <Text style={{ color: 'black' }}>Cookie</Text> Use. </Text>
          </View>
          <View style={styles.Group3} onStartShouldSetResponder={() => onSignUpClick()}>
            <Text style={styles.Txt864}> Sign up </Text>
          </View >
          <Text style={styles.multiple1}> Already have an Account {' '}<Text style={{ color: 'black' }} onStartShouldSetResponder={() => { navigation.navigate('SignIn') }}>Sign in</Text></Text>
        </ScrollView>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  LogIn: {
    display: "flex",
    justifyContent: 'flex-end',
    backgroundColor: "rgba(0,0,0,0.93)",
    width: width,
    height: height,
  },
  mine1: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 250,
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
  Unsplash0polbhssf80: {
    position: "absolute",
    top: 227,
    left: 205,
    width: 36,
    height: 36,
  },
  Group2: {
    position: 'absolute',
    top: 0,
    width: width,
    height: 382 / 375 * width,
    zIndex: -1
  },
  Group892: {
    paddingTop: 39,
    paddingBottom: 39,
    paddingLeft: 39,
    paddingRight: 39,
    borderRadius: 174.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(20,85,245,1)",
    width: 349,
    height: 349,
  },
  Group5710: {
    paddingTop: 35,
    paddingBottom: 36,
    paddingLeft: 35,
    paddingRight: 36,
    borderRadius: 134.5,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(20,85,245,1)",
    width: 269,
    height: 269,
  },
  Ellipse4: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(20,85,245,1)",
    width: 196,
    height: 196,
    borderRadius: 98,
  },

  Rectangle13: {
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: width,
    height: 600,
  },
  Group3: {
    marginTop: 15,
    borderRadius: 42,
    backgroundColor: "rgba(0,0,0,1)",
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Txt864: {
    fontSize: 18,
    fontFamily: "Inter, sans-serif",
    fontWeight: "600",
    color: "rgba(255, 255, 255, 1)",
  },

  multiple1: {
    fontSize: 10,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    lineHeight: 12,
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 30
  },
  multiple2: {
    position: 'absolute',
    left: 20,
    bottom: 130,
    fontSize: 10,
    fontFamily: 'Inter, sans-serif',
    fontWeight: '600',
    color: '#fff',
  },

  Rectangle12: {
    position: "absolute",
    bottom: 330,
    left: 20,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 40,
    borderRadius: 42,
  },
  Rectangle1283: {
    position: "absolute",
    bottom: 380,
    left: 20,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 40,
    borderRadius: 42,
  },
  Rectangle14: {
    position: "absolute",
    bottom: 450,
    left: 20,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 40,
    borderRadius: 42,
  },
  Rectangle15: {
    position: "absolute",
    bottom: 360,
    left: 40,
    backgroundColor: "rgba(20,85,245,1)",
    width: 80,
    height: 20,
  },
  Rectangle1284: {
    position: "absolute",
    bottom: 410,
    left: 40,
    backgroundColor: "rgba(20,85,245,1)",
    width: 50,
    height: 20,
    zIndex: 3,
  },
  Group226: {
    position: "absolute",
    bottom: 430,
    left: 20,
    paddingTop: 31,
    paddingBottom: 3,
    paddingLeft: 30,
    paddingRight: 234,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 40,
  },
  Rectangle17: {
    backgroundColor: "rgba(20,0,245,1)",
    width: 60,
    height: 20,
    left: 0,
  },

  Group676: {
    position: "absolute",
    bottom: 480,
    left: 20,
    paddingTop: 31,
    paddingBottom: 3,
    paddingLeft: 30,
    paddingRight: 234,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: width / 1.2,
    height: 40,
  },
  Rectangle1288: {
    position: 'absolute',
    left: 40,
    bottom: 460,
    backgroundColor: "rgba(20,85,245,1)",
    width: 85,
    height: 20,
  },

  Group887: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 40,
    paddingTop: 7,
    paddingBottom: 11,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: 81,
    height: 40,
  },
  Txt0010: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 13,
  },
  DashiconsArrowDownAlt2: {
    width: 10,
    height: 10,
  },

  Group314: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 20,
    bottom: 170,
    paddingTop: 7,
    paddingBottom: 11,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: 80,
    height: 40,
  },
  Txt243: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 8,
  },
  DashiconsArrowDownAlt2: {
    width: 12,
    height: 12,
  },

  Group293: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 913,
    // none: "0px",
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 19,
    paddingRight: 8,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: 81,
    height: 40,
  },
  Txt243: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 8,
  },
  DashiconsArrowDownAlt2: {
    width: 12,
    height: 12,
  },

  Group725: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 11,
    paddingLeft: 12,
    paddingRight: 8,
    marginRight: 40,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: 81,
    height: 40,
  },
  Txt0010: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    marginRight: 13,
  },
  DashiconsArrowDownAlt2: {
    width: 12,
    height: 12,
  },

  Group1078: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 11,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 40,
    backgroundColor: "rgba(20,85,245,1)",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: 81,
    height: 40,
  },
  Txt178: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    textAlign: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  DashiconsArrowDownAlt2: {
    width: 12,
    height: 12,
  },
  Rectangle1287: {
    position: "absolute",
    bottom: 510,
    left: 40,
    backgroundColor: "rgba(20,85,245,1)",
    width: 85,
    height: 20,
  },
  Txt464: {
    position: "absolute",
    bottom: 520,
    left: 45,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt7103: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    lineHeight: 20,
    color: "rgba(255, 255, 255, 1)",
  },
  Txt7103_: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    lineHeight: 30,
    color: "rgba(255, 255, 255, 1)",
  },
  Txt7104: {
    fontSize: 12,
    fontFamily: "",
    lineHeight: 30,
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt471: {
    position: "absolute",
    bottom: 527,
    left: 45,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt857: {
    position: "absolute",
    bottom: 465,
    left: 45,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt986: {
    position: "absolute",
    bottom: 466,
    left: 45,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt467: {
    position: "absolute",
    bottom: 415,
    left: 45,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
    zIndex: 3
  },
  Txt613: {
    position: "absolute",
    bottom: 365,
    left: 45,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt594: {
    fontSize: 14,
    fontFamily: "",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt161: {
    fontSize: 14,
    fontFamily: "",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
    height: 20,
  },
  Txt989: {
    position: "absolute",
    bottom: 220,
    left: 20,
    fontSize: 14,
    fontFamily: "",
    fontWeight: "700",
    color: "rgba(255, 255, 255, 1)",
  },
  Txt585: {
    position: "absolute",
    top: 204,
    left: 154,
    fontSize: 12,
    fontFamily: "",
    fontWeight: "500",
    color: "rgba(255, 255, 255, 1)",
    width: 67,
    height: 18,
  },
  UnsplashCwy7qoyv9me: {
    position: "absolute",
    top: 9,
    left: 4,
    width: 36,
    height: 36,
  },
  Ellipse11: {
    position: "absolute",
    top: 169,
    left: 343,
    width: 36,
    height: 36,
  },
  Ellipse10: {
    position: "absolute",
    top: 80,
    left: 96,
    width: 36,
    height: 36,
  },
  Unsplash7rie9dpdo80: {
    position: "absolute",
    top: 191,
    left: 46,
    width: 36,
    height: 36,
  },
  Unsplash2egnqazbamk: {
    position: "absolute",
    top: 62,
    left: 270,
    width: 36,
    height: 36,
  },
  Rectangle1282: {
    position: "absolute",
    top: 989,
    left: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
    width: 16,
    height: 16,
    borderRadius: 31,
  },
  Component7: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    position: "absolute",
    top: 287,
    left: 18,
    borderRadius: 54,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "rgba(0,0,0,1)",
    width: 10,
    height: 10,
  },

  Group48095674: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 287,
    left: 104,
    width: 43,
    height: 10,
  },
  Component71: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginRight: 6,
    borderRadius: 54,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: 'rgba(255,255, 255, 9)',
  },

  Txt907: {
    fontSize: 12,
    fontFamily: "",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },

  Frame48095663: {
    position: "absolute",
    top: 134,
    left: 154,
    width: 66.52,
    height: 67.34,
  },

  Group579: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(20,85,245,1)',
    width: width,
    padding: 20,
    maxHeight: height / 1.5,
  },
  Group4: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 20,
  },
  Rectangle14_: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(20,85,245,1)',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'rgba(255,255, 255, 9)',
    width: width - 40,
    height: 40,
    borderRadius: 42,
  },
  Rectangle17_: {
    position: 'absolute',
    top: -5,
    left: 60,
    backgroundColor: 'rgba(20,85,245,1)',
    height: 20,
    zIndex: 1,
  },
  Txt066: {
    position: 'absolute',
    top: -15,
    left: 65,
    fontSize: 12,
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    height: 50,
    zIndex: 2,
  },
})