import React from 'react'
import PropTypes from 'prop-types'

const Button = ({name,color}) => {
  return (
      <>
    <button style={{backgroundColor:color}} type="button" className="btn btn-sm btn-outline-secondary">{name}</button>
    </>
  )
}

Button.defaultProps={
    name:"Name",
    color:"grey"
}


export default Button