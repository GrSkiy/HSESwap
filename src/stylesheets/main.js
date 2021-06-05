import { Dimensions, StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  mainWrapper: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    minWidth: '100%',
    height: '100%'
  },
  backgroundImage: {
    width: '100%',
    height: '36%'
  },
  backgroundImageContainer: {
    marginTop: 20
  },

  logInWrapper: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#fff',
    minWidth: '100%',
    height: '100%'
  },

  screenWithButtonOnBottom: {
    height: '100%',
    justifyContent: 'space-between'
  },

  leftHeaderButton: {
    paddingLeft: 20
  },

  sentredWrepper: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  scrollList: {
    width: '100%'
  },

  centredContainer: {
    alignItems: 'center'
  },

  zBorder: {
    height: 50
  },

  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26
  },
  h1Log: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
    marginBottom: 12
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12
  },

  span: {
    fontSize: 12,
    color: '#979797',
    marginBottom: 30
  },

  paragraph: {
    fontSize: 14
  },
  paragraphLog: {
    fontSize: 14,
    marginBottom: 20
  },

  link: {
    fontSize: 14,
    color: '#0488FF'
  },

  border: {
    backgroundColor: '#F8F8F8',
    marginLeft: -20,
    // width: 'calc(100% + 40px)',
    width: '100%',
    height: 10,
    marginTop: 20,
    marginBottom: 20
  },

  creditAddresssContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 20
  },

  chipsContainer: {
    marginRight: 20
  },

  chips: {
    backgroundColor: '#F3F3F3',
    borderRadius: 36,
    minWidth: 69,
    textAlign: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 14,
    marginTop: 14
  },

  responsibleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 6
  },

  descriptionheader: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12
  },

  loginContainer: {
    alignItems: 'flex-start'
  },

  liginPadding: {
    height: 20
  },

  h1InVerification: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 26,
    textAlign: 'center'
  },

  cellRoot: {
    backgroundColor: '#F1F1F1',
    width: 55,
    height: 63,
    marginTop: 28,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'center',
    borderBottomColor: '#CACACA',
    borderBottomWidth: 1
  },

  cellText: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center'
  },

  focusCell: {
    borderBottomColor: '#0488FF',
    borderBottomWidth: 2
  },

  selectWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },

  minorPoint: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'center'
  },
  minorPointActive: {
    backgroundColor: '#E6F6FF',
    flexDirection: 'row',
    height: 44,
    alignItems: 'center'
  },

  minorTitle: {
    fontSize: 16,
    lineHeight: 22,
    maxWidth: '90%'
  },

  pinMinorWrapper: {
    width: Dimensions.get('window').width + 40,
    zIndex: 3,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: -20,
    marginTop: -30,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,
    elevation: 5
  },

  pinMinorText: {
    backgroundColor: '#fff',
    fontSize: 16
  },

  chatWrapper: {
    width: '100%'
  },
  messagesList: {
    marginBottom: 12
  },

  newMessage: {
    // width: Dimensions.get('window').width + 40,
    // width: 'calc(100% + 40px)',

    width: '100%',
    flexDirection: 'row',
    marginLeft: -20,
    paddingLeft: 20,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'space-between'
  },

  input: {
    marginRight: 13,
    paddingLeft: 10,
    paddingTop: 7,
    paddingBottom: 7,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#F1F1F1'
  },

  icon: {
    width: 30,
    height: 30
  },

  opacityLayer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '100%',
    justifyContent: 'flex-end'
  },

  // safeAreaContainer: {
  //   backgroundColor: 'red',
  //   paddingLeft: 20,
  //   paddingRight: 20,
  //   // height: "100%",
  //   // display: "flex",
  //   // alignItems: "center",
  //   justifyContent: 'flex-end',
  //   paddingBottom: Platform.OS === 'ios' ? 80 : 44
  // },

  viewContainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginBottom: 20
  },

  pageTag: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  popUpContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0, 0.4)'
  },

  filterMainContainer: {
    paddingTop: 35,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2'
  },

  homeIndicator: {
    width: 36,
    height: 4
  },

  imgContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  },

  mainButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40
  },

  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 48,
    marginLeft: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#0488FF',
    borderRadius: 20
  },

  settingBody: {
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  pointsCollection: {
    width: 'auto'
  },

  logOut: {
    alignItems: 'center',
    paddingBottom: 79
  },
  logOutTitle: {
    color: '#BF0C0C',
    fontSize: 17,
    marginTop: 12,
    marginBottom: 12
  },
  container: {
    backgroundColor: '#fff',
    marginBottom: 20
  },
  reedMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  readMoreText: {
    color: '#0488FF'
  },
  readMoreLink: {
    width: 9,
    height: 8,
    marginLeft: 6
  },

  descriptionContainer: {
    marginBottom: 12
  },

  header: {
    color: '#005AAB',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 12
  },

  headerMinor: {
    color: '#005AAB',
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 20
  },

  headerCredits: {
    marginBottom: 4,
    color: '#005AAB',
    fontWeight: 'bold',
    fontSize: 12
  },
  colorArea: {
    backgroundColor: '#fff'
  },

  safeAreaContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    paddingBottom: Platform.OS === 'ios' ? 180 : 44
  },

  minorName: {
    fontSize: 18,
    fontWeight: '500'
  },

  credits: {
    fontSize: 22
  },

  addressContainer: {
    marginLeft: 36
  },
  root: { padding: 20, minHeight: 300 },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#005AAB',
    fontWeight: 'bold'
  },
  safeArea: {
    // alignItems: "center",
    marginTop: 20,
    height: '100%',
    justifyContent: 'space-between'
  },
  sendAgainTitle: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    color: '#0488FF'
  },
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})

export default styles
