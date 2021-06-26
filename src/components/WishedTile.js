import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

renderWished = () => {
  const { navigation } = this.props
  const { exchange_minors } = this.props.data_from_api.pageData
  let wishedItems = []

  if (exchange_minors) {
    exchange_minors.forEach((minor, i) => {
      const { city, year, address, credits, whishedMinors, url } = minor
      cardItems.push(
        <Card
          city={city}
          year={year}
          title={minor.minor}
          address={address}
          credits={credits}
          exchangeMinors={whishedMinors}
          handleBack={() =>
            navigation.push('ExchangeCard', {
              url: url,
              login: false
            })
          }
          key={i}
        />
      )
    })
  }

  return cardItems
}
