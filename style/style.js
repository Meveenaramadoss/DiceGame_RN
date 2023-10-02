import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#bcb6e8',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    paddingBottom: 20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#a07676',
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: "#e9e9e9",


  },
  footer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: '#a07676',
    flexDirection: 'row',
    borderWidth: 4,
    borderColor: "#e9e9e9",
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    margin: 2,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 19,
    textAlign: 'center',
    margin: 2,
  },
  gameboard: {
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#a07676',
    margin: 5,
    padding: 15
  },
  gameinfo: {
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 20,
    margin: 5,
    padding: 15

  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row",
    flex: 1
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ffffff",
    backgroundColor: "#3e8fbe",
    elevation: 10
  },
  buttonText: {
    color: "#2B2B52",
    fontWeight: 'bold',
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
  },

  status: {
    backgroundColor: '#deb6e3',
    borderRadius: 15,
    marginTop: 10,
    padding: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#d8d3d3'



  }
});