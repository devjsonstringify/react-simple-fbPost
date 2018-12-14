import React from 'react'

const colGrid = ({
	col,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingBottom,
	children,
	marginTop,
	marginBottom
}) => {
	return (
		<div
			style={{
				paddingLeft: paddingLeft,
				paddingRight: paddingRight,
				paddingTop: paddingTop,
				paddingBottom: paddingBottom,
				marginTop: marginTop,
				marginBottom: marginBottom
			}}
			className={col ? 'col-' + col : 'col'}>
			{children}
		</div>
	)
}

export default colGrid
