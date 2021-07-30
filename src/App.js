import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'

export default () => (
    <SafeAreaView style={style.App}>
        <Titulo principal="Cadastro Produto"
            segundario="Tela de Cadastro do Produto" />
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