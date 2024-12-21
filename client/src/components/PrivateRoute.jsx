import React from 'react'
import route from "react-router-dom"
export default function PrivateRoute({component: Component, ...rest}) {
  return (
    <route {...rest} render={props => {}}>
      
    </route>
  )
}
