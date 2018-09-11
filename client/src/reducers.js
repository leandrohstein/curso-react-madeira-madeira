import { CHANGE_CARNINHA } from './types';

const INITIAL_STATE = {
	carninha: 'costelinha',
	sarava: false
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case CHANGE_CARNINHA:
			return {
				...state,
				carninha: action.payload
			}
		default:
			return state;
	}
}