import React from "react";
import {connect} from "react-redux";
import {Page} from "../../components/Page/Page";
import {getBox, getPageCurrent, pageLeft, buttonIncrement, buttonDecrement, } from "../../redux/actions";



const mapStateToProps = (state) => {
	return {
		pageSize: state.inputValueReducer.pageSize,
		pageCount: state.inputValueReducer.pageCount,
		pageCurrent: state.inputValueReducer.pageCurrent,
		buttonLeft: state.inputValueReducer.buttonLeft
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		pageLeft: (event)=> dispatch(pageLeft(-330*4*event.target.id)),
		getPageCurrent: (event)=> dispatch(getPageCurrent(Number(event.target.id)+1)),
		getBox: () => dispatch(getBox()),
		buttonIncrement: ()=> dispatch(buttonIncrement()),
		buttonDecrement: ()=> dispatch(buttonDecrement()),
	}
}

export const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)