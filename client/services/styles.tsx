// @ts-nocheck
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C32C0',
  },
  addButton: {
    backgroundColor: '#161A77',
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
    flexDirection: 'row'
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
    color: '#EFEFEF'
  },
  // LOGIN SCREEN
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
    fontSize: 18
  },
  loginTitle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: '250%',
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
});