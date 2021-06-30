import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const renderWishedMinors = (wishedMinors) => {
  // const { navigation } = this.props

  const wishedItems = []

  wishedMinors.forEach((minor, i) => {
    console.log(i)
    wishedItems.push(
      <TouchableOpacity
        style={{
          paddingTop: 6,
          paddingBottom: 6,
          paddingLeft: 12,
          paddingRight: 12,
          backgroundColor: '#f1f1f1',
          alignSelf: 'flex-start',
          maxWidth: 300,
          borderRadius: 25,
          marginTop: 6,
          marginLeft: 6
        }}
        key={i}
      >
        <Text
          style={{ fontSize: 14, color: '#0488FF' }}
          numberOfLines={1}
          ellipsizeMode="tail"
          key={i}
        >
          {minor}
        </Text>
      </TouchableOpacity>
    )
  })
  // console.log('_____________')
  // console.log(wishedItems)
  // console.log('_____________')
  return wishedItems
}

export default function ButtonSet(props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: -6,
        marginTop: -6
      }}
    >
      {renderWishedMinors(props.wished_minors)}
    </View>
  )
}

const styles = StyleSheet.create({})
