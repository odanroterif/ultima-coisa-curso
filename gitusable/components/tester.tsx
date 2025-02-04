import React from "react";
import { View,Text,StyleSheet } from "react-native";


//export default class tester extends React.Component {}
export default function tester(props: any) {//props = parametro que recebe o valor de váriaveis que estão dentro da tag criada a partir desta function
    return (
        <View>
            <Text style={[local_styles.god,{color:props.colo}]}>=========================</Text>            
        </View>
    );
}

const local_styles = StyleSheet.create({
  god: {            
    fontSize: 30,
    fontFamily: "AmericanTypewriter-Bold",   
  }
});