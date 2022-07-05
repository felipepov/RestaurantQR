import React from 'react';
import './App.css';
import { Button, MantineProvider } from '@mantine/core';

function App() {
	return (
		<MantineProvider
			theme={{
				// // Override any other properties from default theme
				// fontFamily: 'Open Sans, sans serif',
				// spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
			}}
		>
			<Button>Hello world!</Button>
		</MantineProvider>
	);
}

export default App;
