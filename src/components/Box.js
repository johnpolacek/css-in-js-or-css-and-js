import { Div } from 'styled-system-html';

export default (props) => (
	<Div bg="rgba(0,0,0,.1)" borderRadius="4px" {...props}>{props.children}</Div>
)