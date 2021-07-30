import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Contador from './components/Contador'
import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'

export default () => (
    <SafeAreaView style={style.App}>
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})