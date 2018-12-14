import React from 'react'

const colGrid = ({ col, paddingLeft, paddingRight, children }) => {
	return (
		<div
			style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
			className={col ? 'col-' + col : 'col'}>
			{children}
		</div>
	)
}

export default colGrid
