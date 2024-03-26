import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const renderBottomContents= () => {
    const BottomContents=[]
    
    for (let i=0; i<15; i++){
      BottomContents.push(
        <View style={styles.mainBottomContent}></View>
      )
    }
    return  BottomContents
  }
  

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.Text}>Menu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.Text}>Logs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.Text}>Credits</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.mainTop}>
          <View style={styles.mainTopContent}></View>
          <View style={styles.mainTopContent}></View>
          <View style={styles.mainTopContent}></View>
        </View>

        <View style={styles.mainMedium}>
          <View style={styles.mainMediumContent}></View>
          <View style={styles.mainMediumContent}></View>
          <View style={styles.mainMediumContent}></View>
        </View>

        <View style={styles.mainBottom}>
          {renderBottomContents()}
        </View>

      </View>

      <View style={styles.Footer}>
        <Text style={styles.Text}>Exercício 03 - DM</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73779e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainMedium:{
    backgroundColor: "#b2b9ff",
    padding: 10,
    justifyContent: "space-between",
    alignItems:"center",
    margin: 15,
    width: "100%",
  },

  mainMediumContent:{
    height: 30,
    width: "100%",
    backgroundColor: "black",
    margin: 5,
  },

  main:{
    width:'80%',
    backgroundColor: "#8a8fc3",
    padding: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems:"center"
  },

  mainBottom:{
    backgroundColor: "#b2b9ff",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap"
  },

  mainBottomContent:{
    height: 40,
    width: 40,
    margin: 3,
    backgroundColor: "black"
  },
    
  mainTop:{
    backgroundColor: "#b2b9ff",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
  },

  mainTopContent:{
    height: 130,
    width: 50,
    margin: 5,
    backgroundColor: "black"
  },

  header:{
    width:'100%',
    flexDirection: 'row',
    justifyContent:"space-around",
    alignItems: "center",
    top: 0,
    position:"absolute",
    backgroundColor: '#c4c4c4',
    height: 110,
  },

  button:{
    backgroundColor:"black",
    padding: 10,
    borderRadius:8,
    marginTop: 30
  },

  Text:{
    color:"white"
  },

  Footer:{
    position: "absolute",
    bottom: 0,
    height: 60,
    backgroundColor: "#4e466a",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
});
