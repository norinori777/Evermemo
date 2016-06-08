import React from 'react'
import {render} from 'react-dom'
import Main from '../jsx/main.js'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import memo from './reducers/memo.js'

const initialState = {
  memoes: [{no: 1, value: ""}],	
  title: '',
  date: '',
  line: 1,
}
const store = createStore(memo, initialState)

render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('main')
)