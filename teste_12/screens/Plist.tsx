import React from "react";
import { FlatList, View, Text } from "react-native";


const wearpon = [
    {
        num: "1",
        name:"pachenko"
    },
    {
        num: "2",
        name:"kabuto"
    },
    {
        num: "3",
        name:"kuro kabuto"
    },
]

export default function Lest(){
    return (
        <View>
            <FlatList
                data={wearpon} //local de onde os dados vem
                keyExtractor={item => item.num} //chave que sera usada como tratamento para organizar os itens
                renderItem={({ item }) =>
                    <Text style={[{ color: "black" }, { fontSize: 18 }]}>NOME DA RELIQUIA SAGRADA:{item.name}</Text>
                }
            />
        </View>
    )
}