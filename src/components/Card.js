import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const renderExchangeMinors = (minors) => {
  let minorItems = []

  if (minors.length > 0) {
    minors.forEach((minor, i) => {
      minorItems.push(
        <Text style={styles.minorChips} key={i}>
          {minor}
        </Text>
      )
    })

    return minorItems
  } else {
    return []
  }
}

// <View style={styles.cardHeader}>
// </View>
export default function Card(props) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.handleBack}>
      <Text style={styles.cardHeader}>
        {props.city} • {props.year}
      </Text>
      <Text style={styles.h1}>{props.title}</Text>
      <Text style={styles.h4}>адрес: {props.address}</Text>
      <Text style={styles.h4}>25{props.credits} кредитов</Text>
      <View style={styles.minorList}>
        {renderExchangeMinors(props.exchangeMinors)}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    borderRadius: 20,
    elevation: 5
  },
  cardHeader: {
    fontSize: 14,
    color: '#8C8C8C',
    marginBottom: 12
  },

  h1: {
    fontSize: 18,
    marginBottom: 5,

    fontWeight: '600',
    color: '#005AAB'
  },
  h4: { fontSize: 14, color: '#000', marginBottom: 5 },

  minorList: {
    width: '100%',
    flexWrap: 'wrap',
    marginTop: 15,
    // flex: 1,
    flexDirection: 'row'
  },
  minorChips: {
    color: '#000',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 9,
    height: 'auto',
    fontSize: 17,

    backgroundColor: '#F2F2F2',
    borderRadius: 36,
    marginRight: 9
  }
})
