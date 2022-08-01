// @ts-nocheck
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161A77',
  },
  addButton: {
    backgroundColor: '#2C32C0',
    color: 'white',
    paddingRight: 5,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 30
  },
  bugContainer: {
    backgroundColor: 'rgba(160, 160, 160, 0.65)',
    marginTop: '4%',
    margin: '2%',
    marginBottom: '0%',
    padding: '2%',
    borderRadius: 10,
  },
  row1: {
    flexDirection: 'row',
  },

  bugTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: '2%',
    color: '#EFEFEF'
    
  },
  boldText: {
    fontWeight: 'bold',
    color: '#EFEFEF'
  },
  whiteText: {
    color: '#EFEFEF',
    fontSize: 15,
  },
  rightSide: {
    fontWeight: 'bold',
    color: '#EFEFEF',
    fontsize: 17
  },
  bugSubmitButton: {
    width: '24%',
    left: '38%',
    justifyContent: 'center',
  },
  // ADD BUG SCREEN
  inputText: {
    color: 'white',
    fontSize: 17,
    marginBottom: 20,
  },

  // BUG DETAILS SCREEN
  bugDetailsContainer: {
    backgroundColor: 'rgba(160, 160, 160, 0.65)',
    marginTop: '4%',
    margin: '2%',
    marginBottom: '0%',
    padding: '2%',
    borderRadius: 10,
  },
  bugDetailsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bugDetailsText: {
    color: '#EFEFEF',
    fontSize: 17,
    lineHeight: 40,
  },
  bugDetailsTextBold: {
    color: '#EFEFEF',
    fontSize: 17,
    lineHeight: 40,
    fontWeight: 'bold',
    marginBottom: -9
  },
  bugDetailsDescription: {
    color: '#EFEFEF',
    fontSize: 17,
    marginBottom: 15,
  },
  // LOGIN SCREEN
  register: {
    marginTop: 10,
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  registerTitle: {
    position: 'absolute',
    alignSelf: 'center',
    marginBottom: '1020%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  login: {
    flex: 1,
    backgroundColor: '#161A77',
    alignContent: 'center',
    justifyContent: 'center',
    width: '60%',
    marginLeft: '20%',
    fontSize: 10
  },
  loginInputText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20
  },
  loginTitle: {
    position: 'absolute',
    alignSelf: 'center',
    marginBottom: '620%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  loginBackground: {
    flex: 1,
    backgroundColor: '#161A77',
  },
  loginButton: {
    flex: 1,
    position: 'absolute',
    marginBottom: '100%',
  },
  loginButtonWidth: {
    width: '40%',
    left: '30%'
  }
});