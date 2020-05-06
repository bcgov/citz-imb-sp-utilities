import React from 'react'
import ReactDOM from 'react-dom'
import AppContent from './AppContent'

const className = 'main-app'

if (typeof module.hot !== 'undefined') {
	module.hot.accept()

	const oldApp = document.getElementsByClassName(className)[0]
	if (typeof oldApp !== 'undefined' && oldApp !== null) {
		oldApp.remove()
	}
}

class MainModule {
	constructor() {
		const app = document.createElement('div')
		app.classList.add(className)
		document.body.appendChild(app)

		ReactDOM.render(<AppContent />, app)
	}
}

new MainModule()