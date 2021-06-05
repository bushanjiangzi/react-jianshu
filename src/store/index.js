// import { createStore } from 'redux'
// import reducer from './reducer'

// const store = createStore(reducer)

// export default store

/**
 * redux-thunk
 */
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;

/**
 * redux-saga
 */
// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import reducer from './reducer'
// import mySaga from './sagas'

// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware()
// // mount it on the Store
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

// // then run the saga
// sagaMiddleware.run(mySaga)

// export default store