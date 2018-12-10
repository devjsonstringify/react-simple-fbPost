import React from 'react'

const Photos = (props) => {
	return (
		<React.Fragment>
			{props.user.photos.map((img) => {
				return <img src={img} alt={Math.random()} key={Math.random()} />
			})}
		</React.Fragment>
	)
}

export default Photos