import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import * as imports from "./components/import";

export default function App() {
  return (
    <SafeAreaView style={imports.styles.container}>
      <Text style={imports.styles.title}>SISTEMA CONVERSOR DE MOEDAS</Text>  
      <imports.Inbox/>    
    </SafeAreaView>
  );
}
