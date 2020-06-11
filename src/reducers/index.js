import CurrenTableReducer from './currentTableReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    currentTable: CurrenTableReducer
})

export default rootReducer;