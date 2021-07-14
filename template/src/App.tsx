import { StoreProvider } from "easy-peasy";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import store from "./libs/state/store";

function App() {
	return (
		<StoreProvider store={store}>
			<SafeAreaView style={styles.container}>
				<Text>HelloWorld Template!</Text>
			</SafeAreaView>
		</StoreProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default App;
