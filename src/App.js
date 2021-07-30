import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'


export default () => (
    <SafeAreaView style={style.App}>

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