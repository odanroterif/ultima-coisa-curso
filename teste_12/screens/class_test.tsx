import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button } from 'react-native';
import * as imports from "../components/imports";


//componente de classe
export default class App extends React.Component {
    state = {//container resposavel por armazenar os vários estados e seus valores
    //o nome state é um nome pré-criado pelo próprio component, por tanto deve ser esse nome e não um nome qualquer como no caso de váriavel        
        loading: false, //estado/váriavel da propriedade state
    }
    render() {
        return (
            <View style={imports.styles.container}>
                <Text style={imports.styles.god}>{this.state.loading ? "MONKEY" : "HI"}</Text>
                <Text style={imports.styles.god}>{this.state.loading ? "D" : "HELLO"}</Text>
                <Text style={imports.styles.god}>{this.state.loading ? "CROCODILE" : "HA HA HA"}</Text>
                <Button
                    title="SWITCH"
                    onPress={() => this.setState({ loading: !this.state.loading })}//forma de alterar o estado do componente em um componente de classe
                    //um component react class não pode alterar diretamente como um function, então passa o parametro no setState como um objeto                    
                />
            </View>
        )
    }
}