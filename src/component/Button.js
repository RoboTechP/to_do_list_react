import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,size, onClick}) => {

  return (
    <button className="btn" onClick={onClick} style= {{backgroundColor: color, fontSize:size}}> {text}</button>
  )
}

Button.defaultProps={
    color: 'black',
    text: 'Button 1',
    size: '12px'
  }
Button.propTypes= {
    color: PropTypes.string,
    text: PropTypes.string,
    size: PropTypes.string,
    onClick:PropTypes.func.isRequired,
}

export default Button