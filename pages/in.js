import Head from '../src/components/Head'
import Body from '../src/components/Body'
import Wrapper from '../src/components/Wrapper'
import A from '../src/components/A'
import P from '../src/components/P'
import Box from '../src/components/Box'
import CodeBlock from '../src/components/CodeBlock'
import Button from '../src/components/Button'
import SidebarLink from '../src/components/SidebarLink'
import { Div, Header, Footer, Main, Aside, Pre, Code, H1, H2, Text, Span, Figure, Figcaption, Ul, Li, Small, Img } from 'styled-system-html'
import { headerCode, wrapperCode, buttonCode, appCode } from '../src/components/Snippets'
import theme from '../src/components/Theme'

export default class extends React.Component {
	constructor() {
        super()
		this.colors = Object.keys( theme.colors )
        this.state = { colorIndex: Math.floor(Math.random()*this.colors.length) }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(e) {
    	this.setState({ colorIndex: (this.state.colorIndex+1) % this.colors.length })
    }

    render () {

		return <div>
		    <Head />
		    <Body>
		    	<Div bg={this.colors[this.state.colorIndex]} css={{transition: 'background-color .25s ease-in-out'}}>
			    	<Wrapper>
			    		<Header textAlign="center" py={3} my={2} css={{gridArea:'header'}}>
			    			<H1 fontSize={[3,5]}>Hello there. I’m built with CSS in JS.</H1>
			    			<Text fontSize={2} pt={1} pb={2} opacity=".8">Click the button to change the color</Text>
			    			<Button onClick={this.changeColor} color={this.colors[this.state.colorIndex]}>change color</Button>
			    		</Header>
			    		<Box is="aside" p={[3,4]} css={{gridArea:'sidebar'}}>
				        	<H2 pb={3}>Articles and such*</H2>
				        	<Ul mt={0} fontWeight="200">
				        		<SidebarLink 
				        			title="A Unified Styling Language" 
				        			article="https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660"
				        			authorName="Mark Dalgleish"
				        			authorLink="https://twitter.com/markdalgleish"
				        		/>
				        		<SidebarLink 
				        			title="The Hows and Whys of CSS in JS" 
				        			talk="https://skillsmatter.com/skillscasts/12527-code-javascript-matters"
				        			slides="https://css-in-js.netlify.com/#0"
				        			authorName="Sara Vieira"
				        			authorLink="https://iamsaravieira.com/"
				        		/>
				        		<SidebarLink 
				        			title="Four ways to style react components" 
				        			article="https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822"
				        			authorName="Agata Krzywda"
				        			authorLink="https://twitter.com/aghh1504"
				        		/>
				        		<SidebarLink 
				        			title="Toolsday Podcast: CSS in JS" 
				        			listen="https://spectrum.chat/specfm/toolsday/71-css-in-js~8bf01d1c-2afe-4c48-977e-55928c6f9a44"
				        			transcript="https://docs.google.com/document/d/1kJlEdipVK13YRaXpqovEKSsdlzq0gUSASkhK5NUKxVU/edit"
				        			authorName="Chris Dhanaraj and Una Kravets"
				        			authorLink="https://spectrum.chat/specfm/toolsday/"
				        		/>
				        		<SidebarLink 
				        			title="Defining Component APIs in React" 
				        			article="http://jxnblk.com/writing/posts/defining-component-apis-in-react/"
				        			authorName="Brent Jackson"
				        			authorLink="http://jxnblk.com/"
				        		/>
				        		<SidebarLink 
				        			title="React: CSS in JS" 
				        			slides="https://speakerdeck.com/vjeux"
				        			talk="https://vimeo.com/116209150"
				        			authorName="Christopher Chedeau"
				        			authorLink="http://blog.vjeux.com/"
				        		/>
				        		<SidebarLink 
				        			title="The Road to Styled-Components: Styling Component Based Systems" 
				        			talk="https://www.youtube.com/watch?v=BkgU_-KGK9w"
				        			authorName="Max Stoiber"
				        			authorLink="https://mxstbr.com/"
				        		/>
				        		
				        		<SidebarLink 
				        			title="CSS&#8209;in&#8209;JS: FTW || WTF? " 
				        			talk="https://vimeo.com/278439003"
				        			authorName="Bruce Lawson"
				        			authorLink="https://www.brucelawson.co.uk/"
				        		/>
				        		<SidebarLink 
				        			title="Design Systems and React" 
				        			talk="https://www.youtube.com/watch?v=N-5TNKJ7eB0&feature=youtu.be&t=15m25s"
				        			slides="https://github-ds.now.sh/#0"
				        			authorName="Diana Mounter"
				        			authorLink="http://broccolini.net/"
				        		/>
				        		<SidebarLink 
				        			title="Awesome CSS In JS" 
				        			article="https://github.com/tuchk4/awesome-css-in-js"
				        			authorName="Valerii Sorokobatko"
				        			authorLink="https://medium.com/@tuchk4"
				        		/>
					        </Ul>
					        <P><Small>*Being open to the opinions of others is important. Check out <A target="_blank" href="https://bobsutton.typepad.com/my_weblog/2006/07/strong_opinions.html">Strong Opinions, Weakly&nbsp;Held</A></Small></P>
					        <P><Small>Have an article suggestion? Send me a link on <A target="_blank" href="https://twitter.com/johnpolacek">Twitter</A> or issue a pull request.</Small></P>
				      	</Box>
				      	<Box is="main" p={[3,4]} css={{gridArea:'main'}}>
					        <H2 pb={3}>What’s the deal with CSS and CSS&#8209;in&#8209;JS?</H2>
					        <P>They can do a lot of the same things, but in different ways.</P>
					        <P>Many people like CSS&#8209;in&#8209;JS because it lets them manage code at the component level and have a productive&nbsp;workflow.</P>
					        <P>There are lots of CSS&#8209;in&#8209;JS libraries out there. I like <A href="https://jxnblk.com/styled-system/">Styled System</A> because it makes it easy for me to use a responsive&nbsp;design&nbsp;system.</P>
					        <P>Build components with style props applied to the components themselves.</P>
					        <CodeBlock caption="Header.js">{headerCode}</CodeBlock>
					        <P>You can use fancy new CSS features with CSS&#8209;in&#8209;JS. The idea that you don’t need to know CSS to do CSS&#8209;in&#8209;JS is not true. CSS&#8209;in&#8209;JS is&nbsp;still&nbsp;CSS!</P>
					        <CodeBlock caption="Wrapper.js">{wrapperCode}</CodeBlock>
					        <P>With CSS-in-JS your styling can change based on state or props passed to your&nbsp;components.</P>
				        	<CodeBlock caption="Button.js">{buttonCode}</CodeBlock>
				        	<CodeBlock caption="App.js">{appCode}</CodeBlock>
				        	<P>This is all very new and it can be a challenge to keep up. If you like trying new things and want to build websites this way, there’s nothing wrong with that and don’t let anyone&nbsp;stop&nbsp;you!</P>
				      	</Box>
				      	<Box textAlign="center" is="footer" p={[3,4]} css={{gridArea:'footer'}}>
				      		<P fontWeight="bold">Created by John Polacek</P>
				      		<Div pb={2}>
				      			<Button mx={2} is="a" target="_blank" href="http://johnpolacek.com" bg="rgba(0,0,0,.33)" color="white">johnpolacek.com</Button>
				      			<Button mx={2} is="a" target="_blank" href="https://twitter.com/johnpolacek" bg="rgba(0,0,0,.33)" color="white">twitter</Button>
				      			<Button mx={2} is="a" target="_blank" href="https://github.com/johnpolacek" bg="rgba(0,0,0,.33)" color="white">github</Button>
				      			<Button mx={2} is="a" target="_blank" href="https://medium.com/@johnpolacek" bg="rgba(0,0,0,.33)" color="white">medium</Button>
				      		</Div>
				      	</Box>
			    	</Wrapper>
			    </Div>
		    </Body>
	    </div>
	}
}
