import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import MinMax from './components/MinMax'

export default () => (
    <SafeAreaView style={style.App}>
        <MinMax/>
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