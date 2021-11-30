import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'

const Home = () => {

    const [tarea, setTarea] = useState < string > ('')
    const [tareas, setTareas] = useState < string[] > ([])


    const crearTarea = () => {
        setTareas([...tareas, tarea])
    }

    const getTareas = () => {
        setTareas([...tareas])
    }

    const eliminarTarea = (id: number) => {

        tareas.splice(id, 1)
        getTareas()
    }

    useEffect(getTareas, [])

    return (
        <View style={styles.containerBase}>
           

                
                <View style={styles.container}>
                    
                    <TextInput
                        placeholder={"Escriba su Tarea"}
                        style={styles.text}
                        onChangeText={setTarea} />

                    <Button
                        title="Agregar"
                        onPress={crearTarea}
                        color="#7cf285"
                    />
                </View>
                <ScrollView>

                {
                    tareas.map(lista => (
                        <View style={styles.container}>
                            <Text style={styles.text}>{lista}</Text>
                          
                            <Button
                                title="Eliminar"
                                onPress={() => eliminarTarea(lista.id)}
                                color="#f04859"
                            />
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
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderColor: '#178581',
        borderWidth: 3,

    },
    text: {
        fontSize: 24,
        color: '#05786A',
        width: '70%'
    },
    containerBase: {
        marginTop:80,
        flex: 1,
        backgroundColor: '#FFFFFF',

    },
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    }
})