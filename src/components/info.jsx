import React from 'react'

const Info = (props) => {
	return (
		<React.Fragment>
			<p className='h6'>{props.user.name}</p>
		</React.Fragment>
	)
}

export default Info
