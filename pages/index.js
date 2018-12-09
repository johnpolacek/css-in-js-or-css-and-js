import Head from '../src/components/Head'
import Body from '../src/components/Body'
import Button from '../src/components/Button'
import { Div, H1, H2, Span, Img } from 'styled-system-html'

const frameCSS = {
	transition: 'height .5s cubic-bezier(0.075, 0.82, 0.165, 1)'
}

export default class extends React.Component {

	constructor() {
        super()
        this.state = { view: 'split' }
        this.getFrameHeight = this.getFrameHeight.bind(this)
    }

    getFrameHeight(frame) {
    	if (this.state.view == 'split') {
    		return ['33vh','40vh']
    	} else if (this.state.view == frame) {
    		return ['66vh','80vh']
    	} else {
    		return 0
    	}
    }

	render () {
		return <div>
		    <Head />
		    <Body>
		    	<Div>
			    	<Div css={frameCSS} width={1} height={this.getFrameHeight('in')} position="relative">
			    		<iframe src="./in/" height="100%" width="100%" />
			    		<Button position="absolute" bottom="0" right="0" id="buttonIn" onClick={(e) => {e.currentTarget.blur();this.setState({view:this.state.view == 'in' ? 'split' : 'in'})}} mb={-1} mr={4} pr={4}>
			    			<Span pr={1} display="inline-block">view {this.state.view == 'in' ? 'less' : 'more'}</Span>
			    			<Img width={19} src={'./static/'+(this.state.view == 'in' ? 'up' : 'down')+'-arrow.svg'} position="absolute" css={{top:'6px',right:'8px'}} opacity=".33" />
			    		</Button>
			    	</Div>
			    	<Div css={frameCSS} width={1} height={['34vh','20vh']} textAlign="center" position="relative" zIndex="999" bg="white">
			    		<H1 px={3} pt={['4vh','2.5vh','2.5vh','4vh']} fontSize={['6vh','6vh','7vh','8vh']} color="blue" lineHeight="1">
			    			<Span display={['block','inline']}>CSS-in-JS</Span> 
			    			<Span display={['block','inline-block']} px={[0,2,3]} fontSize={['4vh','3vh','4vh']} position="relative" top={[0,'-1.2vh','-1.5vh']}> or </Span> 
			    			<Span display={['block','inline']}>CSS-and-JS</Span>
			    		</H1>
		    			<H2 pt={['1vh',0]} fontSize={['2.5vh','2.5vh','2.5vh','3vh']} fontWeight={[400,400,400,200]} color="gray9">( Can we all just get along? )</H2>
			    		<Button fontSize={0} is="a" bg="rgba(0,0,0,.33)" color="white" href="https://github.com/johnpolacek/css-in-js-or-css-and-js/" target="_blank" position={['static','static','static','absolute']} top="0" right="0" mt={[3,2,2,'50px']} mr={[0,4]}>View on Github</Button>
			    	</Div>
			    	<Div css={frameCSS} width={1} height={this.getFrameHeight('and')} position="relative">
			    		<Button position="absolute" top="0" right="0" id="buttonAnd" onClick={(e) => {e.currentTarget.blur();this.setState({view:this.state.view == 'and' ? 'split' : 'and'})}} mt={-1} mr={4} pr={4}>
			    			<Span pr={1} display="inline-block">view {this.state.view == 'and' ? 'less' : 'more'}</Span>
			    			<Img width={19} src={'./static/'+(this.state.view == 'and' ? 'down' : 'up')+'-arrow.svg'} position="absolute" css={{top:'6px',right:'8px'}} opacity=".33" />
			    		</Button>
						<iframe src="./static/and/index.html" height="100%" width="100%" />
			    	</Div>
			    </Div>
		    </Body>
	    </div>
	}
}
