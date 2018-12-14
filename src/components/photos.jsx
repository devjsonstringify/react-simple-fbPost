import React from 'react'

const Photos = ({ user }) => {
	return (
		<React.Fragment>
			{user.photos.map((img) => {
				return <img src={img} alt={Math.random()} key={Math.random()} />
			})}
		</React.Fragment>
	)
}

export default Photos
