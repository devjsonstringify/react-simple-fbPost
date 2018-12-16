import React from 'react'
import Col from './layout/col-grid'

const Photos = ({ user }) => {
	return (
			<Col col="lg-12" paddingLeft="0" paddingRight="0">
				{user.photos.map((photo) => {
					return <img src={photo.img} alt={photo.alt} key={photo.alt} />
				})}
			</Col>
	)
}

export default Photos
