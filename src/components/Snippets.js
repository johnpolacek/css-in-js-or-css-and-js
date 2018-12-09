export const headerCode = `<Header textAlign="center" py={4}>
  <H1 fontSize={[3,5]}>Hello there. I’m built with CSS in JS.</H1>
</Header>
`

export const wrapperCode = `const Wrapper = styled.div\`
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
}\``

export const buttonCode = `<Button onClick={this.props.changeColor} color={this.props.color}>change color</Button>`

export const appCode = `export default class extends React.Component {
  constructor() {
    super()
    this.colors = ['#00ADEF','#22AD00','#FF8C00','#ee5555','#484fd1']
    this.state = { colorIndex: 0 }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(e) {
    this.setState({ colorIndex: (this.state.colorIndex+1) % this.colors.length })
  }
  ...`
