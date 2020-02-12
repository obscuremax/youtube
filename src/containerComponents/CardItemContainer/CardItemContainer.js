import React from "react";
import {connect} from "react-redux";
import {CardItem} from "../../components/Card/CardItem/CardItem";

const mapStateToProps = (state) => {
	return{
		state
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export const CardItemContainer = connect(mapStateToProps, mapDispatchToProps)(CardItem)