import { createTheme, NextUIProvider, getDocumentTheme } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import './App.css';
import { LandingPage } from './pages';

const lightTheme = createTheme({
	type: 'light',
});

const darkTheme = createTheme({
	type: 'dark',
});

function App() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		// you can use any storage
		let theme = window.localStorage.getItem('data-theme');
		setIsDark(theme === 'dark');

		const observer = new MutationObserver((mutation) => {
			let newTheme = getDocumentTheme(document?.documentElement);
			setIsDark(newTheme === 'dark');
		});

		// Observe the document theme changes
		observer.observe(document?.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme', 'style'],
		});

		return () => observer.disconnect();
	}, []);
	return (
		<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
			<LandingPage />
		</NextUIProvider>
	);
}

export default App;
