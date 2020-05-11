// import React from 'react'
// import ReactDOM from 'react-dom'
// import AppContent from './AppContent'
//const {test} = require('/wwwroot/js/main.bundle.js')
//import { GetSite } from '/wwwroot/js/main.bundle.js'
const className = 'main-app'

// if (typeof module.hot !== 'undefined') {
// 	module.hot.accept()

// 	const oldApp = document.getElementsByClassName(className)[0]
// 	if (typeof oldApp !== 'undefined' && oldApp !== null) {
// 		oldApp.remove()
// 	}
// }

// GetSite({})
// 	.then((response) => {
// 		console.log('response', response)
// 	})
// 	.catch((response) => {
// 		console.log('catch response', response)
// 	})

//console.log(test())

class MainModule {
	constructor() {
		const app = document.createElement('div')
		app.innerText = 'hello'
		app.classList.add(className)
		document.body.appendChild(app)
	}
}

new MainModule()
