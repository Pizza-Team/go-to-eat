import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18next';
import Success from './components/Success';

ReactDOM.render(
	<Suspense fallback={<div>Loading...</div>}>
		< Success />
	</Suspense>,
	document.getElementById('successRoot')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
