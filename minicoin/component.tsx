import React from 'react';
import { Button, SafeAreaView, Text, TextInput, Alert } from 'react-native';
import * as imports from "./import";




export default function box() {
    const [coin, setValue] = React.useState('');
    

    return (
        <SafeAreaView style={imports.styles.comp_container}>
            <Text style={imports.styles.normal_text}>Valor:</Text>
            <TextInput
                style={imports.styles.normal_input}
                placeholder='Insira o valor em real'
                keyboardType='numeric'
                value={coin}
                onChangeText={setValue}
            />
            <Button
                title="Converter"
                onPress={() => {                    
                    if(parseFloat(coin) == 0)
                    {
                        alert('campo vazio')
                    }
                    else
                    {
                        Alert.alert("CONVERTIDO",`em dolar este valor é ${(parseFloat(coin) / imports.globals.dolar).toFixed(2)} \nem euro este valor é ${(parseFloat(coin) / imports.globals.euro).toFixed(2)}`);
                    }                    
                }}
            />
        </SafeAreaView>
    );
}
