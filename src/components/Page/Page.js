import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

export function Page(props) {
	const boxData = useSelector(state=> state.inputValueReducer.boxData)
	let pages = []
	for (let i=1; i <=props.pageCount; i++) {
		pages.push(i)
	}

	return boxData? (
		<Wrap>
			{pages.map((p, index) => {
				return <Span onClick={props.pageLeft} onMouseUp={props.getPageCurrent} onMouseDown={props.pageCount != 0 && ((props.pageCount - props.pageCurrent) <=1)? props.getBox():""} id={index}>{p}</Span>
			})}
		</Wrap>
	): null
}

const Wrap = styled.div`
text-align: center;
`

const Span = styled.span`
margin: 5px;
cursor: pointer;
`