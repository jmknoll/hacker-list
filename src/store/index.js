import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import createLogger from 'react-logger';

import stories from '../reducers';

const reducer = combineReducers({
  stories
})

const middleware = applyMiddleware(thunk);

export default function configureStore() {
  const store = createStore(
    reducer,
    middleware
  )
  return store;
}