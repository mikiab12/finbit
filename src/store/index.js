import { combineReducers, createStore } from 'redux';
import { contentReducer, userReducer } from './slice/userSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

export const rootReducer = combineReducers({
    user : userReducer,
    content : contentReducer
})

export function configureStore(){
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
      enhancers.push(window.devToolsExtension());
    }

    const persistConfig = {
        key : "finbit",
        storage
    }

    const persistedReducer = persistReducer(persistConfig,rootReducer);

    let store= createStore(persistedReducer);
    let persistor = persistStore(store);


    return { store, persistor } 
}
