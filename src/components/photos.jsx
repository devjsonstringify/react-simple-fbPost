import React from 'react'

const Photos = ({ user }) => {
	return (
		<React.Fragment>
			{user.photos.map((photo) => {
				return <img src={photo.img} alt={photo.alt} key={photo.alt} />
			})}
		</React.Fragment>
	)
}

export default Photos
