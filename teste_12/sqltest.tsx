import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import * as imports from "./components/imports";





export default function sends() {

    const [name, setName] = React.useState("");
    const [age,setAge] = React.useState("");
    
    return (
        <SafeAreaView style={imports.styles.container} >
            <StatusBar style="auto" />
            <SafeAreaView>
                <Text style={imports.styles.usopp} >INFORMAÇÕES</Text>
                <Text style={imports.styles.normal}  >Nome</Text>
                <TextInput
                    style={imports.styles.input}
                    placeholder="Insira seuNome"                    
                    value={name}
                    onChangeText={(text) => setName(text)}                    
                    multiline = {false}                    
                    autoCapitalize = 'words'
                />
                <Text></Text>
                <Text style={imports.styles.normal} >Idade</Text>
                <TextInput
                    style={imports.styles.input}
                    placeholder="Insira sua Idade"
                    value={age}                    
                    onChangeText={(text) => setAge(text)}                    
                    multiline={false} //se o input vai ou nào usa multi-linhas
                    keyboardType='numeric' //teclado que vai vir ao selecionar o putin                    
                />
                <Text></Text>
                <Button
                    title='CONFIRMAR'                    
                    onPress={() => alert(`Nome: ${name} \n Idade: ${age}`)}                    
                />                
            </SafeAreaView>
        </SafeAreaView>
    );
}