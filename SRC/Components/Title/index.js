import React from "react";
import { View, Text } from "react-native";
import styles from "./style";
export default function Title(){
    return(
        <View style={styles.BoxTitle}>
            <Text style={styles.textTitle}>Aplicativo de IMC</Text>
        </View>
    );
}