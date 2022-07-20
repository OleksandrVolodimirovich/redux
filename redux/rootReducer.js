export function rootReducer(state, action) {
	if (action.type === 'INCERMENT') {
		return state + 1;
	} else if (action.type === 'DECRMENT') {
		return state - 1;
	}
	return state;
}
