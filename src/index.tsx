import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppProvider from './providers/AppProvider';

ReactDOM.render(
		<AppProvider component={<App />} />,
  	document.getElementById('root')
)
