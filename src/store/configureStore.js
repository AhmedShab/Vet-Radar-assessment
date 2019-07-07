import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import cartReducer from './reducers/cart';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
	cart: cartReducer
});

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let composeEnhancers = compose;

composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(logger))
);
export let persistor = persistStore(store);
