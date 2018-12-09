import styled from 'styled-components'

const Wrapper = styled.div`
  	color: #fff;
	padding: 1vw;
	display: grid;
	grid-gap: 1vw;
	grid-template-columns: 32vw 32vw 32vw;
	grid-template-areas:
		"header header header"
		"sidebar main main"
		"footer footer footer";
	@media screen and (max-width: 60em) {
    	grid-template-areas:
            "header header header"
            "main main main"
            "sidebar sidebar sidebar"
            "footer footer footer";
}`

export default (props) => (
	<Wrapper>
		{props.children}
	</Wrapper>
)