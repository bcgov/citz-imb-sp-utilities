import React, { useState, useEffect } from 'react'
import { GetSite } from '../src/index'

export default function AppContent() {
const [jsx, setJsx] = useState(<li>initialState</li>)

	useEffect(() => {
		GetSite({})
			.then((response) => {
                console.log('response', response)
                setJsx(<div>Rest call succeeded</div>)
			})
			.catch((response) => {
				setJsx(<li>{response}</li>)
			})

        return () => {}
	}, [])

	return <ul>{jsx}</ul>
}