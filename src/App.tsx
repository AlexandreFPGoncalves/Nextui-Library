import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { LandingPage } from './pages';
import './App.css';

const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {
			background: 'var(--white)',
			navbar: 'var(--grey-50)',
			navbarBorder: 'var(--grey-900)',
			text: 'var(--grey-900)',
		},
	},
});

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			background: 'var(--white)',
			navbar: 'var(--grey-900)',
			navbarBorder: 'var(--grey-50)',
			text: 'var(--white)',
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
