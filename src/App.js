import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { LandingPage } from './pages';
import './App.css';

const lightTheme = createTheme({
	type: 'light',
});

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			myDarkColor: '#52fa',
		},
	},
});

function App() {
	const darkMode = useDarkMode(false);
	return (
		<NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
			<LandingPage />
		</NextUIProvider>
	);
}

export default App;
