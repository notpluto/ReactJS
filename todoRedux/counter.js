const store = Redux.createStore(counter);

// action transforms the state into next state
function counter(state=0, action){
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default: 
		return state;
	}
}

// Subscribe method updates the view
store.subscribe(() => root.innerText = store.getState())

// Dispatch method 
inc.addEventListener('click', () => store.dispatch({type:'INCREMENT'}))
dec.addEventListener('click', () => store.dispatch({type:'DECREMENT'}))
