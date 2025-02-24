import React from 'react';
import { Modal, Text, View, Image, Button, SafeAreaView } from 'react-native';
import * as imports from "../components/imports";


//usado para criar algo acima da view, como uma mensagem ou propaganda por exemplo
export default function model() {
    const [close, setClose] = React.useState(true);
    return (
        <SafeAreaView style={{ width: "auto", height: "auto", justifyContent: "center", alignItems: "center" }}> 
            <Modal animationType='fade' transparent={true} visible={close} style={{ width: "auto", height: "auto", justifyContent: "center", alignItems: "center", display: "flex" ,flexDirection: "column" }}>
                <Image style={imports.styles.img} source={require("../assets/bugy.png")} />
                <Text style={[imports.styles.normal,{margin: 32,color:"darkblue"}]}>SEJA CONVERTIDO POR BUGGY</Text>
                <Button
                    title="Fechar"
                    onPress={() => { setClose(!close) }}
                />
            </Modal>
        </SafeAreaView>
    );
}