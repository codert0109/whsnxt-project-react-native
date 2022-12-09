import React, { useState } from "react"
import { StyleSheet, Image, Text, View, ImageBackground, Dimensions, ScrollView, FlatList, TouchableOpacity } from "react-native"
import _ from "lodash";
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const { width, height } = Dimensions.get('screen');

export default function EventCalendarScreen({ navigation }) {
  const [columns, setColumns] = useState([
    "Location",
    "Age",
    "Male",
  ])
  const [direction, setDirection] = useState(null)
  const [selectedColumn, setSelectedColumn] = useState(null)
  const [pets, setPets] = useState([
    {
      Location: "Japan",
      Age: 0,
      Male: 5,
    },
    {
      Location: "United States",
      Age: 40,
      Male: 30,
    },
  ])

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc"
    const sortedData = _.orderBy(pets, [column], [newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setPets(sortedData)
  }
  const tableHeader = () => (
    <View style={styles.tableHeader} >
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity
                key={index}
                style={styles.columnHeader}
                onPress={() => sortTable(column)
                }>
                <Text style={styles.columnHeaderTxt}> {column + " "
                }
                  {/* {
                    selectedColumn === column && <MaterialCommunityIcons
                      name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"}
                    />
                  } */}
                </Text >
              </TouchableOpacity >
            )
          }
        })
      }
    </View >
  )

  return (
    <View style={styles.PrivacyPolicy}>
      <View style={styles.Group642}>
        <Image
          style={styles.Group379}
          source={require('../PrivacyPolicyScreen/Group.png')}
          onStartShouldSetResponder={(e) => true}
          onTouchEnd={(e) => { { e.stopPropagation(); navigation.goBack() } }}
        />
        <Text style={styles.Txt432}>Event Calendar</Text>
      </View>
      <ScrollView>
        <View style={{ marginVertical: 40 }}>
          <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
              '2022-07-16': { selected: true, marked: true, selectedColor: 'blue' },
              '2022-07-19': { selected: true, marked: true, selectedColor: 'orange' },
              '2022-07-25': { selected: true, marked: true, selectedColor: 'red' },
            }}
            style={{ backgroundColor: 'black' }}
            initialDate={'2022-07-01'}
            onDayPress={day => {
              navigation.navigate('Event')
            }}
          />
        </View>
        <View style={{ marginVertical: 40 }}>
          <Calendar
            // Collection of dates that have to be marked. Default = {}
            markedDates={{
              '2022-07-16': { selected: true, marked: true, selectedColor: 'blue' },
              '2022-07-19': { selected: true, marked: true, selectedColor: 'orange' },
              '2022-07-25': { selected: true, marked: true, selectedColor: 'red' },
            }}
            style={{ backgroundColor: 'black' }}
            initialDate={'2022-07-01'}
            onDayPress={day => {
              navigation.navigate('Event')
            }}
          />
        </View>
      </ScrollView>
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "black",
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    height: 50,
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 1
  },
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: 'space-around',
    borderBottomColor: 'rgba(255, 255, 255, 0.6)',
    borderBottomWidth: 1
  },
  columnHeader: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center"
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width: "50%",
    textAlign: "center",
    color: 'white'
  }
})
