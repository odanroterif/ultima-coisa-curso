import { StatusBar } from 'expo-status-bar';
//import { Component } from 'react'; // para export default class
import React from 'react';
import { Text, View, Image, Button,FlatList, ScrollView, ImageBackground } from 'react-native';
import * as imports from "./components/imports";


const sogeking = './assets/sky.png';
/*
//usando class component
export default class App extends React.Component{
  render(){
    return (
      <View>
        <Text style={styles.god}>HI</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
// arrow function
var counter = 0;
const count = () => {  
  if (counter === 10) {
    return "colapso na memória"
  }
  else {
    return counter++;
  }
} */ 
//usando function component
export default function App() {//colo tem um valor em cada tag e será passado a props em tester.tsx
  let pro = true; 
  if (pro)
  {
    return (
      //<ScrollView>
      <ImageBackground style={imports.styles.back_img} source={require(sogeking)}>
        <View style={imports.styles.container}>
          <StatusBar style="auto" />
          <Image style={imports.styles.img} source={require("./assets/god.png")} />
          <imports.Tester colo="darkgreen" />
          <Text style={imports.styles.usopp}>GO.D.USOPP</Text>
          <Text style={imports.styles.god}>GEAR SIXITH</Text>
          <imports.Tester colo="darkgreen" />
          <Button title='contar'
            onPress={imports.box} //alert é uma função nativa do expo que exib
          />
        </View>
      </ImageBackground>
      //</ScrollView>
    );
  }
  else {
    return imports.er();
  }
}

/*
const local_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  god: {
    color: "lightgreen",
    fontSize: 30,
    fontFamily: "AmericanTypewriter-Bold",
    fontWeight: "bold",
  },
  usopp: {
    padding: 10,
    color: "orange",
    fontSize: 50,
    fontWeight: "bold",
  }
});*/