import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<HeaderComponent />
			<App />

		<FooterComponent />
	</div>,
	document.getElementById('root')
);

registerServiceWorker();
