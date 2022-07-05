import React from 'react';
import './App.scss';
import { MinimalMenu, SquareMenu, QualityMenu } from './container';
import { MantineProvider } from '@mantine/core';

function App() {
	return (
		<MantineProvider withNormalizeCSS withGlobalStyles>
			<div className="app">
				<MinimalMenu />
				<QualityMenu />
				<SquareMenu />
			</div>
		</MantineProvider>
	);
}

export default App;
