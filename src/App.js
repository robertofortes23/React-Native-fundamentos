import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'

export default () => (
    <SafeAreaView style={style.App}>
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
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