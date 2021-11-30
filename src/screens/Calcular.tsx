import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Button } from 'react-native'

const Calcular = () => {
    const [primerParcial, setPrimerParcial] = useState('')
    const [segundoParcial, setSegundoParcial] = useState('')

    const [resultado, setResultado] = useState<number>(0)




    const calnotaFinal = () => {
        const dividir = 2;
        let notafinal = (parseInt(primerParcial) + parseInt(segundoParcial)) / dividir
        setResultado(notafinal)
    }
    const [tarea, setTarea] = useState<string>('')
    const [tareas, setTareas] = useState<string[]>([])



    const crearTarea = () => {
        setTareas([...tareas, tarea])
    }

    const getTareas = () => {
        setTareas([...tareas])
    }








    return (


        <View style={styles.container}>


            <View style={styles.container}>

                <TextInput
                    placeholder={"Nombre del Estudiante"}
                    style={styles.text}
                    onChangeText={setTarea} />
                <TextInput
                    style={styles.inputs}
                    placeholder="primer parcial"
                    onChangeText={setPrimerParcial}

                />

                <TextInput
                    style={styles.inputs}
                    placeholder="segundo parcial"
                    onChangeText={setSegundoParcial}


                />

                <TouchableOpacity
                    onPress={calnotaFinal}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Calcular</Text>
                </TouchableOpacity>

                <Text style={styles.text}> {setTarea}La nota final es  de {resultado} </Text>


               
                <Button 

                    title="Agregar"
                    onPress={crearTarea}
                    color="blue"
                />

            </View>
            <ScrollView>

            {tareas.map((lista, index) => (
          <View style={styles.container} key={index}>
            <Text style={styles.text}>{lista}</Text>
            <Text>Nota Final:{resultado}</Text>
          </View>
        ))}






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
        color: 'black',
        marginTop: 30,

    },
    text: {
        marginTop: 50,
        fontSize: 24,
        color: '#05786A',
        width: '70%'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '95%',
        marginLeft: 10,
        marginTop: 50

    },
    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 10,
        width: '100%',
        paddingVertical: 9,
        marginTop: 50,

    },
    textbotonReset: {
        marginTop: 10,
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'

    },
})
