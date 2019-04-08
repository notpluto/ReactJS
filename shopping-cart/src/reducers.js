import { combineReducers } from 'redux';
import {reducer, sizes} from './reducers/redux';

export const root = combineReducers({
	products: reducer,
	sizes,
})