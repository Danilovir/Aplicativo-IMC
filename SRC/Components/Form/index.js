import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/index";


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageIMC] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
 
    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
          setMessageIMC(" seu IMC: ")
           setTextButton("Calcular Novamente")
           return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e altura")
    }

   

    return(
        <View>

        <View>
            <Text>Altura</Text>
            <TextInput
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            <Text>Peso</Text>
            <TextInput
           onChangeText={setWeight}
           value={weight}
            placeholder="75.865"
            keyboardType="numeric"
            />

            <Button
            onPress={() => validationImc()}
            title={textButton}
         
            />

        </View>
    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}