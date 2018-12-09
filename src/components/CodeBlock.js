import { Figcaption, Code } from 'styled-system-html';
import Box from './Box'

export default (props) => (
	<Box is="figure" p={3} mt={2} mb={4} mx={0}>
		<Figcaption fontSize={2} fontWeight="200">{props.caption}</Figcaption>
		<Box is="pre" p={3} fontSize={1} css={{overflow:'scroll'}}><Code>{props.children}</Code></Box>
	</Box>
)