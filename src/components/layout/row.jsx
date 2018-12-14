import React from 'react'

const Row = ({ children, id }) => {
	return <div className="row" id={id? id : ""}>{children}</div>
}

export default Row
