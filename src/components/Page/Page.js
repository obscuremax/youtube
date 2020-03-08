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
			<div><Buttonleft onMouseDown={props.buttonDecrement}  >&lt;</Buttonleft></div>
			<Container>
				<ContainerPage style={{left: `${props.pageCurrent <= 4? 0: (props.pageCurrent-4)*-54}px`}}>
			{pages.map((p, index) => {
				return <div ><Button onClick={props.pageLeft} onMouseUp={props.getPageCurrent} onMouseDown={props.pageCount != 0 && ((props.pageCount - props.pageCurrent) <=1)? props.getBox():""} id={index}>{p}</Button></div>
			})}
				</ContainerPage>
			</Container>
			<div><Buttonleft onMouseDown={props.buttonIncrement}  >&gt;</Buttonleft></div>
		</Wrap>
	): null
}

const Wrap = styled.div`
text-align: center;
display: flex;
margin: 0 auto;
max-width: 485px;
min-width: 325px;
`
const Container = styled.div`
display: flex;
width: 1155px;
overflow: hidden;
margin: 0px auto;
position: relative;
height: 550px;
`
const ContainerPage = styled.div`
display: flex;
margin: 0;
position: absolute; 
left: 0;
top: 0;
transition: all ease 1s;
`
const Button = styled.button`
margin: 5px 2px;
background: #dbe3e5;
border: none;
color: #2e2b2b;
padding: 5px 10px;
border-radius: 5px;
font-size: 20px;
cursor: pointer;
width: 50px;
cursor: pointer;
`
const Buttonleft = styled.button`
margin: 5px 2px;
background: #4e4a4f;
border: none;
color: white;
padding: 5px 10px;
border-radius: 5px;
font-size: 20px;
width: 50px;
cursor: pointer;
`

