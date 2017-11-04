import { combineReducers, createStore } from 'redux';
import thunk from 'react-redux';
//import createLogger from 'react-logger';

//import app from '../app/reducers';
import stories from '../stories/reducers';

const reducer = combineReducers({
  stories
})

//const logger = createLogger();

export default function configureStore() {
  const store = createStore(
    reducer
  )
  return store;
}