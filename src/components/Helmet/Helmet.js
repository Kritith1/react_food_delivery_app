import React from 'react'

document.title = 'Food Odering app -'

const Helmet = (props) => {
    document.title = 'Food Odering app -' + props.title
  return (
    <div className="w-100">{props.children}</div>
  )
}

export default Helmet