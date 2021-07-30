import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
export default class App extends React.Component {
	render() {
		return (
			<SafeAreaView style={style.App}>

			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})