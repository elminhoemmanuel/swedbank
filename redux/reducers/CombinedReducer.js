import { combineReducers } from 'redux'
import { formReducer } from './form';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
  whitelist:['form']
}

const rootReducer = combineReducers({
    form: formReducer,
});

export default persistReducer(persistConfig, rootReducer);