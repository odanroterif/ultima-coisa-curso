import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, Button, ImageBackground, SafeAreaView, Switch } from 'react-native';
import * as imports from "./components/imports";


const sogeking = './assets/sky.png';
const sogegod = './assets/night.png';
/*
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
  const [switc, setON] = React.useState(true); //state: armazena um valor que interage em tempo real com componentes react native e pode ser altado por eles
  const [back, setBACK] = React.useState(false);
  //const setBACK = ()=>{setON(false)}
  var pro:Boolean = true;
  if (pro) 
  {
    return (
      //|
      //V renderiza os componentes dentro dos limites seguros da tela do dispositivo
      <SafeAreaView style={imports.styles.container}>
        <ImageBackground style={imports.styles.back_img} source={back ? require(sogegod) : require(sogeking)}>
          <View style={imports.styles.container}>
            <StatusBar style="auto" />
            <Image style={imports.styles.img} source={require("./assets/god.png")} />
            <imports.Model/>
            <imports.Tester colo={back ? "lightgreen" : "darkgreen"} />
            <Text style={imports.styles.usopp}>GO.D.USOPP</Text>
            <Text style={imports.styles.god}>GEAR SIXITH</Text>
            <imports.Tester colo={back ? "lightgreen" : "darkgreen"} />
            <Button title='contar'
              onPress={imports.box} //alert é uma função nativa do expo que exib
            />
            <Text></Text>
            <Button //alteração na prática, mudando o texto do botão e o valor de switc
              title={switc ? "OFF" : "ON"} //operador ternario
              onPress={() => setON(!switc)}
            />
            <Switch
              value={back}
              trackColor={{ false: "#4c4c4c", true: "#3e6ac1" }} //personaliza a cor do fundo do interruptor
              onValueChange={(back) => setBACK(back)} //exemplo com state
              //onValueChange={setBACK} //exemplo com função
            />
            <imports.Touch/>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  else {
    return imports.er();
  }
}