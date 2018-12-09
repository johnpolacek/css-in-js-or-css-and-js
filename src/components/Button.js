import React from 'react'
import {Button as Btn} from 'styled-system-html'

const Button = props =>
	<Btn
	    fontSize={1}
	    m={0}
	    pt={2}
	    pb={2}
	    pl={3}
	    pr={3}
	    fontWeight="bold"
	    bg='white'
	    color='blue'

	    {...props}
	    css={Object.assign({
	    	cursor:'pointer',
			fontFamily: 'inherit',
			display: 'inline-block',
			verticalAlign: 'middle',
			textAlign: 'center',
			border: 0,
			borderRadius: '6px',
			textDecoration: 'none',
			appearance: 'none',
			userSelect: 'none',
			transition: 'all .25s ease-in-out',
			outline: 'none',
			'&:hover': {
				boxShadow:'0 0 0 7px rgba(0,0,0,.2)'
			},
			'&:focus': {
				boxShadow:'0 0 0 3px rgba(0,0,0,.4)'
			},
			'&:active': {
				boxShadow:'0 0 0 0 rgba(0,0,0,.6)'
			},
			'&:disabled': {
				opacity: 1/4
			}
	    }, (props.css || {}))}
	/>

export default Button