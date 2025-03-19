import React from 'react';
import { Button, SafeAreaView, Text, TextInput, StyleSheet } from 'react-native';
import * as imports from "../components/import";




export default function box() {
    return (
        <SafeAreaView style={imports.styles.comp_container}>
            <Text style={imports.styles.normal_text}>Valor:</Text>
            <TextInput
                placeholder='Insira o valor em real'
                keyboardType='numeric'
                style={imports.styles.normal_input}
            />
            <Button
                title="Converter"                                
                onPress={() => alert('Converter')}
            />
        </SafeAreaView>
    );
}