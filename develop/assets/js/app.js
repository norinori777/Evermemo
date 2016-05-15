import React from 'react'
import {render} from 'react-dom'
import Main from '../jsx/main.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import search from './reducers/search.js'

const initialState = {	
	data: [],
	title: '',
	candidate: [],
	columnsConfig: [],
	placeholder: '',
	table: 'test',
	candidateConfig: [],
	modal: 0,
	menu: [
		{table: 'test', title: 'norinori1'},
		{table: 'test2', title: 'norinori2'},
		{table: 'test3', title: 'norinori3'},
		{table: 'test4', title: 'norinori4'},
		{table: 'test7', title: '大量カラム'}
	]
}
const store = createStore(search, initialState)

render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('main')
)