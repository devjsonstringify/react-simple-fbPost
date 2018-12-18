import React from 'react'

const Row = ({ children, id, classes }) => {
	return <div className={classes ? classes : "row"} id={id? id : ""}>{children}</div>
}

export default Row
