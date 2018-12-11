import React from 'react'

const colGrid = ({ col, children }) => {
	return <div className={col ? 'col-' + col : 'col'}>{children}</div>
}

export default colGrid
