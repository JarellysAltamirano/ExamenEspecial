import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, } from 'react-native'




const Calcular = () => {
    const [primerParcial, setPrimerParcial] = useState('')
    const [segundoParcial, setSegundoParcial] = useState('')

    const [resultado, setResultado] = useState<number>(0)


    

        const calnotaFinal = () => {
            const dividir = 2;
           const notafinal = (parseInt(primerParcial)) + (parseInt(segundoParcial))
            setResultado(notafinal)
        }

        

{
}

    return (

        <View style={styles.container}>
            <ScrollView>

                <TextInput
                    style={styles.inputs}
                    placeholder="pirmer parcial"
                    onChangeText={setPrimerParcial}

                />
                <Text style={styles.text}>Contraseña</Text>
                <TextInput
                    style={styles.inputs}
                    placeholder="segundo parcial"
                    onChangeText={setSegundoParcial}


                />



                <Text style={styles.text}> La nota finales  de {resultado} </Text>
                <TouchableOpacity
                    onPress={calnotaFinal}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Calcular</Text>
                </TouchableOpacity>


            </ScrollView>
        </View>

    )
}

export default Calcular

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#004445',
        marginTop: 30,

    },
    text: {
        fontSize: 20,
        color: '#05786A',
        marginTop: 30
    },
    container: {
        flex: 1,
        backgroundColor: '#f0e0b4',
        width: '95%',
        marginLeft: 10

    },
    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 9,
        marginTop: 1,

    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'

    }
})
