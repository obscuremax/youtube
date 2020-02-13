import React from "react";
import {connect} from "react-redux";
import {getPosition, onClick, getFlip} from "../../redux/actions";
import {Card} from "../../components/Card/Card";
import {store} from "../../redux/store";

const mapStateToProps = (state) => {
	return{
		boxData: state.inputValueReducer.boxData,
		pageCurrent: state.inputValueReducer.pageCurrent,
		pageSize: state.inputValueReducer.pageSize,
		position: state.inputValueReducer.position,
		pageLeft: state.inputValueReducer.pageLeft,
		flip: state.inputValueReducer.flip
	}
}
const mapDispatchToProps = (dispatch) => {

	return {
		getBox: () => dispatch(onClick()),
		getFlip: (event) => dispatch(getFlip(event.target.id))
	}
}

export const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card)