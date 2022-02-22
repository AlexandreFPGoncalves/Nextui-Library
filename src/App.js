import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import { LandingPage } from './pages';

function App() {
	return (
		<NextUIProvider>
			<LandingPage />
		</NextUIProvider>
	);
}

export default App;
