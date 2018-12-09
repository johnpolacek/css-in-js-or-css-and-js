import { Li, Article, H4, Span } from 'styled-system-html';
import A from './A'

export default (props) => (
	<Li pb={3} pr={3} fontWeight="200">
		<Article>
			<H4 fontSize={2} lineHeight="1">{props.title}</H4>
			<Span fontSize={1} display="block">by <A rel="author" fontSize={1} mr={2} target="_blank" href={props.authorLink}>{props.authorName}</A></Span>
			{
				props.article && 
				<A fontSize={1} mr={2} target="_blank" href={props.article}>read article</A>
			}
			{
				props.talk && 
				<A fontSize={1} mr={2} target="_blank" href={props.talk}>watch talk</A>
			}
			{
				props.slides && 
				<A fontSize={1} mr={2} target="_blank" href={props.slides}>view slides</A>
			}
			{
				props.listen && 
				<A fontSize={1} mr={2} target="_blank" href={props.listen}>listen now</A>
			}
			{
				props.transcript &&
				<A fontSize={1} mr={2} target="_blank" href={props.transcript}>read transcript</A>
			}
		</Article>
	</Li>
)