import { useState } from 'react';
import { Route, Link, BrowserRouter } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import { Navbar } from './components';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='app'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='main'></div>
			<div className='footer'></div>
		</div>
	);
}

export default App;
