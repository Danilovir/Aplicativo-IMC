import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){
    return(
        <View>

        <View>
            <Text>Altura</Text>
            <TextInput
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
            placeholder="75.865"
            keyboardType="numeric"
            />

            <Button
            onPress={validation()}
            title="Calcular IMC"
            color="#61dafb"
            />

        </View>

        </View>
    );
}