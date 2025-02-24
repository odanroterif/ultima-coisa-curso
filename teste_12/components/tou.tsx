import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import * as imports from "./imports";

//TouchableHighlight: versão mais estilizavel do button,ao ser clicado mudar de cor
//Touchableopacity: versão mais estilizavel do button,ao ser clicado fica opaco
//TouchableWithoutfeedback: versão mais estilizavel do button,ao ser clicado não mostra reações

export default function tou(){
    const [count, setCount] = React.useState(0)

    const counter = () => {
        setCount(count + 1)
    }

    return (
        <View>
            {
                count > 0
                    ?
                    <Text style={imports.styles.normal}>HELLO NUMBER {count}</Text>
                    :
                    ""
            }
            <TouchableHighlight style={imports.styles.touchbox}
                onPress={counter}
                underlayColor="#d2eb99"
            >
                <Text style={imports.styles.god}>HELLO</Text>
            </TouchableHighlight>
        </View>
    );
}