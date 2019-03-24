const store = Redux.createStore(Todos);
const newTodo = document.querySelector('.list-item');
const input = document.querySelector('#root');
let id =0;

// Action
function addTodo(e){
	var newTodo = input.value
	input.value = '';
 	store.dispatch({type: 'Add_Todo', value: {task: newTodo, completed: false}})
}

function removeTodo(e){
	if(e.target.classList.contains('remove')){ 
		const { id } = e.target.dataset; 
		store.dispatch({type: 'Remove_Todo', id})
	}
}
// Subscribe
store.subscribe(
	() => {
		const html = store.getState().map((v, i) => `<li><input type="checkbox">${v.value}<span data-id=${v.id} class="remove">x</span></li>`).join('');
		newTodo.innerHTML = html;
	} 
);
 
// Reducer
function Todos(state = [], action) {
	// console.log('works');
	switch (action.type){
		case 'Add_Todo':
			return [
				...state,
				{
					value: action.value.task,
					completed: action.value.completed,
					id: id++
				}
			]
		case 'Remove_Todo': {
			const newState = [...state];
			const newValidState = newState.filter(v => v.id != action.id);
			return newValidState
		}
		default: return state;
	}	
}	


window.addEventListener('click', removeTodo)
btn.addEventListener('click', addTodo);
