import { A } from 'styled-system-html';

export default (props) => (
	<A target="_blank" color="rgba(255,255,255,.8)" fontWeight="bold" css={{'&:hover':{color:'#fff'}}} {...props}>{props.children}</A>
)