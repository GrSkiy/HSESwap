import React from 'react'
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native'

const renderMes = (user_status, handleStatusChange, res) => {
  if (user_status == 1) {
    return (
      <View style={styles.cardWrapper}>
        <Text style={styles.stepTitle}>Шаг 1</Text>
        <Text style={styles.stepText}>
          Написать письмо на почту ответственному за твой текущий и
          ответственному за новый майнор о том, что ты хочешь обменяться
          майнором.
        </Text>
        <View style={styles.mainWrapper}>
          <Text></Text>
          <TouchableOpacity
            onPress={() => handleStatusChange(1)}
            style={styles.bigBut}
          >
            <Text style={styles.butText}>Следующий шаг</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.span}>
          {res ? 'Студент уже выполнил этото шаг' : ''}
        </Text>
      </View>
    )
  } else if (user_status == 2) {
    return (
      <View style={styles.cardWrapper}>
        <Text style={styles.stepTitle}>Шаг 2</Text>
        <Text style={styles.stepText}>
          Написать письмо на почту ответственному за твой текущий и
          ответственному за новый майнор о том, что ты хочешь обменяться
          майнором.
        </Text>
        <View style={styles.mainWrapper}>
          <TouchableOpacity
            onPress={() => handleStatusChange(-1)}
            style={styles.smalBut}
          >
            <Text style={styles.samlButText}>Вернуться назад</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleStatusChange(1)}
            style={styles.bigBut}
          >
            <Text style={styles.butText}>Следующий шаг</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.span}>
          {res ? 'Студент уже выполнил этото шаг' : ''}
        </Text>
      </View>
    )
  } else if (user_status == 3) {
    return (
      <View style={styles.cardWrapper}>
        <Text style={styles.stepTitle}>Шаг 3</Text>
        <Text style={styles.stepText}>
          Написать письмо на почту ответственному за твой текущий и
          ответственному за новый майнор о том, что ты хочешь обменяться
          майнором.
        </Text>
        <View style={styles.mainWrapper}>
          <TouchableOpacity
            onPress={() => handleStatusChange(-1)}
            style={styles.smalBut}
          >
            <Text style={styles.samlButText}>Вернуться назад</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleStatusChange(1)}
            style={styles.bigBut}
          >
            <Text style={styles.butText}>Завершить обмен</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.span}>
          {res ? 'Студент уже выполнил этото шаг' : ''}
        </Text>
      </View>
    )
  }
}

export default function StatusCard({
  exchange_status,
  user_status,
  student_status,
  handleStatusChange,
  handleApprovedRequest
}) {
  if (exchange_status == 'Обмен состоялся') {
    return (
      <View style={styles.cardWrapper}>
        <Text>{exchange_status}</Text>
      </View>
    )
  } else if (exchange_status == 'Ждем ответа от студента') {
    return (
      <View style={styles.cardWrapper}>
        <View style={styles.mainWrapper}>
          <Text style={styles.span}>Ты отправил запрос на обмен</Text>
          <TouchableOpacity
            onPress={() => handleApprovedRequest(false)}
            style={styles.bigBut}
          >
            <Text style={styles.butText}>Отменить</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else if (exchange_status == 'Вам отправили запрос на обмен') {
    return (
      <View style={styles.cardWrapper}>
        <View style={styles.mainWrapper}>
          <Text style={styles.span}>С тобой хотят обменяться!</Text>
          <TouchableOpacity
            onPress={() => handleApprovedRequest(true)}
            style={styles.bigBut}
          >
            <Text style={styles.butText}>Принять</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleApprovedRequest(false)}
            style={styles.bigBut}
          >
            <Text style={styles.butText}>Отклонить</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else if (exchange_status == 'Процесс обмена') {
    let res = student_status > user_status ? true : false
    return renderMes(user_status, handleStatusChange, res)
  } else {
    return <Text> ERROR, {exchange_status}</Text>
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    paddingTop: 20
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0488FF',
    marginBottom: 12
  },
  stepText: {
    fontSize: 14,
    marginBottom: 12
  },
  mainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  mainButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0488FF'
  },
  bigBut: {
    minWidth: 180,
    elevation: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 22,
    paddingRight: 22,
    backgroundColor: '#0488FF',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  span: {
    fontSize: 14,
    color: '#8E8E8E'
  },
  butText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})
