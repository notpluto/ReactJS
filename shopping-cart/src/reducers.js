import { combineReducers } from 'redux';
import {reducer, sizes, sortProducts} from './reducers/redux';

export const root = combineReducers({
	products: reducer,
	sizes,
})