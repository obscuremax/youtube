import {
	GET_INPUT_VALUE,
	ON_CLICK,
	ON_SUBMITE,
	GET_BOX,
	GET_BOX_SUCCESS,
	GET_BOX_FAILURE,
	GET_PAGE_CURRENT,
	GET_PAGE_COUNT,
	GET_POSITION,
	PAGE_LEFT,
	GET_FLIP,
	BUTTON_LEFT,
	BUTTON_DECREMENT,
	BUTTON_INCREMENT,

} from "../actions";

const initialState = {
	inputValue: "",
	search: "",
	pageSize: 4,
	pageCount: 0,
	pageCurrent: 1,
	boxData: null,
	loading: false,
	position: 0,
	pageLeft: 0,
	pageRight: 0,
	flip: false,


}

export function inputValueReducer(state = initialState, action) {
	switch (action.type) {

		case BUTTON_DECREMENT: {
			return {
				...state,
				pageCurrent: state.pageCurrent-1
			}
		}
		case BUTTON_INCREMENT: {
			return {
				...state,
				pageCurrent: state.pageCurrent+1
			}
		}
		case GET_FLIP: {
			return {
				...state,
				flip: action.payload
			}
		}
		case BUTTON_LEFT: {
			return {
				...state,
				buttonLeft: action.payload
			}
		}
		case PAGE_LEFT: {
			return {
				...state,
				pageLeft: action.payload
			}
		}

		case GET_POSITION: {
			return {
				...state,
				position: state.position + action.payload
			}
		}

		case GET_PAGE_COUNT: {
			return {
				...state,
				pageCount: state.pageCount + action.payload
			}
		}

		case GET_PAGE_CURRENT: {
			return {
				...state,
				pageCurrent: action.payload
			}
		}

		case GET_INPUT_VALUE: {
			return {
				...state,
				inputValue: action.payload
			}
		}

		case ON_SUBMITE: {
			return state
		}
		case ON_CLICK: {
			return {
				...state,
				search: state.inputValue,
				inputValue: ""
			}
		}
		case GET_BOX: {
			return {
				...state,
				loading: true
			}
		}

		case GET_BOX_SUCCESS: {
			return {
				...state,
				loading: false,
				boxData: [...(state.boxData || []), action.payload]
			}
		}

		case GET_BOX_FAILURE: {
			return {
				...state,
				loading: false
			}
		}

		default: return state
	}
}