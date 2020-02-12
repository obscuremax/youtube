import React from "react";
import {connect} from "react-redux";
import {InputForm} from "../../components/InputForm";
import {getInputValue, onSubmit, onClick, getBox } from "../../redux/actions";

const mapStateToProps = (state) => {
	const {inputValue, boxData, loading} = state.inputValueReducer
	return {
			inputValue,
		boxData,
		loading
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onChange: event => dispatch(getInputValue(event.target.value)),
		onSubmit: event => dispatch(onSubmit(event.preventDefault())),
		onMouseDown: () => dispatch(onClick()),
		onMouseUp: () => dispatch(getBox())
	}
}

export const InputFormContainer = connect(mapStateToProps, mapDispatchToProps)(InputForm)