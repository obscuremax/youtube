import React from "react";
import styled from "styled-components";
import styles from "./styles.module.css"

export function Card(props) {
const boxData = props.boxData;

function toogle(event) {
	let id = event.target.id
	let el = document.getElementById(id+"card")
	if(el.hasAttribute("style")) {
		el.removeAttribute("style")
	} else {
		el.setAttribute("style", "transform:rotateY(180deg);")
	}
}

	return boxData? <FlexContainerWrap>
		{boxData.map((el,index)=>
			<FlexContainer style={{left: `${index === 0? 0+props.pageLeft: index*330+props.pageLeft}px`}}>
			<div className={styles.container} >
				<div className={styles.card} id={index+"card"}>
					<div className={styles.front}>
						<div>
							<div className={styles.cardContainer} id={index}>
								<div className={styles.imgContainer} style={{backgroundImage: `url(${el[0].snippet.thumbnails.medium.url})`}}>
									<div className={styles.title}><a href={`https://www.youtube.com/watch?v=${el[0].id}`}>{el[0].snippet.title}</a></div>
								</div>
								<div className={styles.black}></div>
								<div className={styles.dataVideoContainer}>
									<div className={styles.dataVideoContainer_item}>
										<div className={styles.svgContainer}>
											<svg viewBox="0 0 192 512">
												<path fill="currentColor"
															d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path>
											</svg>
										</div>
										<p>{el[0].snippet.channelTitle}</p>
									</div>
									<div className={styles.dataVideoContainer_item}>
										<div className={styles.svgContainer} >
											<svg viewBox="0 0 576 512">
												<path fill="currentColor"
															d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
											</svg>
										</div>
										<p>{el[0].statistics.viewCount}</p>
									</div>
									<div className={styles.dataVideoContainer_item}>
										<div className={styles.svgContainer} >
											<svg viewBox="0 0 448 512">
												<path fill="currentColor"
															d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
											</svg>
										</div>
										<p>{el[0].snippet.publishedAt}</p>
									</div>
									<div className={styles.dataVideoContainer_item}>
										<div className={styles.svgContainer} >
											<svg viewBox="0 0 512 512">
												<path fill="currentColor"
															d="M466.27 286.69C475.04 271.84 480 256 480 236.85c0-44.015-37.218-85.58-85.82-85.58H357.7c4.92-12.81 8.85-28.13 8.85-46.54C366.55 31.936 328.86 0 271.28 0c-61.607 0-58.093 94.933-71.76 108.6-22.747 22.747-49.615 66.447-68.76 83.4H32c-17.673 0-32 14.327-32 32v240c0 17.673 14.327 32 32 32h64c14.893 0 27.408-10.174 30.978-23.95 44.509 1.001 75.06 39.94 177.802 39.94 7.22 0 15.22.01 22.22.01 77.117 0 111.986-39.423 112.94-95.33 13.319-18.425 20.299-43.122 17.34-66.99 9.854-18.452 13.664-40.343 8.99-62.99zm-61.75 53.83c12.56 21.13 1.26 49.41-13.94 57.57 7.7 48.78-17.608 65.9-53.12 65.9h-37.82c-71.639 0-118.029-37.82-171.64-37.82V240h10.92c28.36 0 67.98-70.89 94.54-97.46 28.36-28.36 18.91-75.63 37.82-94.54 47.27 0 47.27 32.98 47.27 56.73 0 39.17-28.36 56.72-28.36 94.54h103.99c21.11 0 37.73 18.91 37.82 37.82.09 18.9-12.82 37.81-22.27 37.81 13.489 14.555 16.371 45.236-5.21 65.62zM88 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path>
											</svg>
										</div>
										<p>{el[0].statistics.likeCount}</p>
									</div>
									<div className={styles.dataVideoContainer_item}>
										<div className={styles.svgContainer} >
											<svg viewBox="0 0 512 512">
												<path fill="currentColor"
															d="M466.27 225.31c4.674-22.647.864-44.538-8.99-62.99 2.958-23.868-4.021-48.565-17.34-66.99C438.986 39.423 404.117 0 327 0c-7 0-15 .01-22.22.01C201.195.01 168.997 40 128 40h-10.845c-5.64-4.975-13.042-8-21.155-8H32C14.327 32 0 46.327 0 64v240c0 17.673 14.327 32 32 32h64c11.842 0 22.175-6.438 27.708-16h7.052c19.146 16.953 46.013 60.653 68.76 83.4 13.667 13.667 10.153 108.6 71.76 108.6 57.58 0 95.27-31.936 95.27-104.73 0-18.41-3.93-33.73-8.85-46.54h36.48c48.602 0 85.82-41.565 85.82-85.58 0-19.15-4.96-34.99-13.73-49.84zM64 296c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm330.18 16.73H290.19c0 37.82 28.36 55.37 28.36 94.54 0 23.75 0 56.73-47.27 56.73-18.91-18.91-9.46-66.18-37.82-94.54C206.9 342.89 167.28 272 138.92 272H128V85.83c53.611 0 100.001-37.82 171.64-37.82h37.82c35.512 0 60.82 17.12 53.12 65.9 15.2 8.16 26.5 36.44 13.94 57.57 21.581 20.384 18.699 51.065 5.21 65.62 9.45 0 22.36 18.91 22.27 37.81-.09 18.91-16.71 37.82-37.82 37.82z"></path>
											</svg>
										</div>
										<p>{el[0].statistics.dislikeCount}</p>
									</div>
								</div>
								<div className={styles.descriptionContainer}>
									<p>Description</p>
									<div className={styles.svgContainer} onClick={toogle} id={index}>
										<svg id={index} viewBox="0 0 448 512">
											<path id={index} fill="currentColor"
														d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.back}>
						<div >
							<div className={styles.cardContainer} id={index}>
								<div className={styles.titleBack}>
									Description
								</div>
								<div className={styles.QQQQQQQQQ}>{el[0].snippet.description}</div>
								<div className={styles.descriptionContainer}>
									<p>Back</p>
									<div className={styles.svgContainer} onClick={toogle} id={index} >
										<svg  id={index} viewBox="0 0 448 512">
											<path id={index} fill="currentColor"
														d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</FlexContainer>
		)}
	</FlexContainerWrap>: null
}

const FlexContainerWrap = styled.div`
display: flex;
margin: 10px;
width: 1310px;
overflow: hidden;
margin: 0 auto;
position: relative;
height: 550px
`
const FlexContainer = styled.div`
display: flex;
margin: 0;
position: absolute;
left: 0;
top: 0;
transition: all ease 1s;
`

const Yellow = styled.div`
display: block;
background: yellow;
margin: 10px;
justify-content: center;
`
