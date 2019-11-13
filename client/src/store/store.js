import reducer from './reducer/index'
import { createStore, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'

const store = createStore( reducer , applyMiddleware(Thunk) )

export default store

