const initialState = []

export function reducer(state= initialState, action) {
	switch (action.type) {
		case "ADD_PRODUCTS":
			return action.products
		default:
			return state;
	}
}

// export function filterReducer(state=[], action) {
// 	switch (action.type) {
// 		case "UPDATE_FILTER":
// 			return {};
// 		default: 
// 		return state;
// 	}
// }

export function sizes(state=[], action) {
	console.log(state, action,)
	switch(action.type) {
		case "ADD_SIZES":
			return action.sizes
		default:
		return state;
	}
}
