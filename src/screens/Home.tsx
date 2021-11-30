import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'

const Home = () => {


    const [estudiante, setEstudiante] = useState<string>('')

    const [estudiantes, setEstudiantes] = useState<string[]>([])

    const [primerParcial, setPrimerParcial] = useState('')

    const [segundoParcial, setSegundoParcial] = useState('')

    const [notaFinales, setnotaFinales] = useState<string[]>([])
    const [notaFinal, setnotaFinal] = useState<string>('')

    let calificacionFinal: number = 0
    let promedioValidado = ''
    let reprobado = 'SD'

    const ValidarNota = () => {
        setEstudiantes([...estudiantes, estudiante])
        let notaFinal = parseFloat(primerParcial) + parseFloat(segundoParcial)
        calificacionFinal = notaFinal / 2
        ValidacionDeAprobacion()
        setnotaFinal(calificacionFinal.toPrecision())
    }

    const ValidacionDeAprobacion = () => {
        if (primerParcial === 'SD' || segundoParcial === 'SD' || primerParcial === 'NSP' || segundoParcial === 'SD') {
            promedioValidado = reprobado
            setnotaFinales([...notaFinales, promedioValidado])
        }
        else {
            setnotaFinales([...notaFinales, calificacionFinal.toString()])
        }
    }
    return (
        <View style={styles.containerBase}>
            <View>
            <Text style={styles.container2}>Calificaciones</Text>

            </View>
            <Text style={styles.textCabeza}>Nombre del estudiante</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputs}
                    placeholder={"Nombre del Estudiante"}
                    onChangeText={setEstudiante}
                />
            </View>

            <View style={styles.containerNota}>
               
            <View>
           <Text style={styles.text}>lP</Text>
            <TextInput
                style={styles.title}
                placeholder={"1P"}
                onChangeText={setPrimerParcial}
               
            />
           </View>
           <View>
           <Text style={styles.text}>llP</Text>
            <TextInput
                style={styles.title}
                placeholder={"2P"}
                onChangeText={setSegundoParcial}
               
            />
           </View>

                <View>
                    <Text style={styles.text}>NF</Text>
                    <Text style={styles.title}>{notaFinal}</Text>

                </View>
                <TouchableOpacity
                    onPress={ValidarNota}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                    estudiantes.map((estudiantes, index) => (
                        <View style={styles.container} key={index}>
                            <Text style={styles.text} >{estudiantes}</Text>
                            <Text style={[notaFinales[index] < '60' ? styles.textReprobado : styles.textAprobado]}>Nota Final :{notaFinales[index]}</Text>
                        </View>
                    ))

                }
            </ScrollView>
        </View>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#8C8A8A',
        marginTop: 10,
    },
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        fontSize: 22,
        color: '#034C50',
        width: '70%'
    },
    containerBase: {
        marginTop: 10,
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    containerNota: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#05786A',
        marginTop: 10,
    },
    botonReset: {
        backgroundColor: '#8C8A8A',
        borderRadius: 8,
        width: '30%',
        paddingVertical: 7,
        marginTop: 5
    },
    textbotonReset: {
        color: '#05786A',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10

    },
    text: {
        fontSize: 24,
        color: '#05786A',
    },
    textReprobado: {
        fontSize: 24,
        color: '#B52222',
    },
    textAprobado: {
        fontSize: 24,
        color: '#05786A',
    },
    title: {
        width: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 8,
        marginLeft: 10,
        marginTop: 3,
        borderWidth: 2,
        borderColor: "#8C8A8A",

    },
    textCabeza: {
        fontSize: 30,
        color: '#034C50',
        marginTop: 50,
        marginLeft: 10
    },
    container2: {
        marginTop: 40,
        fontSize: 25,
        fontWeight: "bold",
        color: '#8C8A8A'
    }

})