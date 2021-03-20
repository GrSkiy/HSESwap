import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  mainWrapper: {
    paddingRight: 20,
    paddingTop: 30,
    paddingLeft: 20
  },

  icon: {
    width: 30,
    height: 30
  },

  list: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 60
  },
  header: {
    zIndex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 31
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
    justifyContent: 'space-between'
  },

  opacityLayer: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: '100%',
    justifyContent: 'flex-end'
  },
  safeAreaContainer: {
    backgroundColor: 'red',
    paddingLeft: 20,
    paddingRight: 20,
    // height: "100%",
    // display: "flex",
    // alignItems: "center",
    justifyContent: 'flex-end',
    paddingBottom: Platform.OS === 'ios' ? 80 : 44
  },

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

  // changeMinor: {
  //   marginBottom: Platform.OS === 'ios' ? 10 : 20
  // },

  mainButton: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40
  },

  input: {
    color: '#000',
    width: '90%',
    paddingLeft: 20,
    paddingRight: 20,
    height: 48,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.09,
    shadowRadius: 20,

    elevation: 11,
    borderRadius: 10
  },
  newMessage: {
    flexDirection: 'row'
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

  creditAddresssContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20
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
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center'
  },
  focusCell: {
    borderBottomColor: '#0488FF',
    borderBottomWidth: 2
  },
  safeAreaContainer: {
    paddingLeft: 20,
    paddingRight: 20

    // paddingBottom: Platform.OS === "ios" ? 180 : 44,
  },

  mainContainer: {
    marginTop: 100
  }
})

export default styles
