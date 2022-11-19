import { combineReducers } from 'redux'
import reducer from './notification.reducer'

export default combineReducers({
  notification: reducer
});