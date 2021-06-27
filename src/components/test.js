;<Modal
  styleanimationType={'fade'}
  presentationStyle={'overFullScreen'}
  isVisible={show}
  // onRequestClose={this.close}
  onSwipeComplete={() => this.close()}
  swipeDirection="left"
  style={{
    height: '80%',
    width: '100%',
    backgroundColor: '#fff'
  }}
>
  <View
    style={{
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20
    }}
  >
    <View>
      <Text>{user.email}</Text>
      <Text>{user.minor}</Text>
      <SettingPoint
        title={'Открыть мое объявление'}
        // toggle={data.isPublished}
      />
    </View>
    <View style={styles.settingBody}>
      <View style={styles.pointsCollection}>
        <SettingPoint
          title={'Мои данные'}
          changePage={() => this.changePage('Settings')}
        />
        <SettingPoint
          title={'Список всех майноров'}
          changePage={() => this.changePage('AllMinors')}
        />
        <TouchableOpacity onPress={() => this.props.logOut()}>
          <Text style={styles.logOutTitle}>Выйти</Text>
        </TouchableOpacity>
        <Line />
      </View>
    </View>
  </View>
</Modal>


________________________________________

<View >
  <View>
    <Text>Общая информация</Text>
    <TouchableOpacity>
      <Text style={styles.linkReadMore}>Редактировать</Text>
    </TouchableOpacity>
    <View>
      <Text style={styles.h2}>Имя</Text>
      <Text style={styles.chips}>{userName}</Text>
    </View>
    <View>
      <Text style={styles.h2}>Твой майнор</Text>
      <Text style={styles.chips}>{minor}</Text>
    </View>
    <View>
      <Text style={styles.h2}>Кампус</Text>
      <Text style={styles.chips}>{city}</Text>
    </View>
    <View>
      <Text style={styles.h2}>Курс</Text>
      <Text style={styles.chips}>{course}</Text>
    </View>
  </View>
  <View>
    <Text>Твое объявление</Text>
    <TouchableOpacity>
      <Text style={styles.linkReadMore}>Создать объявление</Text>
    </TouchableOpacity>
    <Text>Banner</Text>
  </View>
  <View>
    <Text>Архив объявлений</Text>
    <Text>render</Text>
  </View>
</View>


___________SETTING VIEW________________

<View style={styles.itemsBody}>
  <View style={styles.itemsCollection}>
    <FullInfoInput
      title={'Почта HSE'}
      content={'vsinsafutdinova@edu.hse.ru'}
    />
    <FullInfoInput title={'Мой кампус'} content={this.props.user.city} />
    <FullInfoInput title={'Мой майнор'} content={this.props.user.minor} />
  </View>
  <Text style={styles.caption}>
    Ты можешь поменять информацию о себе, если при регистрации допустил
    ошибку. Все изменения будут сохранены.
  </Text>
</View>
