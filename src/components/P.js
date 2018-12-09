import { P } from 'styled-system-html';

export default (props) => (
	<P pb={3} pr={3} fontWeight="200" {...props}>{props.children}</P>
)