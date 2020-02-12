import {GET_BOX, getBoxSuccess, getBoxFailure, getPageCount, getPosition} from "./actions";
import {applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'


export const boxMiddleware = store => next => action => {
	if (action.type === GET_BOX) {
		const {search} = store.getState().inputValueReducer
		const {pageSize} = store.getState().inputValueReducer

		fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDqXaU75Ch7xdxl28VTWtOrku3ViYA4_O4&type=video&part=snippet&maxResults=15&q=${search}`)
			.then(res => res.json())
			.then(data => {
				const items = data.items
				store.dispatch(getPageCount(Math.ceil(data.pageInfo.resultsPerPage/pageSize)))
				items.map(el=> {

					fetch(` https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDqXaU75Ch7xdxl28VTWtOrku3ViYA4_O4&id=${el.id.videoId}&part=snippet,statistics`)
						.then(res => res.json())
						.then((data) => {
							const action = getBoxSuccess(data.items)
							store.dispatch(action)

						})
				})
			})
			.catch((e) => {
				store.dispatch(getBoxFailure())
			})
	}
	next(action)
}

export const middleware = composeWithDevTools(applyMiddleware(boxMiddleware))

