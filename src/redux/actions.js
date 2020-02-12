export const GET_INPUT_VALUE = "GET_INPUT_VALUE"
export const ON_SUBMITE = "ON_SUBMITE"
export const ON_CLICK = "ON_CLICK"
export const GET_BOX = "GET_BOX"
export const GET_BOX_SUCCESS = "GET_BOX_SUCCESS"
export const GET_BOX_FAILURE = "GET_BOX_FAILURE"
export const GET_PAGE_CURRENT = "GET_PAGE_CURRENT"
export const GET_PAGE_COUNT = "GET_PAGE_COUNT"
export const GET_POSITION = "GET_POSITION"
export const PAGE_LEFT = "PAGE_LEFT"
export const GET_FLIP = "GET_FLIP"

export function getFlip(payload) {
	return {
		type: GET_FLIP,
		payload: payload
	}
}

export function pageLeft(payload) {
	return {
		type: PAGE_LEFT,
		payload: payload
	}
}

export function getPosition(payload) {
	return {
		type: GET_POSITION,
		payload: payload
	}
}

export function getPageCount(payload) {
	return {
		type: GET_PAGE_COUNT,
		payload: payload
	}
}

export function getPageCurrent(payload) {
	return {
		type: GET_PAGE_CURRENT,
		payload: payload
	}
}

export function getInputValue(payload) {
	return {
		type: GET_INPUT_VALUE,
		payload: payload
	}
}

export function onSubmit() {
	return {
		type: ON_SUBMITE
	}
}

export function onClick() {
	return {
		type: ON_CLICK
	}
}

export function getBox() {
	return {
		type: GET_BOX
	}
}

export function getBoxSuccess(payload) {
	return {
		type: GET_BOX_SUCCESS,
		payload: payload
	}
}

export function getBoxFailure(payload) {
	return {
		type: GET_BOX_FAILURE,
		payload: payload
	}
}