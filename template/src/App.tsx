import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { GlobalStateProvider } from "./libs/global-state";
import { init as initI18n } from "./libs/i18n";

function App() {
	useEffect(initI18n, []);

	return (
		<GlobalStateProvider>
			<SafeAreaView style={styles.container}>
				<Text>HelloWorld Template!</Text>
			</SafeAreaView>
		</GlobalStateProvider>
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
