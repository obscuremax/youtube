import React from "react";
import styled from "styled-components";

export function InputForm(props) {
	return (
		<Form onSubmit={props.onSubmit} action="">
			<Input onChange={props.onChange}  value={props.inputValue} placeholder="Search video" type="text"/>
			<div>
				<Button onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp}>{props.loading? "Loading": "Search"}</Button>
			</div>
		</Form>
	)
}

const Button = styled.button`
	height: 45px;
	width: 100px;
	padding: 0px 20px;
	font-weight: bold;
	font-size: 19px;
	font-family: 'Montserrat', sans-serif;
	line-height: 19px;
	border: 0;
	border-radius: 0 4px 4px 0;
	background: linear-gradient(to bottom,#bf3434,#ab0e0e);
	color:#fff;
	


&:hover {
	outline: none;
	background: #bf3434;
	cursor: pointer;
}

&:hover {
	border-right-color: #bf3434;
}

&:focus {
	outline: 0;
}
`
const Input = styled.input`
	width: calc(100% - 100px);
	height: 45px;
	padding: 0px 15px;
	font-size: 20px;
	font-family: 'Gafata', sans-serif;
	border:0;
	border-radius: 4px  0 0 4px;
	color:#555;
&::-webkit-input-placeholder {
	color:#999;
}
`
const Form = styled.form`
	display: flex;
	flex-direction: row;
	width: 70%;
	margin: 35px auto;
	text-align: center;
	font-size: 0;
	padding: 10px;
	border-radius: 10px;
	box-shadow: 0 1px 1px rgba(0,0,0,.4) inset, 0 1px 0 rgba(255,255,255,.2);
	background: #444;
	background: rgba(0,0,0,.2);
`